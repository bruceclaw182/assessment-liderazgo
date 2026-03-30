// -*- coding: utf-8 -*-
/**
 * Assessment Center v2 — Liderazgo Emocional
 * 6 Casos con arquitectura narrativa de 5 capas
 * Actualizado: 2026-03-30 — Posiciones redistribuidas (A=14,B=15,C=15,D=16) + distractores expandidos
 */

const CASOS = [
  {
    id: 1,
    titulo: "El Día que Dos Titanes se Rompieron",
    tema: "Conflicto entre empleados clave",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: La Junta que Cambió Todo",
          narrativa: `La sala de juntas de FertiColombia brillaba con la luz de las 7:45 a.m. — ese instante frágil donde la mañana todavía no ha decidido si será productiva o desastrosa. Roberto Méndez, director de Operaciones, se sentó al frente de la mesa con la autoridad de quien lleva veintidós años calibrando reactores y sobreviviendo crisis. A su derecha, Marcela Vásquez, gerente de Comercio Exterior, acomodaba sus lentes con la precisión de alguien que ha negociado embarques de urea con Corea del Norte y nunca ha perdido un contenedor.

El motivo de la reunión era, en apariencia, simple: una auditoría conjunta de seguridad y logística para el nuevo contrato con una empresa minera del Valle del Cauca. Pero lo que nadie había anticipado era que los dos pilares sobre los que sostenía esa coordinación — Roberto y Marcela — no se habían dirigido la palabra en seis semanas. No desde aquella noche en la planta de Barrancabermeja cuando, durante la emergencia por sobrepresión del tanque T-407, cada uno publicó reportes internos culándose mutuamente ante la gerencia general.

Valentina, la nueva directora de Recursos Humanos que llevaba apenas tres meses, observaba desde el extremo de la mesa. Había leído ambos informes. Sabía que detrás de las palabras técnicas había heridas de orgullo: Marcela sentía que Roberto había minimizado su logística en campo para adjudicarse el mérito del containment. Roberto creía que Marcela había inflado los tiempos de retraso para justificar su presupuesto.

La tensión se podía oler. Oler a café quemado y a orgullo herido.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "En la primera reunión con Roberto y Marcela, Valentina debe romper el hielo. ¿Cuál es la mejor estrategia inicial?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Comenzar la reunión con los datos duros de la auditoría, evitando cualquier referencia a conflictos pasados, y dejar que los números hablen solos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los datos sin contexto emocional son como hablar chemistry en japonés: técnicamente correcto, absolutamente inútil. Roberto y Marcela necesitan primero sentirse escuchados, no enfrentados a tablas.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Reconocer abiertamente que existe tensión entre ambas gerencias y proponer un acuerdo de trabajo basado en metas conjuntas y revisiones semanales.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Nombrar el conflicto sin adjudicar culpas crea un espacio seguro. Al proponer metas conjuntas, transformas competidores en compañeros de equipo. Es liderazgo de empatía con estructura.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "Pedir a la gerencia general que designe un mediador externo para resolver la situación antes de continuar con cualquier proyecto conjunto.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Escalar antes de intentar resolver envía un mensaje de debilidad e incapacidad. Además, implica que el conflicto es demasiado grande, lo cual lo agranda ante los ojos de ambos.",
                                empatia: 4, asertividad: 2, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Separar las reuniones: hablar primero individualmente con cada uno para entender su versión antes de reunirlos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque parece prudente, las reuniones individuales pueden profundizar el resentimiento si cada uno siente que está siendo 'vendido' a la versión del otro. Y además retrasa el proyecto.",
                                empatia: 5, asertividad: 6, ie: 5, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Durante la primera sesión conjunta, Marcela interrumpe a Roberto y hace un comentario desdeñoso sobre su reporte de la emergencia. ¿Cómo debe responder Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Detener la reunión inmediatamente, señalar que no tolerará disrespecto, y reprogramar para otro día cuando ambos estén 'en condiciones'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Parar la reunión envía un mensaje de que la tensión gana. Además, 'en condiciones' es vago y deja el problema flotando sin abordarlo. Es evitación disfrazada de autoridad.",
                                empatia: 2, asertividad: 4, ie: 2, cohesion: 1
                              },
                              {
                                letra: "B",
                                texto: "Hacer una pausa de cinco minutos, acercarse a Marcela en privado y recordarle que el objetivo de hoy es construir, no ganar.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La pausa en privado sin abordar el comportamiento frente al grupo normaliza la falta de respeto. Roberto presencia que Marcela recibe atención especial, lo que refuerza su posición de víctima.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Intervenir en el momento con calma, reconocer el punto válido de Marcela, pero señalar que los comentarios personales no son productivos, y retomar el foco en los hechos.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Intervenir en tiempo real valida a Marcela sin sancionarla, refocus al grupo en contenido (hechos), y establece la norma de respeto sin humillar. Modelo clásico de liderazgo asertivo.",
                                empatia: 7, asertividad: 9, ie: 7, cohesion: 8
                              },
                              {
                                letra: "D",
                                texto: "Dejar que Roberto responda por sí mismo, ya que es un adulto y un ejecutivo senior. No corresponde a RRHH intervenir en la dinámica entre pares.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Como facilitadora de la reunión, tu trabajo es proteger el proceso. Dejar que la escalada ocurra sin guía es negligencia. Roberto puede defenderse, pero la reunión ya se habrá contaminado.",
                                empatia: 3, asertividad: 2, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Tras la intervención de Valentina, la reunión continúa con un tono más frío pero funcional. Al finalizar, Roberto y Marcela firman un acuerdo de trabajo. Pero ese mismo viernes, Marcela llega a la oficina con una carpeta llena de quejas formales sobre el protocolo de seguridad de campo de Roberto."
        },
        {
          id: 2,
          titulo: "Escena 2: Los Documentos que Desmoronaron TODO",
          narrativa: `El sonido de la fotocopiadora era el único ruido en el piso doce a las 8:30 p.m. Marcela había esperado a que la oficina se vaciara. No por sigilo — por dignidad herida. La carpeta que sostenía contenía diecisiete puntos de auditoría que, según ella, demostraban negligencia en los protocolos de seguridad de la planta de Fertilizantes del Meta durante el tercer trimestre. Cada punto estaba referenciado con extractos del sistema SAP, con la meticulosidad de alguien que ha convertido la venganza en un proyecto de oficina.

Lo que Marcela no sabía era que, a cuatrocientos kilómetros, en una sala de control de Barrancabermeja, Roberto había recibido una llamada de Sebastián, el supervisor de planta. Sebastián — técnico de campo con quince años de experiencia y cero tolerancia para la política — le había contado que Marcela había estado contactando directamente a operarios de mantenimiento, preguntando por 'incidentes' y 'casi-accidentes' fuera de cadena de mando. Eso era, en el lenguaje de la industria, una violación al protocolo de seguridad. Y Roberto lo sabía.

A las 9:15 p.m., Roberto escribió un correo a la VP de Operaciones, Lucía Aldana. Asunto: 'Cuestiones éticas en auditoría paralela'. Copia a legales. En el cuerpo del mensaje, pidió una investigación formal sobre la metodología de Marcela. Sin insultos. Sin drama. Solo datos, fechas y protocolo.

A las 9:47 p.m., Marcela leyó ese correo en su pantalla y sintió que el suelo se abría bajo sus pies. No era una auditoría. Era una declaración de guerra.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Al día siguiente, Lucía Aldana (VP de Operaciones) recibe ambos correos y llama a Valentina a su oficina. ¿Qué debería proponer Valentina en ese momento?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Recomendar a Lucía que desestime ambos correos como 'ruido organizacional' y que directamente no dé curso a ninguna investigación hasta que ella haya mediado un encuentro cara a cara.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Desestimar correos formales con implicaciones éticas es jugar con fuego. Si algo sale mal después, RRHH será culpada por no actuar. Además, 'ruido organizacional' minimiza la gravedad percibida.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Recomendar que se le pida la renuncia a Marcela por usar recursos de la empresa para ataques personales contra un compañero de dirección.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Antes de investigar, condenar es injusticia. Marcela tiene derecho a presentar sus hallazgos. Además, sin evidencia de mala fe probada, una salida así genera litigio y mala publicidad interna.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 1
                              },
                              {
                                letra: "C",
                                texto: "Sugerir que se cite a ambas partes a una reunión 'de confrontación' donde cada uno presente sus argumentos y Lucía decida quién tiene razón.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Una confrontación sin preparación previa es terreno fértil para la desescalada emocional. En un ambiente de alta tensión jerárquica, este formato humilla a ambos y no garantiza resolución.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Proponer una auditoría formal e independiente que acredite o desmienta las acusaciones de ambos lados, con resultados en máximo 10 días hábiles.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La auditoría independiente neutraliza el juego de poder sin tomar partido. Fija reglas claras, tiempos definidos, y demuestra que la organización actúa con rigor, no con emoción.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 9
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Mientras se espera el resultado de la auditoría, un técnico junior de mantenimiento, Andrés, le dice a Valentina que durante la recopilación de datos de Marcela, él se sintió 'presionado a inventar problemas' del turno de Roberto. ¿Qué hace Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Escuchar a Andrés con atención, agradecer su valentía, explicarle los canales confidenciales, y asegurarle que no habrá represalias. Luego documentar internamente sin actuar hasta tener más contexto.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Proteger al informante es sagrado. Al no actuar inmediatamente pero sí documentar, Valentina preserva la integridad del proceso y protege a alguien vulnerable. Escucha sin juicio más protección más calma.",
                                empatia: 9, asertividad: 7, ie: 9, cohesion: 8
                              },
                              {
                                letra: "B",
                                texto: "Tomar declaración jurada a Andrés, documentar todo, y agregarlo al expediente de Marcela como evidencia de conducta antiética.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Usar el testimonio de un junior sin corroborar como arma contra una directiva es un abuso de poder. Además, presionar a un junior para que 'acuse' ya es problemático de por sí.",
                                empatia: 2, asertividad: 4, ie: 2, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Ignorar el comentario de Andrés ya que viene de un técnico junior que probablemente misunderstande la dinámica y no tiene suficiente perspectiva.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Descartar información por la jerarquía de quien la ofrece es exactamente lo que crea culturas tóxicas. Andrés estaba en campo. Su perspectiva es relevante precisamente porque está en la operación.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 1
                              },
                              {
                                letra: "D",
                                texto: "Reportar inmediatamente a Lucía que hay evidencia de presión indebida y pedir que se pause todo hasta que legal aclare el panorama.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Escalar sin verificar con el informante es exponerlo innecesariamente. Si la información se filtra, Andrés queda vulnerable. Legal puede ser el destino final, pero no el primer paso.",
                                empatia: 4, asertividad: 4, ie: 3, cohesion: 3
                              }
                  ]
                }
          ],
          transicion: "La auditoría independiente concluye en ocho días. Sus resultados son parciales y dolorosos: ni Roberto ni Marcela salieron limpios. El sistema de seguridad tenía fallas reales — ni tan graves como Marcela pintaba, ni tan manejables como Roberto admitía. Pero el informe también encontró que el tono de la auditoría paralela de Marcela había sido, en sus palabras, 'inadecuado'. Lucía pide a ambas partes que se sienten a resolver."
        },
        {
          id: 3,
          titulo: "Escena 3: La Mediación que Nadie Creyó Posible",
          narrativa: `La sala de reuniones pequeña — la que usan para negociaciones breves y despidos, nunca para reconciliaciones — olía a desinfectante y a promesas no dichas. Valentina había pasado dos horas preparando el espacio: sillas en ángulo de 90 grados, agua sin gas, un bowl con monedas de cambio (un detalle psicológico que había leído en un paper sobre negociación). Ningún diploma en la pared. Ningún reloj marcando el tiempo.

Roberto llegó primero. Con traje gris, expresión de concreto, y una carpeta delgada que, Valentina intuía, no contenía nada nuevo — solo la armadura de quien no sabe cómo llegar vulnerable.

Marcela llegó después. Con los mismos lentes de siempre, pero sin la sonrisa quirúrgica. Algo se había quebrado en ella durante esos ocho días. No la habían despedido, pero tampoco la habían cleanado. Sabía que su reputación dentro de la empresa — en un sector donde todos se conocen y los rumores viajan más rápido que el gasoducto — había quedado tocada.

Lucía Aldana no estaría presente. Eso había sido condición de Valentina: 'Si la VP asiste, esto se convierte en un juicio. Si no asiste, puede ser una conversación.'

Lo que siguió fue una hora que ninguno de los dos olvidaría. No por lo que se dijo, sino por lo que se derrumbó.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "En la mediación, Roberto empieza con un discurso técnico sobre por qué los protocolos de Marcela estaban mal diseñados desde el inicio. ¿Cómo redirige Valentina la conversación?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Permitir que Roberto termine su exposición completa antes de intervenir, porque interrumpir sería deslegitimar su voz y él necesita sentirse oído.",
                                correcta: false,
                                puntos: -5,
                                feedback: "En una mediación de alta tensión, un monólogo técnico de 15 minutos no разрешает, consagra. Marcela se apagará emocionalmente y el espacio se polarizará aún más. Hay que intervenir antes del daño.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Hacer una pausa y preguntar a Roberto: 'Entiendo los datos. Pero, ¿qué fue lo que sintió cuando leyó el correo de Marcela a la gerencia?' — llevar la conversación al nivel emocional antes de volver a los hechos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Saltar de técnica a emocional sin transición puede sentirse como una emboscada. Roberto no ha cedido su armadura aún. Preguntar por emociones en este momento puede cerrar aún más la conversación.",
                                empatia: 5, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Reconocer el punto técnico de Roberto con un gesto, y luego preguntar directamente: 'Roberto, ¿qué necesita para sentir que esta situación se puede cerrar?' — mudar el foco de pasado a futuro.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esta pregunta es una obra de arte de mediación: valida su inteligencia (reconoce el punto), pero muda la energía hacia adelante. Le da agency sobre la resolución. Reduce defensividad.",
                                empatia: 8, asertividad: 9, ie: 8, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Interrumpir con firmeza y recordarle que esta reunión no es sobre quién tiene la razón técnica, sino sobre cómo recuperar la capacidad de trabajar juntos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Interrumpir con 'tienes razón técnica pero no importa' es desvalidar su expertise frente a alguien que ha construido su identidad alrededor de ella. Roberto se sentirá atacado, no guiado.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Marcela, al escuchar la pregunta de Valentina a Roberto, rompe en lágrimas y dice: 'Yo solo quería que la planta fuera segura. Nadie me escucha cuando soy técnica, solo cuando soy agresiva.' ¿Cómo responde Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Tomar la palabra y decirle a Roberto: '¿Ves lo que pasa cuando convertimos las diferencias en batallas? Esto le pasa a la gente.' — usar el momento para hacer un punto educativo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Usar las lágrimas de Marcela como 'momento Lehr' para Roberto es instrumentalizarla. La convierte en ejemplo, no en persona. Y Roberto se puto más defensivo, no más empático.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Ofrecer un pañuelo, hacer una pausa, y preguntar a Marcela: '¿Hay algo más que necesites decir antes de continuar?' — darle el espacio sin presionarla.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Las lágrimas son una grieta en la armadura. Ese pañuelo y esa pausa dicen más que cualquier palabra. Darle el turno le devuelve el poder. Es liderazgo de inteligencia emocional en tiempo real.",
                                empatia: 10, asertividad: 7, ie: 10, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Decirle que se tranquilice porque 'los acuerdos no se firman con lágrimas' y que pueden retomar cuando esté en condiciones.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esta frase es el manual de cómo destruir la confianza en una mediación. Descalifica la emoción como irrelevante, y la señal que envía a Roberto es que ceder emocionalmente es debilidad.",
                                empatia: 1, asertividad: 3, ie: 1, cohesion: 1
                              },
                              {
                                letra: "D",
                                texto: "Reconocer el momento y cambiar el rumbo: 'Quizás lo que necesitamos hoy no es un acuerdo sobre protocolos. Quizás es simplemente que los dos nos digamos una cosa que nunca hemos dicho.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "La intuición es interesante, pero sin base ni preparación puede sonar a terapia forzada. Ni Roberto ni Marcela han consentido a ese formato. Puede cerrar a ambos al mismo tiempo.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              }
                  ]
                }
          ],
          transicion: "Veinte minutos después, sin que Valentina lo hubiera planeado, Roberto se inclinó hacia adelante y dijo: 'Marcela, yo también tengo miedo de que alguien se muera en esa planta. Por eso reaccioné así.' Fue la primera vez en tres meses que alguien, en esa sala, dijo algo que no era negocio."
        },
        {
          id: 4,
          titulo: "Escena 4: El Precio de la Reconciliación",
          narrativa: `El reencuentro no fue cinematográfico. No hubo abrazo ni música de cuerdas. Lo que hubo fue un silencio diferente — más liviano, aunque no cómodo. Marcela se limpió los ojos con el dorso de la mano. Roberto dejó de mirar el piso y empezó a mirar a Marcela, quizás por primera vez en meses, sin calcular el siguiente movimiento.

Valentina, desde su esquina de la mesa, sabía que este era el momento más frágil de todo el proceso. No porque las emociones fueran altas — eso era manejable — sino porque lo que venía después era lo difícil: traducir esta vulnerabilidad temporal en un acuerdo real, sostenible, que sobreviviera al día siguiente y al presupuesto del próximo trimestre.

Roberto propuso algo inesperado: '¿Y si hacemos una auditoría conjunta? Tú pones el equipo técnico, yo pongo el de campo. Los dos firmamos. Si hay errores, los corregimos juntos. Si no los hay, lo certificamos juntos.'

Marcela lo miró como quien ve un fantasma convertible en aliado. '¿Juntos?' repitió.

No era suficiente. Valentina lo sabía. Un acuerdo de trabajo es papel. Lo que pasó después definiría si la cultura de FertiColombia había cambiado o solo había hecho una pausa dramática.

Fue entonces cuando entró el correo. El teléfono de Lucía sonó antes de que pudiera llegar a la sala. Había habido un incidente en la planta de Cartagena: una fuga de amoniaco controlada pero que dejó a tres operarios con atención médica. No era grave — había sido controlada a tiempo — pero la imagen de ambulancias y sirenas frente a una planta de fertilizantes genera clics, titulares, y llamadas de aseguradoras.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Minutos después del acuerdo de trabajo entre Roberto y Marcela, llega la noticia del incidente en Cartagena. ¿Cuál es la reacción más sabia de Valentina en este momento?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Suspender la reunión indefinidamente. El incidente en Cartagena es prioridad absoluta y debe irse toda la energía de la organización hacia allá.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Parar la mediación en su momento más frágil es perder lo que se acaba de construir. El acuerdo aún no está sellado y si se pospone 'indefinidamente', nunca sucederá. Además, el conflicto Roberto-Marcela también afecta la seguridad.",
                                empatia: 4, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Llamar a Lucía directamente para informar que, dado el incidente, no es buen momento para que los empleados clave estén en una mediación y que se concentren en la emergencia.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Escalar una decisión que ya tomaste (mediar) antes de terminar de ejecutarla es transferir responsabilidad. Además, Lucía recibirá el mensaje de que RRHH no puede manejar la complejidad.",
                                empatia: 4, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Dejar que Roberto y Marcela decidan juntos si continúan o suspenden, ya que son los owners de la situación y el incidente es su decisión, no la tuya.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Delegar la decisión en este momento es confundir autonomía con abdicación. En una crisis real, alguien debe liderar con criterio. Si se van sin cierre, el proceso se erosiona y con él la confianza recién nacida.",
                                empatia: 4, asertividad: 3, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Reconocer la gravedad de la noticia, pero proponer que se use este mismo incidente como prueba de fuego del nuevo acuerdo: 'Justo ahora se necesitan ustedes dos trabajando juntos, no por separado.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Este es el liderazgo estratégico perfecto: convierte la crisis en oportunidad de cohesión. Si Roberto y Marcela pueden perdonar el orgullo en una emergencia real, el acuerdo se volverá orgánico, no forzado.",
                                empatia: 8, asertividad: 9, ie: 9, cohesion: 10
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Roberto y Marcela, sin la intervención de Valentina, proponen conjuntamente ir a Cartagena a gestionar la crisis juntos. ¿Cómo recibe Valentina esta decisión?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Aplaudir la iniciativa y ofrecerse como apoyo logístico desde la sede, coordinando comunicaciones y reportes para que ellos se concentren en la operación de campo.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Celebrar la iniciativa sin apropiarse del mérito, y posicionar a RRHH como habilitador (no como director) es la marca de un líder coaching. Además, mantenerse disponible pero fuera de la línea de mando les da ownership real.",
                                empatia: 8, asertividad: 8, ie: 8, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Sugerir que solo vaya Roberto, ya que Marcela es de Comercio Exterior y la gestión de crisis de planta no es su expertise.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto destruye exactamente lo que se acaba de construir: que Marcela es igualmente válida. Si la excluyes ahora, el mensaje es que la reconciliación fue un show. Además, una auditoría de seguridad tiene dimensión comercial.",
                                empatia: 2, asertividad: 5, ie: 2, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Acompañarlos personalmente a Cartagena para asegurar que la dinámica de trabajo se mantenga positiva bajo presión.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Acompañar como 'guardián de la dinámica' envía el mensaje de que no confía en ellos. En una crisis real, RRHH debe estar donde se necesitan recursos humanos — que puede no ser el mismo lugar físico.",
                                empatia: 4, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Recomendar que se quede en la sede porque su rol es la gente, no la crisis operativa, y que lo máximo que puede hacer es preparar al equipo para cuando regresen.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Verbalizar la separación entre 'gente' y 'crisis' es exactamente la mentalidad que permite que los conflictos personales se conviertan en accidentes industriales. En seguridad, todo es gente.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "En Cartagena, durante dieciséis horas seguidas, Roberto y Marcela trabajaron hombro a hombro con el equipo de emergencia. Cuando salieron de la planta — con los tres operarios estables, los medios controlados, y el informe preliminar listo — algo había cambiado. No por la mediación. Por la prueba bajo fuego."
        },
        {
          id: 5,
          titulo: "Escena 5: El Informe que lo Cambió TODO",
          narrativa: `Tres semanas después del incidente de Cartagena, FertiColombia publicó su informe oficial de seguridad. No fue un documento más del archivador regulatorio. Fue un antes y un después.

Roberto y Marcela lo firmaron juntos. No como obligación. Como declaración.

En la portada, donde antes decía 'Elaborado por: Gerencia de Operaciones' o 'Gerencia de Comercio Exterior', esta vez decía: 'Elaborado por: Gerencia de Operaciones y Gerencia de Comercio Exterior — En nombre de la seguridad de todos.'

El informe contenía diecinueve recomendaciones. Doce fueron iniciativas de Marcela. Siete, de Roberto. Las otras cero fueron atribuciones de culpa. Todas fueron aceptadas por el comité de seguridad con un presupuesto de 2.300 millones de pesos para el año siguiente.

En la junta directiva de cierre de trimestre, Lucía Aldana preguntó — frente a todos los asistentes — qué había hecho posible esa alianza. Valentina, que estaba sentada al fondo de la sala, sintió que el piso se inclinaba.

Roberto respondió: 'Aprendí que ser técnico no me exime de ser humano. Y que los datos sin contexto son solo números.' Marcela, a su lado, asintió y añadió: 'Y yo aprendí que la urgencia no es excusa para destruir a las personas en el proceso.'

La sala quedó en silencio por tres segundos. Luego, el director general — un hombre que raramente reaccionaba — empezó a aplaudir.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Al finalizar la junta, Lucía le pide a Valentina un reporte sobre el 'modelo de mediación' usado con Roberto y Marcela para documentarlo como práctica replicable. ¿Cómo estructura Valentina su reflexión final?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Escribir un reporte técnico con cronología de hechos, intervenciones, y resultados cuantitativos (tiempos, costos, indicadores), omitiendo las emociones porque 'no son medibles'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Un reporte sin dimensión humana no captura el aprendizaje real. Si solo exportas fechas y cifras, el siguiente líder que enfrente esto pensará que se trata de burocracia, no de humanidad.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Documentar el caso con fidelidad, incluyendo los momentos de ruptura emocional, las preguntas que funcionaron, y las lecciones no tanto de lo que hizo ella como facilitadora, sino de lo que pasó cuando les dio espacio para liderar su propia resolución.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Un buen caso no se escribe desde la tribuna, se escribe desde la experiencia. Incluir la textura emocional y posicionar el aprendizaje como 'cuando les devolví el poder' hace el documento genuinamente útil.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Declinar la solicitud porque el proceso fue 'demasiado orgánico' para ser documentado y cualquier intento de replicarlo sería 'falso'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La falsa modestia no ayuda a la organización. Lo que Valentina hizo fue un conjunto de decisiones conscientes que SÍ pueden transmitirse. Ocultarlo es robarle a la empresa la oportunidad de aprender.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Redactar un caso genérico que enfatice su papel protagónico para que quede claro ante la gerencia el valor de RRHH como departamento estratégico.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Auto-promocionarse a costa del proceso resta credibilidad. Si el documento se lee como CV en lugar de caso, nadie lo creerá. Y peor: si después algo falla, parecerá que todo era performancia.",
                                empatia: 3, asertividad: 3, ie: 2, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Valentina está a punto de archivar el caso cuando recibe un mensaje de Andrés, el técnico junior que había denunciado la presión indebida: 'Aquí nadie me ha dicho gracias por lo que hice.' ¿Qué hace Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Llamar a Andrés para agradecerle personalmente, pero sin copiar a nadie más, porque el proceso fue confidencial y debe mantenerse así.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La intención es buena, pero la confidencialidad mal entendida puede convertirse en invisibilización. Si nadie sabe que Andrés hizo lo correcto, nadie más aprenderá de su ejemplo.",
                                empatia: 6, asertividad: 5, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Archivar el mensaje y responder en la próxima evaluación de desempeño, donde el tema se puede manejar formalmente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Un 'gracias' que llega seis meses después no es un gracias. Es una deuda. La gratitud tiene timing. Responder en una evaluación formal es burocratizar algo que debía ser humano e inmediato.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Responder inmediatamente con un mensaje breve: 'Andrés, tu valentía contribuyó a que esta situación se resolviera bien. Gracias por tu integridad.' — y copiar al supervisor de Andrés.",
                                correcta: true,
                                puntos: 10,
                                feedback: "El reconocimiento tardío pero genuino es siempre mejor que ningún reconocimiento. Copiar al supervisor valida institucionalmente a Andrés y modela que la integridad tiene consecuencias positivas visibles.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Indicarle que aunque agradece su aporte, no puede darle retroalimentación formal por fuera de los canales establecidos, y sugerirle que hable con su jefe directo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esta respuesta es la muerte del Psychological Safety. Le dice a Andrés que hacer lo correcto no tiene recompensa visible. Que los canales importan más que las personas. Inolvidable para él.",
                                empatia: 1, asertividad: 4, ie: 1, cohesion: 1
                              }
                  ]
                }
          ],
          transicion: "El nombre de FertiColombia dejó de aparecer en los titulares de accidentes industriales. Seis meses después, el sistema de auditoría conjunta que Roberto y Marcela diseñaron se convirtió en política oficial de la compañía. Valentina lo presentó en la conferencia anual de la Asociación Colombiana de la Industria Química como un caso de 'liderazgo relacional en alta presión'. Nadie, en esa sala, sabía lo que había costado."
        }
    ]
  },

  {
    id: 2,
    titulo: "Cuando el Trabajo Llega Roto desde Casa",
    tema: "Empleado con crisis personal",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: El Jefe que Sintió el Golpe Antes de Verlo",
          narrativa: `Carlos Molina tenía cincuenta y dos años, veinte de ellos en FertiColombia, y una reputación que se definía en dos palabras: 'caballo de trabajo'. Era el superintendent de la planta de Barrancabermeja — el tipo de persona que se presentaba antes del amanecer y se iba cuando el turno de noche ya estaba instalado. Su bigote canoso y sus manos callosas contaban historias de reactores arreglados bajo la lluvia y negociaciones de emergencia con contractors que solo entendían el lenguaje de la firmeza.

Pero desde hacía tres semanas, algo no andaba bien.

No era el trabajo. El trabajo era lo único que seguía funcionando. Lo que se había roto estaba en casa.

Su hija mayor, Lucía — veinticuatro años, ingeniería química, la que había heredado su terquedad y su pasión por los números — le había dicho en una cena dominical que estaba embarazada. No era mala noticia. O no tenía que serlo. Pero tres días después, el padre del bebé — un muchacho de Bogotá que Lucía conocía hacía siete meses — había desaparecido. Sin explicación. Sin dirección. Sin siquiera una llamada.

Carlos no sabía cómo metabolizar eso. No tenía marco para la rabia que mezclaba con orgullo y con un miedo que no podía nombrar. ¿Cómo se le dice a su esposa, Paola, que la nieta que viene no tiene padre? ¿Cómo se le dice a los compañeros de la planta que necesita un día — solo uno — para respirar?

El martes de esa semana, en la formación del turno mañana, Carlos regañó al técnico de turno, Hernán, por un error menor de calibración. No era la primera vez que Hernán cometía ese error. Pero tampoco era la primera vez que Carlos lo regañaba con esa dureza. Hernán, que llevaba cuatro años en la planta y respetaba a Carlos profundamente, salió del briefing con los ojos rojos. Y eso le preocupó a Valentina, la consultora de RRHH que llevaba seis meses haciendo trabajo de clima organizacional en Barrancabermeja.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina nota que Hernán sale del briefing visiblemente afectado. Después de terminar sus obligaciones del día, decide acercarse a hablar con él. ¿Cuál es la mejor forma de iniciar esa conversación?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Preguntarle directamente: 'Hernán, ¿qué pasó con Carlos hoy? Te vi salir del briefing muy mal. ¿Necesitas que hable con él?'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Preguntar directamente por la interacción con Carlos puede hacer que Hernán se sienta observado y evaluado. Además, si traduce mal la pregunta, puede pensar que estás del lado de Carlos contra él.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Hablar primero con Carlos para entender qué le pasaba a él ese día, antes de acercarse a Hernán, porque probablemente el problema viene de arriba.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Ir donde Carlos primero sin que haya una queja formal envía un mensaje de que RRHH está investigando al superintendent. Eso puede cerrar a Carlos y generar defensividad en toda la línea de mando.",
                                empatia: 4, asertividad: 3, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Dejar pasar unos días a ver si Hernán se 'normaliza' solo, ya que todos tenemos días malos y no todo requiere intervención de RRHH.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La normalización del malestar es la forma más común en que las organizaciones pierden a sus talentos antes de que sea demasiado tarde. Hernán es un técnico valioso. Un técnico triste es un técnico en riesgo.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Acercarse a Hernán al final del día con naturalidad: '¿Cómo estás? Te noté diferente hoy. Aquí estamos si necesitas hablar.' — sin presión, sin agenda, solo presencia.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Una invitación sin obligación respeta el espacio de Hernán y normaliza la conversación sobre bienestar. El 'aquí estamos' habilita sin exigir. Es la puerta correcta, sin ser invasiva.",
                                empatia: 9, asertividad: 7, ie: 8, cohesion: 8
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Hernán, luego de la conversación inicial de Valentina, le cuenta que se siente constantemente 'bajo la sombra' de Carlos desde hace semanas, y que no sabe si es él quien no sirve o si es Carlos quien tiene algo personal. ¿Qué hace Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Validar su experiencia: 'Lo que describes existe y no es tu imaginario. Ahora bien, necesito que sepas que no voy a hablar con Carlos sobre ti sin tu consentimiento. Esto es tuyo.' — establecer confidencialidad clara.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Validar más confirmar confidencialidad antes de cualquier acción es el pegamento de confianza organizacional. Hernán necesita saber que el sistema no va a usarlo en su contra. Eso es lo primero. Sin eso, nada más importa.",
                                empatia: 10, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Escuchar con atención, agradecer la confianza, y decirle que vas a revisar discretamente si hay un tema de liderazgo con Carlos antes de tomar cualquier acción.",
                                correcta: false,
                                puntos: -5,
                                feedback: "'Revisar discretamente' es exactamente lo que Hernán teme: que alguien esté hablando de él a sus espaldas. Además, sin evidencia de mala praxis, 'revisar al jefe' puede destruir la confianza en el sistema.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Sugerirle que hable directamente con Carlos, ya que 'de tú a tú' es la mejor forma de resolver malentendidos entre profesionales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Sin preparación, sin contexto, y sin apoyo, enviar a Hernán a enfrentar a Carlos — su superintendent, con veinte años de empresa — es dejarlo vulnerable. Puede empeorar la relación en lugar de repararla.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Explicar que los conflictos con supervisores son normales y que lo más importante ahora es que Hernán se enfoque en cumplir sus metas del trimestre para asegurar su evaluación positiva.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Redirigir a métricas cuando alguien está expresando malestar emocional es invalidación disfrazada de consejo práctico. Le dice a Hernán que sus sentimientos son secundarios respecto al negocio. Lo son.",
                                empatia: 1, asertividad: 5, ie: 1, cohesion: 1
                              }
                  ]
                }
          ],
          transicion: "Esa noche, Valentina hizo algo que no estaba en ningún protocolo: buscó en el sistema de información humana los últimos registros de ausentismo de Carlos Molina. Tres permisos médicos en las últimas cuatro semanas. Todos de un día. Todos con el mismo diagnóstico genérico."
        },
        {
          id: 2,
          titulo: "Escena 2: El Peón que Vio al Rey",
          narrativa: `El supervisor de mantenimiento de segundo turno se llamaba Felipe. Treinta y un años, ingeniería mecatrónica, un hombre que había escalado desde el piso de operario sin padrinos ni favores. Lo habían promovido hacía ocho meses precisamente por lo que Carlos había recomendado: 'Este muchacho ve cosas que otros no ven.'

Felipe había notado algo que nadie en el comité de seguridad había documentado: Carlos llevaba tres semanas llegando al turno de la mañana con la misma camisa. Siempre gris. Siempre arrugada. Un hombre que durante veinte años había llegado impecable — corbata, zapatos lustrados, reloj de escritorio — de repente parecía alguien que se había puesto la primera cosa que encontró.

'No es mi negocio', se había dicho Felipe muchas veces. 'Carlos es el superintendent. Él resuelve sus cosas.'

Pero el jueves de esa semana, durante la ronda de las 5:30 a.m., Felipe encontró a Carlos parado junto al tanque T-12 — uno de los más antiguos de la planta — mirando al vacío con la expresión de alguien que está haciendo cálculos que no tienen que ver con presión industrial.

Felipe se acercó.

'Buenos días, superintendent. ¿Todo bien por aquí?'

Carlos tardó tres segundos en responder. Cuando lo hizo, su voz sonó diferente. Más grave. Más lejos.

'Felipe. Sí. Todo bien. Solo estaba... revisando las válvulas.'

Felipe, que conocía cada válvula de esa planta como si fueran su familia, supo que Carlos estaba mintiendo. Y supo también que Felipe tenía que elegir: seguir caminando como si nada, o quedarse.

Se quedó.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Felipe decide quedarse y abordar a Carlos con cautela. ¿Cuál de estas aperturas es la más efectiva para que Carlos sienta que puede abrirse sin sentirse evaluado?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Superintendent, lo noto diferente estas semanas. Si necesita algo, aquí estamos.' — directo, claro, con oferta de soporte. Señalar directamente el cambio de comportamiento puede ser la forma más honesta y directa de abrirle a Carlos una puerta, sin la ambigüedad de los rodeos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque la intención es buena, señalar que 'lo noto diferente' puede hacer que Carlos se ponga a la defensiva. Un superintendent de veinte años no quiere que su subordinado lo esté 'notando'. Puede interpretarse como falta de respeto jerárquico.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "'¿Quiere que le consiga un café? Hay tiempo antes del inicio del turno.' — una oferta simple, sin pregunta de por medio, que no exige nada. Hay una diferencia entre intromisión y responsabilidad; en un equipo de alta presión, mantener el rendimiento requiere que el líder comprenda qué está afectando a sus personas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El café es un gesto bonito, pero no abre conversaciones. Es una pausa, no una puerta. Y si Carlos dice que no, la oportunidad se cierra sin que nada haya pasado. Necesitas algo más sustantivo.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "'Este tanque me tiene intrigado. Llevo semanas preguntándome si deberíamos pedir repuestos pronto. ¿Usted qué cree?' — una excusa técnica que le da a Carlos un rol activo sin presión emocional.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Crear una excusa laboral que le devuelva a Carlos su identidad profesional es un movimiento de inteligencia social brillante. No es manipulación — es construir puentes. Le da una razón para estar ahí que no sea vulnerable.",
                                empatia: 8, asertividad: 7, ie: 8, cohesion: 8
                              },
                              {
                                letra: "D",
                                texto: "'Aquí ando haciendo mi ronda. Si necesita que revise algo, chromo.' — mantenerse disponible pero sin forzar la interacción. Los colegas de trabajo pueden generar el mismo efecto de acompañamiento sin las connotaciones jerárquicas, y la relación peer-to-peer puede reducir la resistencia a pedir ayuda.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Este cierre envía un mensaje claro: 'No quiero molestar.' Pero Carlos no va a pedir ayuda. Si Felipe no hace nada más, Carlos se queda solo junto al tanque. La presencia sin acción es invisibilidad.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Carlos acepta la excusa técnica de Felipe y empiezan a caminar hacia la sala de control. Después de diez minutos de conversación técnica genuina, Carlos se detiene y dice: 'Felipe, ¿tú has sentido alguna vez que el mundo te queda grande?' ¿Cómo responde Felipe?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Responde: 'A todos nos pasa. Pero usted tiene una familia que lo necesita fuerte, Carlos. Hay que quedarse para los que dependen de nosotros.' — apelar a la responsabilidad familiar.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esta respuesta, aunque bien intencionada, carga más peso sobre Carlos. 'Quedarse fuerte para los que dependen' es exactamente lo que un hombre en crisis NO necesita escuchar: más responsabilidad, no más alivio.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Detenerse, hacer contacto visual genuino, y responder: 'Sí, superintendent. Y aprendí que a veces hay que dejar que alguien nos ayude a sostenerlo.' — compartir desde la propia vulnerabilidad.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La vulnerabilidad compartida es el pegamento más fuerte entre humanos. Felipe no está aconsejando, está conectando. Esto le da a Carlos permiso de no estar bien sin sentirse débil.",
                                empatia: 10, asertividad: 7, ie: 10, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Reconocer el momento pero decir: 'Carlos, esto es muy importante para hablar ahora. ¿Podemos hablar después del turno? Lo invito a almorzar.' — postergar para un momento más apropiado.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Postergar una apertura emocional raramente funciona. Si Carlos se abrió, es porque el momento lo decidió a él, no a Felipe. Mañana puede ser otro día. Hoy puede que no haya otro hoy.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Responder con una frase motivacional: 'El mundo no se hace más pequeño, superintendent. Se hace más fuerte quien lo enfrenta.' — inspiracional, sin profundidad relacional.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los quotes motivacionales son el equivalente organizacional de 'mis condolencias'. Lleno de buenas intenciones y vacío de presencia real. Carlos no necesita un cartel, necesita un ser humano.",
                                empatia: 2, asertividad: 5, ie: 2, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Felipe caminó con Carlos durante cuarenta minutos esa mañana. No fueron cuarenta minutos de consejo. Fueron cuarenta minutos de escucha. Carlos no contó todo — no era su estilo — pero contó lo suficiente: 'Mi hija está en problemas, Felipe. Y yo no sé cómo resolverle la vida.' Cuando terminó la conversación, Carlos puso su mano en el hombro de Felipe y dijo: 'Gracias por detenerse.'"
        },
        {
          id: 3,
          titulo: "Escena 3: La Línea que Separa Cuidado de Intrusión",
          narrativa: `Valentina recibió el informe de Felipe — no un informe formal, sino un mensaje de WhatsApp que decía: 'Hablé con Carlos. Está mal. Muy mal. Creo que necesita ayuda profesional, no solo un amigo.' Ella leyó el mensaje tres veces.

La primera cosa que hizo fue llamar a Felipe. Sin teléfono, sin juicio, solo confirmar que estaba bien y que lo que había hecho había sido lo correcto. '¿Le dijiste a alguien más?', preguntó. Felipe dijo que no. '¿Le dijiste a Carlos que ibas a reportar?', volvió a preguntar. Felipe dijo que sí. '¿Y él qué dijo?', preguntó Valentina. Felipe respondió: 'Dijo que estaba bien. Que no se preocupe. Que lo tiene controlado.'

Valentina colgó y miró el techo de su oficina. 'Lo tiene controlado' era, en el vocabulario de crisis, el indicador más claro de que alguien NO lo tenía controlado.

Lo que siguió fueron cuarenta y ocho horas de decisiones que definirían no solo la relación de Carlos con FertiColombia, sino la forma en que la empresa entendía su responsabilidad con las personas que sostenían su operación.

El tema era simple en su complejidad: ¿Cómo se interviene en la vida de alguien sin violar su dignidad? ¿Dónde estaba la línea entre cuidado e intrusión? ¿Cuándo era amor y cuándo era paternalismo? Y quizás la más difícil: ¿Tenía derecho una empresa a pedir cuentas de la vida personal de alguien que jamás había fallado en lo profesional?`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina debe decidir si contactar directamente a Carlos o a su esposa Paola primero. ¿Cuál es la vía más ética y efectiva?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Programar una conversación directa y confidencial con Carlos, donde se le informe sobre los recursos de bienestar disponibles (EPS, programa de asistencia al empleado, vacaciones), y se le invite a acceder a ellos sin presión.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Este es el estándar dorado de intervención en crisis de bienestar: empoderamiento, no rescate. Se le da información, se le dan opciones, se le respeta su agencia. La decisión final es de Carlos. Solo él puede pedir ayuda.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Contactar a Paola directamente, ya que ella es su esposa y tiene derecho a saber lo que está pasando con su marido, especialmente si hay un embarazo involucrado. La esposa conoce su estado emocional real y tiene acceso a información que el empleado no revelará en un entorno laboral, incluso en conversaciones confidenciales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Contactar a la esposa sin pasar por el empleado es una violación de límites. Además, si Paola no está informada de la situación completa, la llamada puede generar pánico o conflicto en lugar de ayuda. Y compromete la confianza de Carlos.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Hablar con el director de planta para que sea él quien hable con Carlos, ya que es un tema de dirección y RRHH no debe meterse en asuntos personales de empleados. El director tiene la autoridad y la relación jerárquica para convertir la conversación en un mandato de cuidado institucional con respaldo formal de la empresa.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Delegar en el director sin estructura ni preparación convierte esto en un juego de escalera jerárquica. Carlos puede experimentar la intervención como amenaza, no como cuidado. Y sin confidencialidad, todo empeora.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Enviar un correo masivo a toda la planta informando sobre el programa de asistencia al empleado para que Carlos pueda acceder sin sentirse señalado. Una campaña masiva de comunicación interna crea un contexto de normalización donde acceder a los recursos no requiere que nadie tome una decisión individual visible.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los correos masivos sobre salud mental son tan útiles como gritar '¿alguien tiene ansiedad?' en un estadio. Puede que alguien lo necesite, pero no se siente referenciado. Y Carlos sabrá exactamente por qué se envió.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "En la conversación con Carlos, él se cierra completamente: 'Esto es personal, Valentina. No tiene nada que ver con el trabajo. Yo cumplo mis metas, ¿no?' ¿Cómo responde Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Decirle: 'Carlos, te respeto mucho. Pero necesito que sepas que en esta empresa nos importan las personas, no solo los resultados. ¿Me puedes dar una oportunidad de demostrártelo?'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esta frase, aunque bien intencionada, instrumentaliza a Carlos como prueba del valor de la empresa. 'Dame una oportunidad de demostrártelo' suena a transacción, no a cuidado. Y le carga la responsabilidad de sanar a la organización.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Hacerle ver que Felipe está preocupado y que si Carlos no busca ayuda, la empresa tendrá que tomar medidas para 'proteger el bienestar del equipo'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es manipulación pura. Usar la preocupación de Felipe como palanca y amenazar con 'medidas' si no accede a ayuda es coerción disfrazada de cuidado. Destruye toda confianza y cualquier búsqueda de ayuda futura.",
                                empatia: 1, asertividad: 3, ie: 1, cohesion: 1
                              },
                              {
                                letra: "C",
                                texto: "Explicar que como responsable de bienestar de la planta, tiene la obligación de documentar esta conversación y que Carlos firme un formato donde rechaza voluntariamente los recursos ofrecidos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Un formato de 'rechazo voluntario' es la forma más efectiva de decirle a un empleado: 'No confío en ti.' Eso no es política de bienestar, es cobertura legal disfrazada de humanidad. Y es probable que sea ilegal.",
                                empatia: 1, asertividad: 4, ie: 1, cohesion: 1
                              },
                              {
                                letra: "D",
                                texto: "Respetar la frontera claramente expresada: 'Entiendo, Carlos. Si cambias de opinión, aquí tienes mi número. El Programa de Asistencia está disponible 24/7 para ti y tu familia sin costo.' — y cerrar sin presión.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Respetar la negativa es tan importante como ofrecer ayuda. Si presionas ahora, pierdes a Carlos para siempre. Tu mensaje plantado — disponible, sin costo, confidencial — puede germinar en semanas.",
                                empatia: 9, asertividad: 7, ie: 8, cohesion: 8
                              }
                  ]
                }
          ],
          transicion: "Carlos colgó. Valentina miró el teléfono en su mano y sintió algo que rara vez sentía en su trabajo: la sensación de no haber hecho suficiente. Pero también sabía algo que era fundamental en su profesión: a veces, lo único que puedes hacer es dejar la puerta abierta."
        },
        {
          id: 4,
          titulo: "Escena 4: El Bebé que Desarmó al Gigante",
          narrativa: `Ocho días después, Carlos no llegó al turno de la mañana.

No llamó. No escribió. En veinte años, Carlos Molina nunca había faltado sin aviso.

Felipe fue el primero en notarlo. Inmediatamente llamó a Valentina. Valentina, sin entrar en detalles con Felipe, activó el protocolo de emergencia por ausencia no justificada — no como procedimiento de RRHH, sino como posibilidad real de que algo hubiera pasado.

Llamó a la esposa de Carlos, Paola. Cuatro tonos. Cinco. Seis.

'¿Aló?'

'Paola, buenos días. Soy Valentina, de RRHH de FertiColombia. Estoy intentando localizar a Carlos. ¿Está con usted?'

Silencio. Tres segundos que parecieron eternos.

'Valentina...', la voz de Paola temblaba. 'Carlos está aquí. Está... está conmigo. Tuvo un episodio anoche. No sé qué pasó. Lo encontré en la cocina a las tres de la mañana mirando el vacío. Tuve que llamar a su madre para que viniera a quedarse con él. No sé qué hacer.'

Valentina se sentó. No había silla detrás de ella — se había levantado para atender la llamada — así que se sentó en el borde del escritorio.

'Paola, ¿Carlos está en este momento seguro? ¿Hay algún riesgo de que se haga daño a sí mismo?'

Silencio.

'Paola, necesito que me responda. Es importante.'

'Sí... sí, está seguro. Solo está... roto. Como nunca lo había visto. Y yo no sé cómo ayudarlo. Yo no soy... yo no soy psicóloga, Valentina. Yo solo soy su esposa.'

Valentina escuchó. Lo que Paola necesitaba no era un protocolo. Lo que necesitaba era que alguien le dijera que estaba haciendo bien, que no era su culpa, y que no estaba sola.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina está al teléfono con Paola. ¿Cómo prioriza la conversación en los primeros treinta segundos?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Comenzar preguntando por Carlos directamente: '¿Carlos ha mencionado ideas de hacerse daño? Necesito saber si hay riesgo inmediato para actuar.' — triage clínico primero.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El triage clínico es correcto en emergencia médica, pero Paola no es profesional de salud. Preguntarle sobre riesgo de daño puede generar ansiedad extrema y dificultar la comunicación. Hay que construir puente antes de evaluar.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Informar a Paola sobre los canales de ayuda: 'Paola, FertiColombia tiene un Programa de Asistencia al Empleado con línea 24 horas. Te doy el número y tú los contactas.' — referenciar sin acompañar.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Dar un número a alguien en crisis sin acompañamiento es como darle un mapa a alguien perdido en la selva: teóricamente correcto, prácticamente inútil. Paola necesita guía humana, no un número de call center.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Comenzar con contención emocional: 'Paola, lo que estás haciendo — llamar, buscar ayuda — es exactamente lo correcto. No estás sola en esto. Yo estoy aquí. Cuéntame qué necesitas.' — estabilizar antes de evaluar.",
                                correcta: true,
                                puntos: 10,
                                feedback: "En crisis de este tipo, el primer paso nunca es la información. Es la conexión. Paola necesita saber que alguien competente y compasivo está del otro lado antes de poder organizar sus pensamientos.",
                                empatia: 10, asertividad: 8, ie: 10, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Pedir disculpas por la intromisión y decirle que esperará a que Carlos se comunique directamente cuando esté listo, ya que respetar su autonomía es prioritario.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Carlos está en crisis aguda. 'Respetar autonomía' en este momento es evitación. Si no acts ahora, cuando Paola cuelgue y Carlos siga solo, la oportunidad de ayuda puede no volver a presentarse.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Tras estabilizar la conversación con Paola, Valentina coordina la ayuda. ¿Cuál de las siguientes acciones es la más crítica e innegociable?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Visitar personalmente a Carlos en su casa con flores y un mensaje de la empresa reconociendo su trayectoria de veinte años.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La intención es genuina pero la ejecución es invasiva. Una visita no anunciada a alguien en crisis puede sentirse como espectáculo. Y sin profesional, la visita no resuelve nada. Puede empeorar si se siente como presión.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Contactar a la EPS de Carlos para activar el beneficio de acompañamiento psicológico de urgencia y garantizar que tenga cita en las siguientes 24 horas.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La intervención más crítica es activar canales formales de salud mental con inmediatez. Sin cita profesional, todo lo demás es conversación. Los recursos de la EPS son el piso mínimo necesario e innegociable.",
                                empatia: 8, asertividad: 9, ie: 8, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Coordenar con el director de planta una licencia médica temporal 'por asuntos personales' para darle espacio sin explicarle a la organización por qué.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La licencia es buen recurso, pero sin el componente profesional no resuelve. Y si el director no sabe por qué, cualquier rumor en la planta puede dañar la reputación de Carlos. La información privilegiada necesita manejo cuidadoso.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Proporcionar a Paola el número de una línea de crisis local y confiar en que ella gestionará todo, ya que es su familia y no corresponde a la empresa involucrarse.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Desligarse completamente después de activar la crisis es abandono disfrazado de respeto. La empresa tiene responsabilidad con Carlos. Abandonarlo ahora genera riesgo para él y mensaje para toda la planta.",
                                empatia: 2, asertividad: 4, ie: 2, cohesion: 1
                              }
                  ]
                }
          ],
          transicion: "Treinta y seis horas después, Carlos estaba sentado en la sala de espera de una IPS de atención psicológica en Bucaramanga. Paola a su lado. Había sido Valentina quien había gestionado la cita, quien había hablado con el director de planta, y quien había construido un cerco de confidencialidad tan firme que en toda la planta solo tres personas sabían lo que estaba pasando: Felipe, el director, y ella."
        },
        {
          id: 5,
          titulo: "Escena 5: El Regreso que Nadie Olvidó",
          narrativa: `Carlos regresó a FertiColombia un lunes después de tres semanas de ausencia. No volvió como el mismo hombre que se había ido. Había perdido seis kilos. Llevaba una camisa planchada — esa señal de dignidad que nadie le había pedido pero que él necesitaba para sentirse persona de nuevo.

Nadie en la planta lo miró diferente. O al menos eso pensaban todos.

Carlos llegó a las 6:00 a.m., como siempre. Pero esta vez, en lugar de ir directamente a la sala de control, fue a la oficina de Valentina. Llamó a la puerta. Dos veces.

'Pase.'

Carlos entró. Con la expresión de alguien que ha aprendido que pedir ayuda no es debilidad. Y que ha descubierto, con la guía de una psicóloga que lo escuchó durante cuatro sesiones sin juzgarlo, que lo que le pasaba no era un defecto de carácter sino una respuesta humana a circunstancias humanas.

'Valentina. Vine a agradecerle. Y a decirle que voy a estar bien. Y que voy a usar el programa de acompañamiento psicológico de la empresa. No me da vergüenza decirlo.'

Valentina sintió algo que no había sentido en todo el proceso: alivio puro.

Lo que vino después no fue una transformación mágica. Fue algo más difícil: un proceso de reintegración que requirió ajustes — a veces Carlos necesitaba salir antes del turno para llegar a terapia, a veces la presión de la planta se sentía insoportable, y a veces volvían los fantasmas.

Pero cada vez que eso pasaba, Felipe aparecía. Sin decir nada. Solo para caminar juntos hacia la sala de control.

Ocho meses después, Carlos fue reconocido en la junta de cierre anual como uno de los líderes que había impulsado el nuevo protocolo de bienestar de FertiColombia. No como un caso resuelto. Como alguien que había tenido el coraje de ponerse vulnerable y ayudar a otros a hacer lo mismo.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "En la reintegración de Carlos, ¿cuál de las siguientes acciones de Valentina contribuyó más a que el retorno fuera sostenible y no solo temporal?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Establecer un sistema de check-ins semanales cortos (15 minutos) con Carlos durante los primeros dos meses, donde él pudiera reportar cómo se sentía sin que eso afectara su evaluación.",
                                correcta: true,
                                puntos: 10,
                                feedback: "El check-in estructurado pero breve normaliza la conversación de bienestar, crea responsabilidad sin presión, y permite detectar señales tempranas de recaída. Es andamiaje psicológico hecho proceso.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Negociar con el director de planta flexibilidad horaria permanente para Carlos, documentada formalmente, para que pudiera asistir a terapia sin estigma ni consecuencias.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La flexibilidad horaria es buena, pero si no se acompaña de cambio cultural, se convierte en privilegio个别 en lugar de política. Y puede generar resentimiento en otros empleados que no tienen el mismo 'beneficio'.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "Organizar una actividad de team building con todo el turno para que Carlos pudiera reintegrarse al grupo de forma natural sin ser el foco de atención.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El team building forzado como reintegración puede ser contraproducente. Carlos no necesita ser 'celebrado' ni 'integrado a la fuerza'. Necesita espacio para volver a su ritmo sin que nadie esté observando.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Delegar el acompañamiento de Carlos completamente al supervisor directo para que RRHH no se involucre más de lo necesario y Carlos no se sienta 'monitoreado'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Delegar y desaparecer es la tentación más común de RRHH post-crisis. Pero sin seguimiento estructurado, la reintegración depende solo de Carlos. Y la recaída, cuando llega, suele ser silenciosa.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Al final del proceso, Carlos decide compartir su historia — anonimizada — en la próxima sesión de inductivos para los nuevos empleados de la planta. ¿Cuál es la mejor razón por la que Valentina debería apoyar esta decisión?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Porque le da a RRHH un caso de éxito tangible que justifica el presupuesto del Programa de Asistencia al Empleado para el próximo año.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Usar la historia de Carlos como 'caso de negocio' es instrumentalizarla. Aunque el beneficio colateral es real, el motivo de apoyo debe ser el bienestar de Carlos y de la comunidad, no la justificación presupuestal.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Porque Carlos necesita cierre, y contar su historia es parte de su proceso de sanación. Apoyarlo es lo correcto.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque es cierto que Carlos necesita sanar, no se debe confundir el proceso terapéutico con la decisión organizacional. Compartir en inductivos es una decisión que afecta a terceros. Debe evaluarse con más capas que solo el bienestar de Carlos.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "Porque no hay ninguna razón para oponerse. Si Carlos quiere contarlo, es su historia y su derecho. Simplemente asegurar que no haya identificadores directos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El consentimiento es necesario pero no suficiente. En una planta de 200 personas, 'un superintendent de 52 años con 20 años de experiencia' es inmediatamente identificable. Hay que evaluar impacto en terceros, no solo consentimiento.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Porque cuando Carlos habla, la organización escucha. Y si un superintendent de veinte años dice que estuvo en crisis y pidió ayuda, el estigma se rompe de una vez por todas.",
                                correcta: true,
                                puntos: 10,
                                feedback: "El poder del ejemplo de vulnerabilidad es la herramienta más poderosa contra la cultura del silencio. Si Carlos — el más fuerte, el más antiguo, el más temido — puede pedir ayuda, cualquiera puede. Ese es el mensaje.",
                                empatia: 9, asertividad: 9, ie: 9, cohesion: 10
                              }
                  ]
                }
          ],
          transicion: "En la siguiente inducción, Carlos contó su historia. No toda — no la parte de Lucía, no la del embarazo, no la de la noche en que Paola lo encontró en la cocina. Contó lo suficiente: que creyó que pedir ayuda era para débiles, que se equivocó, y que hoy, gracias a FertiColombia — gracias a Felipe, a Valentina, a Paola — estaba de pie. Hubo silencio. Y después, aplausos. Y después, cuatro personas se acercaron a preguntarle cómo podían acceder al Programa de Asistencia."
        }
    ]
  },

  {
    id: 3,
    titulo: "El Trimestre que Casi Nos Quiebra",
    tema: "Presión de resultados vs bienestar del equipo",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: La Víspera",
          narrativa: `La sala de juntas de Fertimax S.A. olía a café frío y tensión acumulada. Roberto Méndez, gerente de la Zona Norte, llevaba diecinueve horas sin dormir bien. Afuera, la planta de Barrancabermeja respiraba con un ritmo constante — las torres de destilación no se detenían nunca, ni siquiera cuando el mundo exterior se quebraba. La junta directiva había citado a todos los gerentes regionales para el primero de octubre: el trimestre estaba perdido antes de empezar.

Un terremoto político había sacudido al país. Las sanciones internacionales a Venezuela habían generado un efecto dominó en la cadena de suministros de amoníaco. Los competidores locales — AgroColombia y Petrounos — habían comenzado a acaparar inventario desde agosto. Fertimax tenía contratos firmados con distribuidores del Valle y la Costa Atlántica que no podía cumplir al 100%. La multa por incumplimiento contractual era del 8% del valor del contrato por cada semana de retraso.

Marcela Villamizar, la directora comercial, llegó con una carpeta gruesa bajo el brazo. Sin saludar, desplegó las cifras sobre la mesa: 'Necesitamos que la planta de Cartagena opere al 112% de su capacidad durante octubre. Es la única forma de recuperar el faltante.' Hernán Ríos, director de operaciones, alzó la voz desde el otro lado de la sala: 'Eso significa turnos de 14 horas durante 30 días seguidos. Ya tenemos a los supervisores operando con licencia de estrés laboral.' El silencio que siguió pesaba como plomo.

Roberto conocía a su equipo. Sabía que Sebastián, el coordinador de producción en Cartagena, era un líder de campo que entendía la planta como nadie. También sabía que su equipo — ocho operadores y cuatro técnicos — llevaba tres meses bajo una presión que ningún contrato de trabajo contemplaba. El reporte decía que el ausentismo había subido un 23% en el último mes. Dos operadores habían pedido cambio de turno por problemas familiares que sonaban a excusa. La cultura de Fertimax todavía esperaba que los hombres 'aguantaran' — esa era la norma no escrita de la industria petroquímica colombiana desde los años noventa.

Pero el mercado no esperaba. Los distribuidores empezaban a llamar a la competencia. Roberto tenía 48 horas para presentar un plan a la junta. La pregunta no era solo operativa: era humana.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "En las primeras 48 horas después de la junta, ¿cuál es tu primera acción como líder ante esta crisis?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Presentar inmediatamente a la junta un plan ambicioso que cumpla el 100% de los contratos, demostrando liderazgo fuerte y compromiso con los resultados.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que la cultura antigua de la industria pide — y lo que destruye equipos. Prometer lo imposible genera una caída en cadena cuando no se cumple. Hernán ya advirtió la realidad operativa.",
                                empatia: 2, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Delegar completamente la decisión operativa a Sebastián y Hernán, diciéndoles que 'se arreglen como puedan' para cumplir la meta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto parece dar autonomía, pero en realidad es abandono. Cuando la presión viene de arriba, delegar sin recursos ni cobertura es dejar al equipo solo ante la tormenta. Genera resentimiento y riesgo operativo.",
                                empatia: 3, asertividad: 2, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Convocar una reunión de emergencia con Sebastián y Hernán para diseñar un plan operativo realista, con métricas claras y límites de horas extras, antes de presentar nada a la junta.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto demuestra inteligencia situacional: antes de prometer resultados, consultas con quienes conocen el terreno. Permite construir un plan creíble y proteger al equipo desde el diseño, no después.",
                                empatia: 9, asertividad: 7, ie: 9, cohesion: 8
                              },
                              {
                                letra: "D",
                                texto: "Buscar directamente un acuerdo con los distribuidores para extender los plazos de entrega y renegociar los contratos antes de tomar cualquier decisión interna.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Renegociar sin tener un plan interno debilita tu posición negociadora. Los distribuidores percibirán la urgencia y ofrecerán peores condiciones. Primero necesitas claridad operativa; luego, estrategia comercial.",
                                empatia: 6, asertividad: 5, ie: 5, cohesion: 4
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Sebastián te reporta que tres operadores clave — Carlos, Paola y Andrés — están solicitando cambio de turno con excusas que suenan frágil. ¿Cómo respondes?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Negar los cambios de turno para mantener la continuidad operativa; la planta necesita a todos en su posición actual.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Forzar a personas que ya están al límite no genera compromiso, genera rotación. En una industria donde formar un operador competente toma 18 meses, perder talento es más caro que renegociar un turno.",
                                empatia: 2, asertividad: 8, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Pedirle a Sebastián que converse con cada uno antes de procesar cualquier cambio, preguntando qué está pasando realmente en el equipo — escucharlos con apertura antes de decidir.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La respuesta madura reconoce que detrás de cada 'excusa' puede haber una señal. Escuchar antes de evaluar es liderazgo empático, y además te da información real para tomar decisiones con inteligencia.",
                                empatia: 9, asertividad: 7, ie: 8, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Aprobar los cambios de turno automáticamente para evitar conflictos y mantener la paz en el equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es resolver con debilidad, no con empatía. No estás escuchando realmente; estás evitando la conversación difícil. El equipo percibirá que las decisiones se toman por presión, no por criterio.",
                                empatia: 6, asertividad: 2, ie: 5, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Hablar personalmente con Carlos, Paola y Andrés para entender qué está pasando y mostrarles que te importa su situación como personas, no solo como operadores.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque la intención es buena, ir directamente a los operadores sin pasar por Sebastián socava la autoridad del líder de campo. Primero se conversa con Sebastián; luego, si es necesario, se hace visible el apoyo de la gerencia.",
                                empatia: 8, asertividad: 3, ie: 7, cohesion: 5
                              }
                  ]
                }
          ],
          transicion: "Sebastián descubre que Paola lleva tres semanas durmiendo menos de cuatro horas porque cuida a su padre con cáncer en casa. Carlos está en proceso de separación y maneja la custodia de dos hijos. Andrés simplemente explotó: 'No soy un robot, Roberto.' El plan operativo que diseñaron juntos — 12 horas, no 14 — ahora enfrenta su primera crisis humana real."
        },
        {
          id: 2,
          titulo: "Escena 2: El Desgarrón",
          narrativa: `La información llegó como una descarga eléctrica. Sebastián le mandó un audio de WhatsApp a las 11:47 de la noche: 'Jefe, no puedo seguir así. Me están pidiendo que presione a Carlos para que se quede en el turno de noche y él me dijo que si lo hago, renuncia. Paola ya no viene mañana. Dice que no encuentra quién cuide a su papá.' Roberto escuchó el audio tres veces. La voz de Sebastián — un hombre que nunca se quejaba, que había cargado tuberías de 200 kilos sin pestañear — temblaba.

A las 7 de la mañana siguiente, Roberto estaba en la planta de Cartagena antes que nadie. Encontró a Sebastián en la caseta de control, con ojeras profundas y un café que llevaba cuatro horas frío sobre el escritorio. No había dormido. Le había cubierto el turno de Paola él mismo. Roberto sintió el peso del mundo sobre los hombros de su coordinador y entendió algo que había estado evitando: el plan de 12 horas que habían diseñado juntos no estaba funcionando en la realidad. La teoría era sólida. La ejecución era un campo minado humano.

Hernán llamó desde Bogotá a las 9: 'La junta quiere el informe de avance mañana. Necesito números, Roberto. El director financiero ya está preguntando por qué no hemos aumentado la producción.' La presión subía por todos lados. El trimestre fiscal se cerraba. Los distribuidores estaban llamando. Y en el piso de operaciones, un equipo de ocho personas estaba al borde del colapso.

Roberto tomó una decisión que cambiaría todo: canceló la reunión con Hernán y en su lugar, se quedó dos horas en el piso de producción observando. Habló con cada operador. Escuchó. Lo que descubrió lo estremeció — el ausentismo no era pereza ni deslealtad. Era agotamiento. Tres personas habían tenido accidentes menores en las últimas dos semanas que no habían reportado porque 'dar parte por perdido era admitir debilidad'. La cultura de seguridad de Fertimax — la que aparecía en los carteles — existía solo en los papeles.

Tenía que hablar con la junta en 18 horas. No tenía un plan operativo. Tenía un equipo quebrado y una deuda con los distribuidores. Y ninguna solución fácil a la vista.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Con 18 horas antes de la junta, un informe de avance incompleto, y un equipo al límite, ¿qué haces?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Presentar un informe con los números que Hernán espera — producción al 95% del objetivo — ganando tiempo mientras intentas resolver los problemas internamente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Mentir a la junta es un suicidio profesional que se descubre. Y lo que es peor: si ocurre un accidente mayor por sobrecarga y se descubre que sabías, la responsabilidad legal y moral es devastadora. No hay 'ganar tiempo' que valga eso.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "Llamar personalmente al presidente de la junta, Carlos Alvarado, para explicarle la situación antes de la reunión formal y pedir apoyo para replantear las expectativas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque la intención es buena, saltarse el conducto regular antes de la junta puede percibirse como deslealtad institucional. Es mejor llevar la conversación difícil al meeting formal con datos sólidos.",
                                empatia: 7, asertividad: 5, ie: 6, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Pedirle a Hernán que presente él el informe operativo mientras tú te enfocas en resolver la crisis del equipo en planta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es una forma de evitar la responsabilidad. Roberto es el gerente de la Zona Norte — la junta espera que él dé la cara. Desaparecer en plena crisis daña la confianza de la junta en el liderazgo de la zona.",
                                empatia: 5, asertividad: 3, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Ir a la junta con la verdad completa: los números reales, los accidentes no reportados, el estado del equipo y una propuesta que priorice seguridad sobre volumen — aunque esto implique recibir presión directa.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es liderazgo de integridad. La junta necesita información real para tomar decisiones correctas. Ocultar los accidentes o el estado del equipo no solo es peligroso, es cobarde. Y la propuesta priorizando seguridad muestra visión estratégica.",
                                empatia: 8, asertividad: 9, ie: 9, cohesion: 8
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Hernán te dice que el director financiero pushará por despidos si las métricas de producción caen por debajo del 90% del objetivo. Sabes que el equipo no puede sostener el ritmo actual. ¿Qué le dices a Hernán?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Decirle a Hernán con claridad: 'La amenaza de despidos no puede ser la palanca para gestionar esta crisis. Si forzamos más horas, vamos a tener rotación masiva y accidentes — eso es más caro que cualquier despido. Necesito que me cubras mientras diseño una solución sostenible.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es comunicación asertiva con un par — no te pliegas a la amenaza, pero tampoco destruyes la relación. Estás creando el espacio para una solución mejor, con datos y lógica de negocio.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 7
                              },
                              {
                                letra: "B",
                                texto: "Aceptar que hay que ser duros: 'Tienes razón, Hernán. Vamos a implementar un sistema de incentivos por productividad y quien no cumpla, que se vaya.' Una empresa del sector petroquímico opera bajo presiones financieras reales y la rotación puede verse como un costo acceptable frente al riesgo de producción.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es reproducir exactamente la cultura tóxica que está causando el problema. Incentivos por productividad en un equipo agotado genera más rotación, más ausentismo, y potencialmente más accidentes. No es liderazgo — es transferencia de presión.",
                                empatia: 2, asertividad: 7, ie: 3, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Quedarte callado y evitar el confronto. Procesar la información solo y tomar decisiones sin discutir con Hernán. Este es el estilo de liderazgo de muchos gerentes: procesar la información en silencio, no polarizar el espacio con confrontaciones prematuras.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El silencio no es neutralidad — es permitir que la presión se acumule sin resistencia. Hernán interpretará tu silencio como aprobación o como debilidad. La comunicación directa es indispensable en crisis.",
                                empatia: 4, asertividad: 2, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Sugerir que contraten personal temporal de una empresa de servicios para cubrir los turnos más críticos mientras el equipo se recupera. El personal temporal existe precisamente para coyunturas como esta, y el área de contratación tiene proveedores con experiencia en industria.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La intención es buena, pero operar en una planta petroquímica sin formación específica en seguridad toma semanas — no días. Y el personal temporal no conoce los protocolos, lo que incrementa el riesgo de accidentes dramáticamente.",
                                empatia: 6, asertividad: 6, ie: 5, cohesion: 5
                              }
                  ]
                }
          ],
          transicion: "Roberto habló con la junta. Presentó los números reales, los accidentes menores no reportados, y una propuesta que sorprendió a todos: reducir la producción al 87% del objetivo durante tres semanas, implementar un programa de bienestar psicosocial de emergencia, y ofrecer turnos de 8 horas con ampliación del equipo mediante reclasificación de dos técnicos. El director financiero, Lucía Bernal, lo miró como si hubiera perdido la cabeza. Pero Carlos Alvarado, el presidente, se inclinó hacia adelante y dijo: 'Cuénteme más.' Tres semanas para cambiar una cultura de 30 años."
        },
        {
          id: 3,
          titulo: "Escena 3: El Terremoto Interno",
          narrativa: `La aprobación de la junta fue condicional. Lucía Bernal había puesto su visto bueno sobre el plan, pero con una cláusula que pesaba como condena: 'Tienes hasta el 15 de noviembre para demostrar que la producción puede volver al 95% sin incremento en costos operativos. Si no lo logras, el recorte de personal vuelve a la mesa.' Roberto sabía que eso era un arma de doble filo — la junta le había dado una oportunidad, pero también un plazo.

De vuelta en Cartagena, el primer desafío no fue operativo. Fue cultural. Sebastián convocó una reunión de emergencia con los operadores y técnicos. Roberto pidió estar presente — quería que vieran que su voz había llegado arriba. La reacción de Carlos, el operador más experimentado del turno día, fue inmediata: 'Entonces ¿nos están diciendo que el que se quejó tiene premio? Llevo 22 años aquí y nunca me quejé.' Paola, que había vuelto después de una semana de ausencia, se puso su bata como si fuera a marcharse y dijo: 'Es que parece que para ser humano hay que romperse primero.' La tensión en la sala era palpable.

Hernán, que había viajado desde Bogotá para la reunión, tomó la palabra con su tono más burocrático: 'El programa es voluntario. Quien quiera participar, se anota. Los demás siguen con el esquema normal.' La respuesta fue un silencio frío. Nadie se movió. Los operadores miraban al piso. Roberto entendió lo que estaba pasando: el programa de bienestar se estaba percibiendo como un privilegio para los débiles, no como un derecho para todos. La cultura de la industria estaba rechazando su propia medicina.

Sebastián se puso de pie, visiblemente tenso: 'Yo voy a participar.' Un murmullo recorrió la sala. 'Y si alguien tiene problema con eso, se puede ir a hablar conmigo afuera.' La situación estaba al borde de la ruptura. Roberto tenía que intervenir — no podía permitir que esto se convirtiera en una pelea entre el equipo que pedía ayuda y el que la veía como debilidad.

Esa noche, Roberto recibió un mensaje de Felipe, el representante sindical de los operadores: 'Don Roberto, aquí en Fertimax nunca se ha hecho nada así. La gente tiene miedo de que sea una trampa para identificar a los 'débiles' y después quitarlos de la lista de promoción. Usted me entiende.' El mensaje tenía razón — la desconfianza tenía raíces profundas. En una industria donde el sindicalismo había sido históricamente reprimido, la sospecha era estructural.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Ante la reacción de Carlos y la ruptura inminente en el equipo, ¿qué hace Roberto?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Dejar que Sebastián maneje la situación — él es el líder de campo y tiene más credibilidad con el equipo que cualquier gerente de escritorio. Un líder de campo con credibilidad real entre el equipo puede lograr en minutos lo que un gerente tarde semanas en conseguir; delegar a quien tiene relación directa tiene lógica.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Sebastián ya tomó posición al decir que participaría. Si Roberto se retira, la intervención se percibe como cobardía del liderazgo y queda la imagen de que 'los de arriba observan y los de abajo se pelean'. El gerente tiene que estar presente en el momento difícil.",
                                empatia: 6, asertividad: 3, ie: 5, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "Hablar individualmente con Carlos después de la reunión, en privado, para entender su resistencia y buscar una solución personalizada. Las conversaciones individuales permiten explorar las resistencias específicas de cada persona sin exponerlos frente al grupo, lo que reduce la presión y favorece respuestas más honestas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es necesario pero insuficiente como PRIMER movimiento. Si hablas en privado con Carlos sin abordar el tema públicamente, el resto del equipo interpretará que 'el que hace ruido tiene atención individual'. Hay que hablar al grupo primero.",
                                empatia: 7, asertividad: 5, ie: 6, cohesion: 6
                              },
                              {
                                letra: "C",
                                texto: "Intervenir públicamente reconociendo la frustración de Carlos y de quienes se sienten penalizados por no haberse quejado. Usar la conversación como una oportunidad para redefinir el programa como un derecho de todos, no un privilegio.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Roberto no puede permitir que el programa se instale como un botín de los que 'se rompieron primero'. Debe redefinir la narrativa: esto no es debilidad, es dignidad. Y el líder tiene que decirlo — en voz alta, frente a todos.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Cancelar el programa de bienestar y volver al esquema anterior, para no generar más división en el equipo. Volver al esquema original no es rendición permanente; puede ser un paso táctico mientras se genera más consenso antes de relanzar el programa con mayor preparación.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto sería claudicar ante la presión cultural más tóxica de la organización. Volver al esquema anterior es validar que 'aguantar sin quejas' es el único camino aceptable — y eso es exactamente lo que estaba destruyendo al equipo.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Después de la reunión, ¿cómo debe Roberto abordar la desconfianza de Felipe y el sentimiento sindical?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Llamar a Felipe personalmente y prometerle que el programa no afectará a nadie del sindicato — una garantía verbal de protección.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Las promesas verbales en contextos de alta desconfianza no valen nada — y pueden sonar a manipulación. Felipe merece un proceso formal, no una conversación de pasillo. La informalidad aquí es una señal de falta de compromiso.",
                                empatia: 6, asertividad: 4, ie: 5, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "Ignorar el mensaje de Felipe — si tiene dudas, que las plantee en los canales formales de representación sindical.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es cerrar la puerta a la comunicación. Cuando un líder ignora una señal de alarma cultural, no hace que el problema desaparezca — hace que crezca en la oscuridad. Felipe no está generando problemas; está advirtiendo.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Hablar con otros operadores individualmente para contrarrestar la versión de Felipe y entender 'quién realmente está detrás de la resistencia'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es hacer trabajo de inteligencia interna, no liderazgo. Dividir al equipo para neutralizar al representante sindical es una estrategia de manipulación que destruye la confianza. Si Felipe tiene dudas, se abordan — no se aislan.",
                                empatia: 2, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Pedir una reunión formal con Felipe como representante sindical y con Hernán presente, para explicar el programa con transparencia total: objetivos, criterios de participación, protección frente a represalias, y compromiso escrito de la gerencia.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La desconfianza sindical no se rompe con buenas intenciones — se rompe con institucionalidad. Un compromiso formal, documentado, con testigos, le da a Felipe la credibilidad que necesita para calmar a su base. Es liderazgo democrático real.",
                                empatia: 8, asertividad: 8, ie: 8, cohesion: 9
                              }
                  ]
                }
          ],
          transicion: "Roberto reunió al equipo completo — todos, no solo a los que pedían ayuda — y dijo algo que nadie esperaba: 'Aquí el que se haya quejado y el que no, tiene el mismo derecho. El que haya pedido cambio y el que se haya quedado callado, van en el mismo bus. Esto no es un programa para débiles. Es una empresa que está aprendiendo a no romper a su propia gente.' La sala quedó en silencio. Luego, Paola aplaudió. Y después, lentamente, casi todos siguieron."
        },
        {
          id: 4,
          titulo: "Escena 4: La Semana Cero",
          narrativa: `El programa arrancó el primero de noviembre. Lo llamaron 'Prototipo Bienestar' — un nombre deliberadamente modesto para no generar más expectativas de las que podían cumplir. Ocho semanas de intervenciones: grupos focales semanales con un psicólogo organizacional, ajustes en los turnos para permitir flexibilidad familiar, y un sistema de 'parada preventiva' que permitía a cualquier operador solicitar una pausa de 20 minutos sin justificación ni registro.

Los primeros resultados fueron mixtos. En la segunda semana, cuatro operadores pidieron la parada preventiva el mismo día. La producción cayó un 3% adicional. Lucía Bernal llamó a Roberto personalmente: 'Te di tres semanas de margen y ya estás en rojo.' Hernán, por su parte, estaba visiblemente incómodo con el programa: 'No es que esté en contra, Roberto, pero el piso está empezando a ver el programa como un 'día de spa'. La gente está pidiendo pausas por cualquier cosa.' Roberto sentía que caminaba sobre un hilo: demasiado lento y la junta lo devoraría; demasiado rápido y el equipo lo rechazaría.

La situación se complicó cuando un técnico llamado Andrés — el mismo que había dicho 'no soy un robot' — llegó borracho al turno de noche. Fue Sebastián quien lo interceptó antes de que subiera a la planta. El técnico estaba en crisis: había perdido a su madre hacía un mes y nadie se lo había dicho a nadie. 'Pensé que si pedía ayuda, iban a pensar que no sirvo para esto', dijo Andrés, visiblemente roto. 'Aquí el que se rompe, se va.'

Roberto tomó una decisión que habría sido impensable tres semanas atrás: suspendió a Andrés con goce de salario y lo incluyó directamente en el programa de acompañamiento psicológico, con seguimiento semanal. No lo ocultó a la junta. No lo disculpó. Lo hizo visible. Cuando Hernán se enteró, su reacción fue predecible: 'Si ahora los que llegan borrachos tienen licencia psicológica, ¿dónde queda la disciplina?' Roberto le respondió: 'Aquí la disciplina que funciona es la que evita que alguien llegue borracho a operar una planta de amoníaco. La otra es solo castigo.'`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Frente a la caída del 3% en producción durante la segunda semana y la presión de Hernán y Lucía, ¿qué hace Roberto?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Cancelar la parada preventiva para recuperar la producción inmediatamente y demostrar que el programa no está comprometiendo los resultados. Una garantía verbal de un gerente tiene el peso de su trayectoria en la empresa, y en culturas industriales la palabra directa a veces vale más que los documentos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Eliminar el programa en la segunda semana por una caída del 3% es tirar la toalla antes de tiempo y validar la crítica de Hernán. El programa necesita al menos un mes para mostrar resultados. Y si se cancela por presión, la desconfianza se multiplica.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Presentar a Hernán y Lucía los datos del programa con honestidad: cayó la producción, pero también cayó el ausentismo y las licencias médicas. Usar los números reales para argumentar que el programa está funcionando en las métricas correctas.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Roberto tiene que traducir el valor del programa al idioma que la junta entiende: números. Si el ausentismo cae y las licencias bajan, el programa ya está generando retorno. Hay que mostrar la ecuación completa, no solo el costo.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 7
                              },
                              {
                                letra: "C",
                                texto: "Implementar la parada preventiva solo para los turnos de día y mantener el esquema anterior para turnos de noche, para proteger la producción crítica. Los canales formales del sindicato existen para este tipo de inquietudes y evitan la informalidad que puede malinterpretarse como presión o condicionamiento.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto crea un sistema de dos velocidades que genera resentimiento en el turno de noche. El mensaje implícito es: 'los del turno de noche son más duros, no necesitan ayuda.' Es exactamente la inequidad que el programa intentaba eliminar.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Buscar apoyo del presidente Carlos Alvarado para respaldar el programa y presionar a Hernán y Lucía para que se alineen con la visión de la junta. Comprender qué operadores tienen dudas reales versus cuáles se dejan influir por narrativas externas es información valiosa antes de tomar cualquier decisión.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Escalar antes de diálogo es un error. Primero hay que hablar directamente con Hernán y Lucía usando datos, no con el presidente usando influencia. Esto erosiona la relación con los compañeros de dirección y genera una dinámica de patronazgo.",
                                empatia: 5, asertividad: 4, ie: 4, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Tras la crisis de Andrés, ¿cuál es la mejor respuesta de Roberto ante la posición de Hernán sobre la disciplina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Proponer a Hernán una conversación formal sobre qué significa 'disciplina' en una planta de alto riesgo: que alguien pueda pedir ayuda sin ser estigmatizado es disciplina preventiva, no permisividad.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Hernán no es el enemigo — es un líder que piensa en resultados con el marco que conoce. Redefinir 'disciplina' en términos de seguridad operativa le da a Hernán una narrativa que puede defender frente a la junta. Es persuasión a través del lenguaje común.",
                                empatia: 8, asertividad: 7, ie: 8, cohesion: 8
                              },
                              {
                                letra: "B",
                                texto: "Ignorar la crítica de Hernán y seguir adelante con el programa sin darle explicaciones — no tiene que justificar cada decisión ante un compañero de igual jerarquía.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Hernán es el director de operaciones — si no está alineado, el programa puede ser saboteado desde dentro. Ignorarlo no lo hace desaparecer. Roberto necesita a Hernán como aliado, no como espectador crítico. La conversación difícil es necesaria.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Responder que 'la vida real no es un manual de recursos humanos' y que decisiones como la de Andrés se toman caso por caso sin crear precedentes.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es una respuesta defensiva que no Liderazgo nada. 'Caso por caso sin precedentes' es exactamente la arbitrariedad que genera desconfianza. Si el programa no tiene principios claros, se convierte en el favor del gerente — no en política institucional.",
                                empatia: 3, asertividad: 6, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Presentar la decisión sobre Andrés a la junta como un caso piloto que demuestre el valor del programa de acompañamiento psicológico.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Llevar cada decisión al nivel de la junta es infantilizar el proceso. La junta delega en Roberto; si él delega todo de vuelta, pierde credibilidad como líder regional. Las decisiones operativas se toman en el nivel operativo.",
                                empatia: 5, asertividad: 4, ie: 4, cohesion: 4
                              }
                  ]
                }
          ],
          transicion: "En la cuarta semana, algo cambió. El ausentismo cayó un 31%. No hubo ningún accidente reportable en 18 días consecutivos — récord del año. Tres operadores que nunca hablaban en las reuniones de seguridad comenzaron a aportar ideas. La producción, sin forzar, comenzó a recuperarse. Roberto recibía mensajes de Sebastián: 'Jefe, esto está cambiando. La gente viene diferente a la planta.'"
        },
        {
          id: 5,
          titulo: "Escena 5: El Balance",
          narrativa: `El 15 de noviembre llegó con la precisión de una cita con la verdad. Roberto tenía los números finales: la producción de la Zona Norte había alcanzado el 94% del objetivo — tres puntos por debajo del 95% que la junta había puesto como meta. No era una victoria limpia. Era algo más complejo: un equipo que no se había desmoronado, una planta que seguía operando, y una cultura que había mostrado las primeras grietas de algo que podría ser transformación.

La reunión de cierre fue en la sala de juntas de Bogotá. Asistieron Roberto, Hernán, Lucía Bernal, y Carlos Alvarado. El director financiero tenía los números en la mano y la ceja levantada. Roberto sintió el peso de 45 días de trabajo condensado en un PowerPoint de 12 diapositivas.

Pero antes de las cifras, contó una historia. Habló de Paola, que había vuelto a la planta después de un mes de haber cuidado a su padre moribundo. Habló de Andrés, que llevaba 30 días sobrio y ahora era el operador que más horas de acompañamiento psicológico daba a los compañeros nuevos. Habló de Carlos — el mismo Carlos que había dicho 'yo nunca me quejé' — que había sido el primero en proponer un sistema de pares para observar condiciones de seguridad sin necesidad de supervisores. Los números estaban ahí: 31% menos ausentismo, 18 días sin accidentes, 4 ideas de mejora propuestas por operadores y técnicos sin filtro jerárquico.

Lucía lo interrumpió: 'Roberto, los números dicen 94%. Te faltó un punto.' Roberto no se inmutó: 'Lucía, el 94% lo logramos con un equipo que no se ha desmoronado. El 87% de hace dos meses lo teníamos con un equipo que estaba caminando hacia el precipicio. La pregunta no es si me faltó un punto. La pregunta es qué habría pasado con el 100% si hubiéramos seguido como antes.' El silencio que siguió fue diferente al de la primera junta — no era tensión. Era reflexión.

Carlos Alvarado se reclinó en su silla y dijo: 'La junta quiere expandir este programa a las zonas Centro y Sur. ¿Quién lidera la implementación?' Roberto sintió que el suelo se movía. No bajo sus pies — bajo los cimientos de Fertimax. Hernán, a su lado, fue el primero en hablar: 'Yo quiero ser parte de eso.' Nadie esperaba esas palabras. Pero todos las necesitaban.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Ante la propuesta de Carlos Alvarado de expandir el programa a las otras zonas, ¿cuál es la mejor respuesta de Roberto?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Aceptar la expansión inmediatamente, sintiéndose validado por el respaldo del presidente y demostrando que el programa fue un éxito incuestionable.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es celebrar antes de tiempo y sin matices. El programa tuvo resultados reales pero también costos: un punto abaixo de la meta, críticas internas, tensión con Hernán. Presentar esto como 'éxito incuestionable' es negar la complejidad y generar expectativas que pueden romperse.",
                                empatia: 3, asertividad: 6, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Pedir tiempo para evaluar si la organización está lista para una expansión antes de aceptar — los resultados de la Zona Norte podrían no replicarse en otros contextos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Aunque la prudencia tiene sentido, pedir tiempo sin una razón concreta puede percibirse como falta de convicción en el propio programa. Si Roberto no cree que esto puede funcionar en otras zonas, ¿por qué lo implementó en la Norte? La cautela excesiva aquí es una forma de autofreno que la junta puede interpretar como debilidad.",
                                empatia: 6, asertividad: 4, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Agradecer el reconocimiento pero decline la expansión, sugiriendo que otro líder con más experiencia en gestión del cambio debería asumir el proyecto nacional.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es rechazar la responsabilidad en el momento de mayor impacto. Si Roberto lideró el programa, tiene la credibilidad y el conocimiento del terreno para expandirlo. Delegarlo a 'alguien más experimentado' es una forma de abandonar el proyecto en su momento más crítico.",
                                empatia: 5, asertividad: 3, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Aceptar la expansión con la condición de que Hernán sea co-líder del proyecto a nivel nacional, porque la transformación cultural necesita ser portada por operaciones, no solo por gestión de personas.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es liderazgo generativo. Roberto no se atribuye el mérito exclusivo — lo comparte con Hernán, que ha sido su crítico más duro. Esto no solo asegura que el programa tenga respaldo operativo real, sino que convierte a Hernán en parte de la solución. La transformación sostenible requiere que los escépticos se conviertan en campeones.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "En la cena posterior a la junta con el equipo de la Zona Norte, Roberto toma la palabra. ¿Qué dice?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Gracias por confiar en el programa. Los números demuestran que tomamos la decisión correcta. Ahora viene la parte difícil: mantener estos resultados.' Plantear metas ambiciosas pero posibles en un ambiente distendido puede energizar al equipo y establecer una visión compartida que dé sentido al esfuerzo realizado.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es correcto pero frío. Reduce la victoria a números y no reconnecta con la humanidad del equipo. El mensaje implícito es: 'ahora tienen que mantener esto' — lo cual puede sentirse como más presión, no como reconocimiento.",
                                empatia: 5, asertividad: 6, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "'Les dije que iba a hacer todo lo posible por ustedes. Lo hice. Y ustedes respondieron. Así se trabaja en Fertimax.' Las celebraciones de equipo refuerzan el sentido de pertenencia y reconocen no solo los resultados sino el proceso humano que fue necesario para alcanzarlos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es liderazgo paternalista. 'Yo hice por ustedes' coloca a Roberto en el centro de la victoria. El equipo no respondió porque él lo pidiera — respondió porque encontró el espacio para hacerlo. El mérito es del equipo; el liderazgo fue el facilitador.",
                                empatia: 5, asertividad: 8, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "'Esto no fue un éxito de Roberto Méndez. Esto fue Paola, Andrés, Carlos, Sebastián, Hernán, y todos los que decidieron que ser fuerte no significa estar solo. El programa no existiría sin ustedes. Y la próxima fase tampoco.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "El verdadero líder concede el mérito a quienes hicieron el trabajo. Esto no solo es humildad — es una declaración estratégica: el programa pertenece al equipo, no al gerente. Y eso es lo que lo hace institucionalizable. Lo que el líder hace por el equipo dura una temporada; lo que el equipo hace por sí mismo dura generaciones.",
                                empatia: 10, asertividad: 7, ie: 10, cohesion: 10
                              },
                              {
                                letra: "D",
                                texto: "No decir nada y dejar que Sebastián, como líder de campo, tome la palabra y organice el reconocimiento del equipo. Escuchar las perspectivas individuales de cada persona al finalizar un ciclo intenso es una práctica de liderazgo reflexivo que fortalece la relación líder-equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Hacer de observador en el momento de cierre es ausencia de liderazgo. Sebastián merece reconocimiento, sí — pero Roberto tiene que estar ahí, presente, dando la cara. El silencio puede sentirse como que el gerente ya pasó a otra cosa.",
                                empatia: 6, asertividad: 2, ie: 5, cohesion: 5
                              }
                  ]
                }
          ],
          transicion: "Tres meses después, el programa 'Prototipo Bienestar' se llamaba oficialmente 'Política de Bienestar Integral Fertimax' y operaba en cuatro zonas del país. Andrés fue promovido a supervisor de seguridad. Paola lideraba un grupo de apoyo entre operadores. Carlos, el escéptico original, fue el primero en inscribirse como voluntario para entrenar a los nuevos psicólogos de la empresa. Y Hernán presentaba los resultados del programa en la junta anual con más convicción que el propio Roberto. La cultura de Fertimax no había cambiado en 90 días. Pero había dejado de ser la misma."
        }
    ]
  },

  {
    id: 4,
    titulo: "El Dolor que Heredó",
    tema: "Líder nuevo con equipo disfuncional",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: El Sobre Bajo la Puerta",
          narrativa: `Valentina Ríos llegó a Fertimax Cartagena el 3 de septiembre como nueva gerente de Desarrollo Comercial, con un MBA de la Universidad de los Andes y seis años de experiencia en multinacionales del sector químico. Era, según el directorio de recursos humanos, 'el perfil exacto que la empresa necesita para modernizar la fuerza comercial.' Cuando cruzó la puerta de vidrio del edificio en el Parque Industrial de Mamonal, no sabía que estaba entrando a un campo minado.

Su oficina estaba al fondo del pasillo — el llamado 'corredor de los nuevos', donde la empresa estacionaba a quienes todavía no sabían dónde ubicarlos. El escritorio tenía polvo. El computador tardó 40 minutos en configurarse porque el departamento de TI no había recibido la solicitud a tiempo. A las 4 de la tarde, cuando Valentina fue a presentarse con el equipo que supuestamente lideraría, descubrió que nadie le había avisado a nadie.

La sala de reuniones estaba ocupada por cinco personas que no levantaron la vista cuando ella entró. Había un hombre mayor — 55 años, aproximadamente — con una camisa de manga larga enrollada hasta los codos, que se identificó después como Roberto Fuentes, el ejecutivo de cuenta más antiguo de la zona. A su lado, una mujer de 40 y tantos con una expresión de permanente cansancio: Marcela Cotes, la analista comercial senior. En la puerta, un joven de 28 años llamado Sebastián Mora — recién contratado hacía seis meses — que miraba su celular con la pantalla boca abajo. Y dos personas más que ni siquiera fueron formalmente presentadas.

Valentina se presentó, explicó su rol, preguntó por los proyectos actuales. La respuesta vino de Marcela, no de Roberto: 'Este es un equipo que funciona bien sin mucha interferencia. Llevamos años haciendo esto sin un gerente comercial entre nosotros y el cliente.' El mensaje era claro. Roberto, el ejecutivo de cuenta más senior, había sido pasado por alto para el puesto de gerente — de nuevo. Y todos en la sala lo sabían.

Esa noche, Valentina encontró un sobre debajo de su puerta. No tenía remitente. Dentro había una hoja con un nombre y una frase: 'Sebastián Mora — el único que todavía tiene qué perder.' Era una advertencia o una declaración de guerra. Todavía no sabía cuál.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina tiene tres días antes de su primera presentación oficial ante la gerencia general. Su equipo no la ha adoptado, el sistema no está configurado, y recibió un sobre anónimo. ¿Cuál es su primer movimiento?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Convocar una reunión individual con cada miembro del equipo esta semana, comenzando por Roberto Fuentes — el más poderoso informalmente — para entender la historia, los proyectos y las tensiones antes de hacer cualquier movimiento público.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto demuestra inteligencia contextual. Antes de imponer autoridad, Valentina necesita mapear el terreno. Hablar primero con Roberto — el líder informal — no solo es respetuoso, sino estratégico: si Roberto se alinea, el equipo suele seguir.",
                                empatia: 9, asertividad: 7, ie: 8, cohesion: 7
                              },
                              {
                                letra: "B",
                                texto: "Olvidar el sobre y convocar una reunión general del equipo para presentar su visión y plan de trabajo — mostrar autoridad desde el primer día. Priorizar el cierre de procesos pendientes antes de cualquier nueva iniciativa es una práctica sólida de gestión que evita la fragmentación y el agotamiento del equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El sobre es una señal de que hay dinámicas que Valentina no conoce todavía. Ignorarlo y mostrar autoridad prematuramente puede convertir la resistencia pasiva en activa. Además, sin conocer el terreno, su 'visión' será ciega.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Reportar el sobre anónimo a recursos humanos como un incidente de acoso laboral y pedir una investigación inmediata. Consultar con expertos externos antes de presentar garantiza que la propuesta esté respaldada por experiencias comparables en otros contextos del sector.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es reaccionar con el cuchillo antes de ver la amenaza. El sobre podría ser una advertencia legítima de un problema sistémico — no necesariamente acoso. Llevarlo a RRHH antes de entender el contexto envía a todo el equipo el mensaje de que la nueva gerente 'reporta' en lugar de 'lidera'.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Hablar directamente con Sebastián — el nombre del sobre — para preguntarle qué está pasando y por qué alguien lo menciona como 'el único que tiene qué perder'. Una presentación rápida demuestra agilidad organizacional y establece la credibilidad del área desde el inicio, mostrando capacidad de respuesta ante situaciones complejas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto pone a Sebastián en el centro de la tormenta antes de que Valentina tenga contexto. Si él está en el sobre, significa que alguien quiere que ella lo vea de cierta forma. Ir directamente a él sin entender el juego puede generar desconfianza o ponerlo en una posición incómoda.",
                                empatia: 6, asertividad: 4, ie: 5, cohesion: 4
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Valentina descubre que Roberto Fuentes lleva 23 años en Fertimax, ha perdido dos procesos de promoción antes de este, y tiene relaciones personales profundas con los clientes más importantes de la zona. ¿Cómo usa esta información?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Mantener distancia profesional con Roberto para evitar que su influencia genere dependencia excesiva del equipo hacia un solo líder informal.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es tratar a Roberto como una amenaza en lugar de un recurso. Mantener distancia con el ejecutivo de mayor experiencia y red de clientes en la zona es como llegar a una pelea con un arma menos. No neutraliza el poder — lo empuja a la oposición.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Usar esta información para construir un caso ante la gerencia sobre por qué Roberto debería ser redirigido a un rol lateral y 'despejar el camino' para una renovación del equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es manipulación política disfrazada de estrategia. Tratar de remover a Roberto antes de siquiera haber trabajado con él es no solo injusto — es estratégicamente suicida. Su conocimiento de clientes y cultura institucional es irremplazable en el corto plazo.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Confrontar a Roberto directamente con esta información en su primera reunión individual: 'Sé lo que ha pasado con los procesos de promoción y entiendo la frustración. Pero necesito que trabajemos juntos.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Saber información sensible sobre alguien y usarla como opening move es una táctica de poder, no de liderazgo. Puede percibirse como manipulación — 'sé tus puntos débiles' — y generar defensividad en lugar de alianza. La empatía sin permiso es solo otra forma de control.",
                                empatia: 3, asertividad: 6, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Usar esta información para diseñar una estrategia de integración donde Roberto tenga un rol protagónico en la nueva visión comercial — reconocer su valor públicamente y convertirlo en un aliado estratégico.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Roberto no es un obstáculo — es el recurso más valioso de la zona. Valentina no llegó a reemplazar a nadie; llegó a sumar. Integrar a Roberto como arquitecto de la nueva visión, no como reliquia del pasado, es liderazgo inteligente.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              }
                  ]
                }
          ],
          transicion: "Valentina se reunió con Roberto primero. Le pidió 30 minutos de su tiempo en una cafetería fuera de la oficina — un gesto que él notó. No habló de la promoción perdida ni del sobre. Le preguntó sobre los clientes: 'Necesito que me enseñes el mapa. No sé cómo llegamos aquí sin ti.' Roberto la miró largamente y dijo: 'Nadie me había pedido que les enseñe el mapa. Siempre asumen que ya lo saben.'"
        },
        {
          id: 2,
          titulo: "Escena 2: El Mapa y las Grietas",
          narrativa: `Durante tres semanas, Valentina mapeó. Salió al campo con Roberto a visitar clientes en Santa Marta y Valledupar. Cenó con distribuidores en Barranquilla. Revisó los últimos 18 meses de reportes comerciales — y encontró algo que nadie le había dicho: el territorio estaba en declive. No era evidente en los números agregados porque Roberto había estado compensando con su cartera personal, pero el promedio de ventas por cliente llevaba tres trimestres cayendo. La zona estaba viviendo de la reputación de años anteriores.

Marcela, meanwhile, había estado corriendo el lado analítico con precisión matemática pero cero instinto comercial. Producía reportes que nadie leía — incluyendo ella misma. Cuando Valentina le preguntó qué veía en los últimos datos, Marcela se encogió de hombros: 'Yo muestro los números. Lo que el equipo hace con ellos no es mi responsabilidad.' Sebastián, el más joven, se estaba ahogando en tareas administrativas que consumían el 70% de su tiempo — tareas que podrían automatizarse en una mañana con el sistema correcto.

Pero la grieta más profunda no era operativa. Era relacional. Valentina descubrió que Marcela y Roberto no se hablaban directamente hacía 14 meses. Toda la comunicación entre ellos pasaba por Valentina — o por Sebastián, que fungía como mensajero involuntario. El detonante había sido una discusión sobre un reporte de precios que Marcela había compartido con un cliente sin consultar a Roberto primero. El cliente había usado la información para negociar un descuento que le costaba a Fertimax 200 millones de pesos al año.

Roberto nunca había perdonado. Marcela nunca había pedido perdón. Y el equipo había aprendido a navegar entre los dos — un juego de alianzas cambiantes que agotaba a todos excepto a los dos protagonistas.

En la cuarta semana, el directorio nacional anunció una auditoría de cumplimiento comercial. Todas las zonas serían evaluadas. La zona Cartagena era la más vulnerable: sus procesos de documentación eran inconsistentes, sus registros de cliente — incompletos, y su sistema de seguimiento — inexistente. Si fallaban la auditoría, la zona perdería el estatus de 'territorio premium' y con eso, el presupuesto de movilidad y representación del siguiente año.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Frente a un equipo con conflictos no resueltos, procesos inexistentes, y una auditoría en 6 semanas, ¿cuál es la estrategia de Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Intentar resolver el conflicto entre Marcela y Roberto primero, porque sin confianza básica entre los dos, cualquier plan de auditoría fallará. Una reorganización completa envía una señal contundente de que el liderazgo está tomando en serio los problemas y está dispuesto a hacer cambios estructurales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los conflictos de 14 meses no se resuelven en una conversación. Intentar mediación prematura sin suficiente contexto ni relación de confianza puede empeorar las cosas — y dejar a la zona completamente desarmada ante la auditoría.",
                                empatia: 8, asertividad: 4, ie: 6, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Priorizar la auditoría primero: crear un plan de emergencia de 6 semanas para documentar procesos y reconstruir registros, asignando responsabilidades claras a cada miembro del equipo según sus fortalezas — Roberto en clientes, Marcela en datos, Sebastián en sistemas.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es liderazgo pragmático: usar la presión externa (la auditoría) como aglutinante interno. Cuando el equipo tiene un objetivo común y urgente, los conflictos personales pueden posponerse temporalmente. Y asignar a cada uno según su fortaleza distribuye la carga equitativamente.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "Contratar un consultor externo para que maneje la auditoría y dejar que el equipo se enfoque en lo que sabe hacer — vender. Traer un consultor externo tiene la ventaja de la objetividad: alguien sin historia en el equipo puede hacer preguntas que los internos no se atreverían a hacer.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Externalizar la auditoría envía un mensaje claro: 'No confío en que puedan hacerlo.' En un equipo que ya tiene problemas de confianza, esto es combustible. Y además, ningún consultor conoce los clientes y los datos de la zona como el equipo.",
                                empatia: 3, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Presentar a la gerencia nacional un informe preliminar indicando que la zona necesita 3 meses más para estar lista para la auditoría, pidiendo una extensión. Comenzar por los procesos antes que por las personas evita señalamientos directos y reduce la resistencia inicial al cambio en equipos con alta tensión interna.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Pedir una extensión antes de siquiera intentar es admitir derrota. La gerencia nacional va a preguntar qué ha hecho la zona en el último mes — y si la respuesta es 'mapear', no va a ser suficiente. Hay que mostrar capacidad de ejecución bajo presión, no pedir más tiempo.",
                                empatia: 5, asertividad: 3, ie: 4, cohesion: 4
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Sebastián, que ha estado funcionando como mensajero entre Marcela y Roberto, le dice a Valentina que 'aquí nadie me deja trabajar, solo hacer recados'. ¿Cómo responde?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Hablar con Marcela y Roberto para pedirles que incluyan más a Sebastián en decisiones sustantivas y dejen de usarlo como intermediario.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto resuelve el síntoma pero no la causa. Y además, hablar con Marcela y Roberto sobre Sebastián sin que Sebastián lo sepa puede generar dinámicas extrañas. Primero se le da espacio real a Sebastián; luego, si no funciona, se interviene con los mayores.",
                                empatia: 6, asertividad: 5, ie: 6, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Explicarle que 'todos empezamos haciendo cosas pequeñas' y que debe tener paciencia — los roles importantes llegan con tiempo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es el discurso que la generación anterior le dio a la anterior. Sebastián tiene razón: está siendo utilizado como mensajero. 'Ten paciencia' en un contexto donde nadie le está modelando cómo ascender es simplemente negación de la realidad.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Darle a Sebastián un proyecto concreto de la auditoría con autonomía total y un canal directo contigo — no como recadero de los mayores, sino como responsable de un entregable real.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Sebastián tiene energía y quiere contribuir — pero está atrapado en un rol que no le permite crecer. Asignarle un proyecto con autonomía le da dignidad, dirección y la oportunidad de demostrar valor. Y le muestra al resto del equipo que Valentina distribuye oportunidades, no solo cargas.",
                                empatia: 9, asertividad: 8, ie: 8, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Proponerle a Sebastián que postule a una vacante en otra zona donde pueda tener más responsabilidad — si este equipo no puede aprovechar su potencial.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es esencialmente decirle 'aquí no hay futuro para ti' antes de intentar otra cosa. Pierdes al miembro más joven y flexible del equipo — justo el que más puede aportar en una transformación. Es rendirse antes de pelear.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              }
                  ]
                }
          ],
          transicion: "Sebastián took on the customer documentation project with a fire that surprised everyone — including Valentina. He stayed late three nights in a row building a database that had never existed. When he presented his first deliverable to the team, Marcela looked at the screen for a long moment and said: 'This is good work.' It was the first time anyone in that room had acknowledged anything from anyone else in 14 months. Roberto noticed. So did Valentina."
        },
        {
          id: 3,
          titulo: "Escena 3: Los Temblores",
          narrativa: `La quinta semana empezó con un temblor — no de tierra, sino de estructura. El director comercial nacional, un hombre llamado Andrés Vallejo, anunció una visita sorpresa a la zona Cartagena. Llegó sin aviso un jueves a las 8 de la mañana con dos asistentes y un maletín de contratos. 'Quiero ver cómo están ustedes antes de la auditoría', dijo con una sonrisa que no llegaba a los ojos. Valentina tenía 24 horas para preparar algo que pudiera presentar sin parecer que llevaba cinco semanas improvisando.

La reunión fue un desastre en cámara lenta. Andrés hizo preguntas puntuales sobre pipeline comercial, tasas de retención de clientes y tendencias de participación de mercado. Valentina tenía datos — pero su equipo no. Roberto tenía conocimiento — pero estaba respondiendo por Valentina antes de que ella pudiera hablar. Marcela miraba su laptop como si la ofendiera personalmente. Y Sebastián estaba sentado en el rincón tomando notas que nadie le había pedido.

Andrés terminó la reunión después de 45 minutos y llevó a Valentina aparte: 'Tengo dos problemas contigo. Primero, tu equipo no sabe lo que estás haciendo. Segundo, tú no sabes lo que ellos están haciendo. En cuatro semanas no puedo mandarte a la auditoría así. Necesito resultados o necesito un cambio.' No dijo 'cambio de quién.' No tenía que hacerlo.

Esa noche, Valentina recibió dos mensajes. El primero era de Roberto: 'No sé qué esperas de mí. Yo soy el que tiene los clientes. Pero si quieres que presente algo, necesito saber qué quieres decir.' El segundo era de Marcela: 'Iba a mandarte esto por correo pero me acuerdo que nunca contestas. Tengo datos que creo que necesitas. ¿Reunión mañana a las 7?' La paz parecía posible — o parecía una trampa. No había forma de saberlo todavía.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Con la presión de Andrés Vallejo y 4 semanas para la auditoría, ¿cuál es la mejor respuesta de Valentina al mensaje de Roberto?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Responde inmediatamente proponiendo una reunión mañana para construir juntos la presentación que Andrés espera — darle a Roberto el espacio de co-crear la estrategia y mostrarle que su experiencia es indispensable.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Roberto está pidiendo estructura, no poder. Después de la visita de Andrés, sabe que el sistema actual no funciona — y está ofreciendo su cooperación. Valentina debe agarrar esa mano antes de que se retire. La co-creación es el puente entre el conocimiento de Roberto y la visión de Valentina.",
                                empatia: 8, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Ignora el mensaje de Roberto por ahora y contesta primero a Marcela — ella tiene los datos y sin información no hay presentación que funcione.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Roberto es quien tiene la relación con los clientes y la credibilidad interna. Ignorar su mensaje mientras contesta a Marcela — la persona con quien él no habla — es una señal política fatal. Refuerza la narrativa de que Valentina 'elige bandos' en un equipo que ya está dividido.",
                                empatia: 5, asertividad: 3, ie: 5, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Responde con un mensaje genérico: 'Roberto, necesito que estemos alineados. Organicemos una reunión de equipo mañana.' No personalizar.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Roberto abrió la puerta con un mensaje personal y vulnerable — 'no sé qué esperas de mí.' Un mensaje corporativo de respuesta es cerrarla. Necesitaba un diálogo, no un broadcast. Esto es liderazgo distante en un momento que requiere proximidad.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Contesta al grupo de WhatsApp del equipo con un mensaje que incluya a todos: 'Mañana a las 7 AM reunión strategy session. Necesito a todos. Gracias, Roberto, por ofrecer tu apoyo.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es transparencia mal calibrada. Poner el mensaje de Roberto en un grupo le roba intimidad a su oferta — y puede hacer que se cierre. Hay diálogos que necesitan espacio privado antes de hacerse públicos. La transparencia no es siempre el primer paso.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 4
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Marcela propone una reunión a las 7 AM — antes del horario de oficina. Valentina sabe que Roberto suele llegar tarde los jueves porque visita clientes en la madrugada. ¿Qué hace?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Cambia la reunión a las 9 AM — un horario que acomode a todos por igual y evite privilegiar los ritmos individuales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Horario igualitario no es lo mismo que horario inteligente. Si Marcela quiere estar a las 7 y Roberto necesita estar en campo a las 8, forzar las 9 para 'todos' es acomodar al medio — y nadie queda cómodo. Los equipos maduros pueden tener horarios diferenciados.",
                                empatia: 6, asertividad: 5, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Acepta la hora con Marcela, pero le pide que permita que Roberto se conecte virtualmente a las 8, después de su visita a clientes — mostrando flexibilidad con ambos y sin privilegiar a nadie.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es crear un sistema inclusivo sin convertirlo en favor. La reunión a las 7 funciona para Marcela — seamos flexibles con su ritmo. La conexión virtual a las 8 funciona para Roberto — reconozcamos su realidad de campo. El equipo aprende que los horarios se adaptan a las personas, no al revés.",
                                empatia: 9, asertividad: 8, ie: 8, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Le pide a Marcela que le envíe los datos por correo en lugar de una reunión — evitando el tema del horario y enfocándose en la eficiencia.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Marcela ofreció una reunión — es un gesto extraordinario viniendo de ella. Rechazarla por correo es rechazarla. Y los datos en un correo no tienen el contexto que una conversación cara a cara proporciona. Cuando alguien abre la puerta, hay que atravesarla.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Le pregunta a Marcela directamente por qué quiere reunión tan temprano — '¿Qué está pasando?' — antes de aceptar el horario.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto puede sonar como sospecha o interrogatorio. Marcela está haciendo un gesto de apertura. Preguntar 'qué está pasando' antes de aceptar puede hacerla sentir que su oferta fue invitada a desconfianza — y cerrarla otra vez.",
                                empatia: 5, asertividad: 3, ie: 5, cohesion: 4
                              }
                  ]
                }
          ],
          transicion: "La reunión de las 7 AM con Marcela fue reveladora. Por primera vez, Valentina entendió que Marcela no era indolente — era indefensa. Su inglés era básico, sus modelos financieros estaban desactualizados, y sus herramientas de análisis eran hojas de cálculo de 2019. Ella sabía que estaba rezagada. Y tenía miedo. 'Si viene una auditoría, me van a pedir que presente en inglés con los del holding. No sé si puedo', dijo Marcela. Por primera vez, Valentina vio el problema real: Marcela no era el enemigo de nadie. Era la próxima víctima de un sistema que no la había preparado."
        },
        {
          id: 4,
          titulo: "Escena 4: El Incendio y el Agua",
          narrativa: `La tercera semana antes de la auditoría, el sistema de SAP de Fertimax se cayó durante 72 horas. Era una falla del servidor central en Bogotá — no era responsabilidad de la zona Cartagena. Pero el impacto fue devastador: no se podían generar órdenes de venta, ni actualizar inventarios, ni acceder a los históricos de clientes. La zona estaba ciega.

Roberto llamó desde Santa Marta: 'Tengo un cliente aquí que necesita una confirmación de precio AHORA. Si no se la doy, cierra con Petrounos.' Marcela dijo desde su escritorio, con la voz quebrada: 'No puedo hacer nada sin el sistema. ¿Qué quieres que haga?' Y Sebastián estaba tratando de hacer log manual de todo en una hoja de cálculo mientras la batería de su laptop se moría.

Valentina tomó tres decisiones en 20 minutos. Primero: llamó a Bogotá para escalar la falla del SAP y conseguir una ETA — y presionó lo suficiente para que el ticket de soporte técnico subiera a prioridad. Segundo: autorizó a Roberto a enviar una confirmación de precio manual usando la última lista de precios aprobada, con la firma digital de Valentina adjunta — asumiendo responsabilidad personal por cualquier discrepancia. Tercero: le pidió a Marcela que construyera un tracker de clientes de respaldo en Google Sheets, en vivo, que todos pudieran acceder desde sus teléfonos.

Todo esto antes de las 10 de la mañana. A las 6 PM, el sistema volvió. Roberto había salvado el cliente. Marcela había construido un tracker que el equipo estaba realmente usando. Y Sebastián había descubierto que podía resolver problemas técnicos que ni Bogotá sabía resolver.

Pero la victoria tuvo un costo. Valentina había tomado decisiones operativas que normalmente requerían aprobación de Bogotá. El director de TI — un hombre llamado Carlos Pinto — presentó una queja formal: 'La gerente de Cartagena tomó decisiones de sistema sin autorización.' El reporte fue a la Gerencia General. En 10 días, antes de la auditoría, Valentina tenía que explicar por qué había violado el protocolo — o retroceder y admitir que había actuado fuera de su autoridad.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina debe responder a la queja de Carlos Pinto ante la Gerencia General. ¿Cuál es su estrategia?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Defender su decisión argumentando que Carlos Pinto debería enfocarse en resolver las fallas de SAP en lugar de perseguir a quien las resolvió. Transferirla a otro equipo resuelve el conflicto inmediato y puede darle a Valentina perspectiva fresca en un entorno donde ya no tiene historia emocional acumulada.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es defensividad pura. Atacar a Carlos Pinto en lugar de explicar la situación hace que Valentina parezca que tiene algo que ocultar. Y puede ser cierto en el sentido de que violó protocolo — pero hay formas de explicar eso sin convertir la reunión en una pelea.",
                                empatia: 3, asertividad: 6, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Pedir una reunión con Carlos Pinto antes de responder a la Gerencia General, para resolver el conflicto en privado y presentar una posición conjunta. Escalar al área legal garantiza que cualquier decisión sobre la queja esté respaldada por el marco jurídico correcto y que la empresa esté protegida frente a contingencias.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto parece razonable pero es un error táctico. Si la Gerencia General ya tiene la queja, 'resolver en privado' puede verse como intentar silenciar al denunciante. La transparencia con la Gerencia General debe ser inmediata — Carlos puede esperar.",
                                empatia: 6, asertividad: 4, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Aceptar la falta y enviar una disculpa formal a Carlos Pinto y a la Gerencia General, prometiendo no repetir la conducta. Las evaluaciones de desempeño son el canal oficial de retroalimentación y permiten documentar tanto los logros como las áreas de mejora con el respaldo del proceso institucional.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es claudicar sin luchar. Si Valentina realmente cree que tomó la mejor decisión para la empresa, no debe disculparse por haber protegido un cliente. Una disculpa aquí establece un precedente: cuando haya la próxima crisis, el equipo se paralizará esperando permiso.",
                                empatia: 5, asertividad: 3, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Presentar los hechos con transparencia: el sistema estuvo caído 72 horas, el cliente estaba a punto de perderse, y existían opciones — tomó la que protegía los ingresos de la empresa. Ofrecer además un protocolo alternativo para futuras crisis que permita decisión rápida sin violar estructura.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es rendición de cuentas con contexto. No se esconde — explica. Y no solo se defiende: propone. La Gerencia General respeta a alguien que toma decisiones difíciles y además piensa en cómo evitar el problema la próxima vez. Es convertir un error aparente en liderazgo.",
                                empatia: 7, asertividad: 9, ie: 9, cohesion: 7
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Marcela, que ha estado observando cómo Valentina maneja la crisis, le dice: 'Aquí nadie había tomado una decisión así por nosotros. Siempre toca esperar a que Bogotá decida.' ¿Qué responde Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Así tienen que funcionar las cosas. Si todos esperamos a Bogotá, perdemos clientes. A partir de ahora, este equipo toma decisiones locales.' Un estudio de clima formal aporta datos representativos y permite detectar patrones que las conversaciones informales no revelan, con una metodología rigurosa y comparable.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es liderazgo carismático pero sin bases. 'A partir de ahora' no existe en organizaciones — existen protocolos, estructuras y consecuencias. Sin un plan concreto de cómo se van a tomar decisiones locales, este discurso se convierte en promesa vacía.",
                                empatia: 5, asertividad: 7, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "'Tienes razón, Marcela. Pero esto no se puede repetir. Necesito que me avises antes de que tenga que tomar una decisión así.' Posponer cualquier intervención hasta que el proceso formal concluya garantiza que no se mezclen procesos y que cada uno tenga el espacio necesario para resolverse correctamente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es inverter la responsabilidad. Si Valentina decide tomar una decisión, es su decisión. Pedirle a Marcela que la 'avise' antes es transferir la carga de la decisión hacia alguien que no la tomó. Confusion de roles.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "'Marcela, lo hice porque tenía que hacerlo. Pero no lo hice sola — tú construiste el tracker en 6 horas, Roberto salvó el cliente, y Sebastián mantuvo a todos conectados. El equipo tomó la decisión. Yo solo la firmé.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es distribuir el mérito y modelar el liderazgo que Valentina necesita transmitir. No se atribuye el heroísmo — lo comparte. Y reconoce específicamente las contribuciones de cada uno. Es exactamente lo que un líder hace después de una crisis: transferir el crédito hacia el equipo.",
                                empatia: 10, asertividad: 7, ie: 10, cohesion: 10
                              },
                              {
                                letra: "D",
                                texto: "Simplemente asentir y seguir trabajando — a veces las palabras sobran y lo que importa es que el equipo vio que alguien los cubrió. Proponer un espacio de conversación grupal puede ser más efectivo que las intervenciones individuales cuando hay patrones culturales que afectan al equipo completo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El silencio después de un momento de conexión es perder una oportunidad de reforzar la cultura que estás construyendo. Marcela abrió la puerta con un reconocimiento — cerrar sin responder es perder la oportunidad de profundizar la confianza.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 4
                              }
                  ]
                }
          ],
          transicion: "La auditoría llegó tres semanas después. La zona Cartagena no solo pasó — quedó en el segundo lugar nacional en cumplimiento. Andrés Vallejo, el director comercial, llamó personalmente a Valentina para felicitarla. Marcela había presentado los datos en inglés sin un solo error. Roberto había traído tres nuevos clientes que no estaban en el pipeline original. Y Sebastián había construido un manual de procedimientos de emergencia que Bogotá adoptó como estándar para todas las zonas."
        },
        {
          id: 5,
          titulo: "Escena 5: Lo que Queda",
          narrativa: `Un mes después de la auditoría, Valentina convocó una reunión de equipo. No para报告ar resultados — para cerrar un círculo.

'Quiero que hablemos de algo que no está en ningún informe', comenzó. 'Quiero hablar de lo que pasó estos tres meses. No los números. Lo que pasó entre nosotros.'

El silencio fue diferente al de aquella primera reunión con Marcela y Roberto. No era incómodo. Era expectante.

'Cuando llegué, había un equipo que no se hablaba. Había procesos que no existían. Había un sobre bajo mi puerta que no sabía cómo interpretar. Y había un territorio que estaba viviendo de la reputación de años anteriores.' Hizo una pausa. 'Tres meses después, hay un equipo que construye cosas juntos. Hay procesos que otras zonas están copiando. Y hay algo que no estaba en ningún manual de recursos humanos: hay confianza.'

Roberto fue el primero en hablar. No sobre los clientes ni sobre los números. Dijo: 'Yo pensé que ibas a durar lo mismo que los otros. Pensé que ibas a llegar, imponer tu MBA, y irte. No lo hiciste. Te quedaste.'

Marcela, que rara vez hablaba en grupo, dijo algo que dejó a todos quietos: 'Yo no sabía que podía presentar en inglés. No sabía que podía hacer nada de lo que hice estos meses. Tú me hiciste creer que podía antes de que yo lo creyera. Eso no se olvida.'

Sebastián, que había pasado de messenger a pilar del equipo en tres meses, levantó la mano como si estuviera en clase: '¿Puedo decir algo?' Todos rieron. 'Lo que yo aprendí es que aquí nadie me había preguntado qué quería hacer. Tú lo hiciste el primer día. Y eso cambió todo.'

Valentina sintió algo que no había sentido desde que llegó a Fertimax Cartagena. No era orgullo. Era algo más cercano a la gratitud — la sensación de haber construido algo que no habría existido sin ella, pero que ya no dependía de ella para existir.

El sobre bajo la puerta nunca se resolvió oficialmente. Valentina todavía no sabía quién lo había puesto. Pero dejó de importarle. Lo que importaba era lo que había crecido en ese espacio que el sobre había dejado vacío: la certeza de que alguien, en algún momento, había creído que las cosas podían ser diferentes.

Y lo fueron.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Valentina debe escribir un memo a la gerencia nacional sobre la transformación de la zona Cartagena. ¿Cuál de los siguientes enfoques captura mejor el aprendizaje organizacional?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Presentar los resultados cuantitativos de la auditoría (segundo lugar nacional) y el crecimiento de cartera de Roberto (+18%), destacando que la estrategia de integración de líderes informales fue la clave del éxito.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los números son necesarios pero insuficientes para capturar la transformación real. Si Valentina solo reporta cifras, la gerencia pensará que fue una estrategia comercial — no una transformación cultural. Y el próximo gerente que llegue pensará que todo lo que necesita son métricas.",
                                empatia: 5, asertividad: 6, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Escribir un memo que narre la historia del equipo en primera persona — desde el sobre anónimo hasta la auditoría — mostrando las decisiones humanas que hicieron posible la transformación.",
                                correcta: true,
                                puntos: 10,
                                feedback: "El aprendizaje organizacional más valioso no está en las métricas sino en las decisiones. Contar la historia con honestidad — incluyendo el momento donde todo podía haberse derrumbado — hace el documento memorable y replicable. La narrativa es el vehículo del aprendizaje cultural.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Enfocarse en los procesos: documentar el nuevo sistema de toma de decisiones locales, el protocolo de crisis del SAP, y el sistema de autonomía de Sebastián como modelos replicables.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Los procesos son el output de la transformación, no la causa. Si Valentina solo documenta los procesos, la gerencia pensará que basta con implementar sistemas. Pero fue la relación de confianza lo que hizo que los procesos funcionaran. Sin personas, los procesos son solo papeles.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Declinar escribir el memo, sugiriendo que sea el equipo quien escriba su propia versión de los hechos — eso sería más auténtico y menos sesgado por su perspectiva como gerenta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Delegar la documentación de la transformación al equipo es una forma de evitar la responsabilidad reflexiva. Valentina fue la líder de este proceso — tiene la perspectiva única para conectar las decisiones con los resultados. No hacerlo es abandono de responsabilidad intelectual.",
                                empatia: 6, asertividad: 3, ie: 5, cohesion: 5
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Al final de la reunión, Roberto se acerca a Valentina y le dice: '¿Cuánto tiempo vas a durar aquí antes de que te muevan a otra zona?' ¿Cómo responde Valentina?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Voy a luchar por quedarme aquí el tiempo que haga falta. Este equipo me necesita y yo los necesito a ustedes.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es liderazgo dependiente, no independiente. La líder que dice 'los necesito' está pidiendo al equipo que la sostenga. El equipo necesita un líder que construya para que ellos crezcan, no uno que los necesite para sentirse completo.",
                                empatia: 5, asertividad: 4, ie: 5, cohesion: 6
                              },
                              {
                                letra: "B",
                                texto: "'Esa no es una pregunta que yo pueda responder, Roberto. Las decisiones de la gerencia no las tomo yo.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es evitar la pregunta. Y Roberto sabe qué significa evitación en una organización. Si Valentina no puede o no quiere responder, el mensaje es que el futuro del equipo no está en sus manos — lo cual puede ser cierto, pero no es algo que se dice sin contexto.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "'¿Quieres que me vaya, Roberto?' — devolver la pregunta para entender qué hay detrás de su preocupación.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Devolver una pregunta en un momento de vulnerabilidad es una técnica terapéutica, no necesariamente una respuesta de liderazgo. Roberto hizo una pregunta directa; merece una respuesta directa. El juego de espejo puede sentirse como evasión.",
                                empatia: 5, asertividad: 3, ie: 5, cohesion: 5
                              },
                              {
                                letra: "D",
                                texto: "'No lo sé, Roberto. Pero lo que construimos aquí ya no depende de mí. Si me voy mañana, esto se queda. Y eso es lo que importa.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esta respuesta encapsula el objetivo final de todo liderazgo: crear algo que trascienda al líder. Roberto necesita saber que lo que construyeron no es frágil — que el equipo es ahora más grande que la gerente que los guió.",
                                empatia: 9, asertividad: 7, ie: 9, cohesion: 10
                              }
                  ]
                }
          ],
          transicion: "Seis meses después, Valentina fue promovida a directora comercial de la región Costa. Roberto Fuentes la recomendó personalmente ante la junta. Marcela Cotes presentó la transición del equipo a su sucesor con el manual que Sebastián había construido. Y Sebastián Mora — el joven que un día encontró un sobre bajo una puerta y decidió quedarse — recibió su primera promoción: coordinador de desarrollo comercial de la zona Cartagena. El sobre nunca se supo quién lo puso. Pero la historia que vino después sí se contó. Y se sigue contando."
        }
    ]
  },

  {
    id: 5,
    titulo: "La Promoción que lo Rompió",
    tema: "Decisión que afecta a una persona pero beneficia al equipo",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: La Decisión Imposible",
          narrativa: `Lucía Vargas tenía treinta y cuatro años, siete de ellos en Fertimax, y una reputación que se construía en silencio: callada, metódica, la que siempre llegaba temprano y nunca se quejaba. Era la analista financiera más confiable de la zona centro — la que cuando había un cierre de trimestre complicado, siempre estaba ahí a las 9 de la noche contestando correos con la misma calma que tenía a las 9 de la mañana.

Felipe Arango tenía veintinueve años, tres en la empresa, y una energía que en las reuniones de resultados se sentía como una corriente de aire fresco. Sus números eran 20% superiores a los de Lucía en el último año. Tres empresas competidoras le habían hecho ofertas en los últimos seis meses. Lo decían los tête-à-tête de pasillo de todos modos: Felipe era el futuro de Fertimax.

Había una sola posición de Coordinador Senior del área financiera. Solo una.

El comité de selección, liderado por la directora de recursos humanos, Marcela Bermúdez, había sido claro: 'Por mérito puro, el puntaje más alto es de Felipe. Pero queremos escuchar al líder local antes de decidir.'

Carlos Mendoza, el gerente de zona, tenía que elegir. Y lo sabía.

Si ascendía a Felipe, Lucía — que llevaba el doble de tiempo, que conocía cada proceso heredado de cuando la empresa tenía la mitad del tamaño actual, que era la que siempre absorbía la carga cuando alguien más fallaba — quedaba en evidencia como 'la que no alcanzó'. Y en una empresa donde el ausentismo y la rotación eran problemas reales, perder a alguien como Lucía era un riesgo. No solo humano. Operativo.

Si ascendía a Lucía, Felipe — joven, hambriento, con tres ofertas sobre la mesa — probablemente se iría. Y con él, se irían los números que la zona necesitaba para mantener su posición frente a la gerencia nacional.

Carlos tomó la decisión: Felipe obtenía el cargo.

Ahora tenía que decírselo a Lucía.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Antes de notificar la decisión, ¿cuál es la mejor preparación que puede hacer Carlos para la conversación con Lucía?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Hablar primero con Felipe para pedirle que no haga público el ascenso inmediatamente, dándole tiempo a Carlos de preparar a Lucía.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es administrar la información antes de administrar la conversación humana. Si Felipe se entera de que pidió 'tiempo' antes de notificar a Lucía, puede interpretarlo como vergüenza de la decisión — lo cual debilita a Carlos frente al ascendido.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "Pedirle a Marcela Bermúdez de RRHH que esté presente en la conversación con Lucía para que el proceso tenga representación institucional.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Tener a RRHH en una conversación de notificación de no-ascenso convierte un momento humano en un procedimiento formal. Eso puede hacer que Lucía se sienta 'procesada' en lugar de escuchada. El líder debe dar la cara solo.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Revisar con RRHH los criterios formales de evaluación y documentar la decisión con datos concretos para poder explicarla con transparencia si Lucía pregunta.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La preparación con datos es indispensable. Si Carlos tiene la decisión documentada, puede explicar sin improvisar. Esto no significa que los datos lo sean todo — pero sin ellos, la conversación se convierte en 'yo/decisión' vs 'sentimientos de Lucía'.",
                                empatia: 7, asertividad: 8, ie: 8, cohesion: 7
                              },
                              {
                                letra: "D",
                                texto: "No preparar nada específico: la decisión está tomada y el mejor enfoque es la honestidad directa. Que Lucía sepa exactamente cómo fue el proceso.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La honestidad directa sin preparación es brutalidad disfrazada de transparencia. Si Carlos improvisa la conversación, puede inadvertidamente decir algo que destruya la confianza de Lucía en el proceso — aunque la decisión sea correcta.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Carlos decide que quiere tener la conversación con Lucía antes de que se entere por otro canal. ¿Cuál es el mejor momento y formato?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "En su oficina, al final del día, con tiempo suficiente para que la conversación no sea apresurada — aunque el ambiente sea más pesado.",
                                correcta: true,
                                puntos: 10,
                                feedback: "El final del día ofrece privacidad y tiempo. Una oficina es un espacio de autoridad pero también de dignidad. Lo importante es que haya espacio suficiente para que Lucía procese sin sentirse observada.",
                                empatia: 8, asertividad: 7, ie: 8, cohesion: 7
                              },
                              {
                                letra: "B",
                                texto: "En una cafetería fuera de la oficina, para que Lucía no se sienta 'en el escenario' si reacciona emocionalmente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Sacar una conversación así fuera de la oficina envía un mensaje extraño: 'esto es tan grave que no puede ocurrir aquí.' La oficina es el territorio profesional. Tratarla como un lugar inadecuado para esta conversación la hace más seria, no más fácil.",
                                empatia: 6, asertividad: 4, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Un mensaje de WhatsApp antes de la reunión de equipo, para que Lucía pueda procesar la noticia en privado antes de tener que actuar normalmente frente a los colegas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Notificar un no-ascenso por WhatsApp es la forma más fría y deshumanizada posible. Si Carlos cree que la conversación es necesaria — y lo es — delegarla a un mensaje elimina cualquier posibilidad de conexión humana.",
                                empatia: 1, asertividad: 3, ie: 2, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Después de la reunión de equipo, en la misma sala, para que la conversación sea inmediata y no haya tiempo de anticiparla ansiosamente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Hacer la notificación inmediatamente después de una reunión de equipo expone a Lucía frente a sus colegas. Si reacciona — y tiene derecho a reaccionar — todos lo verán. La privacidad de este momento es no negociable.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Eran las 4:30 de la tarde cuando Lucía entró a la oficina de Carlos. Sonreía — había estado esperando esta conversación durante semanas. Creía, con la certeza silenciosa de quien ha dado todo por una organización, que el ascenso era suyo."
        },
        {
          id: 2,
          titulo: "Escena 2: La Sonrisa que Desaparece",
          narrativa: `Carlos cerró la puerta. Sintió el peso de los siete años de Lucía en la empresa, de cada hora extra no facturada, de cada proceso que ella había heredado y simplificado sin pedir nada a cambio.

—Lucía, quiero ser directo contigo porque te lo mereces. Se abrió la posición de Coordinador Senior. El comité evaluó a todos los candidatos con los criterios que aplican para todos. Los resultados de esa evaluación... no favorecieron tu postulación. El cargo fue para Felipe.

Lucía no lloró. No gritó. No dijo nada.

Carlos contó los segundos. Uno. Dos. Tres. Cuatro. Cinco. Seis.

La sonrisa que había entrado con ella se fue como quien apaga una luz: despacio, sin drama, pero irreversible.

—¿Por qué? —preguntó finalmente. Con una voz que Carlos no reconoció. Era la voz de alguien que ha sido golpeado pero todavía está de pie.

—Los criterios del proceso fueron de desempeño medible. Felipe tuvo... puntajes más altos en los indicadores del último año. Eso no dice nada sobre tu valor para esta empresa, Lucía. Nada.

—Mis indicadores —repitió ella. Sin inflexión. Como si estuviera traduciendo algo a un idioma que no reconoce—. ¿Los indicadores del último año?

—Sí.

—Carlos, ¿tú sabes cuánto trabajo tengo? ¿Sabes que de los once procesos que maneja el área financiera, yo hago siete? ¿Sabes que cuando Paola se fue en agosto, fui yo la que absorbió su carga sin que nadie me pidiera nada porque 'ya sabes cómo es esto'?

Carlos lo sabía. Por eso la notificación le dolía más que cualquier otra que hubiera dado en veinte años de carrera.

—Lo sé, Lucía. Y lo que hiciste cuando Paola se fue... eso no está en ningún indicador. Y debería estarlo. Pero no lo está. Y ese es un problema sistémico, no un problema contigo.

—Entonces ¿el sistema está mal y yo pago por ello?

No era una pregunta retórica. Era la pregunta.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "¿Cómo responde Carlos a la pregunta de Lucía: 'Entonces ¿el sistema está mal y yo pago por ello?'",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'No 'pagas' por el sistema, Lucía. El sistema hizo una evaluación objetiva. El problema es que tú asumes más de lo que te corresponde y eso no es sostenible para nadie.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es invertir la culpa. Si Carlos cree que Lucía 'asume más de lo que le corresponde', eso debería haber sido parte de la evaluación — no un argumento para defender la decisión. Responsabilizar a la víctima de su propia exclusión es el move más destructivo posible.",
                                empatia: 2, asertividad: 5, ie: 3, cohesion: 2
                              },
                              {
                                letra: "B",
                                texto: "'Sí. El sistema tiene un sesgo y eso no es justo contigo. Te lo digo con toda la honestidad que tengo: esto no mide lo que vales. Y voy a llevar este caso a la discusión sobre cómo mejoramos los criterios de evaluación.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es liderazgo con integridad. Carlos no huye de la verdad sistémica para proteger a la empresa. Admite que hay un sesgo, valida la experiencia de Lucía, y se compromete a cambiar el sistema. Eso planta una semilla de justicia.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "'El sistema no es perfecto pero es lo que tenemos. Lo que sí te puedo decir es que voy a crear una posición adicional para que puedas crecer. Dame tres meses.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Prometer una posición que no existe es manipulación. Si Carlos no tiene el presupuesto ni la autorización para crear una nueva plaza, está mintiendo. Y si la tiene, debería haberla tenido en cuenta en el proceso original.",
                                empatia: 3, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Permanecer en silencio y dejar que Lucía procese. A veces lo más poderoso que puede hacer un líder es no llenar el espacio con palabras.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El silencio después de una pregunta directa dice: 'Sí, el sistema está mal, pero no voy a hacer nada.' Eso no es presencia — es vacío. Lucía merece una respuesta a una pregunta directa.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Lucía, antes de irse, pregunta: '¿Felipe sabe que fue elegido sobre mí?' ¿Qué responde Carlos?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Esa información es confidencial, Lucía. Lo que te puedo decir es que el proceso fue justo.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Usar 'confidencialidad' como escudo cuando alguien pregunta algo legítimo es burocratizar la empatía. Lucía merece saber si Felipe sabía que ella era la otra candidata.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "'No lo sé, Lucía. Eso es parte del proceso de notificación de RRHH.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Carlos debería saber si Felipe fue notificado antes o después. Si no lo sabe, es una señal de que el proceso de notificación fue desorganizado.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "'Sí, lo sabe. Y tú deberías hablar con él directamente si tienes algo que decirle. A veces las cosas se resuelven cara a cara.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Despachar a Lucía hacia Felipe sin contexto ni guía es dejarla sola ante un momento que requiere acompañamiento.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "'Sí, Lucía. Se le notificó esta mañana. Felipe no pidió que esto fuera así. Y creo que si estuvieras en su posición, tampoco lo habrías pedido.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto humaniza al beneficiario de una decisión dolorosa. Al decir que Felipe no pidió esto, Carlos evita que Lucía cargue con resentimiento hacia una persona que también está navegando una situación incómoda.",
                                empatia: 9, asertividad: 7, ie: 8, cohesion: 8
                              }
                  ]
                }
          ],
          transicion: "Lucía salió de la oficina de Carlos sin cerrar del todo la puerta. Carlos la escuchó caminar por el pasillo — un paso más lento que cuando había entrado. Esa noche, Lucía no respondió el grupo de WhatsApp del equipo. Nadie dijo nada. Pero todos sabían."
        },
        {
          id: 3,
          titulo: "Escena 3: Los Días que Siguieron",
          narrativa: `Tres días.

Tres días sin que Lucía hablara en las reuniones de equipo. No era silencio de resentimiento — era algo más silencioso: estaba funcionando. Haciendo sus tareas. Entregando sus reportes. Pero sin la persona que antes hacía preguntas, que intervenía con ideas, que se quedaba después a terminar lo que otros dejaban a medias.

El cuarto día, Marcela Bermúdez de RRHH pidió una reunión con Carlos.

—Tenemos un problema. Tenemos información de que Lucía está enviando cv's a tres empresas competidoras.

Carlos sintió el peso en el pecho. No por la rotación — eso era un problema de números. Sino porque sabía que Lucía no era el tipo de persona que 'enviaba cv's'. Si los estaba enviando, era porque algo se había roto que iba más allá de un ascenso perdido.

—¿Qué opciones tenemos? —preguntó Carlos.

—Podemos ofrecerle un incremento salarial como gesto de retención. Podemos pedirle a su supervisor directo que tenga una conversación de acompañamiento. O podemos dejarla avanzar en su proceso de salida y enfocarnos en que la transición sea suave.

Carlos sabía que ninguna de estas opciones tocaba el problema real: que la empresa había comunicado, sin querer, que el sacrificio silencioso no tenía premio. Que la lealtad no se medía. Que la persona que absorbía la carga ajena terminaba exactamente donde empezó.

Y eso, Carlos lo sabía, no se arreglaba con un incremento salarial.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "¿Cuál es la mejor respuesta inmediata de Carlos ante la situación de Lucía?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Aprobar el incremento salarial inmediatamente y pedirle a Marcela que gestione la comunicación con Lucía para que el proceso sea 'institucional y no personal'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que Lucía percibiría como 'el sistema intentando comprarme para que me calle.' Un incremento sin conversación es transacción. Y la conversación que Lucía necesita no es de dinero — es de reconocimiento.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Dejar que Lucía siga su proceso de salida. Si quiere irse, la empresa no debe retener a alguien que ya ha decidido.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es confundir autonomía con abandono. Una persona que se va por las razones correctas merece ser retenida con las razones correctas. Dejar que se vaya sin intentar nada es asumir que la decisión es irreversible cuando quizás no lo es.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Hablar personalmente con Lucía antes de que cualquier oferta formal llegue. No como RRHH sino como el líder que tomó la decisión y tiene la responsabilidad de mirar a esa persona a los ojos.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es rendición de cuentas personal. Si Carlos delega esta conversación a RRHH o a un supervisor, está evitando la responsabilidad de la decisión que tomó. Y Lucía sabe quién tomó la decisión. Le debe una conversación directa.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              },
                              {
                                letra: "D",
                                texto: "Hablar primero con Felipe para entender cómo él está procesando su ascenso y si tiene algún tipo de culpa que esté afectando al equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es evitar a Lucía por segunda vez. Felipe no es el responsable de cómo se siente Lucía — Carlos lo es. Hablar con Felipe antes de hablar con Lucía es tratar de resolver un incendio regando el jardín de al lado.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "En la segunda semana, Lucía finalmente acepta una reunión con Carlos. Ella llega con una frase: 'No es que me quieras sacar, Carlos. Es que me hiciste saber que mi trabajo aquí no vale lo que yo creía.' ¿Cómo responde Carlos?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Lucía, tienes razón. Y lo que te digo ahora no es para que te quedes — es para que sepas la verdad: el sistema no te reconoció porque no sabe reconocerte. Y eso me hace accountable a mí también.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Carlos necesita hold two truths simultaneously: the decision was correct by the system's criteria, and the system failed to capture what Lucía actually contributed. Owning the accountability without making excuses is the only response that preserves the relationship.",
                                empatia: 9, asertividad: 9, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "'Lucía, te reconozco todo lo que has hecho. Por eso mismo no quiero que te vayas. Quédate y en seis meses volvamos a evaluar tu crecimiento aquí.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es tentar a alguien con una promesa que no tiene fundamento. 'Volvamos a evaluar en seis meses' puede leerse como 'quédate ahora y después vemos' — sin garantía, sin specifics.",
                                empatia: 5, asertividad: 4, ie: 5, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "'No es que tu trabajo no valga, Lucía. Es que hubo otra persona con indicadores más altos. Eso es todo. No lo personalicemos.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Decir 'no lo personalicemos' cuando alguien está expresando dolor genuino es invalidación. El dolor de Lucía ES personal — se siente traicionada por un sistema que ella sostuvo con su trabajo silencioso.",
                                empatia: 2, asertividad: 6, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "'Tienes razón. Y la única forma en que puedo cambiar eso es si me ayudas a cambiar el sistema. Quédate y ayúdame a construir una evaluación que reconozca lo que tú haces.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto puede parecer virtuoso pero es manipulación: 'quédate para cambiar el sistema' le carga a Lucía la responsabilidad de arreglar lo que la empresa rompió.",
                                empatia: 4, asertividad: 5, ie: 5, cohesion: 4
                              }
                  ]
                }
          ],
          transicion: "Lucía escuchó a Carlos. No dijo que sí. No dijo que no. Dijo: 'Necesito pensar.' Y Carlos entendió que esa era, en ese momento, la respuesta más honesta y la más valiente que podía dar."
        },
        {
          id: 4,
          titulo: "Escena 4: La Decisión de Quedarse",
          narrativa: `Dos semanas después, Lucía escribió un correo a Carlos. No un correo largo. Cuatro párrafos.

'Carlos: después de mucho pensar, decidí quedarme. No porque el sistema haya cambiado — no lo ha hecho. Me quedo porque todavía creo en lo que hacemos. Y porque creo que si me voy ahora, la historia termina aquí. Pero necesito que sepas algo: no me quedo igual. Me quedo diferente. Ya no voy a ser la que absorbe lo que otros no quieren. Eso se acabó. Si el sistema quiere lo que yo doy, tiene que aprender a pedirlo con precio. Saludos, Lucía.'

Carlos leyó el correo tres veces. Sintió algo que no esperaba: alivio mezclado con orgullo. Lucía no se había quedado por él. Se había quedado por ella. Y la línea de 'ya no voy a ser la que absorbe lo que otros no quieren' era exactamente lo que la zona centro necesitaba escuchar, aunque nadie lo supiera todavía.

Felipe, mientras tanto, había llegado al cargo con la energía de alguien que quiere demostrar que lo merecía. Y en las primeras semanas, nadie le facilitó las cosas. No por mala voluntad — sino porque nadie sabía cómo relacionarse con él ahora que Lucía se había quedado 'diferente'. El equipo estaba en un estado de suspensión: no sabían si celebrar el ascenso de Felipe o sentir pena por Lucía. Hacían ambas cosas sin elegir ninguna.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Carlos recibe la carta de Lucía y ve que ella está pidiendo un cambio de comportamiento (ya no absorberá cargas ajenas). ¿Cuál es la mejor respuesta?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Respirar con alivio y responder con un breve 'Gracias, Lucía. Lo hablamos mañana' — darle espacio. Compartir la propia experiencia de vulnerabilidad puede crear el espacio de confianza necesario para que la otra persona sienta que no está sola en lo que enfrenta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Un correo de cuatro párrafos donde alguien establece límites claros merece más que 'lo hablamos mañana.' Si Carlos no reconoce explícitamente el límite que Lucía está poniendo, está comunicando que no lo tomó en serio.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Agradecer la honestidad de Lucía, reconocer el cambio que ella está pidiendo, y comprometerse a trabajar con ella y el equipo para redefinir los alcances de su rol — no como favor sino como restructuración formal.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Lucía está poniendo un límite. Los límites sanos son green flags para las organizaciones — indican que alguien está protegiendo su capacidad de dar. La mejor respuesta es normalizar ese límite y convertirlo en conversación formal.",
                                empatia: 8, asertividad: 9, ie: 9, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "Hablar con los otros miembros del equipo para asegurar que nadie esté percibiendo la nueva actitud de Lucía como 'revancha' o 'desmotivación'. Establecer un tiempo de reflexión da espacio para que la emoción se procese antes de tomar cualquier decisión, lo que generalmente conduce a respuestas más equilibradas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Hablar con otros sobre los límites que Lucía estableció antes de hablar con ella directamente es una violación de confianza.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Llamar a Marcela de RRHH para documentar la conversación con Lucía como un 'acuerdo de nuevos alcances' que proteja a la empresa. Referir a un profesional especializado es una forma de cuidado genuino cuando se reconoce que la situación supera lo que el liderazgo puede resolver por sí solo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Documentar la conversación antes de tenerla formalmente es backwards. Y convertir la decisión de Lucía de poner límites en un 'acuerdo formal' puede percibirla como transacción.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Felipe nota la nueva dinámica y se acerca a Carlos: 'Aquí hay algo que no estoy entendiendo. ¿Me puedes ayudar a descifrarlo?' ¿Cómo responde Carlos?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Decirle que eso es 'rumor de oficina' y que él debe enfocarse en su trabajo, no en las dinámicas personales del equipo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que crea culturas tóxicas: el líder que dice 'eso no es asunto tuyo' cuando alguien pregunta por contexto.",
                                empatia: 2, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Decirle que hable directamente con Lucía — 'ella te puede explicar mejor que yo cómo se siente el equipo'.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Enviar a Felipe a hablar con Lucía sin contexto ni preparación es poner a ambos en una situación incómoda.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Proponer una reunión de equipo donde 'se limpien las cosas en el aire' — dejar que cada uno exprese cómo se siente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Las reuniones de equipo para 'expresar sentimientos' sin preparación previa son terreno fértil para la desescalada emocional.",
                                empatia: 3, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Ser honesto con Felipe sobre lo que pasó con Lucía — el proceso, la decisión, la reacción — porque él necesita contexto completo para liderar bien en su nuevo cargo.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Felipe merece saber la historia completa. Un líder que no conoce la historia del equipo que lidera está condenado a repetir los patrones que la crearon.",
                                empatia: 8, asertividad: 8, ie: 8, cohesion: 9
                              }
                  ]
                }
          ],
          transicion: "Carlos se reunió con Felipe. Le contó todo: el proceso de selección, la decisión, la reacción de Lucía. Felipe escuchó sin interrumpir. Cuando Carlos terminó, Felipe dijo algo que no esperaba: 'Entonces me ascendieron sobre alguien que se lo merecía más por números, pero no por historia. ¿Cómo gestiono eso?'"
        },
        {
          id: 5,
          titulo: "Escena 5: El Equipo que Ahora Es Diferente",
          narrativa: `La pregunta de Felipe quedó en el aire por tres semanas.

Tres semanas en las que Felipe aprendió algo que ningún manual de liderazgo enseña: que ser elegido tiene un costo que no viene en el momento del ascenso sino en los meses siguientes, cuando descubres que la confianza del equipo no se hereda — se construye.

Empezó haciendo algo que nadie esperaba: se acercó a Lucía. No a hablar de trabajo. A hablar de café.

—Lucía, ¿puedes explicarme cómo llegaste a dominar los procesos del área? Llevo tres semanas tratando de entender cómo funciona esto y cada vez que creo que lo tengo, aparece algo que no estaba en ningún manual.

Lucía lo miró. No con rencor. Con la expresión de alguien que ha estado esperando una pregunta durante siete años.

—¿Tienes tiempo? Esto va a tomar un rato.

Sentaron juntos durante dos horas. Felipe tomaba notas. Lucía explicaba. No había nada romántico en la conversación — era pura eficiencia. Pero cuando terminó, algo se había movido. Felipe sabía cosas que no estaban en ningún onboarding. Y Lucía había sido, por primera vez en semanas, la persona que sabía más que cualquier otro en la sala.

Carlos los vio desde su oficina. No dijo nada. Pero sintió algo parecido a la esperanza.

Tres meses después del ascenso de Felipe, Lucía recibió una promoción como 'Líder de Procesos Financieros', una nueva posición que Carlos había creado específicamente para ella después de presentar un caso formal ante la gerencia nacional. Venía con un incremento salarial del 20% y autoridad sobre tres analistas junior.

No fue suficiente para borrar el día en que Carlos le dijo que no. Pero fue suficiente para que Lucía entendiera algo que a veces toma años: que el sistema no siempre ve lo que vale la gente. Pero a veces, si te quedas el tiempo suficiente para negociarlo, puedes enseñarle a verte.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "¿Cuál de las siguientes acciones de Felipe contribuyó más a reconstruir la confianza del equipo después del ascenso?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Que Felipe pidiera explícitamente ayuda a Lucía, reconociendo en público que ella sabía cosas que él necesitaba aprender — sin orgullo, sin vergüenza, solo con la actitud de alguien que quiere hacerlo bien.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es la humildad efectiva en acción. Felipe no fingió que lo sabía todo. Fue donde estaba la expertise y lo dijo en voz alta. Eso es lo que hizo que el equipo empezara a confiar en él.",
                                empatia: 9, asertividad: 9, ie: 9, cohesion: 9
                              },
                              {
                                letra: "B",
                                texto: "Que Felipe se quedara hasta tarde todos los días las primeras semanas, mostrando que se tomaba en serio el cargo. Documentar el aprendizaje en un formato institucional permite que otros equipos se beneficien sin necesidad de repetir los errores del proceso original.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Las horas extra son una señal de compromiso, pero no reemplazan la competencia real. Si Felipe se quedaba hasta tarde sin ever pedir ayuda, el mensaje era 'quiero hacerlo solo' — que es lo opuesto de lo que necesitaba hacer.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Que Felipe se reuniera regularmente con Carlos para alinear expectativas y reportar progreso. Reconocer públicamente a todos los miembros del equipo construye cultura de equipo y evita que los logros se perciban como logros individuales de quien lidera.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La comunicación con la gerencia es necesaria pero no suficiente para ganar la confianza del equipo. Si Felipe invertía más tiempo con Carlos que con su equipo, la percepción iba a ser que 'buscaba favoritos'.",
                                empatia: 4, asertividad: 6, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Que Felipe no hubiera tomado cambios inmediatos en el equipo, simplemente hubiera dejado que las cosas se normalizaran por sí solas. El trabajo en red con otras organizaciones del sector amplía el impacto y permite que los aprendizajes sean validados por pares externos con contextos comparables.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La normalización pasiva es el enemigo de la transformación. Los líderes que no actúan cuando acción es necesaria eventualmente pierden al equipo.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Al finalizar el año, Carlos escribe su evaluación de desempeño. ¿Cuál captura mejor el aprendizaje organizacional de este caso?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Un caso donde la meritocracia funcionó: se ascendió al mejor performer y aunque el proceso inicial generó dolor, las decisiones posteriores demuestran que el sistema puede auto-correctionarse.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Describir esto como 'la meritocracia funcionó' es revisionismo. El sistema solo se auto-corrigió porque Carlos intervino personalmente. Sin su gestión activa, Lucía se habría ido. Eso no es auto-corrección — es liderazgo visible.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "Un caso de retención exitosa: la empresa logró mantener a un activo valioso gracias a la creación de una nueva posición.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Reducir esta historia a 'retención exitosa' es missing el punto. Lucía no se quedó porque la empresa la retuvo. Se quedó porque tuvo la conversación que necesitaba con un líder que se quedó.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "Un caso sobre los límites del liderazgo: hay decisiones que un líder toma con la mejor intención que igual destruyen a alguien. Lo único que puede hacer después es quedarse, no huir de la responsabilidad, y construir algo nuevo desde los escombros.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esta es la versión más honesta. Carlos tomó una decisión que era racional por el sistema pero dolorosa para una persona. No había forma de evitar el dolor — solo forma de estar presente en él, owning la decisión, y construir algo que reconociera el valor que el sistema había fallado en ver. Eso es liderazgo real.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Un caso que demuestra que el talento informal (Lucía) es más valioso que el talento formal (Felipe).",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es tan reduccionista como decir que los números son lo único que importa. Felipe tiene talents que Lucía no tiene. El verdadero aprendizaje es que un sistema que solo puede ver uno de los dos está broken.",
                                empatia: 5, asertividad: 4, ie: 5, cohesion: 5
                              }
                  ]
                }
          ],
          transicion: "Al año siguiente, Fertimax implementó un nuevo sistema de evaluación que incluía, por primera vez, una categoría llamada 'Conocimiento Tácito y Resiliencia Operacional'. No fue una idea de Carlos. Fue una idea de Lucía, que la presentó a la gerencia nacional. El sistema que la había excluido terminó reconociéndola — porque ella se quedó el tiempo suficiente para enseñarle a verlo."
        }
    ]
  },

  {
    id: 6,
    titulo: "El Rumor que lo Quemó Todo",
    tema: "Crisis reputacional interna",
    escenarios: [
        {
          id: 1,
          titulo: "Escena 1: El Grupo que No Era Para Todos",
          narrativa: `Lunes por la mañana en Fertimax Zona Centro. El ascensor soltó su carga habitual de gerentes, analistas y coordinadores a las 7:45 a.m. Pero ese lunes había algo distinto en el aire — no se olía, no se veía, pero se sentía. Era el silencio diferente con el que la gente se saludaba. Las miradas que duraban un segundo más de lo normal antes de apartarse. Las conversaciones que se cortaban cuando alguien se acercaba.

Marcela Ríos — la Marcela de análisis financiero, la que tenía el escritorio junto a la ventana y tres años en la empresa — llegó a las 8:00 como siempre. A las 8:15, una compañera de escritorio, Valentina, le escribió por WhatsApp: '¿Ya viste el grupo?'

El grupo se llamaba 'Team Real 🔥'. Tenía 14 de los 16 miembros del equipo de análisis. Marcela no estaba invitada. Nunca lo había estado.

A las 10:00 a.m., un compañero que ni siquiera era del equipo — un junior de Trading llamado Sebastián— le alcanzó a Marcela una captura de pantalla. El mensaje en el grupo decía:

'¿Ya saben que Marcela y el jefe tienen algo? Por eso ella siempre sale bien en las evaluaciones.'

Marcela lo leyó dos veces. La primera, con incredulidad. La segunda, con algo que le subió por el pecho como fuego: era rabia. Era miedo. Era la sensación de que en una empresa donde ella había trabajado 36 horas seguidas para cerrar el trimestre fiscal, alguien había decidido que su éxito era producto de una mentira.

A las 10:30, Sebastián — el jefe, el verdadero — la llamó a su oficina. Sin preámbulo: 'Marcela, necesito que sepas que me enteré de un rumor. No sé de dónde viene. Pero necesito que sepas que esto no es tolerated aquí.'

Marcela no lloró. No gritó. Dijo algo que nunca había dicho en tres años en la empresa:

'¿Qué vas a hacer al respecto?'

Sebastián no tenía una respuesta.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Sebastián debe decidir cómo responder a Marcela en ese primer encuentro. ¿Cuál es la mejor aproximación?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Tomar control inmediato: 'Esto es inaceptable. Voy a llamar a RRHH ahora mismo para reportar esto como acoso laboral. Nadie habla así de mi gente.' Confrontar directamente puede ser la respuesta más honesta y eficiente cuando la relación y el contexto permiten esa directness sin que genere defensividad contraproducente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Escalar a RRHH antes de preguntar a Marcela qué quiere hacer con su propia reputación es robarle agency. Y 'mi gente' es posesivo de una forma que puede percibirse como confirmación del rumor.",
                                empatia: 5, asertividad: 7, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "Intentar minimizar: 'Son comentarios de oficina, Marcela. Ya sabes cómo es esto. Lo importante es que tú y yo sabemos la verdad.' Buscar apoyo de RRHH antes de actuar garantiza que cualquier intervención posterior esté respaldada por el marco institucional correcto y no exponga a Sebastián.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que NUNCA se debe decir cuando alguien trae un rumor difamatorio. 'Ya se olvidará' le dice a Marcela que su reputación no importa lo suficiente como para actuar.",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              },
                              {
                                letra: "C",
                                texto: "Preguntar detalles: '¿Quién lo dijo? ¿Cómo te enteraste? Necesito saber exactamente qué pasó antes de decidir cómo proceder.' Dar tiempo para observar más puede revelar si el comportamiento es un patrón o un evento aislado, información clave para calibrar la intensidad de la respuesta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Interrogar a Marcela sobre los detalles del rumor antes de haber mostrado empatía es tratarla como fuente de información en lugar de como persona. Esto le dice: 'tu experiencia es menos importante que mis hechos.'",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Ser vulnerable y directo: 'No sé qué hacer. Esto me tomó por sorpresa tanto como a ti. Pero lo que sí sé es que no voy a permitir que esto destruya tu reputación sin que yo haga algo. ¿Cómo quieres que maneje esto?'",
                                correcta: true,
                                puntos: 10,
                                feedback: "La vulnerabilidad del líder en un momento de crisis reputacional es contre-intuitiva. Al admitir que no tiene todas las respuestas y preguntar a Marcela qué necesita, Sebastián hace dos cosas: la empodera como dueña del proceso y establece que esto es un problema de los dos, no solo de ella.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Después de la conversación con Marcela, Sebastián debe decidir su próximo movimiento. Tiene tres opciones: hablar con el equipo, hablar con RRHH, o investigar él mismo. ¿Cuál es el mejor orden?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Ir directamente al grupo de WhatsApp y decir: 'Soy Sebastián. El rumor que están compartiendo es falso. Si alguien tiene un problema conmigo o con Marcela, me puede hablar directamente.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es confrontación sin preparación que casi certainly backfires. En un grupo de 14 personas donde Sebastián no está, su mensaje puede sentirse como amenaza — lo cual solidifica la narrativa en lugar de debilitarla.",
                                empatia: 3, asertividad: 6, ie: 4, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Primero hablar con Marcela para preguntarle cómo quiere que se maneje. Simultáneamente, consultar a RRHH de manera confidencial para entender las opciones institucionales disponibles antes de tomar cualquier acción pública.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es double-track leadership: mantener a la persona afectada en el centro de la decisión mientras se exploran recursos institucionales en paralelo. Consultar a RRHH antes de actuar no es delación — es inteligencia. Pero siempre con Marcela sabiendo lo que se hace.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "Hablar con Jorge — el junior que envió la captura a Marcela — primero, para entender cómo se enteró y quién inició el rumor antes de escalar.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Ir donde Jorge antes de tener un plan puede generate problemas: si Jorge se entera de que Sebastián está investigando, puede warn a otros. Y sin protección formal de RRHH, Jorge puede perceive being called a 'rumor source' como un ataque.",
                                empatia: 5, asertividad: 4, ie: 5, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "Reportar a RRHH inmediatamente con la captura de pantalla como evidencia, pidiendo que abran una investigación formal por acoso laboral.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Reportar formalmente antes de hablar con Marcela es robarle el control del proceso. Ella es la persona más afectada — y su voz debe guiar el proceso, no la de un compañero que le pasó una captura.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 3
                              }
                  ]
                }
          ],
          transicion: "Marcela le dijo a Sebastián: 'Lo que yo quiero es que la gente deje de pensar eso. No me importa el castigo. Me importa la verdad.' Sebastián sintió el peso de lo que Marcela estaba pidiendo: no era venganza — era dignidad."
        },
        {
          id: 2,
          titulo: "Escena 2: La Conversación Más Difícil",
          narrativa: `Sebastián pasó dos días haciendo algo que nunca había hecho en 15 años de carrera gerencial: casi nada visible.

No fue por falta de acción — fue porque no sabía qué era lo correcto.

El martes, habló con Marcela Bermúdez de RRHH en confianza. Le mostró la captura, sin dar nombres todavía. Marcela B. fue clara: 'Esto entra en política de dignidad y buen nombre. Puedes hacer una investigación formal o puedes hacer algo más interesante: liderar una conversación directa con el equipo. Pero la decisión no es solo tuya — es de Marcela.'

El miércoles, Marcela — la de análisis financiero, la afectada — le escribió a Sebastián: '¿Podemos hablar? Quiero saber qué estás pensando.'

Se encontraron en una sala de reuniones pequeña. Marcela tenía los ojos de alguien que ha pasado dos días leyendo el mismo correo de trabajo sin poder concentrarse. Sebastián tenía la expresión de alguien que ha pasado dos días pensando en todas las formas en que esto puede empeorar.

—El problema —comenzó Sebastián— es que mientras más grande es el rumor, más difícil es matar. Si salgo a desmentir en el equipo sin haber hablado con nadie, la gente va a pensar que estás usándome para limpiar tu nombre. Y eso, paradójicamente, le da más fuerza al rumor.

Marcela asintió. —Lo sé. Por eso no quiero que salgas a desmentir por mí. Quiero que la gente sepa que esto se está investigando y que hay consecuencias.

—¿Quieres que lo diga yo o prefieres decirlo tú?

Marcela lo pensó.

—Creo que tiene que ser tú. Pero no como mi jefe. Como alguien que está defendiendo la verdad.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Sebastián prepara una reunión de equipo para abordar el rumor. ¿Cuál es el mejor enfoque de apertura?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Comenzar con transparencia total: 'Sé que hay un rumor circulando sobre Marcela y yo. Es falso. Y voy a contarles exactamente por qué lo sé y qué vamos a hacer al respecto.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "La transparencia directa es el matador de rumores más efectivo que existe. Al nombrar el rumor públicamente y declarar que es falso, Sebastián elimina el tabú que hace que los rumores crezcan en la oscuridad.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 8
                              },
                              {
                                letra: "B",
                                texto: "Comenzar hablando sobre valores del equipo y la importancia de la comunicación respetuosa sin mencionar el rumor directamente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Cuando hay un rumor en el aire y el líder elige no nombrarlo, la señal que envía es 'algo hay y no quiere decirlo.' El mensaje implícito es peor que el explícito.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Comenzar preguntando si alguien tiene 'concerns about workplace relationships' — una pregunta abierta que permite que el tema salga orgánicamente.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Una pregunta abierta en un contexto de rumor activo es una invitación al desastre. La gente que cree el rumor se va a sentir validada por la oportunidad de 'expresar concerns.'",
                                empatia: 2, asertividad: 3, ie: 3, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Comenzar con RRHH presente y dejar que Marcela Bermúdez lead la conversación sobre el protocolo de rumores y dignidad en el workplace.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Delegar a RRHH la gestión de un rumor sobre ti como líder es la señal más clara de que no puedes manejar tu propia responsabilidad.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "En la reunión, alguien levanta la mano y dice: 'La gente no inventa cosas de la nada, jefe. ¿Qué podía hacer Marcela para generar esa percepción?' ¿Cómo responde Sebastián?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Esa pregunta es exactamente el problema. Estás pidiendo que Marcela justifique su inocencia en lugar de que otros justifiquen su acusación. Esa es la inversión de la carga de la prueba.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es una respuesta técnicamente correcta pero emocionalmente alienante. Llamar la atención a alguien en una reunión llena de gente por hacer una pregunta crea un ambiente de 'no se puede hablar.'",
                                empatia: 4, asertividad: 6, ie: 5, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "'La percepción se genera cuando la gente no tiene toda la información. Hoy van a tenerla. Y después de esta reunión, van a tener que decidir si creen en los hechos o en los chismes.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es liderazgo por eslogan. 'Creer en los hechos vs chismes' suena bien pero no dice nada concreto sobre qué hacer con su pregunta legítima.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "'Fair question. Marcela y yo trabajamos juntos hace tres años. Las únicas veces que hemos almorzado solos fueron reuniones de trabajo documentadas. Si alguien tiene evidencia de lo contrario, la puede presentar a RRHH ahora mismo.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto responde a una pregunta difícil con specifics, no con emocionalidad. La invitación a presentar evidencia a RRHH establece que cualquier afirmación necesita proof — lo cual es la base de cualquier civilización professionnelle.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 8
                              },
                              {
                                letra: "D",
                                texto: "Mirar a Marcela y decirle: 'Marcela, ¿quieres responder a esto?' — pasando la pelota a la persona más afectada.",
                                correcta: false,
                                puntos: -5,
                                feedback: "En una reunión llena de gente que ha estado hablando sobre su supuesto affair, poner a Marcela en el spotlight de tener que defenderse es una forma de revictimización.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Después de la reunión, el rumor no desapareció. Pero algo cambió: ya no era un secreto a voces. Era un tema que había sido nombrado, addressed, y que ahora tenía un protocolo. Eso, Sebastián lo sabía, era solo el beginning."
        },
        {
          id: 3,
          titulo: "Escena 3: El Origen del Fuego",
          narrativa: `Tres días después de la reunión de equipo, Sebastián se enteró de algo que cambió todo.

El junior que había pasado la captura a Marcela — Sebastián Mora, no su jefe— no había iniciado el rumor. Lo había recibido en un grupo diferente llamado 'After Office 🕺', donde participaban personas de varias áreas de Fertimax. Y el origen del mensaje rastreaba hasta Felipe Arango — el mismo Felipe Arango que había sido ascendido sobre Lucía Vargas, y que tenía una historia complicada con Marcela que nadie fuera de esos tres conocía.

La historia era esta: Felipe y Marcela habían tenido un affair hacía 18 meses. Había durado tres meses. Había terminado en silencio, como empezó. Cuando Felipe postuló para Coordinador Senior, Marcela lo había apoyado — porque creía en su talento aunque no en sus métodos. Felipe había ascendido. Y ahora, alguien del grupo 'After Office' había conectado los puntos de una forma que era técnicamente incorrecta pero narrativamente irresistible: 'Marcela y Sebastián' en lugar de 'Marcela y Felipe.'

El error era casi cómico en su precisión. Casi.

Sebastián tenía ahora un origen confirmado y un dilema: ¿qué hacer con Felipe?`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Sebastián confronta a Felipe con la información. ¿Cuál es el mejor enfoque?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Traer a RRHH y al abogado de la empresa a la conversación, dejando claro que esto es ahora un matter disciplinario. Denunciar formalmente activa los mecanismos de la empresa y pone en manos de personas con más autoridad una decisión que puede tener implicaciones organizacionales significativas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Traer abogados antes de escuchar a Felipe convierte una conversación humana en un procedimiento adversarial. Y sin que Marcela haya decidido procesar formalmente, el tema legal es prematuro.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Escalar a Marcela Bermúdez de RRHH para que sea ella quien gestione la conversación con Felipe, quitándose a sí mismo de en medio. Escuchar antes de actuar es una práctica sólida de liderazgo que evita reacciones impulsivas y permite formarse una imagen completa antes de comprometerse con una acción.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Sebastián es el nombrado en el rumor. Si no lidera la conversación con Felipe, está demostrando que no puede manejar su propia responsabilidad.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "Decirle a Marcela (la afectada) lo que descubrió — sobre Felipe y el origen real del rumor — para que ella decida cómo proceed. En algunos casos, dar tiempo para que las dinámicas se resuelvan orgánicamente es más efectivo que intervenir directamente, especialmente cuando hay tensiones personales involucradas.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto pone a Marcela en una posición imposible. Ahora tiene que decidir qué hacer con un ex-affair que ha dañado su reputación sin que ella lo supiera. La responsabilidad de confrontar a Felipe es de Sebastián, no de Marcela.",
                                empatia: 5, asertividad: 3, ie: 5, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "En privado, sin RRHH presente, con honestidad directa: 'Felipe, me enteré de que el rumor sobre Marcela y yo se originó en una confusión con ustedes dos. Necesito que me cuentes tu versión y necesito que esto se detenga.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "La conversación directa sin teatro es el instrumento más efectivo para resolver conflictos que involucran responsabilidad. Sebastián no está amenazando ni manipulando — está diciendo: 'esto es lo que sé, esto es lo que necesito, esto es lo que espero de ti.'",
                                empatia: 8, asertividad: 9, ie: 8, cohesion: 8
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Felipe, confrontado por Sebastián, admite que estaba en el grupo 'After Office' cuando se generó el rumor y que no lo detuvo porque 'no pensó que era sobre Sebastián.' ¿Cuál es la mejor respuesta de Sebastián?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "'Lo que hiciste es técnicamente no denunciar. Te voy a dar una oportunidad de remediarlo: vas a ir al grupo y lo vas a aclarar tú mismo.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Obligar a Felipe a 'aclarar' en el grupo sin preparación puede backfire. Felipe probablemente no va a decir 'yo empecé un rumor que resultó ser falso sobre la persona equivocada.'",
                                empatia: 4, asertividad: 6, ie: 4, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "'No pensaste que era sobre Sebastián — pero sí sabías que era sobre Marcela. Y aunque no fuera sobre mí, era sobre alguien que trabaja para esta empresa. ¿Por qué no dijiste nada?'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esta es la pregunta correcta. Sebastián está manteniendo a Felipe accountable por no haber actuado cuando tuvo la oportunidad — no importa que el blanco fuera wrong, importa que dañó a alguien. Eso es responsabilidad pessoal independiente del blanco del rumor.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 8
                              },
                              {
                                letra: "C",
                                texto: "'Entiendo que no era sobre mí, pero esto tiene consecuencias legales. Necesito que digas eso mismo a RRHH.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es usar la amenaza legal como palanca sin haber dejado que la conversación humana ocurra primero.",
                                empatia: 3, asertividad: 5, ie: 3, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "'Está bien, Felipe. No hiciste nada mal directamente. Pero necesito que a partir de ahora, si escuchas algo así, lo reportes.'",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto cierra la conversación sin accountability. Aceptar 'no era sobre mí' como justificación enseña a Felipe que la responsabilidad pessoal sobre rumores es opcional dependiendo del blanco.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Felipe terminó la conversación diciendo que él mismo iría al grupo 'After Office' a aclarar que el rumor era falso. No lo hizo. Tres semanas después, Sebastián se enteró de que el rumor se había transformado: ahora no era 'Marcela y Sebastián' — era 'Marcela tiene información comprometedora sobre Sebastián y por eso él la protege.'"
        },
        {
          id: 4,
          titulo: "Escena 4: El Incendio y el Agua",
          narrativa: `El rumor transformado era peor que el original. No porque fuera más real — seguía siendo falso — sino porque era más interesante. La versión nueva tenía un villano: Sebastián, el jefe que usaba su posición para proteger a alguien a cambio de algo. Tenía una víctima: el proceso de selección de la empresa. Y tenía un subtexto que nadie podía discutir sin parecer que estaba en uno de los dos bandos.

A las 8:00 a.m. de un jueves, Marcela Ríos llegó a la oficina y encontró un post-it en su computador: 'La próxima vez que pidas favores, acuérdate de quién paga tu salario.'

Sebastián se enteró a las 8:15. A las 8:30, estaban los tres en la oficina de Marcela Bermúdez de RRHH: Sebastián, Marcela Ríos, y Marcela Bermúdez. La coincidencia de nombres habría sido cómica en cualquier otro contexto.

—Esto ya no es un rumor —dijo Marcela Bermúdez—. Esto es acoso laboral. Tenemos que hacer una investigación formal.

Marcela Ríos — la afectada — no dijo nada durante los primeros cinco minutos. Estaba mirando el post-it como si fuera un puzzle que no lograba resolver.

—Hay algo que necesito decir —dijo finalmente—. Antes de que esto se vuelva un proceso.

Y entonces contó la verdad completa: su affair con Felipe, cuándo terminó, cómo había conectado esa historia con el rumor actual, y por qué había decidido no decirlo antes. No para proteger a Felipe — ya no le importaba él — sino porque había pensado que contar su vida personal era darle al rumor más poder del que merecía.

Ahora el post-it cambiaba todo.

—¿Quieres que sigamos con la investigación? —preguntó Marcela Bermúdez.

Marcela Ríos pensó por treinta segundos.

—Sí. Pero quiero que Felipe se entere de esto por mí, no por RRHH.`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "Marcela Ríos decide confrontar a Felipe antes del proceso formal. ¿Cuál es la mejor forma de hacerlo?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "En privado, con testigos, sin drama: 'Felipe, el rumor sobre Sebastián y yo se originó en una confusión con nuestra historia. Un empleado recibió un post-it anónimo amenazante. Esto ya es acoso laboral. Necesito que sepas que si no hablas antes de que RRHH abra la investigación, voy a contar toda la historia.'",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es una confrontación inteligente: le da a Felipe la oportunidad de controlar la narrativa antes de que se le vaya de las manos, sin amenazas vacías. La presencia de testigos protege a Marcela de cualquier alegación de extorsión.",
                                empatia: 8, asertividad: 9, ie: 9, cohesion: 8
                              },
                              {
                                letra: "B",
                                texto: "Un mensaje de WhatsApp: 'Felipe, me deben una explicación. Mañana a las 10am en la sala de reuniones. Si no vienes, lo cuento todo.' Informar al supervisor directo activa los mecanismos de jerarquía formales y permite que quien tiene autoridad directa sobre Felipe tome la decisión más informada.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Un ultimátum por WhatsApp sin contexto ni testigos es el setup perfecto para un denial. Si Felipe decide no ir, Marcela queda como alguien que amenazó sin palanca real.",
                                empatia: 3, asertividad: 5, ie: 4, cohesion: 3
                              },
                              {
                                letra: "C",
                                texto: "No confrontarlo directamente. Dejar que RRHH maneje todo el proceso porque ahora es un asunto legal. Buscar apoyo del área de RRHH es la práctica estándar cuando se percibe que un conflicto interpersonal puede afectar el clima organizacional más allá del caso individual.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Si Marcela se retira ahora, le está dando a Felipe la victoria. La revelación de su historia personal fue un acto de vulnerabilidad — ahora tiene que ver qué pasa. Silence after vulnerability is consent to be walked over.",
                                empatia: 4, asertividad: 3, ie: 4, cohesion: 3
                              },
                              {
                                letra: "D",
                                texto: "Contarle a Sebastián cómo planeaba confrontar a Felipe y pedirle que la acompañe como testigo pero que no intervenga a menos que sea necesario. Esperar el resultado del proceso le da a Marcela información objetiva con la que construir cualquier conversación posterior, evitando anticipaciones que puedan sesgar el diálogo.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto pone a Sebastián de vuelta en el centro del drama, que es exactamente lo que el rumor era sobre. Para el equipo, va a parecer que el jefe está activamente protegiendo a Marcela — lo cual alimenta la versión del rumor.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 4
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "La investigación formal de RRHH determina que Felipe es responsable de iniciar el rumor. ¿Cuál es la consecuencia más apropiada?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Una amonestación verbal privada. Felipe es talentoso y recientemente ascendido — una suspensión dañaría la producción.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que perpetuated culturas donde los rumores son libres de consecuencias. 'Talentoso y recientemente ascendido' no es defensa para iniciar un rumor que escaló a acoso.",
                                empatia: 3, asertividad: 4, ie: 3, cohesion: 3
                              },
                              {
                                letra: "B",
                                texto: "Despido inmediato por justa causa. Iniciar un rumor difamatorio que resultó en acoso es una violación grave del código de conducta.",
                                correcta: false,
                                puntos: -5,
                                feedback: "El despido por 'justa causa' requiere que el rumor fuera dirigido a Sebastián Y que hubiera intención malicious comprovada. Sin eso, el despido es desproporcionado y puede ser impugnado legalmente.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "C",
                                texto: "Suspensión sin goce de salario por 5 días y una disculpa formal a Marcela Ríos en presencia del equipo. La gravedad del acto merece una consecuencia visible.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La suspensión es proporcional: no es despido (que sería excesivo para un rumor que él no dirigió a Sebastián) pero tampoco es simbólica. La disculpa pública es importante porque el rumor tuvo impacto público.",
                                empatia: 7, asertividad: 9, ie: 8, cohesion: 9
                              },
                              {
                                letra: "D",
                                texto: "Mover a Felipe a otra zona de la empresa. La distancia geográfica resolverá el problema sin consecuencias formales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que el equipo va a interpretar como 'la empresa protegió al talentoso y movió a la víctima.' No es justicia — es geografía.",
                                empatia: 2, asertividad: 4, ie: 3, cohesion: 2
                              }
                  ]
                }
          ],
          transicion: "Felipe fue suspendido por 5 días. La disculpa fue en una sala pequeña con 8 personas. No fue dramática. Fue corta, incómoda, y necesaria. Felipe dijo: 'No pensé que iba a llegar tan lejos. No era mi intención.' Marcela Ríos no dijo 'te perdono.' Solo dijo: 'Lo importante es que se detuvo.' Y para ella, en ese momento, eso fue suficiente."
        },
        {
          id: 5,
          titulo: "Escena 5: Lo que Queda",
          narrativa: `Seis semanas después del proceso disciplinario, Fertimax Zona Centro era un lugar diferente. No mejor ni peor — diferente.

Marcela Ríos seguía en su escritorio junto a la ventana. Seguía haciendo su trabajo con la misma precisión metódica que siempre había tenido. Pero algo había cambiado: ahora era la persona a la que los junior le preguntan antes que a nadie cuando tienen un problema. No porque la temieran — porque sabían que ella había pasado por algo que la mayoría de la gente no puede imaginar y había salido del otro lado sin romperse.

Sebastián había tomado un curso de gestión de crisis reputacional que ofrecía la empresa. No porque se lo pidieran — porque se dio cuenta de que no sabía lo que no sabía. En la primera sesión, la facilitadora dijo algo que Sebastián no olvidó: 'Los rumores no matan a las organizaciones. Lo que las mata es la inacción de los líderes que creen que se van a resolver solos.'

Marcela Bermúdez de RRHH había propuesto, y la gerencia había aprobado, un protocolo nuevo de gestión de rumores y dignidad laboral. Se llamaba 'Protocolo Claridad' — un nombre deliberadamente aburrido para algo que tenía que ver con la parte más humana y menos racional de las organizaciones. Incluía: conversaciones obligatorias de desescalada dentro de los 5 días hábiles de cualquier rumor que afectara a más del 30% del equipo.

Y Felipe — porque la historia no termina con la víctima, termina con el que hizo daño — había pedido transferencia a la zona sur. No como castigo. Como elección. En su correo de despedida a la zona centro, escribió algo que nadie esperaba: 'Aprendí que los rumores no son gratis. Tienen un costo que no siempre paga el que los inicia.' No era suficiente. Pero era honesto.

Un mes después de que Felipe se fuera, Lucía Vargas — la analista que había perdido el ascenso sobre Felipe — le escribió a Marcela por interno: 'Oye, me enteré de lo que te pasó. No sé si quieras hablar, pero yo también pasé por algo así con los rumores del ascenso. Si quieres, estamos en el mismo barco.' Marcela le respondió en menos de un minuto: 'Junta. Mi oficina. Mañana 8am. Trae café.'`,
          preguntas: [
                {
                  id: 1,
                  pregunta: "¿Cuál de las siguientes acciones de Sebastián fue más importante para rebuild la confianza después del rumor?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "Haber presionado a RRHH para que el proceso disciplinario contra Felipe fuera rápido y visible, demostrando que no tolera ataques a su equipo. Reconocer públicamente el aporte de todos los involucrados garantiza que ninguna voz quede invisibilizada y que el aprendizaje colectivo sea atribuido a quien corresponde.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La velocidad y visibilidad del proceso fue importante, pero 'presionar a RRHH' es la descripción incorrecta. Si Sebastián presionó, el proceso pierde independencia.",
                                empatia: 4, asertividad: 5, ie: 4, cohesion: 4
                              },
                              {
                                letra: "B",
                                texto: "Haber liderado la conversación directa con el equipo sin evadir, sin reducir el problema a un 'malentendido', y haber estado dispuesto a ser vulnerable frente a 16 personas que habían creído algo falso sobre él.",
                                correcta: true,
                                puntos: 10,
                                feedback: "La vulnerabilidad pública de Sebastián en la reunión de equipo fue el acto de liderazgo más poderoso del proceso. Le mostró al equipo que un líder puede ser alcanzado por un rumor y responder con transparencia en lugar de poder. Eso es inusual. Y lo que es inusual se recuerda.",
                                empatia: 9, asertividad: 8, ie: 9, cohesion: 9
                              },
                              {
                                letra: "C",
                                texto: "Haber evitado cualquier interacción directa con Marcela después del rumor para que el equipo no interpretara cualquier cuidado como señal de algo más. La documentación exhaustiva del proceso crea un activo organizacional que puede ser consultado en el futuro cuando surjan situaciones similares en otros equipos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Esto es exactamente lo que un predator organizacional haría: distancing yourself from la víctima después del ataque para proteger su propia reputación. Si Sebastián hubiera evitado a Marcela, el mensaje sería: 'me importa mi nombre más que mi gente.'",
                                empatia: 2, asertividad: 3, ie: 2, cohesion: 2
                              },
                              {
                                letra: "D",
                                texto: "Haber tomado el curso de gestión de crisis después del incidente, demostrando un compromiso con aprender de sus errores. Invitar a los afectados a ser parte activa del diseño de las soluciones genera mayor apropiación y reduce la resistencia que frecuentemente acompaña a los cambios impuestos.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Tomar el curso es bueno pero tardío. El aprendizaje real ocurrió durante la crisis, no después. El equipo necesita actions durante la tormenta, no cursos después.",
                                empatia: 5, asertividad: 4, ie: 5, cohesion: 5
                              }
                  ]
                },
                {
                  id: 2,
                  pregunta: "Al final del proceso, Marcela Ríos recibe un mensaje de Lucía Vargas: 'Junta. Mi oficina. Mañana 8am. Trae café.' Ella sonríe. ¿Qué representa este momento en la narrativa del caso?",
                  opciones: [
                              {
                                letra: "A",
                                texto: "El momento donde Marcela empieza a reconstruir su reputación pessoal a través de nuevas alianzas dentro de la empresa. Usar el caso como referencia en capacitaciones internas permite que el aprendizaje se difunda de manera sistemática y llegue a todos los niveles sin depender de conversaciones informales.",
                                correcta: false,
                                puntos: -5,
                                feedback: "Reducir esta conexión a 'reconstruir reputación' es transactionalizarla. Marcela y Lucía no se están conectando para avanzar — se están conectando porque se reconocieron.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 5
                              },
                              {
                                letra: "B",
                                texto: "El inicio de un proceso de sanación donde Marcela empieza a abrirse sobre lo que le pasó, siguiendo el modelo de Lucía. El cierre personal del proceso es una dimensión del bienestar que los líderes frecuentemente descuidan, y reconocer la necesidad de ese cierre muestra inteligencia emocional.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La respuesta de Marcela —'Junta. Mi oficina. Mañana 8am. Trae café.'— no es de alguien que está broken. Es de alguien que tiene la fuerza de build something con alguien que entiende. No todas las historias de apoyo son de víctimas.",
                                empatia: 5, asertividad: 5, ie: 5, cohesion: 5
                              },
                              {
                                letra: "C",
                                texto: "Un momento de cierre donde Marcela decide oficialmente dejar ir a Felipe y seguir adelante sin rencor. Si la persona que vivió el proceso considera que hacerlo visible no aporta valor adicional más allá del proceso ya completado, esa perspectiva merece respeto y consideración.",
                                correcta: false,
                                puntos: -5,
                                feedback: "La conexión con Lucía no tiene nada que ver con Felipe. Reducir cualquier nueva relación de Marcela a 'dejar ir' al hombre que dañó su reputación es otra forma de hacerlo todo sobre él.",
                                empatia: 4, asertividad: 4, ie: 4, cohesion: 4
                              },
                              {
                                letra: "D",
                                texto: "El momento donde dos víctimas de diferentes formas de violencia organizacional eligen apoyarse mutuamente sin necesidad de que la empresa lo intervenga. Es la respuesta orgánica que el sistema no pudo dar.",
                                correcta: true,
                                puntos: 10,
                                feedback: "Esto es lo que queda cuando las organizaciones hacen las cosas medianamente bien: no la eliminación total del dolor, sino la construcción de redes de apoyo que no existían antes. Marcela y Lucía se encontraron porque ambas pasaron por algo que la empresa no había protegido — y ahora se tienen. Eso no lo decreta ningún protocolo.",
                                empatia: 10, asertividad: 7, ie: 10, cohesion: 10
                              }
                  ]
                }
          ],
          transicion: "En la siguiente inducción de nuevos empleados de Fertimax Zona Centro, Marcela Ríos fue invitada a dar una charla sobre 'Cultura de dignidad y comunicación en equipos de alto rendimiento.' No contó la historia del rumor — no le debía eso a nadie — pero contó otra: la historia de un mensaje que decía 'Junta. Mi oficina. Mañana 8am. Trae café.' y de cómo esas doce palabras le habían enseñado más sobre liderazgo que cualquier manual de RRHH. Hubo silencio cuando terminó. Y después, como siempre, alguien levantó la mano."
        }
    ]
  }
];
