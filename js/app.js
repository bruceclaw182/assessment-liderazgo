'use strict';

// ============================================================
// WEB AUDIO ENGINE — sonidos sintetizados, sin archivos externos
// ============================================================
const AudioEngine = {
  ctx: null,

  init() {
    if (!this.ctx) {
      try {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      } catch (e) { /* Audio not available */ }
    }
    if (this.ctx?.state === 'suspended') this.ctx.resume();
  },

  _tone(freq, dur, type = 'sine', vol = 0.25, delay = 0) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime + delay);
    gain.gain.setValueAtTime(0, this.ctx.currentTime + delay);
    gain.gain.linearRampToValueAtTime(vol, this.ctx.currentTime + delay + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + delay + dur);
    osc.start(this.ctx.currentTime + delay);
    osc.stop(this.ctx.currentTime + delay + dur + 0.05);
  },

  playClick() {
    this._tone(700, 0.07, 'sine', 0.12);
  },

  playSelect() {
    // Confirmación: dos tonos ascendentes
    this._tone(440, 0.14, 'sine', 0.22);
    this._tone(660, 0.2, 'sine', 0.18, 0.12);
  },

  playChime() {
    // Bienvenida: arpegio ascendente
    [523, 659, 784, 1047].forEach((f, i) => this._tone(f, 0.4, 'sine', 0.18, i * 0.13));
  },

  playReveal() {
    // Resultado: fanfarria corta
    [330, 415, 523, 659, 880].forEach((f, i) => this._tone(f, 0.55, 'sine', 0.18, i * 0.09));
  },

  playTimerWarn() {
    // Advertencia 5 min: doble beep
    this._tone(440, 0.13, 'triangle', 0.18);
    this._tone(440, 0.13, 'triangle', 0.15, 0.28);
  },

  playTimerDanger() {
    // Peligro 1 min: tono bajo urgente
    this._tone(280, 0.22, 'sawtooth', 0.14);
  },
};

// ============================================================
// SISTEMA DE RÚBRICA — LIDERAZGO EMOCIONAL
// Puntaje total con 10 preguntas: -50 (todo mal) → 100 (todo bien)
// ============================================================

function getNivel(totalScore) {
  if (totalScore <= 0)  return { nivel: 1, nombre: 'Reactivo',        color: '#ef5350', emoji: '⚠️', rango: '-50 a 0' };
  if (totalScore <= 35) return { nivel: 2, nombre: 'En Construcción', color: '#ff9800', emoji: '🔧', rango: '1 a 35' };
  if (totalScore <= 60) return { nivel: 3, nombre: 'Funcional',       color: '#ffd740', emoji: '📈', rango: '36 a 60' };
  if (totalScore <= 80) return { nivel: 4, nombre: 'Efectivo',        color: '#66bb6a', emoji: '✅', rango: '61 a 80' };
  return                       { nivel: 5, nombre: 'Alto Impacto',    color: '#26c6da', emoji: '🎯', rango: '81 a 100' };
}

const DESCRIPCIONES_NIVEL = {
  1: {
    resumen: 'Las decisiones del equipo tendieron a amplificar los problemas en lugar de contenerlos. El patrón más frecuente: reaccionar a la emoción inmediata en vez de intervenir sobre la dinámica de fondo. Esto se expresó con mayor intensidad en los escenarios de conflicto entre personas con poder (Caso 1) y en las situaciones de crisis personal de un colaborador (Caso 2), donde la presión desactivó el criterio. El primer paso no es "mejorar la comunicación" — es aprender a leer qué tipo de problema emocional enfrenta el equipo antes de actuar.',
    empatia:     'En situaciones como la crisis personal de un colaborador (Caso 2) o la decisión que excluye a alguien valioso (Caso 5), la tendencia del equipo fue involucrarse emocionalmente sin estructura: absorbiendo el dolor ajeno, evitando la conversación difícil o tomando partido. Worline y Dutton (2017) en Awakening Compassion at Work distinguen entre empatía afectiva —que paraliza— y compasión competente —que actúa. El desarrollo prioritario es pasar de la primera a la segunda: sentir con el otro sin perder el rol.',
    asertividad: 'Ante conflictos entre personas con poder (Caso 1) o frente a decisiones impopulares con el equipo (Caso 3), el equipo osciló entre la impulsividad y la evitación. Ninguna de las dos es asertividad real. Edmonson (2018) en The Fearless Organization muestra que los líderes que sí hablan cuando importa —sin agredir ni ceder— construyen culturas donde los problemas emergen antes de convertirse en crisis. La habilidad a desarrollar primero: sostener una posición incómoda sin escalarla ni abandonarla.',
    ie:          'Cuando el equipo enfrentó un líder nuevo con un equipo disfuncional (Caso 4) o un rumor que destruía la confianza (Caso 6), las respuestas tendieron a gestionar síntomas en vez de causas emocionales. La inteligencia emocional efectiva no es nombrar las emociones — es interpretar qué función está cumpliendo esa emoción en la dinámica del sistema. El trabajo recomendado es desarrollar habilidades de lectura sistémica: qué está comunicando el conflicto, qué está pidiendo la crisis.',
    cohesion:    'En los escenarios donde el equipo debía tomar una decisión que no gustaría a todos (Caso 3: presión de resultados vs bienestar; Caso 5: promoción que excluye a alguien), la cohesión se priorizó sobre la efectividad: se evitaron las conversaciones duras, se cedió ante la presión del grupo, se postergó lo necesario. Lencioni (2002) en Las cinco disfunciones de un equipo identifica el miedo al conflicto como la segunda disfunción crítica. La intervención recomendada: crear protocolos de decisión difícil que el equipo pueda activar antes de que la presión emocional los capture.',
  },
  2: {
    resumen: 'El equipo muestra intuición de liderazgo emocional en escenarios de baja a media complejidad, pero pierde consistencia cuando el conflicto tiene historia acumulada (Caso 1), cuando alguien en el equipo atraviesa una crisis que desestabiliza la operación (Caso 2), o cuando la decisión correcta genera perdedores visibles (Caso 5). El patrón emergente: reacción emocional bien intencionada que no alcanza a convertirse en intervención estructurada. Hay base para desarrollar — los patrones correctos aparecen, pero no se sostienen bajo presión.',
    empatia:     'La empatía del equipo funciona bien cuando el dolor del otro es claro y no amenaza la dinámica del grupo. Se tensiona cuando la situación exige contener la emoción del otro sin resolverla, como ocurre en la crisis personal de un colaborador (Caso 2) o en el momento posterior a una decisión que afecta a alguien valioso (Caso 5). Kanov et al. (2004) en Compassion in Organizational Life documentan que la empatía sin límites claros de rol genera dependencia y desgaste en quien la ejerce. El desarrollo clave: aprender a acompañar sin fusionarse, y a derivar cuando corresponde.',
    asertividad: 'En los escenarios de mayor tensión —el conflicto entre dos personas con poder (Caso 1) y la semana de presión de resultados vs bienestar del equipo (Caso 3)— la asertividad del equipo cedió: o se suavizó el mensaje para evitar el choque, o se endureció hasta perder la relación. La calibración entre dirección y relación es la competencia central del liderazgo asertivo. El ejercicio más eficaz para este nivel: practicar conversaciones donde se sostiene la posición y se valida simultáneamente la perspectiva del otro, sin mezclar las dos.',
    ie:          'El equipo tiene conciencia emocional —reconoce cuándo algo está mal— pero su aplicación es inconsistente cuando la situación tiene múltiples capas (un equipo heredado con historia de conflicto en el Caso 4, o un rumor que tiene origen conocido pero consecuencias difusas en el Caso 6). Salovey y Mayer (1990) definen la I.E. como la capacidad de usar la información emocional para guiar el pensamiento. El gap aquí no es sensibilidad —hay sensibilidad— es traducción: convertir lo que se percibe emocionalmente en una decisión de intervención precisa.',
    cohesion:    'La orientación al equipo es genuina y es el activo más fuerte de este nivel. La limitación aparece cuando construir cohesión exige decir algo difícil a alguien del grupo: en los Casos 3 y 5, el equipo tendió a proteger la armonía a costa de la claridad. Edmondson (1999) en Psychological Safety and Learning Behavior in Work Teams muestra que los equipos de alta cohesión real no evitan el conflicto — tienen rituales para procesarlo sin destruir la confianza. La intervención recomendada: diseñar juntos un protocolo de feedback directo que el equipo adopte como norma antes de que llegue la próxima crisis.',
  },
  3: {
    resumen: 'El equipo tiene una base sólida de liderazgo emocional. Resuelve la mayoría de los escenarios con criterio —especialmente los que involucran crisis personal de un colaborador (Caso 2) y conflictos interpersonales directos (Caso 1)— pero enfrenta sus mayores dificultades cuando la presión es sistémica: un equipo heredado con disfunción estructural (Caso 4), una crisis reputacional que no tiene origen claro (Caso 6), o una decisión que crea un perdedor visible dentro del grupo (Caso 5). El desarrollo no está en aprender habilidades nuevas, sino en sostener las que ya tiene bajo condiciones más adversas.',
    empatia:     'La empatía del equipo es práctica: entiende el estado emocional del otro y lo integra en la toma de decisiones. El desafío apareció con mayor claridad en el Caso 2 (crisis personal de un colaborador) y el Caso 5 (decisión que excluye a alguien valioso): en ambos, la empatía fue precisa en el diagnóstico pero no siempre determinante en la acción. Dutton et al. (2014) en How to Be a Compassionate Manager muestran que la compasión efectiva requiere tres pasos: notar el sufrimiento, sentirlo como relevante, y actuar de forma competente. El equipo domina los dos primeros — el trabajo está en el tercero.',
    asertividad: 'Las decisiones del equipo son claras y las sostiene en la mayoría de escenarios. El punto de quiebre apareció en situaciones donde decir lo correcto implica asumir el costo relacional: con el sindicato bajo presión de resultados (Caso 3), o al comunicar a alguien valioso por qué no fue promovido (Caso 5). Stone, Patton y Heen (1999) en Difficult Conversations distinguen las conversaciones de identidad —donde la otra persona siente que su valor está en juego— como las más difíciles de sostener con asertividad. El desarrollo está en esas conversaciones específicas: cómo dar feedback de alto impacto sin que se convierta en ataque a la persona.',
    ie:          'El equipo navega la complejidad emocional con criterio y reconoce sus sesgos en la mayoría de contextos. La excepción emergió en los Casos 4 y 6: cuando el origen del problema está enterrado en la historia del equipo (disfunción heredada, rumor de fuente desconocida), la lectura emocional pierde precisión. Boyatzis y McKee (2005) en Resonant Leadership describen la capacidad de leer sistemas emocionales complejos —no solo individuos— como el marcador diferencial del liderazgo de alto impacto. El siguiente paso: desarrollar intervenciones de diagnóstico sistémico, no solo interpersonal.',
    cohesion:    'El equipo construye confianza y alineación con consistencia. La tensión aparece cuando hay que tomar decisiones que generan ganadores y perdedores visibles dentro del grupo (Caso 3: recorte de beneficios para cumplir trimestre; Caso 5: promoción que deja afuera a alguien querido). En esos momentos, la cohesión se tensionó porque el equipo no tenía un lenguaje colectivo para procesar la desigualdad de impacto. La intervención recomendada para el facilitador: taller de toma de decisiones difíciles con metodología de criterios explícitos, donde el equipo practique separar la decisión de la relación.',
  },
  4: {
    resumen: 'El equipo demuestra un manejo consistente de escenarios de alta complejidad. Sus decisiones integran el criterio emocional y el estratégico con naturalidad —incluyendo los escenarios más exigentes del assessment: conflicto con historia acumulada entre personas con poder (Caso 1), presión de resultados vs bienestar con sindicato activo (Caso 3), y crisis reputacional de origen ambiguo (Caso 6). Está en el cuartil superior. El trabajo desde aquí no es corregir debilidades críticas, sino construir capacidad de transferencia: que este nivel de liderazgo se replique en el equipo, no solo en sus líderes más capaces.',
    empatia:     'La empatía del equipo es una competencia madura: lee con precisión los estados emocionales, los integra en la toma de decisiones y los usa como información estratégica sin perder efectividad. En el Caso 2 (crisis personal de un colaborador), el equipo demostró la distinción que Worline y Dutton (2017) llaman compasión competente: acompañar sin fusionarse, actuar sin invadir, derivar cuando el cuidado supera el rol. El área de crecimiento desde aquí es institucional: diseñar estructuras que sostengan este nivel de respuesta cuando el líder que lo ejerce no está presente.',
    asertividad: 'El equipo toma posición con claridad y genera dirección en situaciones ambiguas, incluyendo las más expuestas: comunicar decisiones impopulares al equipo bajo presión (Caso 3) y dar retroalimentación de alto impacto a alguien que no fue promovido (Caso 5). Su asertividad es un recurso confiable. El desarrollo desde este nivel es de segundo orden: enseñar a otros a ejercerla. La recomendación para el facilitador es usar las fortalezas de este equipo como caso de estudio en talleres con equipos en niveles 1-2, para que el modelo sea observable y transferible.',
    ie:          'El equipo maneja la complejidad emocional con sofisticación: distingue entre reacción e interpretación, y elige sus respuestas de forma consciente incluso en los escenarios de mayor ambigüedad (Caso 4: equipo disfuncional heredado; Caso 6: rumor que destruye la confianza). Salovey y Mayer (1990) describen este nivel como regulación emocional estratégica — usar las emociones como datos, no como directivas. El siguiente horizonte de desarrollo: inteligencia emocional sistémica, que no solo gestiona las propias reacciones sino que diseña condiciones para que todo el equipo opere con este mismo criterio.',
    cohesion:    'El equipo construye contextos donde las personas se sienten seguras para comprometerse, incluso en decisiones que no gustan a todos. En el Caso 5 (decisión que afecta a una persona pero beneficia al equipo) y el Caso 3 (recorte de bienestar para cumplir resultados), el equipo mantuvo la cohesión sin sacrificar la claridad. Edmondson (1999) identifica esto como el marcador de los equipos de alto aprendizaje: no ausencia de tensión, sino capacidad de procesarla sin fractura. La recomendación para el facilitador: documentar los rituales de toma de decisión de este equipo como protocolo replicable para otras unidades.',
  },
  5: {
    resumen: 'El equipo demostró toma de decisiones alineada con las mejores prácticas de liderazgo emocional organizacional en todos los escenarios del assessment — incluyendo los diseñados para revelar los puntos ciegos más comunes: el conflicto entre personas con poder e historia acumulada (Caso 1), la crisis personal que desestabiliza la operación (Caso 2), y la crisis reputacional de origen ambiguo que erosiona la confianza del equipo (Caso 6). Este nivel de respuesta no es frecuente. La pregunta relevante desde aquí no es cómo mejorar, sino cómo sostener y transferir esta capacidad cuando la presión sea mayor o el equipo cambie.',
    empatia:     'La empatía del equipo opera al nivel de los líderes más efectivos documentados en la investigación: es precisa, oportuna y nunca sacrifica la efectividad por la comodidad. En los Casos 2 y 5 —los que más exigen leer el dolor ajeno sin paralizarse— el equipo demostró lo que Kanov et al. (2004) llaman organizational compassion: una respuesta colectiva, no solo individual, al sufrimiento de quien forma parte del sistema. El reto desde aquí es de diseño organizacional: crear las condiciones para que esta capacidad no dependa de las personas actuales, sino que sea parte de la cultura del equipo.',
    asertividad: 'La asertividad del equipo es excepcional: toma posición cuando importa, la comunica con claridad y la sostiene con evidencia incluso cuando genera resistencia. En los Casos 1 y 3 —donde la asertividad exige enfrentar personas con poder o comunicar decisiones impopulares bajo presión de resultados— el equipo no cedió ni escaló innecesariamente. Genera dirección incluso sin consenso. La recomendación para el facilitador: este equipo está en condiciones de liderar conversaciones difíciles en espacios más amplios — puede ser un recurso para la organización, no solo un beneficiario del desarrollo.',
    ie:          'El equipo demuestra inteligencia emocional de alto rendimiento en todos los escenarios: entiende, regula y usa las emociones como información estratégica. En los Casos 4 y 6 —los que requieren leer dinámicas sistémicas, no solo reacciones individuales— la precisión del equipo fue notable: identificó el origen emocional del conflicto antes de actuar. Boyatzis y McKee (2005) describen este nivel como resonant leadership: la capacidad de crear un campo emocional que eleva el criterio colectivo. Esta capacidad es rara y crea ventaja competitiva sostenible.',
    cohesion:    'Este equipo construye cohesión que resiste la presión más intensa del assessment. En los Casos 3 y 5 —donde la decisión correcta crea perdedores visibles dentro del grupo— el equipo mantuvo la alineación sin sacrificar la claridad ni la honestidad. Su capacidad de sostener conversaciones difíciles sin fracturar la confianza es el activo más escaso en organizaciones de alta exigencia. La recomendación estratégica para el facilitador: documentar las normas implícitas de este equipo. No las declaradas — las que realmente practican. Esas son las que vale la pena transferir.',
  },
};

// RECOMENDACIONES ACCIONABLES — 3 por nivel × 4 dimensiones = 60
// Vinculadas a los casos del assessment y con base científica
const RECOMENDACIONES = {
  1: {
    empatia: [
      { titulo: 'Escucha sin agenda', accion: 'En la próxima semana, conduce una conversación de 15 minutos con un colaborador donde tu único objetivo sea entender — sin proponer soluciones ni cambiar su perspectiva. Al finalizar, parafrasea lo que escuchaste antes de responder.', ciencia: 'Rogers (1957) demostró que la escucha reflexiva reduce la defensividad y aumenta la apertura al cambio en un 40% más que el consejo directo.' },
      { titulo: 'Distinguir empatía de fusión', accion: 'Antes de responder emocionalmente a la situación de un colaborador, pregúntate: ¿estoy sintiendo con esta persona o estoy sintiendo en lugar de esta persona? Si es lo segundo, toma distancia antes de actuar.', ciencia: 'Worline y Dutton (2017) distinguen empatía afectiva —que paraliza al líder— de compasión competente, que actúa sin perder el rol. Esta diferencia define la efectividad de la respuesta.' },
      { titulo: 'Protocolo de derivación', accion: 'Identifica hoy los recursos de apoyo disponibles (EPS, psicólogo organizacional, programa de bienestar) para situaciones como la del Caso 2. Saber a quién derivar —y cómo hacerlo sin que la persona sienta rechazo— es una habilidad que se prepara antes de la crisis, no durante.', ciencia: 'La intervención en crisis (James & Gilliland, 2013) muestra que el error más frecuente del líder no entrenado es asumir el rol terapéutico en lugar de activar la red de apoyo adecuada.' },
    ],
    asertividad: [
      { titulo: 'La técnica del disco rayado', accion: 'Practica sostener tu posición en una conversación difícil esta semana. Cuando la otra persona argumente, valida su perspectiva ("entiendo que lo ves así") y regresa a tu posición sin elevar el tono ni ceder la sustancia.', ciencia: 'Lange y Jakubowski (1976) desarrollaron esta técnica en Responsible Assertive Behavior. Reduce la escalada emocional al combinar validación con firmeza, dos habilidades que el nivel Reactivo tiende a separar.' },
      { titulo: 'Nombrar el patrón antes de actuar', accion: 'En situaciones como el Caso 1 (conflicto entre personas con poder), antes de intervenir escribe en papel: ¿qué está pasando emocionalmente aquí? ¿qué está en juego para cada parte? Actuar sin responder estas preguntas produce impulsividad disfrazada de asertividad.', ciencia: 'Edmondson (2018) en The Fearless Organization muestra que los líderes que hablan cuando importa —y lo hacen con criterio— construyen culturas donde los problemas emergen antes de convertirse en crisis.' },
      { titulo: 'DEAR MAN para conversaciones críticas', accion: 'Aprende y practica la secuencia DEAR MAN (Describe, Expresa, Afirma, Refuerza, Mantente atento, Aparenta seguridad, Negocia) en una conversación de bajo riesgo esta semana antes de aplicarla en situaciones de alta presión.', ciencia: 'Linehan (1993) desarrolló esta habilidad en DBT como protocolo estructurado para sostener posiciones en conversaciones de alta carga emocional sin ceder ni agredir.' },
    ],
    ie: [
      { titulo: 'Registro emocional diario', accion: 'Durante 7 días, al final de cada jornada anota: ¿qué emoción fue más intensa hoy? ¿qué la activó? ¿cómo influyó en una decisión? No se trata de juzgar — se trata de volver visible lo que suele ser automático.', ciencia: 'Gross (1998) en el modelo de regulación emocional muestra que la conciencia de los propios activadores es el primer paso antes de cualquier intervención de autorregulación efectiva.' },
      { titulo: 'Leer el sistema, no solo la persona', accion: 'En el próximo conflicto del equipo (como el del Caso 6), antes de identificar al responsable, pregúntate: ¿qué condiciones del sistema hicieron posible que esto ocurriera? Los problemas de equipo rara vez tienen un solo origen.', ciencia: 'Senge (1990) en La Quinta Disciplina muestra que el pensamiento sistémico —ver patrones en vez de eventos aislados— es la competencia que separa el diagnóstico efectivo del señalamiento improductivo.' },
      { titulo: 'Pausa de 90 segundos', accion: 'Cuando sientas una reacción emocional intensa en una situación de liderazgo, espera 90 segundos antes de actuar. Esta pausa no es pasividad — es el tiempo que tarda el sistema límbico en ceder el control al córtex prefrontal.', ciencia: 'Jill Bolte Taylor (2006) documentó que la activación emocional automática dura aproximadamente 90 segundos. Actuar dentro de ese ventana es reacción. Actuar después es elección.' },
    ],
    cohesion: [
      { titulo: 'Protocolo de decisión difícil', accion: 'Antes del próximo escenario donde el equipo deba tomar una decisión que no gustará a todos (como los Casos 3 y 5), define junto al equipo los criterios de decisión. Cuando los criterios son explícitos, la decisión se desvincula de la persona que la toma.', ciencia: 'Lencioni (2002) en Las cinco disfunciones de un equipo identifica la ausencia de criterios compartidos como la causa estructural del conflicto improductivo. Los equipos que deciden con criterios explícitos mantienen la cohesión bajo presión.' },
      { titulo: 'Reunión de retrospectiva estructurada', accion: 'Implementa una reunión de 30 minutos después de cada decisión importante con tres preguntas: ¿Qué salió bien? ¿Qué haríamos diferente? ¿Qué necesitamos del equipo para la próxima? Sin señalamientos, solo aprendizaje colectivo.', ciencia: 'Edmondson (1999) demostró que los equipos con mayor seguridad psicológica tienen rituales de revisión explícitos. No la ausencia de errores, sino la capacidad de procesarlos sin fractura, es lo que define la cohesión real.' },
      { titulo: 'Mapa de interdependencias', accion: 'Haz visible quién depende de quién en el equipo para cumplir sus objetivos. Cuando cada persona entiende el impacto de su trabajo en el de los demás, la cohesión deja de ser un valor declarado y se convierte en una necesidad funcional.', ciencia: 'Carron (1982) en su modelo de cohesión grupal distingue cohesión social (nos caemos bien) de cohesión de tarea (nos necesitamos para funcionar). La segunda es más robusta bajo presión.' },
    ],
  },
  2: {
    empatia: [
      { titulo: 'Empatía con límites de rol', accion: 'Practica esta frase cuando un colaborador comparta algo difícil: "Lo que me cuentas importa y quiero apoyarte bien. ¿Qué tipo de apoyo necesitas de mí en este momento — que te escuche, que busquemos soluciones juntos, o que te conecte con alguien que pueda ayudarte mejor?" Esta pregunta transforma la empatía en acción competente.', ciencia: 'Kanov et al. (2004) documentan que la respuesta compasiva efectiva requiere distinguir el tipo de apoyo que la persona necesita, no el que el líder intuitivamente quiere dar.' },
      { titulo: 'Escucha de tercer nivel', accion: 'En la próxima conversación difícil (como el momento posterior a la decisión del Caso 5), escucha en tres niveles simultáneos: qué dice la persona, qué siente, y qué no está diciendo. Anota los tres antes de responder.', ciencia: 'Whitmore (2009) en Coaching for Performance describe el tercer nivel de escucha —la presencia total— como la condición que hace posible que el otro sienta que realmente es visto.' },
      { titulo: 'Check-in semanal estructurado', accion: 'Implementa un check-in de 5 minutos al inicio de la semana con cada miembro de tu equipo directo: ¿Cómo estás llegando esta semana? (escala 1-10) ¿Qué necesitas de mí? Dos preguntas, sin agenda adicional.', ciencia: 'Worline y Dutton (2017) documentan que la atención sistemática al estado del colaborador —no solo reactiva cuando hay crisis— es el factor que convierte la empatía individual en cultura organizacional.' },
    ],
    asertividad: [
      { titulo: 'Separar persona de posición', accion: 'En la próxima conversación donde debas sostener una posición impopular, di explícitamente: "Lo que voy a decir es difícil y lo digo porque me importa la persona y el equipo." Esta separación reduce la defensividad sin suavizar el mensaje.', ciencia: 'Stone, Patton y Heen (1999) en Difficult Conversations identifican las conversaciones de identidad —donde la persona siente que su valor está en juego— como las que requieren esta separación explícita.' },
      { titulo: 'El momento de intervenir', accion: 'En situaciones como el Caso 1 (conflicto entre dos personas con poder), practica intervenir en el momento en que el conflicto es manejable, no cuando ya escaló. Definir cuándo intervenir es tan importante como saber cómo hacerlo.', ciencia: 'Patterson et al. (2002) en Crucial Conversations muestran que el error más frecuente es la demora: cuanto más se pospone la conversación difícil, mayor es la emoción acumulada y menor la efectividad de la intervención.' },
      { titulo: 'Comunicación No Violenta en feedback', accion: 'Usa el modelo CNV de Rosenberg para dar feedback esta semana: Observación (lo que vi), Emoción (cómo me afectó), Necesidad (qué necesito del equipo), Pedido (una acción específica). Sin interpretaciones ni juicios.', ciencia: 'Rosenberg (2003) en Comunicación No Violenta documenta que este formato reduce la respuesta defensiva porque separa el comportamiento de la identidad de la persona, haciendo el feedback más recibible.' },
    ],
    ie: [
      { titulo: 'El gap entre sensación y acción', accion: 'Esta semana, cuando identifiques una emoción intensa en el contexto laboral, agrega un paso entre sentirla y actuar: nómbrala en voz alta (para ti) y pregunta "¿qué información me está dando esta emoción sobre la situación?" Actúa sobre la información, no sobre la emoción.', ciencia: 'Salovey y Mayer (1990) definen la IE como el uso de la información emocional para guiar el pensamiento. Este paso — traducir emoción en dato — es lo que separa la conciencia emocional de la regulación efectiva.' },
      { titulo: 'Mapa de activadores propios', accion: 'Identifica tus 3 principales activadores emocionales en contexto laboral (qué situaciones, qué palabras, qué tipos de personas te desestabilizan) y diseña una respuesta planificada para cada uno. Anticipar es más efectivo que reaccionar.', ciencia: 'Goleman (1995) en Inteligencia Emocional identifica el autoconocimiento — saber qué nos activa y por qué — como la competencia fundacional sin la cual las demás son inestables bajo presión.' },
      { titulo: 'Leer la emoción del sistema', accion: 'En escenarios complejos como el Caso 6 (rumor que destruye la confianza), antes de actuar pregunta: ¿cuál es el estado emocional dominante del equipo ahora mismo? ¿Miedo? ¿Desconfianza? ¿Vergüenza? El diagnóstico emocional del sistema debe preceder la intervención.', ciencia: 'Boyatzis y McKee (2005) en Resonant Leadership describen la capacidad de leer el clima emocional colectivo como el indicador diferencial del liderazgo de segundo orden — el que impacta más allá del individuo.' },
    ],
    cohesion: [
      { titulo: 'Normas explícitas de conflicto', accion: 'Convoca una reunión de equipo esta semana con una sola agenda: ¿cómo queremos manejar los desacuerdos cuando ocurran? Documenten 3-5 normas concretas. No "con respeto" — sino qué hace cada uno cuando hay tensión. Este acuerdo reduce el costo del conflicto cuando aparece.', ciencia: 'Lencioni (2002) identifica el miedo al conflicto como la segunda disfunción crítica del equipo. Los equipos que diseñan sus protocolos de conflicto antes de necesitarlos tienen menor desgaste emocional cuando ocurre.' },
      { titulo: 'Visibilizar la interdependencia', accion: 'En la próxima reunión de equipo, pide que cada persona comparta en 2 minutos: ¿de quién depende para hacer bien su trabajo esta semana? Este ejercicio hace visible la interdependencia real y crea responsabilidad horizontal.', ciencia: 'Carron (1982) muestra que la cohesión de tarea —necesitarnos funcionalmente— es más robusta que la cohesión social —caernos bien— especialmente bajo presión de resultados como en el Caso 3.' },
      { titulo: 'Reconocimiento específico y público', accion: 'Implementa el hábito de nombrar públicamente (en reunión o por escrito) un aporte específico de un miembro del equipo cada semana. No "gracias por tu trabajo" — sino "vi que hiciste X en la situación Y y tuvo el impacto Z".', ciencia: 'Edmondson (1999) documenta que el reconocimiento específico contribuye a la seguridad psicológica porque comunica que el líder nota lo que cada persona hace — y eso aumenta la disposición a arriesgarse y comprometerse.' },
    ],
  },
  3: {
    empatia: [
      { titulo: 'Compasión con criterio de intervención', accion: 'Diseña un protocolo personal para situaciones como el Caso 2: ¿cuándo escucho sin más? ¿cuándo propongo recursos? ¿cuándo establezco un límite de rol? Tener esta decisión tomada de antemano evita improvisar en momentos de alta carga emocional.', ciencia: 'Dutton et al. (2014) en How to Be a Compassionate Manager muestran que la compasión efectiva requiere los tres pasos: notar, sentir como relevante, y actuar de forma competente. El equipo Funcional domina los dos primeros — el trabajo es el tercero.' },
      { titulo: 'Empatía bajo presión de resultados', accion: 'En escenarios como el Caso 3, practica nombrar explícitamente la tensión al equipo: "Sé que lo que vamos a decidir no va a gustarle a todos. Y quiero que sepan que esa tensión es real para mí también." Nombrar la tensión no la resuelve, pero reduce el costo emocional de cargarla en silencio.', ciencia: 'Brown (2010) en The Gifts of Imperfection documenta que los líderes que nombran la dificultad real — en vez de pretender que no existe — generan mayor confianza que los que proyectan invulnerabilidad.' },
      { titulo: 'Seguimiento post-decisión difícil', accion: 'Después de decisiones como la del Caso 5 (promoción que excluye a alguien), implementa un seguimiento de 2 semanas con la persona afectada: una conversación breve, sin agenda previa, para ver cómo está procesando la situación. No para resolver — para mostrar que la persona sigue siendo vista.', ciencia: 'Kanov et al. (2004) documentan que el sufrimiento no atendido post-decisión genera desenganche silencioso que cuesta más que el conflicto abierto. El seguimiento activo es la diferencia entre empatía declarada y empatía practicada.' },
    ],
    asertividad: [
      { titulo: 'Conversaciones de identidad', accion: 'Practica conversaciones donde el otro siente que su valor está en juego (como el Caso 5) usando esta estructura: primero reconoce su aporte real, luego explica el criterio de la decisión, luego diferencia el criterio de la persona. Este orden importa.', ciencia: 'Stone, Patton y Heen (1999) identifican las conversaciones de identidad como las más difíciles porque activan el sistema de amenaza. La secuencia reconocimiento-criterio-diferenciación desactiva la amenaza antes de comunicar la decisión.' },
      { titulo: 'Asertividad institucional', accion: 'En situaciones como el Caso 3 (presión de resultados con sindicato activo), practica comunicar decisiones difíciles con soporte institucional explícito: "Esta decisión la tomamos como equipo directivo por las siguientes razones..." Esto transfiere parte del peso de la impopularidad de la persona al sistema.', ciencia: 'Edmondson (2018) muestra que los líderes que comunican desde el "nosotros institucional" —no solo el "yo personal"— generan menor resistencia emocional en el equipo que los que asumen el costo como decisión individual.' },
      { titulo: 'El feedback de alto impacto', accion: 'Practica el modelo SBI (Situación-Comportamiento-Impacto) para dar feedback esta semana: describe la situación concreta, el comportamiento observado, y el impacto específico. Sin interpretaciones de intención. Sin historia acumulada. Solo lo observable.', ciencia: 'Cannon-Bowers et al. (1995) en investigación de equipos de alto desempeño documentan que el feedback basado en comportamientos observables tiene 3 veces más probabilidad de producir cambio que el feedback basado en rasgos o intenciones atribuidas.' },
    ],
    ie: [
      { titulo: 'Diagnóstico sistémico antes de intervenir', accion: 'En escenarios complejos como el Caso 4 (equipo con disfunción heredada), antes de cualquier intervención, mapea: ¿cuánto tiempo lleva esta dinámica? ¿qué la sostiene? ¿quién se beneficia del status quo? Un diagnóstico incompleto produce intervenciones que tratan síntomas.', ciencia: 'Boyatzis y McKee (2005) describen la lectura de sistemas emocionales complejos — no solo individuos — como el marcador diferencial del liderazgo de segundo orden. Esta capacidad distingue al líder Funcional del Efectivo.' },
      { titulo: 'Regulación emocional en tiempo real', accion: 'Practica la técnica de reapreciación cognitiva (Gross, 1998): cuando enfrentes una situación que te active emocionalmente, reencuadra deliberadamente la perspectiva. "Esta persona no está atacando mi liderazgo — está expresando su frustración con la situación." El reencuadre no niega la emoción, cambia su función.', ciencia: 'Gross (1998) en el modelo de regulación emocional muestra que la reapreciación cognitiva — cambiar cómo interpretamos una situación — tiene mayor impacto sostenido que la supresión emocional, que cuesta más energía y genera más estrés.' },
      { titulo: 'Coaching de equipo con RULER', accion: 'Implementa el modelo RULER (Reconocer, Comprender, Etiquetar, Expresar, Regular) de Brackett en una dinámica de equipo mensual: ¿qué emoción predominó este mes en el equipo? ¿de dónde vino? ¿cómo nos afectó? ¿cómo la gestionamos?', ciencia: 'Brackett (2019) en Permission to Feel documenta que los equipos que practican el vocabulario emocional estructurado —nombrar con precisión lo que sienten— tienen mayor capacidad de regulación colectiva bajo presión.' },
    ],
    cohesion: [
      { titulo: 'Conversaciones de criterio compartido', accion: 'Antes del próximo escenario donde el equipo deba elegir entre bienestar y resultados (como el Caso 3), convoca una conversación explícita: "¿Cuáles son los criterios que vamos a usar para decidir cuando los dos valores estén en tensión?" Definir esto en calma reduce el costo emocional cuando llega la presión.', ciencia: 'Lencioni (2002) identifica la ausencia de compromiso con criterios compartidos como la tercera disfunción crítica del equipo. La conversación de criterios es la intervención preventiva más efectiva para escenarios de alta presión.' },
      { titulo: 'Taller de feedback entre pares', accion: 'Diseña una sesión de 90 minutos donde los miembros del equipo se den feedback directo entre sí usando el modelo SBI. El facilitador (o el líder) no participa como evaluador — solo sostiene el proceso. Esta práctica construye la norma de honestidad horizontal.', ciencia: 'Edmondson (1999) documenta que los equipos de alto aprendizaje tienen normas de feedback horizontal — entre pares, no solo jerárquico. Esta norma es más poderosa que el feedback del líder porque es sostenible sin presencia jerárquica.' },
      { titulo: 'Ritual de cierre de ciclo', accion: 'Implementa un ritual de cierre al finalizar proyectos o períodos intensos (como el cierre del trimestre del Caso 3): 30 minutos de equipo para reconocer lo que se logró, nombrar lo que fue difícil, y acordar un aprendizaje colectivo. Sin este cierre, el equipo acumula fatiga emocional que afecta el siguiente ciclo.', ciencia: 'Weick (1995) en Sensemaking in Organizations documenta que los equipos que crean sentido colectivo de sus experiencias difíciles — en vez de seguir adelante sin procesarlas — tienen mayor resiliencia organizacional.' },
    ],
  },
  4: {
    empatia: [
      { titulo: 'De la empatía individual a la cultura', accion: 'Identifica tres prácticas que usas para responder con empatía y diseña cómo transferirlas al equipo como norma: ¿cómo puede el equipo responder con compasión cuando tú no estás presente? El objetivo es institucionalizar la capacidad, no personalizarla.', ciencia: 'Worline y Dutton (2017) distinguen la compasión individual — que depende de la persona que la ejerce — de la compasión organizacional — que está embebida en las normas y estructuras. Este es el salto del nivel 4 al 5.' },
      { titulo: 'Mentoría de empatía en cascada', accion: 'Identifica a un miembro del equipo con menor desarrollo en empatía (no el más débil en desempeño — el más desconectado emocionalmente) y diseña tres conversaciones intencionales este mes. No para corregirlo — para modelar frente a él cómo lees y respondes al estado emocional del equipo.', ciencia: 'Boyatzis (2006) en su investigación sobre coaching intencional muestra que el modelado explícito — hacer visible el proceso interno, no solo el resultado — es más efectivo para el desarrollo que el feedback evaluativo.' },
      { titulo: 'Empatía en la toma de decisiones sistémica', accion: 'En la próxima decisión de impacto colectivo (como el Caso 3 o el Caso 5), mapa deliberadamente: ¿a quién afecta esta decisión? ¿cómo la vivirá cada persona? ¿qué apoyo necesita cada uno? Hacer visible este análisis antes de decidir —no después— es liderazgo empático avanzado.', ciencia: 'Dutton et al. (2014) muestran que los líderes de mayor impacto no solo responden con empatía — anticipan el impacto emocional de sus decisiones y diseñan el acompañamiento antes de que la persona necesite pedirlo.' },
    ],
    asertividad: [
      { titulo: 'Transferir la habilidad al equipo', accion: 'Diseña una dinámica donde el equipo practique sostener posiciones incómodas entre sí. Usa un caso simulado (como el del Caso 1) y rota roles: cada persona practica decir algo difícil y recibir la respuesta. Tu rol es facilitar, no evaluar.', ciencia: 'Edmondson (2018) documenta que las organizaciones donde la seguridad psicológica está distribuida — no solo dependiente del líder — tienen mayor capacidad de adaptación. Transferir la asertividad al equipo es la inversión de mayor retorno desde este nivel.' },
      { titulo: 'Liderazgo de doble vía', accion: 'En escenarios complejos como el Caso 6, practica mantener simultáneamente dos procesos: sostener a la persona afectada en el centro de la conversación y explorar recursos institucionales en paralelo. La asertividad en este nivel es orquestación, no declaración.', ciencia: 'Edmondson (2018) describe este patrón en equipos de alto desempeño: la capacidad de mantener múltiples conversaciones paralelas sin que ninguna cancele a la otra es el marcador de madurez del liderazgo asertivo.' },
      { titulo: 'Caso de estudio interno', accion: 'Documenta una situación donde tu equipo manejó bien una conversación difícil (como las del Caso 1 o Caso 3) y úsala como caso de estudio en el próximo taller de liderazgo de la organización. Los equipos en niveles 1-2 necesitan modelos observables, no solo conceptos.', ciencia: 'Bandura (1977) en su teoría del aprendizaje social documenta que el modelado observacional —ver cómo otro maneja una situación difícil— tiene mayor impacto en el desarrollo de habilidades que la instrucción directa.' },
    ],
    ie: [
      { titulo: 'Inteligencia emocional sistémica', accion: 'En la próxima reunión de equipo, facilita un diagnóstico colectivo del clima emocional: ¿qué emoción predomina en el equipo este mes? ¿de dónde viene? ¿cómo nos está afectando colectivamente? Este diagnóstico compartido es el primer paso del liderazgo de segundo orden.', ciencia: 'Goleman, Boyatzis y McKee (2002) en El líder resonante crea más distinguen el líder que gestiona sus propias emociones del líder que diseña el clima emocional colectivo. Este segundo nivel es el que define el impacto organizacional real.' },
      { titulo: 'Supervisión de IE con un par', accion: 'Establece una conversación mensual con otro líder de confianza donde ambos revisen una situación difícil del mes usando preguntas de IE: ¿qué sentiste? ¿cómo lo interpretaste? ¿qué hiciste? ¿qué harías diferente? La reflexión guiada acelera el desarrollo más que la experiencia sola.', ciencia: 'Boyatzis (2006) documenta que el desarrollo de la IE requiere práctica reflexiva con feedback externo. Los líderes que se desarrollan más rápido no son los más brillantes — son los que tienen pares que los hacen pensar.' },
      { titulo: 'Diseño de condiciones, no solo respuesta', accion: 'Identifica un patrón recurrente de la dinámica emocional del equipo (como el que aparece en el Caso 4: equipo con historia de disfunción) y diseña una intervención estructural — no interpersonal — que cambie las condiciones que sostienen ese patrón.', ciencia: 'Hackman (2002) en Leading Teams muestra que los líderes más efectivos intervienen en las condiciones que producen los problemas, no solo en los problemas mismos. Esto exige leer el sistema, no solo las personas.' },
    ],
    cohesion: [
      { titulo: 'Documentar las normas reales', accion: 'Convoca una sesión donde el equipo identifique sus normas implícitas —las que realmente practican, no las declaradas— especialmente en momentos de presión. Pregunta: "Cuando estamos bajo presión, ¿qué hacemos realmente?" Hacer visible lo implícito es el primer paso para elegir si queremos mantenerlo o cambiarlo.', ciencia: 'Edmondson (1999) identifica que los equipos de alto aprendizaje tienen mayor conciencia de sus propias normas. Esta metaconciencia grupal es lo que les permite adaptarse cuando las normas actuales dejan de servir.' },
      { titulo: 'Protocolo para ganadores y perdedores visibles', accion: 'Diseña un protocolo para decisiones como la del Caso 5 (promoción que excluye a alguien): cómo comunicar, cómo acompañar a quien no fue elegido, cómo sostener la cohesión del equipo después. Tener este protocolo diseñado antes de necesitarlo reduce significativamente el daño a la confianza.', ciencia: 'Lencioni (2002) documenta que la falta de protocolos para decisiones que crean perdedores visibles es una de las principales causas de desintegración de equipos de alto desempeño. El diseño preventivo es más eficaz que la reparación post-daño.' },
      { titulo: 'Transferencia a otras unidades', accion: 'Identifica qué hace tu equipo para mantener la cohesión bajo presión y sistematízalo en un formato transferible (guía, ritual, protocolo). Ofrécelo como recurso a otra unidad de la organización. Compartir lo que funciona es el paso de cohesión de equipo a cohesión organizacional.', ciencia: 'Edmondson (1999) documenta que los equipos de mayor aprendizaje organizacional son los que transfieren sus prácticas, no solo los que las tienen. La transferencia es el indicador de madurez del sistema.' },
    ],
  },
  5: {
    empatia: [
      { titulo: 'Compasión organizacional como diseño', accion: 'Mapa las estructuras de tu organización que facilitan o dificultan la respuesta compasiva a situaciones como el Caso 2 (crisis personal de un colaborador): ¿hay protocolos de bienestar? ¿están activados? ¿quién los conoce? Propón una mejora estructural este trimestre.', ciencia: 'Worline y Dutton (2017) documentan que la compasión organizacional —a diferencia de la individual— requiere estructuras que la hagan posible cuando la persona empática no está presente. El liderazgo de alto impacto diseña sistemas, no solo responde a personas.' },
      { titulo: 'Mentoría de segundo orden', accion: 'Identifica a dos líderes en niveles 2-3 en tu organización y diseña un proceso de mentoring donde compartas explícitamente cómo lees y respondes a las dinámicas emocionales del equipo. No teoría — situaciones reales de tu experiencia con el proceso de pensamiento visible.', ciencia: 'Boyatzis (2006) documenta que el desarrollo de la IE a nivel organizacional requiere líderes que funcionen como modelos de aprendizaje explícito: que hagan visible su proceso interno, no solo sus resultados.' },
      { titulo: 'Investigación del propio límite', accion: 'Identifica la situación donde tu empatía tiene mayor dificultad — el tipo de persona, el tipo de problema, el contexto específico — y diseña un plan de desarrollo para ese límite. Los líderes de alto impacto no son los que no tienen límites, sino los que conocen cuáles son y trabajan en ellos.', ciencia: 'Neff (2011) en Self-Compassion documenta que la autocompasión — no la autocrítica — es lo que sostiene la capacidad empática a largo plazo. Los líderes con mayor longevidad en el impacto son los que se cuidan con el mismo criterio con que cuidan a otros.' },
    ],
    asertividad: [
      { titulo: 'Liderazgo de voz en espacios de poder', accion: 'Identifica una decisión organizacional de alto nivel donde tu equipo tiene información relevante que no está llegando a quienes deciden. Diseña cómo llevar esa voz al espacio donde importa, con los datos y el encuadre adecuados para ser escuchado.', ciencia: 'Edmondson (2018) documenta que los equipos de mayor impacto organizacional son los que ejercen voz hacia arriba — no solo entre pares. La asertividad de nivel 5 trasciende el equipo e influye en el sistema.' },
      { titulo: 'Diseño de espacios para voces disidentes', accion: 'Implementa en tu equipo un ritual donde la voz menos escuchada tenga espacio explícito: "¿Quién tiene una perspectiva diferente que no hemos considerado?" Esta práctica no es solo democracia — es inteligencia colectiva que reduce el riesgo de puntos ciegos.', ciencia: 'Sunstein y Hastie (2015) en Wiser documentan que los equipos que institucionalizan la disidencia toman mejores decisiones que los que optimizan el consenso. La asertividad de nivel 5 no es la del líder que habla — es la del líder que crea condiciones para que todos hablen.' },
      { titulo: 'Código de conducta de conversaciones difíciles', accion: 'Redacta con tu equipo un documento de una página sobre cómo manejan las conversaciones difíciles: qué compromisos tienen entre sí, qué está permitido decir, qué no. Este documento no es para situaciones normales — es para cuando la presión es máxima y los instintos fallan.', ciencia: 'Patterson et al. (2002) en Crucial Conversations documentan que los equipos que tienen acuerdos explícitos sobre cómo manejan el conflicto tienen mayor probabilidad de mantener la asertividad cuando las emociones están más activas.' },
    ],
    ie: [
      { titulo: 'IE como ventaja competitiva documentada', accion: 'Analiza los últimos 6 meses de tu equipo e identifica 3 situaciones donde la inteligencia emocional del grupo produjo un resultado diferente al que hubiera producido un equipo de menor madurez. Documenta esto como evidencia interna para fundamentar inversión en desarrollo de IE en la organización.', ciencia: 'Goleman (1998) en Working with Emotional Intelligence documenta que la IE explica entre el 67% y el 90% de la diferencia entre líderes promedio y líderes de alto impacto en roles similares. Hacer visible este impacto es la forma de sostener la inversión organizacional.' },
      { titulo: 'Supervisión de IE a escala', accion: 'Diseña un proceso de supervisión de IE para los líderes que reportan a ti: conversaciones trimestrales donde revisen juntos una situación difícil del período usando el modelo de Boyatzis (sentir, pensar, actuar). Tu función es facilitar la reflexión, no evaluarlos.', ciencia: 'Boyatzis y McKee (2005) documentan que el liderazgo resonante se sostiene a través de renovación intencional — práctica reflexiva regular que evita el desgaste que deteriora la IE bajo presión acumulada.' },
      { titulo: 'Diagnóstico de clima emocional organizacional', accion: 'Propón e implementa una medición semestral del clima emocional de tu unidad usando un instrumento validado (PANAS, EQ-i, o el modelo RULER de Brackett). Usa los datos para diseñar intervenciones específicas, no generales. Lo que se mide se puede mejorar.', ciencia: 'Brackett (2019) documenta que las organizaciones que miden sistemáticamente el clima emocional tienen mayor capacidad de intervención proactiva. La medición convierte la IE de competencia individual en sistema organizacional gestionable.' },
    ],
    cohesion: [
      { titulo: 'Normas como activo organizacional', accion: 'Documenta las normas implícitas que hacen funcionar a tu equipo bajo presión — no las declaradas, sino las que realmente practican — y conviértelas en un documento de onboarding para nuevos integrantes. La cohesión de nivel 5 sobrevive la entrada de personas nuevas porque está escrita, no solo sentida.', ciencia: 'Edmondson (1999) documenta que los equipos de mayor aprendizaje organizacional son los que hacen explícitas sus normas de funcionamiento. La cohesión que no está documentada depende de las personas actuales y se pierde con la rotación.' },
      { titulo: 'Contribuir a la cohesión de la organización', accion: 'Identifica una dinámica de fragmentación entre equipos o áreas de tu organización y diseña una iniciativa donde tu equipo actúe como puente. Los equipos de alto impacto no solo son cohesivos internamente — generan cohesión entre unidades.', ciencia: 'Gittell (2016) en Transforming Relationships for High Performance documenta que la cohesión relacional — que conecta equipos, no solo personas dentro de un equipo — es el predictor más robusto del desempeño organizacional sostenido.' },
      { titulo: 'Legado de cohesión', accion: 'Diseña un plan para que la cohesión de tu equipo sobreviva tu salida o la salida de sus miembros más influyentes. ¿Qué rituales, protocolos y normas deben quedar institucionalizados para que la dinámica no dependa de las personas actuales?', ciencia: 'Collins (2001) en Good to Great documenta que las organizaciones de impacto sostenido no dependen de líderes excepcionales — tienen sistemas que producen liderazgo consistente independientemente de quién ocupe los roles. Esta es la pregunta del nivel 5.' },
    ],
  },
};

function calcularPerfil(totals, totalScore) {
  const dims = [
    { key: 'empatia',      label: 'Empatía',                val: totals.empatia },
    { key: 'asertividad',  label: 'Asertividad',            val: totals.asertividad },
    { key: 'ie',           label: 'Inteligencia Emocional', val: totals.ie },
    { key: 'cohesion',     label: 'Cohesión de Equipo',     val: totals.cohesion },
  ].sort((a, b) => b.val - a.val);

  const nivel = getNivel(totalScore);
  const dominante = dims[0];
  const debil = dims[dims.length - 1];
  const desc = DESCRIPCIONES_NIVEL[nivel.nivel];

  return {
    nivel: nivel.nivel,
    nombre: nivel.nombre,
    emoji: nivel.emoji,
    color: nivel.color,
    resumen: desc.resumen,
    descripcionDim: desc[dominante.key],
    dominante: dominante.label,
    debil: debil.label,
    debilVal: debil.val,
    recomendaciones: RECOMENDACIONES[nivel.nivel][dominante.key],
  };
}

function getDimLabel(val) {
  if (val <= 3) return { text: 'Área crítica',  color: '#ef5350' };
  if (val <= 5) return { text: 'Por desarrollar', color: '#ff9800' };
  if (val <= 7) return { text: 'Promedio',      color: '#ffd740' };
  if (val <= 9) return { text: 'Fortaleza',     color: '#66bb6a' };
  return               { text: 'Excepcional',   color: '#26c6da' };
}

// ============================================================
// ESTADO DE LA APLICACIÓN (V2)
// ============================================================
const State = {
  teamCode: null,
  teamId: null,
  caseId: null,
  caseData: null,
  decision: null,
  startTime: null,
  timerInterval: null,
  timeRemaining: 25 * 60,
  radarChart: null,
  warnPlayed: false,
  dangerPlayed: false,
  // V2: navegación por escenas y preguntas
  sceneIndex: 0,
  questionIndex: 0,
  totalScore: 0,
  scoreBreakdown: { empatia: 0, asertividad: 0, ie: 0, cohesion: 0 },
  answeredCount: 0,
  totalAnswered: 0,
  allAnswers: [],
};

// ============================================================
// NAVEGACIÓN DE PANTALLAS (SPA)
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  const el = document.getElementById(id);
  if (el) {
    el.classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================
// INICIALIZACIÓN
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  // Ocultar loading overlay
  setTimeout(() => {
    document.getElementById('loading-overlay')?.classList.add('hidden');
  }, 900);

  // Página facilitador dedicada
  if (window.location.pathname.endsWith('facilitator.html')) {
    showScreen('screen-facilitator');
    initFacilitator();
    return;
  }

  // Código de equipo desde URL (QR)
  const params = new URLSearchParams(window.location.search);
  const teamParam = params.get('equipo');
  if (teamParam) {
    const inp = document.getElementById('team-code-input');
    if (inp) inp.value = teamParam;
    showScreen('screen-team-code');
  }

  // === Botones Welcome ===
  document.getElementById('btn-start-assessment')?.addEventListener('click', () => {
    AudioEngine.init();
    AudioEngine.playChime();
    showScreen('screen-team-code');
  });

  document.getElementById('btn-facilitator-view')?.addEventListener('click', () => {
    AudioEngine.init();
    AudioEngine.playClick();
    showScreen('screen-facilitator');
    initFacilitator();
  });

  // === Código de equipo ===
  document.getElementById('btn-submit-team-code')?.addEventListener('click', () => {
    AudioEngine.init();
    submitTeamCode();
  });

  document.getElementById('team-code-input')?.addEventListener('keypress', e => {
    if (e.key === 'Enter') { AudioEngine.init(); submitTeamCode(); }
  });

  // === Instrucciones ===
  document.getElementById('btn-start-cases')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-case');
    startAssessment();
  });

  // === Resultados ===
  document.getElementById('btn-restart-assessment')?.addEventListener('click', () => {
    AudioEngine.playClick();
    location.reload();
  });

  // === Facilitador ===
  document.getElementById('btn-export-results')?.addEventListener('click', () => {
    AudioEngine.playClick();
    exportCSV();
  });

  document.getElementById('btn-print-qr')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-qr-print');
    loadQRCodes();
  });

  document.getElementById('btn-back-to-main')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-welcome');
  });

  // === QR print ===
  document.getElementById('btn-print')?.addEventListener('click', () => {
    AudioEngine.playClick();
    window.print();
  });

  document.getElementById('btn-back-to-facilitator')?.addEventListener('click', () => {
    AudioEngine.playClick();
    showScreen('screen-facilitator');
    initFacilitator();
  });
});

// ============================================================
// CÓDIGO DE EQUIPO
// ============================================================
async function submitTeamCode() {
  const input = document.getElementById('team-code-input');
  const errorEl = document.getElementById('error-msg');
  const btn = document.getElementById('btn-submit-team-code');
  const code = input?.value.trim().toUpperCase();

  if (!code) { showError(errorEl, 'Escribe el nombre de tu equipo'); return; }
  if (errorEl) errorEl.classList.add('hidden');

  if (btn) { btn.disabled = true; btn.textContent = 'Entrando...'; }
  State.teamCode = code;

  // Caso aleatorio siempre
  const casoAleatorio = Math.floor(Math.random() * 6) + 1;

  try {
    const team = await getOrCreateTeam(code, casoAleatorio);
    State.teamId = team.id;
    State.caseId = team.caso_id;
  } catch (_) {
    State.caseId = casoAleatorio;
  }

  State.caseData = CASOS.find(c => c.id === State.caseId) ?? CASOS[0];

  if (btn) { btn.disabled = false; btn.textContent = 'Unirse al Taller'; }
  AudioEngine.playClick();
  showScreen('screen-instructions');
}

function showError(el, msg) {
  if (!el) return;
  el.textContent = msg;
  el.classList.remove('hidden');
}

// ============================================================
// SUPABASE
// ============================================================
function getClient() {
  if (typeof SUPABASE_URL === 'undefined' || SUPABASE_URL === 'YOUR_SUPABASE_URL') {
    throw new Error('Supabase not configured');
  }
  return window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function getOrCreateTeam(nombre, casoId) {
  const db = getClient();
  // Cada vez que entra un equipo crea un registro nuevo (permite múltiples intentos)
  const { data: created } = await db
    .from('equipos')
    .insert({ codigo: nombre, caso_id: casoId, nombre_equipo: nombre })
    .select().single();
  return created;
}

// ============================================================
// ASSESSMENT — ENGINE V2 (Escenas × Preguntas con Feedback)
// ============================================================
function startAssessment() {
  State.startTime = Date.now();
  State.decision = null;
  State.timeRemaining = 25 * 60;
  State.warnPlayed = false;
  State.dangerPlayed = false;
  State.sceneIndex = 0;
  State.questionIndex = 0;
  State.totalScore = 0;
  State.scoreBreakdown = { empatia: 0, asertividad: 0, ie: 0, cohesion: 0 };
  State.answeredCount = 0;
  State.totalAnswered = 0;
  State.allAnswers = [];
  renderCurrentQuestion();
  startTimer();
}

function getCurrentScene() {
  return State.caseData?.escenarios?.[State.sceneIndex] ?? null;
}

function getCurrentQuestion() {
  const scene = getCurrentScene();
  return scene?.preguntas?.[State.questionIndex] ?? null;
}

function renderCurrentQuestion() {
  const c = State.caseData;
  const scene = getCurrentScene();
  const question = getCurrentQuestion();
  if (!c || !scene || !question) return;

  const totalScenes = c.escenarios.length;
  const sceneNum = State.sceneIndex + 1;
  const qNum = State.questionIndex + 1;
  const totalQ = scene.preguntas.length;

  // Header
  document.getElementById('current-case').textContent = sceneNum;
  document.getElementById('total-cases').textContent = totalScenes;
  document.getElementById('progress-fill').style.width = `${((sceneNum - 1) / totalScenes) * 100}%`;
  document.getElementById('score-value').textContent = State.totalScore;
  const qLabel = document.getElementById('question-progress-label');
  if (qLabel) qLabel.textContent = `Pregunta ${qNum} de ${totalQ}`;

  // Contenido
  const badge = document.getElementById('case-badge');
  if (badge) badge.textContent = c.tema;

  document.getElementById('case-title').textContent = c.titulo;
  const sceneTitle = document.getElementById('scene-title');
  if (sceneTitle) sceneTitle.textContent = scene.titulo;
  document.getElementById('case-description').textContent = scene.narrativa;
  document.getElementById('case-question').textContent = question.pregunta;

  // Ocultar feedback/transición, mostrar opciones
  document.getElementById('feedback-panel')?.classList.add('hidden');
  document.getElementById('transition-panel')?.classList.add('hidden');
  document.getElementById('decision-buttons').style.display = '';

  // Renderizar opciones
  const container = document.getElementById('decision-buttons');
  if (!container) return;
  container.innerHTML = '';

  question.opciones.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-decision';
    btn.innerHTML = `
      <span class="decision-letter">${opt.letra}</span>
      <span class="decision-text">${opt.texto}</span>
    `;
    btn.addEventListener('click', () => onOptionSelected(opt, btn));
    container.appendChild(btn);
  });
}

function onOptionSelected(opt, btnEl) {
  // Deshabilitar todas las opciones
  document.querySelectorAll('.btn-decision').forEach(b => {
    b.disabled = true;
    b.style.opacity = b === btnEl ? '1' : '0.38';
  });
  btnEl.classList.add('selected');
  AudioEngine.playSelect();

  const isCorrect = opt.correcta === true;

  // Acumular score
  State.totalAnswered++; // siempre, correcta o no
  if (isCorrect) {
    State.totalScore += opt.puntos;
    State.scoreBreakdown.empatia += opt.empatia;
    State.scoreBreakdown.asertividad += opt.asertividad;
    State.scoreBreakdown.ie += opt.ie;
    State.scoreBreakdown.cohesion += opt.cohesion;
    State.answeredCount++;
    State.allAnswers.push(opt);
    document.getElementById('score-value').textContent = State.totalScore;
  } else {
    State.totalScore += opt.puntos; // aplica -5
    document.getElementById('score-value').textContent = State.totalScore;
  }

  showFeedback(opt, isCorrect);
}

function showFeedback(opt, isCorrect) {
  document.getElementById('decision-buttons').style.display = 'none';

  const panel = document.getElementById('feedback-panel');
  const iconEl = document.getElementById('feedback-icon');
  const resultEl = document.getElementById('feedback-result');
  const textEl = document.getElementById('feedback-text');
  const retryBtn = document.getElementById('btn-retry');
  const nextBtn = document.getElementById('btn-next-question');

  if (isCorrect) {
    panel.className = 'feedback-panel feedback-correct';
    iconEl.textContent = '✓';
    resultEl.textContent = `+${opt.puntos} puntos`;
    AudioEngine.playChime();
  } else {
    panel.className = 'feedback-panel feedback-incorrect';
    iconEl.textContent = '✗';
    resultEl.textContent = `${opt.puntos} puntos`;
    AudioEngine.playTimerWarn();
  }

  textEl.textContent = opt.feedback;

  // Botones — retry eliminado, solo "Siguiente"
  retryBtn.classList.add('hidden');
  nextBtn.classList.remove('hidden');

  // Cambiar texto del "Siguiente" según contexto
  const scene = getCurrentScene();
  const isLastQ = State.questionIndex >= scene.preguntas.length - 1;
  const isLastScene = State.sceneIndex >= State.caseData.escenarios.length - 1;
  if (isLastQ && isLastScene) {
    nextBtn.textContent = 'Ver Resultados →';
  } else if (isLastQ) {
    nextBtn.textContent = 'Siguiente Escena →';
  } else {
    nextBtn.textContent = 'Siguiente Pregunta →';
  }

  panel.classList.remove('hidden');

  // Listeners (remover previos)
  const newRetry = retryBtn.cloneNode(true);
  const newNext = nextBtn.cloneNode(true);
  retryBtn.parentNode.replaceChild(newRetry, retryBtn);
  nextBtn.parentNode.replaceChild(newNext, nextBtn);

  // Sin retry — una respuesta por pregunta, resultado definitivo

  newNext.addEventListener('click', () => {
    const scn = getCurrentScene();
    const isLast = State.questionIndex >= scn.preguntas.length - 1;

    if (isLast) {
      showTransition();
    } else {
      State.questionIndex++;
      renderCurrentQuestion();
    }
  });
}

function showTransition() {
  const scene = getCurrentScene();
  const isLastScene = State.sceneIndex >= State.caseData.escenarios.length - 1;

  document.getElementById('feedback-panel')?.classList.add('hidden');
  document.getElementById('decision-buttons').style.display = 'none';

  if (isLastScene) {
    stopTimer();
    showResults();
    return;
  }

  const panel = document.getElementById('transition-panel');
  const textEl = document.getElementById('transition-text');
  if (textEl) textEl.textContent = scene.transicion || '...';

  panel.classList.remove('hidden');

  const nextSceneBtn = document.getElementById('btn-next-scene');
  const fresh = nextSceneBtn.cloneNode(true);
  nextSceneBtn.parentNode.replaceChild(fresh, nextSceneBtn);
  fresh.addEventListener('click', () => {
    State.sceneIndex++;
    State.questionIndex = 0;
    panel.classList.add('hidden');
    renderCurrentQuestion();
    AudioEngine.playClick();
  });
}

async function saveAnswer(d) {
  const db = getClient();
  await db.from('respuestas').insert({
    equipo_id: State.teamId,
    pregunta_num: State.caseId,
    decision_letra: d.letra,
    empatia: d.empatia,
    asertividad: d.asertividad,
    ie: d.ie,
    cohesion: d.cohesion,
  });
}

// ============================================================
// TIMER
// ============================================================
function startTimer() {
  updateTimer(State.timeRemaining);
  State.timerInterval = setInterval(() => {
    State.timeRemaining--;
    updateTimer(State.timeRemaining);

    if (State.timeRemaining === 300 && !State.warnPlayed) {
      AudioEngine.playTimerWarn();
      State.warnPlayed = true;
    }
    if (State.timeRemaining === 60 && !State.dangerPlayed) {
      AudioEngine.playTimerDanger();
      State.dangerPlayed = true;
    }
    if (State.timeRemaining <= 0) {
      stopTimer();
      showResults();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(State.timerInterval);
  State.timerInterval = null;
}

function updateTimer(secs) {
  const valEl = document.getElementById('timer-value');
  const displayEl = valEl?.closest('.timer-display');
  if (!valEl) return;

  const m = String(Math.floor(secs / 60)).padStart(2, '0');
  const s = String(secs % 60).padStart(2, '0');
  valEl.textContent = `${m}:${s}`;

  const warn = secs < 300;
  const danger = secs < 60;
  valEl.classList.toggle('timer-warning', warn && !danger);
  valEl.classList.toggle('timer-danger', danger);
  displayEl?.classList.toggle('timer-warning', warn && !danger);
  displayEl?.classList.toggle('timer-danger', danger);
}

// ============================================================
// RESULTADOS (V2 — scores acumulados de todas las respuestas)
// ============================================================
function showResults() {
  showScreen('screen-results');

  // Dividir por TOTAL de preguntas respondidas (correctas + incorrectas)
  // así las dimensiones reflejan el desempeño real: 4/10 correctas → scores bajos
  const n = Math.max(1, State.totalAnswered);
  const totals = {
    empatia:     Math.round(State.scoreBreakdown.empatia / n),
    asertividad: Math.round(State.scoreBreakdown.asertividad / n),
    ie:          Math.round(State.scoreBreakdown.ie / n),
    cohesion:    Math.round(State.scoreBreakdown.cohesion / n),
  };

  // Código de equipo + puntaje total
  const teamEl = document.getElementById('results-team-code');
  if (teamEl) teamEl.textContent = State.teamCode;

  // Mostrar puntaje total si hay elemento
  const totalScoreEl = document.getElementById('results-total-score');
  if (totalScoreEl) totalScoreEl.textContent = State.totalScore;

  // Tarjetas de puntuación
  [
    ['result-empatia',     'bar-value-empatia',     totals.empatia],
    ['result-asertividad', 'bar-value-asertividad',  totals.asertividad],
    ['result-ie',          'bar-value-ie',            totals.ie],
    ['result-cohesion',    'bar-value-cohesion',      totals.cohesion],
  ].forEach(([cardId, barId, val]) => {
    const el = document.getElementById(cardId);
    const bar = document.getElementById(barId);
    if (el) el.textContent = val;
    if (bar) bar.textContent = val;
  });

  // Barras animadas (max 10) + etiqueta de nivel por dimensión
  setTimeout(() => {
    ['empatia', 'asertividad', 'ie', 'cohesion'].forEach(dim => {
      const fill = document.getElementById(`bar-fill-${dim}`);
      if (fill) fill.style.width = `${Math.min(100, (totals[dim] / 10) * 100)}%`;
      // Inyectar etiqueta de nivel debajo de la barra
      const track = fill?.parentElement;
      if (track) {
        const lbl = getDimLabel(totals[dim]);
        let tag = track.nextElementSibling;
        if (!tag || !tag.classList.contains('dim-level-tag')) {
          tag = document.createElement('div');
          tag.className = 'dim-level-tag';
          track.after(tag);
        }
        tag.textContent = lbl.text;
        tag.style.color = lbl.color;
        tag.style.fontSize = '0.72rem';
        tag.style.fontWeight = '600';
        tag.style.marginTop = '4px';
        tag.style.letterSpacing = '0.04em';
        tag.style.textTransform = 'uppercase';
      }
    });
  }, 350);

  // Sonido de revelación
  setTimeout(() => AudioEngine.playReveal(), 450);

  // Gráfico radar
  setTimeout(() => renderRadar(totals), 700);

  // Perfil de liderazgo — pasar totalScore para rúbrica
  setTimeout(() => revealProfile(totals, State.totalScore), 1300);

  // Guardar en Supabase
  if (State.allAnswers.length > 0) {
    State.allAnswers.forEach(a => saveAnswer(a).catch(() => {}));
  }
  saveResults(totals).catch(() => {});
}

// ============================================================
// RADAR CHART (Chart.js)
// ============================================================
function renderRadar(totals) {
  const canvas = document.getElementById('radar-chart');
  if (!canvas || typeof Chart === 'undefined') return;

  if (State.radarChart) { State.radarChart.destroy(); }

  State.radarChart = new Chart(canvas, {
    type: 'radar',
    data: {
      labels: ['Empatía', 'Asertividad', 'I.E.', 'Cohesión'],
      datasets: [{
        label: State.teamCode || 'Equipo',
        data: [totals.empatia, totals.asertividad, totals.ie, totals.cohesion],
        backgroundColor: 'rgba(245,127,23,0.12)',
        borderColor: '#f57f17',
        borderWidth: 2.5,
        pointBackgroundColor: '#f57f17',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 8,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: { duration: 900, easing: 'easeOutQuart' },
      plugins: { legend: { display: false } },
      scales: {
        r: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 2,
            color: 'rgba(255,255,255,0.25)',
            font: { size: 9 },
            backdropColor: 'transparent',
          },
          grid: { color: 'rgba(255,255,255,0.07)' },
          angleLines: { color: 'rgba(255,255,255,0.07)' },
          pointLabels: {
            color: 'rgba(255,255,255,0.65)',
            font: { size: 11, family: "'Inter', sans-serif", weight: '500' },
          },
        },
      },
    },
  });
}

// ============================================================
// PERFIL REVEAL — Rúbrica científica por puntaje + dimensión
// ============================================================
function revealProfile(totals, totalScore) {
  const perfil = calcularPerfil(totals, totalScore);

  let el = document.getElementById('profile-reveal');
  if (!el) {
    el = document.createElement('div');
    el.id = 'profile-reveal';
    el.className = 'profile-reveal';
    const barCard = document.querySelector('#screen-results .bar-chart')?.closest('.card');
    if (barCard) barCard.parentNode.insertBefore(el, barCard);
    else document.querySelector('.results-container')?.appendChild(el);
  }

  el.style.background = `linear-gradient(135deg, ${perfil.color}18 0%, rgba(10,14,26,0.9) 100%)`;
  el.style.borderColor = `${perfil.color}55`;

  // Generar los 5 niveles visuales
  const nivelesHTML = [1,2,3,4,5].map(n => {
    const names = ['Reactivo','En Construcción','Funcional','Efectivo','Alto Impacto'];
    const colors = ['#ef5350','#ff9800','#ffd740','#66bb6a','#26c6da'];
    const active = n === perfil.nivel;
    return `<div style="
      flex:1; height:6px; border-radius:3px;
      background:${active ? colors[n-1] : 'rgba(255,255,255,0.1)'};
      transition: all 0.4s;
    " title="${names[n-1]}"></div>`;
  }).join('');

  el.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
      <span style="font-size:2rem">${perfil.emoji}</span>
      <div>
        <div style="font-size:0.7rem;color:rgba(255,255,255,0.45);text-transform:uppercase;letter-spacing:0.08em">Nivel de Liderazgo Emocional</div>
        <div style="font-size:1.4rem;font-weight:700;color:${perfil.color};font-family:var(--font-heading)">${perfil.nombre}</div>
      </div>
    </div>
    <div style="display:flex;gap:4px;margin-bottom:14px">${nivelesHTML}</div>
    <p style="font-size:0.85rem;color:rgba(255,255,255,0.78);line-height:1.6;margin-bottom:12px">${perfil.resumen}</p>
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:12px;margin-bottom:10px">
      <div style="font-size:0.72rem;color:${perfil.color};text-transform:uppercase;letter-spacing:0.07em;font-weight:600;margin-bottom:6px">Dimensión predominante · ${perfil.dominante}</div>
      <p style="font-size:0.82rem;color:rgba(255,255,255,0.65);line-height:1.55;margin:0">${perfil.descripcionDim}</p>
    </div>
    <div style="font-size:0.75rem;color:rgba(255,255,255,0.4);margin-top:6px;margin-bottom:16px">
      Mayor oportunidad de desarrollo: <span style="color:#ff9800;font-weight:600">${perfil.debil} (${perfil.debilVal}/10)</span>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,0.07);padding-top:14px">
      <div style="font-size:0.72rem;color:rgba(255,255,255,0.5);text-transform:uppercase;letter-spacing:0.07em;font-weight:600;margin-bottom:12px">Recomendaciones de desarrollo</div>
      ${perfil.recomendaciones.map((r, i) => `
        <div style="margin-bottom:14px;padding:12px;background:rgba(255,255,255,0.03);border-radius:8px;border-left:3px solid ${perfil.color}">
          <div style="font-size:0.78rem;font-weight:700;color:${perfil.color};margin-bottom:5px">${i+1}. ${r.titulo}</div>
          <p style="font-size:0.78rem;color:rgba(255,255,255,0.72);line-height:1.55;margin:0 0 6px 0">${r.accion}</p>
          <div style="font-size:0.7rem;color:rgba(255,255,255,0.35);font-style:italic;line-height:1.4">${r.ciencia}</div>
        </div>
      `).join('')}
    </div>
  `;
  el.classList.remove('hidden');
}

async function saveResults(totals) {
  const db = getClient();
  const perfil = calcularPerfil(totals, State.totalScore);
  await db.from('resultados').insert({
    equipo_id: State.teamId,
    empatia_total: totals.empatia,
    asertividad_total: totals.asertividad,
    ie_total: totals.ie,
    cohesion_total: totals.cohesion,
    perfil_predominante: perfil.nombre,
  });
}

// ============================================================
// EXPORT CSV
// ============================================================
function exportCSV() {
  const tbody = document.getElementById('facilitator-table-body');
  if (!tbody) return;

  const lines = ['Equipo,Empatía,Asertividad,I.E.,Cohesión,Perfil,Estado'];
  tbody.querySelectorAll('tr').forEach(row => {
    const cells = row.querySelectorAll('td');
    if (cells.length >= 6) {
      lines.push(Array.from(cells).map(c => `"${c.textContent.trim()}"`).join(','));
    }
  });

  const blob = new Blob([lines.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), {
    href: url,
    download: `assessment-${new Date().toISOString().slice(0,10)}.csv`,
  });
  a.click();
  URL.revokeObjectURL(url);
}

// ============================================================
// QR CODES
// ============================================================
function loadQRCodes() {
  if (typeof QRCode !== 'undefined') {
    generateAllQRCodes(window.location.origin);
    return;
  }
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/qrcode@1.5.3/build/qrcode.min.js';
  script.onload = () => generateAllQRCodes(window.location.origin);
  document.head.appendChild(script);
}

// ============================================================
// FACILITADOR
// ============================================================
function initFacilitator() {
  loadFacilitatorData();
  clearInterval(window._facInterval);
  window._facInterval = setInterval(loadFacilitatorData, 5000);
}

async function loadFacilitatorData() {
  const tbody = document.getElementById('facilitator-table-body');
  if (!tbody) return;

  try {
    const db = getClient();
    const [{ data: equipos }, { data: respuestas }, { data: resultados }] = await Promise.all([
      db.from('equipos').select('*'),
      db.from('respuestas').select('*'),
      db.from('resultados').select('*'),
    ]);

    if (!equipos?.length) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:2rem;color:#546e7a">Esperando equipos...</td></tr>';
      return;
    }

    tbody.innerHTML = '';
    equipos.forEach(eq => {
      const resps = (respuestas || []).filter(r => r.equipo_id === eq.id);
      const result = (resultados || []).find(r => r.equipo_id === eq.id);
      const done = resps.length > 0;
      const sum = key => resps.reduce((s, r) => s + (r[key] || 0), 0);

      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${eq.codigo}</strong></td>
        <td style="color:#e91e63;font-weight:600">${done ? sum('empatia') : '—'}</td>
        <td style="color:#f57f17;font-weight:600">${done ? sum('asertividad') : '—'}</td>
        <td style="color:#00bcd4;font-weight:600">${done ? sum('ie') : '—'}</td>
        <td style="color:#4caf50;font-weight:600">${done ? sum('cohesion') : '—'}</td>
        <td style="font-size:0.8rem;color:#b0bec5">${result?.perfil_predominante || '—'}</td>
        <td><span class="status-badge ${done ? 'status-completed' : 'status-pending'}">${done ? 'Completado' : 'Pendiente'}</span></td>
      `;
      tbody.appendChild(tr);
    });
  } catch (_) {
    tbody.innerHTML = '<tr><td colspan="7" class="text-center" style="padding:2rem;color:#546e7a">Modo demo — configura Supabase para datos en vivo</td></tr>';
  }
}
