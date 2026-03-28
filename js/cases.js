/**
 * Assessment Center - Liderazgo Emocional
 * 6 Case Studies — Complete content from Wayne's spec
 */

const CASOS = [
  {
    id: 1,
    titulo: "El Día que Dos Titanes se Rompieron",
    tema: "Conflicto entre empleados clave",
    contexto: `Bancolombia acaba de anunciar que evaluará propuestas de tres firmas consultoras para un contrato de transformación digital por $4.200 millones de pesos. Tu empresa lleva 18 meses preparándose para este momento. La presentación es en 72 horas.

Tienes dos estrellas en tu equipo: Valentina Ríos, directora de estrategia, perfeccionista, brillante, con 11 años en la empresa. Y Sebastián Morales, director de innovación, carismático, visionario, quien acaba de unirse hace 8 meses. Esta mañana, Valentina llegó a tu oficina con los ojos rojos. De rabia.

"O él sale de la presentación, o salgo yo."`,
    crisis: "Son las 10:47 AM. La presentación es el viernes. Tu jefe acaba de escribirte: 'Confío en ti.' El equipo está paralizado. Nadie trabaja. ¿Qué haces en los próximos 30 minutos?",
    decisiones: [
      { letra: "A", texto: "Divide y reina — separas sus roles, cada uno presenta su parte, el conflicto se resuelve después del viernes.", empatia: 6, asertividad: 7, ie: 7, cohesion: 5 },
      { letra: "B", texto: "La verdad incómoda — los reúnes, cierras la puerta, y les das 20 minutos para decirse todo. Tú estás ahí.", empatia: 8, asertividad: 9, ie: 9, cohesion: 8 },
      { letra: "C", texto: "El sacrificio estratégico — Valentina lidera, Sebastián queda como soporte. Priorizas estabilidad sobre innovación.", empatia: 5, asertividad: 8, ie: 6, cohesion: 4 },
      { letra: "D", texto: "Escala el problema — llamas a tu jefe, presentas la situación, pides una decisión de nivel superior.", empatia: 4, asertividad: 3, ie: 4, cohesion: 3 }
    ]
  },
  {
    id: 2,
    titulo: "Cuando el Trabajo Llega Roto desde Casa",
    tema: "Empleado con crisis personal",
    contexto: `Carlos Mendoza lleva 9 años en tu empresa. Es el analista más confiable que tienes — el que siempre llega primero, el que contesta a las 11 PM. El año pasado ganó el premio al empleado más valioso.

Hace seis semanas llegó con ojeras que no eran normales. Empezó a cometer errores. La semana pasada, un error suyo le costó al equipo reprocesar 3 días de trabajo. Esta mañana, su compañera más cercana te contó en voz baja: Carlos está pasando por un divorcio devastador. Los fines de semana los pasa solo en un apartamento vacío. El viernes, en el baño, lo escuchaste llorando en silencio.`,
    crisis: "Hoy a las 3:00 PM tienes la revisión de desempeño con tu directora. Carlos tiene el peor indicador del mes — por primera vez en 9 años su nombre está en rojo. Son las 2:15 PM. Carlos está en su escritorio mirando la pantalla sin parpadear. ¿Cómo manejas esto?",
    decisiones: [
      { letra: "A", texto: "El escudo — hablas con Carlos, le ofreces trabajo desde casa y ajustas temporalmente sus métricas como 'en revisión'. Compras tiempo.", empatia: 9, asertividad: 5, ie: 7, cohesion: 6 },
      { letra: "B", texto: "Transparencia radical — en la reunión presentas los números tal como están, pero añades contexto humano y propones 30 días de acompañamiento.", empatia: 8, asertividad: 9, ie: 9, cohesion: 7 },
      { letra: "C", texto: "El protocolo — llamas a Carlos a retroalimentación formal, documentas los errores, estableces un Plan de Mejora. El proceso es el proceso.", empatia: 4, asertividad: 8, ie: 5, cohesion: 4 },
      { letra: "D", texto: "El equipo decide — reúnes al equipo sin Carlos, les dices la verdad y les preguntas si están dispuestos a seguir absorbiendo su carga.", empatia: 7, asertividad: 6, ie: 8, cohesion: 9 }
    ]
  },
  {
    id: 3,
    titulo: "El Trimestre que Nadie Olvidará",
    tema: "Presión de resultados vs bienestar del equipo",
    contexto: `El Q3 fue el peor trimestre en cinco años: -23% frente a la meta. La Junta Directiva pidió explicaciones. Tu vicepresidente llegó a la reunión con una sola frase: "El Q4 no es opcional. Es existencial."

Tu equipo de 14 personas lleva 6 meses dando todo. Dos cancelaron vacaciones. Una volvió antes de tiempo después de tener un bebé. El más joven, Andrés, te preguntó hace tres semanas si era normal sentirse constantemente agotado. Tú le dijiste: "Ya pasa." No pasó.

Ahora llegas de esa reunión a las 6:30 PM. El equipo todavía está en la oficina. Alguien compró papas fritas. Nadie las está comiendo.`,
    crisis: "Son las 7:00 PM. Tu equipo está frente a ti. Tienes que decirles la verdad sobre el Q4. Camila, tu analista estrella, está mirando su celular — probablemente buscando ofertas de trabajo. Roberto, el más veterano, te mira directo a los ojos: 'Dime la verdad.' ¿Cómo abres esta conversación?",
    decisiones: [
      { letra: "A", texto: "La verdad sin anestesia — les dices exactamente lo que pasó, las cifras, las palabras del VP. 'Va a ser duro. Pero prefiero que lo sepan hoy.'", empatia: 7, asertividad: 8, ie: 7, cohesion: 7 },
      { letra: "B", texto: "El filtro protector — suavizas la información. Dices que fue una reunión normal, que las metas son retadoras pero alcanzables. Los proteges... por ahora.", empatia: 5, asertividad: 3, ie: 4, cohesion: 4 },
      { letra: "C", texto: "El pacto — antes de hablar de metas, preguntas: '¿Cómo están?' Dejas que hablen 15 minutos. Escuchas todo. Después, hablas de lo que viene.", empatia: 10, asertividad: 6, ie: 9, cohesion: 9 },
      { letra: "D", texto: "El contrato nuevo — dices la verdad del Q4 pero añades: 'Voy a negociar para ustedes: día remoto fijo, budget de bienestar, yo absorbo la presión directa. ¿Están conmigo?'", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 }
    ]
  },
  {
    id: 4,
    titulo: "Heredé un Velorio",
    tema: "Líder nuevo con equipo disfuncional",
    contexto: `Te acaban de nombrar Director de Operaciones de la Regional Pacífico. Tu antecesor, Germán Suárez, fue desvinculado después de una investigación por favoritismo y mal manejo del clima. Lleva 15 años en la empresa.

Tu primer día encuentras flores marchitas en tu escritorio — el de Germán. Nadie las ha quitado. En tres días descubres dos facciones: los que eran del equipo de Germán (lo defienden, llevan el duelo) y los que lo denunciar on (se sienten vulnerables, no confían en nadie). En el medio, cinco personas agotadas que solo quieren trabajar.

Tu jefe te llama: "Necesito resultados en 60 días. Y necesito que ese equipo funcione."`,
    crisis: "Es tu quinta reunión. Nadie ha mencionado a Germán. Pero hoy, en mitad de la reunión, Paola mira a Hernán y dice en voz alta: 'Hay gente aquí que todavía no entiende por qué se fue Germán. Mientras eso no cambie, no vamos a ningún lado.' Hernán se levanta. No dice nada. El equipo te mira a ti. ¿Qué haces en este momento exacto?",
    decisiones: [
      { letra: "A", texto: "Nombra el elefante — 'Llevan semanas evitando esta conversación. La vamos a tener ahora. ¿Qué necesita cada uno para poder seguir adelante?'", empatia: 9, asertividad: 8, ie: 10, cohesion: 9 },
      { letra: "B", texto: "Línea en la arena — 'Respeto la historia. Pero desde hoy, en este espacio, no se habla de Germán. El que no pueda hacer eso, necesita decírmelo ahora.'", empatia: 5, asertividad: 10, ie: 6, cohesion: 5 },
      { letra: "C", texto: "Conversaciones individuales — detienes la reunión y propones hablar con cada uno esta semana, en privado, con la puerta cerrada.", empatia: 8, asertividad: 6, ie: 8, cohesion: 6 },
      { letra: "D", texto: "Traes un tercero — le pides a RR.HH. que facilite una sesión de team building sobre duelo organizacional. Tú participas como miembro, no como líder.", empatia: 7, asertividad: 5, ie: 7, cohesion: 7 }
    ]
  },
  {
    id: 5,
    titulo: "El Ascenso que Parte el Alma",
    tema: "Decisión que afecta a una persona pero beneficia al equipo",
    contexto: `Hay una sola posición de Coordinador Senior. Dos personas la merecen.

Lucía Vargas, 34 años, 7 años en la empresa. Técnicamente impecable, leal, querida por todos. Este ascenso significa +35% en su salario. Su esposo perdió el trabajo hace tres meses. Están al límite.

Felipe Arango, 29 años, 3 años en la empresa. Sus resultados son 20% superiores a Lucía en el último año. Tiene hambre, talento. Y tres empresas que ya le hacen propuestas.

RR.HH. dice: por desempeño, Felipe tiene el mejor puntaje. Tu instinto dice: Lucía lo necesita más. Tu cabeza dice: Felipe se va si no lo asciendes.

Decidiste: Felipe obtiene el cargo.`,
    crisis: "Ahora tienes que decírselo a Lucía. Son las 4:30 PM. Entra a tu oficina sonriendo — viene pensando que la noticia es buena. Cuando le dices que no fue ella, la sonrisa desaparece en cámara lenta. No llora. No dice nada por 6 segundos. Luego pregunta con una voz que no reconoces: '¿Por qué?' ¿Qué le dices?",
    decisiones: [
      { letra: "A", texto: "La verdad completa — le explicas el proceso de evaluación, las métricas de Felipe, reconoces su trayectoria. Honesto, sin suavizar.", empatia: 7, asertividad: 9, ie: 7, cohesion: 6 },
      { letra: "B", texto: "El plan B inmediato — antes de que el silencio se instale: 'No fue esta vez. Pero hay una posición en Q2 y quiero que seas tú la candidata. Hoy empezamos ese plan.'", empatia: 6, asertividad: 8, ie: 7, cohesion: 7 },
      { letra: "C", texto: "El reconocimiento sin consuelo — 'Tú eras la persona que yo quería en ese cargo. La decisión técnica fue otra. Eso no cambia lo que pienso de ti.'", empatia: 9, asertividad: 7, ie: 9, cohesion: 8 },
      { letra: "D", texto: "La pregunta antes de la respuesta — antes de explicar nada: '¿Cómo estás en este momento?' La escuchas. Solo después, le das el contexto.", empatia: 10, asertividad: 6, ie: 10, cohesion: 7 }
    ]
  },
  {
    id: 6,
    titulo: "El Rumor que lo Quemó Todo",
    tema: "Crisis reputacional interna",
    contexto: `Lunes por la mañana. Tu equipo llegó diferente. Notas los saludos cortos, los grupos que se deshacen cuando alguien se acerca, las pantallas que se minimizan.

A las 10:00 AM tu asistente te muestra una captura de WhatsApp. El grupo se llama "Team Real 🔥". Tienen 14 de tus 16 personas. El mensaje dice: "¿Ya saben que Marcela y el jefe tienen algo? Por eso ella siempre sale bien en las evaluaciones."

Marcela es tu analista de mayor confianza, 4 años trabajando contigo. Sí han salido a tomar café — conversaciones de trabajo. Nada más. Pero ahora eso no importa. Lo que importa es lo que la gente cree.

Marcela ya sabe del rumor. Alguien se lo mandó. Lleva dos horas en su escritorio sin decir una palabra.`,
    crisis: "Son las 11:30 AM. Tienes cuatro conversaciones pendientes: con Marcela, con el equipo, con Jorge (quien inició el rumor, junior con historial de conflictos), y posiblemente con RR.HH. No puedes hablar con todos al mismo tiempo. El orden y la manera definen cómo termina esto. ¿Cuál es tu primer movimiento?",
    decisiones: [
      { letra: "A", texto: "Primero, el epicentro — vas con Marcela, cierras la puerta: 'Sé lo que está pasando. Quiero saber cómo estás antes de hacer cualquier otra cosa.'", empatia: 10, asertividad: 7, ie: 9, cohesion: 8 },
      { letra: "B", texto: "Corta la hemorragia — reúnes al equipo: 'El rumor es falso. No permitiré que un WhatsApp destruya la reputación de alguien que ha trabajado con honestidad 4 años.'", empatia: 6, asertividad: 10, ie: 7, cohesion: 6 },
      { letra: "C", texto: "El origen del fuego — hablas primero con Jorge, con calma: 'Necesito entender qué te llevó a esto. No como disciplina todavía — como conversación.'", empatia: 8, asertividad: 7, ie: 9, cohesion: 7 },
      { letra: "D", texto: "Protocolo institucional — llamas a RR.HH., presentas la captura, documentas, preguntas cómo proceder según política de empresa.", empatia: 4, asertividad: 5, ie: 5, cohesion: 3 }
    ]
  }
];
