// cases_v2.js — Assessment Center: Liderazgo Emocional
// Versión profunda: 5 escenas, 2 preguntas, 4 opciones con feedback + scoring 4D
// Contexto: Empresa colombiana de fertilizantes y petroquímicos

const CASOS = [
  {
    id: 1,
    titulo: "El Día que Dos Titanes se Rompieron",
    tema: "Conflicto entre empleados clave",
    escenarios: [
      {
        id: 1,
        titulo: "Escena 1: El detonante",
        narrativa: "Es un martes a las 6:47 PM. Llegas a tu oficina en el piso 12 de la torre en Bogotá. La luz de la ciudad se filtra por los ventanales. Tu asistente te intercepta antes de que enciendas el computador.\n\n\"Jefe, Carlos Medellín y Andrés Vásquez llevan tres semanas sin hablarse. Lo que empezó como una discusión sobre prioridades de presupuesto se convirtió en una guerra fría. Las órdenes no se comunican entre departamentos. Los equipos están tomando partido.\"\n\nCarlos es tu Director de Producción. 18 años en la empresa. Conoce cada válvula de la planta de Barrancabermeja como la palma de su mano. Es obstinado, directo, y tiene razón técnicamente en el 90% de las veces.\n\nAndrés es tu Director Comercial. 12 años en la empresa. El que trae los contratos más grandes. Tiene una relación personal con los CEOs de los clientes más importantes del país. Es diplomado, político, y siempre tiene una estrategia.\n\nTu asistente te busca: \"Necesitan que alguien mediane. Andrés quiere que su equipo presente primero en la reunión del jueves. Carlos dice que su producción tiene prioridad sobre el comercial.\"\n\nAndrés te escribió WhatsApp a las 11:43 PM: \"Si no me dan mi espacio en esa reunión, presento mi renuncia.\"\n\nMaría —tu otra directora— te buscó en persona: \"O Carlos cambia o yo me voy.\"\n\nTienes 45 minutos antes de tu siguiente reunión.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo intervienes en este conflicto entre dos líderes clave?",
            opciones: [
              { letra: "A", texto: "Convocas a ambos a una reunión inmediata para mañana. Les explicas que la empresa los necesita a los dos y que deben resolver esto antes del jueves.", correcta: false, puntos: -5, feedback: "Forzar una reconciliación sin entender las causas raíz suele empeorar el conflicto. Requiere más preparación.", empatia: 5, asertividad: 6, ie: 4, cohesion: 5 },
              { letra: "B", texto: "Hablas primero con cada uno por separado para entender sus posiciones reales, sentimientos y lo que está en juego para cada uno.", correcta: true, puntos: 10, feedback: "Escuchar primero permite entender las necesidades reales detrás de las posiciones. Esto construye confianza y evita escaladas.", empatia: 9, asertividad: 7, ie: 8, cohesion: 7 },
              { letra: "C", texto: "Le dices a tu asistente que les comunique que deben resolverlo entre ellos antes del jueves. No es tu responsabilidad como líder.", correcta: false, puntos: -5, feedback: "Delegar la resolución de conflictos entre líderes senior no es abandonar la responsabilidad. Es evitar involucrarte prematuramente, pero tampoco lavártelas.", empatia: 3, asertividad: 4, ie: 3, cohesion: 4 },
              { letra: "D", texto: "Les escribes un correo conjunto proponiendo un formato rotativo donde ambos equipos presentan en la misma sesión, cada uno con su espacio definido.", correcta: false, puntos: -5, feedback: "Proponer soluciones antes de escuchar puede sentirse como manipulación o como minimizar el problema. Requiere el diálogo primero.", empatia: 6, asertividad: 7, ie: 5, cohesion: 6 }
            ]
          },
          {
            id: 2,
            pregunta: "Después de hablar con cada uno separadamente, descubres que el conflicto real no es el presupuesto. Carlos se siente irrespetado porque Andrés prometió un shipment imposible que afectó la planta. Andrés se siente saboteado porque Carlos no le dijo que era imposible hasta que ya era tarde. ¿Qué haces?",
            opciones: [
              { letra: "A", texto: "Les propones a ambos un acuerdo: Andrés se compromete a no prometer shipments sin consultar a producción primero. Carlos se compromete a alertar anticipadamente si ve riesgos. Tú monitoreas por 90 días.", correcta: true, puntos: 10, feedback: "Crear nuevos acuerdos de colaboración basados en lo que cada uno necesita es liderazgo transformacional. El monitoreo de 90 días asegura rendición de cuentas.", empatia: 8, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "Les dices que el problema fue falta de comunicación y les pides que lo resuelvan como adultos profesionales. No te involucres más.", correcta: false, puntos: -5, feedback: "Después de descubrir las causas raíz, no involucrarse es perder la oportunidad de transformar el conflicto en aprendizaje organizacional.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "Llevas el tema a la junta directiva para que ellos decidan quién tiene razón sobre los procesos de shipment.", correcta: false, puntos: -5, feedback: "Escalar un conflicto entre dos directores a la junta sin haber intentado la mediación directa es evitar tu responsabilidad como líder.", empatia: 3, asertividad: 3, ie: 3, cohesion: 3 },
              { letra: "D", texto: "Le pides a Andrés que se disculpe públicamente con el equipo de producción por la promesa incumplida, y a Carlos que haga lo mismo con el equipo comercial por no comunicar a tiempo.", correcta: false, puntos: -5, feedback: "Forzar disculpas públicas puede generar resentimiento y no aborda el cambio sistémico necesario en los procesos de comunicación.", empatia: 5, asertividad: 6, ie: 4, cohesion: 5 }
            ]
          }
        ],
        transicion: "Los tres firman un acuerdo de colaboración. Pero sabes que el verdadero test viene cuando la presión llegue de nuevo."
      },
      {
        id: 2,
        titulo: "Escena 2: La siguiente crisis",
        narrativa: "Han pasado 6 semanas desde la mediación. El acuerdo está funcionando —más o menos. Andrés ya no promete shipments sin consultar. Carlos avisa con anticipación. Pero hoy recibes una llamada a las 7:15 AM.\n\nEs el Gerente de Planta de Barrancabermeja: \"Jefe, tenemos una situación. Un operador experimentado, Duvan Felipe Arenas, tuvo una discusión fuerte con su supervisor Jorge Enrique. Duvan dijo que \"la empresa no le importa una mierda\" y que \"si lo despiden, se va a llevar puesto a alguien\". El supervisor lo reportó a recursos humanos. Duvan pidió audiencia contigo.\"\n\nDuvan tiene 14 años en la planta. Es el operador más experimentado en el turno de noche. Conoce los protocolos de seguridad mejor que nadie. Pero hace 3 meses le detectaron un tumor benigno. La cirugía está programada para dentro de 6 semanas. Duvan está obsesionado con si la empresa lo va a apoyar o no.\n\nEl supervisor de Duvan, Jorge Enrique, es nuevo. Lleva 8 meses en el puesto. Cometió el error de confrontar a Duvan en frente de otros operadores.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo manejas la situación con Duvan Felipe antes de la audiencia?",
            opciones: [
              { letra: "A", texto: "Hablas primero con el supervisor Jorge Enrique para entender exactamente qué pasó, qué dijo Duvan, y cómo estaba Jorge Enrique cuando tuvo la discusión.", correcta: false, puntos: -5, feedback: "Hablar primero con el supervisor sin haber escuchado a Duvan puede reforzar la percepción de que la empresa está en contra de él.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "B", texto: "Hablas primero con Duvan. Le dices que escuchaste lo que pasó, que no estás ahí para juzgarlo, y que quieres entender qué está pasando antes de cualquier cosa.", correcta: true, puntos: 10, feedback: "Acudir primero a quien hizo la amenaza muestra interés genuino y permite evaluar riesgo real mientras construyes confianza.", empatia: 9, asertividad: 7, ie: 9, cohesion: 7 },
              { letra: "C", texto: "Pasas directamente a recursos humanos para activar el protocolo de manejo de amenazas y dispatched de seguridad antes de hablar con nadie.", correcta: false, puntos: -5, feedback: "Activar protocolos de seguridad sin antes evaluar la situación puede escalar innecesariamente y destruir la relación con un empleado que tiene una situación médica real.", empatia: 3, asertividad: 5, ie: 3, cohesion: 3 },
              { letra: "D", texto: "Le pides a tu Director de Recursos Humanos que hable con Duvan primero porque es materia de RRHH y no de línea.", correcta: false, puntos: -5, feedback: "Como líder de línea, tu participación tempranamente envía el mensaje correcto sobre cómo la empresa trata a sus empleados.", empatia: 5, asertividad: 4, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Hablaste con Duvan. Dice que nunca tuvo intención de hacerle daño a nadie, que estaba frustrado porque siente que la empresa lo va a desechar ahora que está enfermo. Dice que no tiene ahorros porque siempre trabajó en la informalidad antes de esta empresa. ¿Qué decisión tomas?",
            opciones: [
              { letra: "A", texto: "Le ofreces a Duvan un programa de acompañamiento médico que incluyeflexibilidad de turnos, licencia pagada para la cirugía, y un fondo de emergencia de la empresa para sus gastos.", correcta: true, puntos: 10, feedback: "Invertir en el bienestar de un empleado durante una crisis médica construye lealtad profunda y envía un mensaje claro sobre los valores de la empresa.", empatia: 10, asertividad: 8, ie: 9, cohesion: 9 },
              { letra: "B", texto: "Le dices que la empresa tiene un programa de salud ocupacional que cubre hasta el 80% de procedimientos médicos, y que él puede acceder a ello como cualquier empleado.", correcta: false, puntos: -5, feedback: "Reducir la situación a un proceso burocrático sin mostrar empatía personal cierra la conversación prematuramente.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 },
              { letra: "C", texto: "Le ofreces hablar con el supervisor Jorge Enrique para mediar entre ambos y resolver el conflicto interpersonal primero.", correcta: false, puntos: -5, feedback: "El problema de Duvan es el miedo al abandono, no el conflicto con su supervisor. Mediar el conflicto sin atender la raíz no resuelve nada.", empatia: 5, asertividad: 5, ie: 5, cohesion: 6 },
              { letra: "D", texto: "Le dices que es muy pronto para comprometerte y que necesitas consultar con RRHH y la junta primero.", correcta: false, puntos: -5, feedback: "Adjournir una decisión cuando alguien está vulnerable envía el mensaje de que no vale la pena luchar por él.", empatia: 4, asertividad: 3, ie: 4, cohesion: 3 }
            ]
          }
        ],
        transicion: "Duvan vuelve a la planta. Le avisas a Jorge Enrique que el tema está manejado. Pero sabes que esto es solo el comienzo de conversaciones más profundas sobre bienestar."
      },
      {
        id: 3,
        titulo: "Escena 3: El mensaje que lo cambió todo",
        narrativa: "Han pasado 3 meses. El programa piloto de bienestar emocional que lanzaste con Duvan —flexibilidad, fondo de emergencia,check-ins semanales— está funcionando. Duvan se operó, volvió, y es el advocate más fuerte del programa.\n\nPero hoy recibes esto en tu correo corporativo:\n\n\"Estimado líder. Le escribo para informarle que nuestro equipo de servicios generales ha recibido quejas de múltiples colaboradores sobre el trato que reciben de algunos supervisores. Los testimonios son graves: gritos en frente de otros, comentarios despectivos sobre la vida personal, amenazas veladas de despido. Le pido una reunión para hablar de esto con urgencia. Saludos. Patricia Montoya, Gerente de Recursos Humanos.\"\n\nPatricia es nueva. Lleva 4 meses en la empresa. Viene de una empresa multinational de alimentos. Es rigurosa, data-driven, y no tiene miedo de escalar.\n\nLas quejas son de los mismos operadores de siempre —los que están en turnos nocturnos, los que ganan menos, los que menos voz tienen en la empresa.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo respondes al correo de Patricia Montoya?",
            opciones: [
              { letra: "A", texto: "Le agradeces y le dices que tienes disponibilidad el jueves. Le pides que te comparta los testimonios antes para que puedas prepararte.", correcta: true, puntos: 10, feedback: "Responder con gratitud y preparación muestra seriedad ante el tema y respeto por el proceso de Patricia.", empatia: 7, asertividad: 9, ie: 8, cohesion: 8 },
              { letra: "B", texto: "Le dices que es un tema delicado y que necesitas revisar internamente antes de reunirte, que te contactará cuando tengas más información.", correcta: false, puntos: -5, feedback: "Pedir tiempo para 'revisar internamente' antes de siquiera reunirse puede interpretarse como defensivo o como si quisieras controlar la narrativa.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "Llamas a Patricia directamente para entender mejor el scope de las quejas antes de responder formalmente.", correcta: false, puntos: -5, feedback: "Saltar al teléfono sin responder el correo puede parecer evasión de la comunicación formal. Lo correcto es responder primero y luego llamar.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Le reenvías el correo a tu equipo de línea para que ellos preparen su versión de los hechos antes de que te sientes con Patricia.", correcta: false, puntos: -5, feedback: "Esto crea un equipo en modo defensivo antes de la conversación. Divide la organización en 'nosotros vs. ellos' antes de tener los hechos.", empatia: 3, asertividad: 4, ie: 3, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "En la reunión con Patricia, te presenta 7 testimonios de operadores. Todos son de supervisores diferentes. Algunos incluyen frases como 'ustedes son reemplazables' y 'a mí no me importa si tiene problemas personales'. Patricia te mira y dice: 'Esto no es un problema de RRHH. Es un problema de liderazgo en tus equipos. ¿Qué vas a hacer?'. ¿Qué respondes?",
            opciones: [
              { letra: "A", texto: "\"Patricia, gracias por trae esto. Tienes razón — esto es un problema de liderazgo. Necesito entenderlo mejor antes de actuar. Me comprometo a tener conversaciones con cada supervisor en las próximas dos semanas y traerte un plan de acción. ¿Te parece si nos reunimos el 15 para revisarlo?\"", correcta: true, puntos: 10, feedback: "Reconocer el problema, agradecer la información, comprometerse a acción específica con timeline, y pedir colaboración en lugar de defenderse es liderazgo maduro.", empatia: 8, asertividad: 9, ie: 8, cohesion: 9 },
              { letra: "B", texto: "\"Patricia, esto es muy preocupante. Necesito revisar estos testimonios con mis supervisores para entender el contexto completo antes de tomar acciones. Hay dos versiones de cada historia.\"", correcta: false, puntos: -5, feedback: "Pedir 'contexto' antes de reconocer el problema puede sentirse como buscar excusas o culpar a las víctimas de los testimonios.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "\"Vamos a despedir a los supervisores mencionados en los testimonios. Eso envía un mensaje claro de que esto no se tolera.\"", correcta: false, puntos: -5, feedback: "Despedir sin investigación previa puede ser injusto para los supervisores y no aborda la cultura que permitió esto. Se necesita un proceso.", empatia: 3, asertividad: 7, ie: 3, cohesion: 4 },
              { letra: "D", texto: "\"Esto es terrible. No tenía idea. ¿Qué sugiere recursos humanos que hagamos?\"", correcta: false, puntos: -5, feedback: "Delegar completamente la solución a RRHH sin mostrar liderazgo propio es evitar tu responsabilidad como líder de línea.", empatia: 5, asertividad: 3, ie: 5, cohesion: 4 }
            ]
          }
        ],
        transicion: "Te vas de la reunión con Patricia. Tienes dos semanas. Seis supervisores. Siete testimonios. Y la certeza de que algo profundo está roto en la cultura de tus equipos."
      },
      {
        id: 4,
        titulo: "Escena 4: La decisión que nadie quiere tomar",
        narrativa: "Han pasado 10 días desde la reunión con Patricia. Has hablado con los 6 supervisores. Cuatro de ellos reconocieron haber tenido \"discusiones intensas\" pero negaron haber dicho frases específicas. Dos no vieron problema en cómo se comunicaban.\n\nLos testimonios de los operadores paintan una imagen diferente: gritos, humillaciones, y un patrón de supervisión que solo corrige con amenaza.\n\nPatricia te escreve: \"¿Cuál es el plan? Tenemos el taller de liderazgo en 5 días. Los operadores están observando cómo manejas esto.\"\n\nEl problema: despedir a un supervisor sin un proceso disciplinario formal puede expose a la empresa a demandas. Pero mantener a alguien que humilla a sus subordinados erosiona la cultura día a día.\n\nY hay algo más: uno de los supervisores que 'no vio problema' es Hugo Bermúdez. El tío de uno de tus mejores operadores. Si lo tocas, puede que pierdas a ese operador también.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es tu primera acción?",
            opciones: [
              { letra: "A", texto: "Inicias un proceso disciplinario formal contra los 4 supervisores que reconocieron 'discusiones intensas' usando el código de ética de la empresa.", correcta: false, puntos: -5, feedback: "Un proceso disciplinario formal sin un programa de desarrollo parallelo puede percibirse como castigo sin intención de cambiar el comportamiento.", empatia: 5, asertividad: 7, ie: 5, cohesion: 6 },
              { letra: "B", texto: "Pones a todos los supervisores en un programa intensivo de liderazgo emocional de 8 semanas como condición para continuar en sus puestos. Quien no complete o no demuestre cambio sale.", correcta: true, puntos: 10, feedback: "Condicionar la permanencia al desarrollo realcombina rendición de cuentas con oportunidad de cambio. Es líder y justo al mismo tiempo.", empatia: 8, asertividad: 9, ie: 8, cohesion: 9 },
              { letra: "C", texto: "Hablas directamente con Hugo Bermúdez para darle la oportunidad de explicarte su perspectiva antes de tomar cualquier decisión.", correcta: false, puntos: -5, feedback: "Hablar solo con Hugo sin abordar al resto puede parecer injusto. Cada supervisor merece la misma atención y oportunidad de cambio.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Le pides a Patricia que maneje todo el proceso de RRHH tú mínimo involucrado porque esto es materia de ellos.", correcta: false, puntos: -5, feedback: "Delegar completamente la resolución a RRHH cuando es un problema de liderazgo en tus equipos es evasión de responsabilidad.", empatia: 4, asertividad: 3, ie: 4, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "En la segunda sesión del programa de liderazgo, Hugo Bermúdez —el supervisor cuyo nephew trabaja para ti— te confronta directamente: \"Jefe, yo sé lo que pasó. Es que estos operadores no tienen disciplina. Si uno les permite una falta, empiezan a llegar tarde todos los días. Yo los grito porque nadie más lo hace. ¿Eso me hace mala persona?\" ¿Qué le respondes?",
            opciones: [
              { letra: "A", texto: "\"Hugo, entiendo que estás frustrado. Perogritar no es disciplina. Es miedo disfrazado de autoridad. Si quieres respeto de tu equipo, primero tienes que darlos. ¿Qué te parece si trabajamos en herramientas concretas para manejar esa frustración sin gritos?\"", correcta: true, puntos: 10, feedback: "Validar la frustración mientras se secciona el comportamiento destructivo abre espacio para el cambio sin humillar. Proponer alternativas concretas es liderazgo.", empatia: 9, asertividad: 8, ie: 9, cohesion: 8 },
              { letra: "B", texto: "\"Hugo, el programa dice que si no hay cambio de comportamiento, hay consecuencias. Así que la pregunta no es si eres buena o mala persona. La pregunta es si estás dispuesto a aprender.\"", correcta: false, puntos: -5, feedback: "Usar el programa como amenaza en lugar de como oportunidadcierra la puerta al desarrollo. No es liderazgo, es control.", empatia: 4, asertividad: 7, ie: 4, cohesion: 5 },
              { letra: "C", texto: "\"Hugo, tienes razón en que hay un problema de disciplina. Perogritar no es la solución. Vamos a trabajar juntos en un sistema de gestión del desempeño que sea firme pero respetuoso.\"", correcta: false, puntos: -5, feedback: "Validar la percepción de 'problema de disciplina' sin señalar que el método es incorrecto puede reforzar la justificación del comportamiento.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "\"Hugo, esto no es sobre si eres buena persona. Es sobre si el método que usas funciona o no. ¿Funciona gritarles a tus operadores?\"", correcta: false, puntos: -5, feedback: "Ponerlo en evidencia con una pregunta puede hacer que se ponga a la defensiva en lugar de reflexionar.", empatia: 4, asertividad: 7, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Hugo asiente lentamente. No está convencido pero algo se movió. Al día siguiente, por primera vez en 8 meses, le habla a un operador sin levantar la voz."
      },
      {
        id: 5,
        titulo: "Escena 5: El mensaje que cambia la cultura",
        narrativa: "Han pasado 6 meses. El programa de liderazgo emocional completó su segunda cohorte. Los 4 supervisores que empezaron el programa siguen ahí. Dos muestran cambio significativo. Dos están en el límite.\n\nHoy es el día del taller de liderazgo para los 32 gerentes y mandos medios de la empresa. Es la primera vez que la alta gerencia se sienta junta en 18 meses.\n\nPatricia te buscó ayer: \"El CEO va a estar en el taller. Le he mostrado los resultados del programa piloto: 40% menos quejas de operadores, 3 supervisores que fueron reemplazados antes por una rotación que ahora prefieren quedarse. El CEO quiere que presentes.\"\n\nTe muestra los números: la planta de Barrancabermeja tuvo cero incidentes de seguridad en los últimos 4 meses. La productividad del turno de noche subió 8%. El programa de benefits —el que creaste con Duvan— tiene una adopción del 70%.\n\nPero también hay un lado difícil: un supervisor no completó el programa. Tuvo que ser despedido. Dejó a un equipo de 12 operadores sin supervisor. Y uno de tus directores más antiguos te escreveu que \"estos programas blandos son para empresas que no saben producir\".\n\nTienes 20 minutos para hablarle a la alta gerencia sobre el futuro de la cultura de esta empresa.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo estructuras tu presentación de 20 minutos ante la alta gerencia?",
            opciones: [
              { letra: "A", texto: "Empiezas con los números: productividad, incidentes de seguridad, rotación. Los datos hablan solos. Cierras con la visión: 'Esto no es un programa de RRHH. Es una estrategia de negocio.'", correcta: true, puntos: 10, feedback: "Anclar la narrativa en datos de negocio hace que el tema sea relevante para CEOs y directivos. Vincular operaciones con cultura es liderazgo estratégico.", empatia: 7, asertividad: 9, ie: 8, cohesion: 9 },
              { letra: "B", texto: "Empiezas con la historia de Duvan. El operador que se sentía desechado y hoy es el advocate más fuerte del programa. Cierras con: 'La pregunta no es si podemos costear hacer esto. La pregunta es si podemos costear no hacerlo.'", correcta: false, puntos: -5, feedback: "La narrativa emotiva es poderosa pero para una audiencia de CEOs y financieros necesitas números primero. Las historias vienen después de los datos.", empatia: 8, asertividad: 6, ie: 7, cohesion: 7 },
              { letra: "C", texto: "Empiezas con lo difícil: el supervisor que no completó el programa y tuvo que ser despedido. El equipo sin supervisor. El costo humano del cambio. Cierras con el compromiso: 'Esto no es opcional.'", correcta: false, puntos: -5, feedback: "Comenzar con lo negativo sin establecer primero el caso de negocio puede hacerte parecer como alguien que prioriza personas sobre resultados. Necesitas ambos.", empatia: 7, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "D", texto: "Le pides a Patricia que presente ella porque viene de una empresa multinational y tiene más credibilidad con el CEO.", correcta: false, puntos: -5, feedback: "Delegar la presentación cuando es tu programa y tu liderazgo envía el mensaje de que no estás dispuesto a defender tu visión personalmente.", empatia: 4, asertividad: 3, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Después de tu presentación, el CEO —un hombre de 65 años que lleva 30 en la empresa— levanta la mano y dice: 'Está muy bien todo esto del bienestar, pero la producción es lo que paga los salarios. Si hay que elegir entre cultura y números, los números ganan. ¿Qué le respondes?",
            opciones: [
              { letra: "A", texto: "\"Entiendo su perspectiva, señor. Por eso le presenté los datos de producción primero. La planta de Barrancabermeja tuvo cero incidentes y subió productividad 8%. Cultura y números no son opuestos. Son la misma cosa cuando se hace bien.\"", correcta: true, puntos: 10, feedback: "Vincular explícitamente los resultados culturales con los números de negocio desarma la falsa dicotomía. El CEO necesita ver que culturaProduce resultados.", empatia: 7, asertividad: 10, ie: 8, cohesion: 9 },
              { letra: "B", texto: "\"Señor, con todo respeto, la producción que tenemos hoy es gracias a personas como Duvan. Sin ese programa, Duvan probablemente no estaría ahí. ¿Cuánto cuesta reemplazar un operador de 14 años de experiencia?\"", correcta: false, puntos: -5, feedback: "El costo de reemplazo es un argumento poderoso pero puede sentirse como confrontación al CEO. Funciona mejor como follow-up después de establecer la conexión directa.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "\"Tiene toda la razón, señor. Los números son lo más importante. Por eso los puse primero en mi presentación.\"", correcta: false, puntos: -5, feedback: "Estar de acuerdo con la falsa dicotomía sin rebuttal es abandonar la oportunidad de educar a tu CEO sobre cómo cultura y resultados se refuerzan mutuamente.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 },
              { letra: "D", texto: "\"Señor, hay cosas que no tienen precio. Y hay cosas que no tienen precio porque no tienen reemplazo. Un supervisor que ha estado 14 años no se reemplaza. Un operador que se siente valorado no se reemplaza.\"", correcta: false, puntos: -5, feedback: "El argumento filosófico sobre 'cosas sin precio' puede sonar idealista para un CEO que piensa en números. Necesitas traducirlo a su idioma.", empatia: 7, asertividad: 6, ie: 6, cohesion: 6 }
            ]
          }
        ],
        transicion: "ElCEO asiente lentamente. No está convencido pero está pensando. Eso es más de lo que esperabas."
      }
    ]
  },
  {
    id: 2,
    titulo: "Cuando el Trabajo Llega Roto desde Casa",
    tema: "Crisis personal de un colaborador",
    escenarios: [
      {
        id: 1,
        titulo: "Escena 1: La ausencia",
        narrativa: "Miércoles, 9:15 AM. Estás en la sala de juntas revisando el plan de producción del trimestre cuando recibes un mensaje de texto de Javier Morales: \"No voy a poder entrar hoy. Asunto personal.\"\n\nJavier es tu Jefe de Ingeniería de Procesos. Lleva 7 años en la empresa. Es técnico, metódico, y tiene la confianza total de la planta de Cartagena. Nunca falta. Nunca entrega tarde. Nunca se queja.\n\nA las 11:30 AM recibes un mensaje de su esposa, Camila: \"Javier no ha salido de la cama desde ayer en la tarde. No ha comido. No habla. Por favor, no lo presionen con trabajo. No sé qué hacer.\"\n\nSabes que hace seis semanas le diagnosticaron a su madre un tumor cerebral avanzado en Bucaramanga. Javier no te lo había contado formalmente, pero tuviste una conversación casual hace dos meses donde mencionó que 'estaba pasando por cosas personales'.\n\nTu reunión crítica con el cliente —Fertigrales de Venezuela— es mañana. Sin Javier, no hay quien presente el diseño técnico del nuevo sistema de mezclas NPK. El contrato es por 2.3 millones de dólares.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué haces al recibir el mensaje de Camila?",
            opciones: [
              { letra: "A", texto: "Le escrebes a Javier un mensaje de texto breve: 'Javier, lo más importante es tu familia. No te preocupes con el proyecto. Aquí estaremos cuando estés listo. Si hay algo que pueda hacer, me dices.'", correcta: true, puntos: 10, feedback: "Un mensaje breve y humano que prioriza su bienestar sin presión muestra empatía genuina mientras mantienes la puerta abierta para cuando esté listo.", empatia: 10, asertividad: 7, ie: 9, cohesion: 8 },
              { letra: "B", texto: "Llamas a Javier directamente para entender cuánto tiempo necesita y cómo puedes apoyarlo, mientras buscas alternativas para la presentación del cliente.", correcta: false, puntos: -5, feedback: "Llamar mientras está en crisis puede sentirse como presión aunque sea bien intencionado. Primero el mensaje, luego llamada cuando él esté listo.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "Le pides a María del Pilar —su colega— que cubra la presentación de mañana y le dices a Javier que se enfoque en su familia.", correcta: false, puntos: -5, feedback: "Asumir que necesitas cubrir a Javier sin hablar primero con él puede percibirse como que ya lo reemplazas antes de que termine.", empatia: 5, asertividad: 7, ie: 5, cohesion: 6 },
              { letra: "D", texto: "Le dices a Camila que no es apropiado que te contacte directamente y le pides a ella información médica que no es requerida para tomar decisiones laborales.", correcta: false, puntos: -5, feedback: "Pedir información médica o personal a la familia sin el consentimiento de Javier viola privacidad y puede empeorar la situación.", empatia: 2, asertividad: 5, ie: 3, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier te responde cuatro días después: 'Jefe, gracias por el mensaje. Estoy mejor. Mi mamá está en hospice. Voy a volver el lunes. ¿Cómo está lo del cliente?' ¿Qué haces?",
            opciones: [
              { letra: "A", texto: "Le dices que lo maneja todo, que no se preocupe. Le ofreces una semana más de licencia pagada para que esté con su mamá el tiempo que queda.", correcta: true, puntos: 10, feedback: "Ofrecer más tiempo sin que lo pida, mientras assures que el trabajo está cubierto, es liderazgo compasivo sin sacrificio del negocio.", empatia: 10, asertividad: 8, ie: 9, cohesion: 8 },
              { letra: "B", texto: "Le dices que encontró una alternativa para la presentación y que cuando vuelva el lunes quieren que se reincorpore a capacidad completa para preparar la siguiente fase del proyecto.", correcta: false, puntos: -5, feedback: "Asumir que puede volver a capacity completa sin dialog sobre cómo se siente o qué necesita es asumir demasiado.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 },
              { letra: "C", texto: "Le cuentas todo lo que pasó con el cliente durante su ausencia para que esté informado y pueda retomar sin problemas.", correcta: false, puntos: -5, feedback: "Informar sobre los detalles operativos mientras aún está de licencia lo pone en modo laboral prematuramente cuando debería estar procesando su duelo.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 },
              { letra: "D", texto: "Le preguntas cómo está emocionalmente y si necesita algo antes de hablar del trabajo.", correcta: false, puntos: -5, feedback: "Preguntar cómo está antes de hablar de trabajo es correcto, pero no oferecer más apoyo concrete puede leave al empleado sin saber qué recursos tiene disponibles.", empatia: 7, asertividad: 5, ie: 6, cohesion: 5 }
            ]
          }
        ],
        transicion: "Javier vuelve el lunes. Se ve más delgado, más callado. Pero está ahí. En la planta."
      },
      {
        id: 2,
        titulo: "Escena 2: El regreso",
        narrativa: "Han pasado tres semanas desde que Javier volvió. Estáfuncional pero no está él. Llega a tiempo pero no se queda a tomar café. Presenta sus diseños a tiempo pero no participa en las conversaciones de la oficina. Come solo.\n\nHoy en la reunión de ingeniería, alguien menciona que el cumpleaños de la planta de Cartagena es en dos semanas —el festejo de los 25 años. Es un evento grande con clientes, proveedores y la comunidad.\n\nTu director comercial, Andrés, te Buscar en el pasillo: \"Oye, we have a problem. El esposo de Camila —Javier— lleva tres semanas acting weird. Anoche en la cena de la Andi nuestro proveedor de químicos me preguntó si todo estaba bien con él porque seemed off cuando se encontraron en el supermercado. ¿Qué está pasando?\"",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo manejas la conversación con Andrés sobre Javier?",
            opciones: [
              { letra: "A", texto: "Le dices a Andrés que Javier está pasando por una situación personal difícil y que como empresa estamos apoyándolo. Le pides discreción y le agradeces por la preocupación.", correcta: true, puntos: 10, feedback: "Compartir lo mínimo necesario mientras proteges la privacidad de Javier, mientras agradeces la preocupación del equipo, mantiene el balance entre transparencia y discreción.", empatia: 8, asertividad: 9, ie: 8, cohesion: 9 },
              { letra: "B", texto: "Le cuentas a Andrés todo —la enfermedad de su mamá, el hospice, el mensaje de Camila— porque él es close y necesita entender para poder apoyar.", correcta: false, puntos: -5, feedback: "Compartir detalles médicos y familiares de un empleado sin su consentimiento es violación de privacidad, sin importar qué tan cerca esté la persona.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "Le dices que eso no es asunto suyo y que se enfoque en sus números.", correcta: false, puntos: -5, feedback: "Cerrar la conversación bruscamente sin información ni gratitud destruye la oportunidad de construir una cultura donde las personas se cuidan unas a otras.", empatia: 2, asertividad: 6, ie: 3, cohesion: 3 },
              { letra: "D", texto: "Le preguntas a Andrés qué ha notado específicamente y si tiene suggestions de cómo el equipo puede apoyarlo.", correcta: false, puntos: -5, feedback: "Antes de dar información o cerrar la conversación, involucrar a Andrés en apoyar puede parecer que estás usando su pregunta para gestionar el tema sin dar información.", empatia: 6, asertividad: 6, ie: 6, cohesion: 7 }
            ]
          },
          {
            id: 2,
            pregunta: "Andrés te pregunta: '¿Debería hablar directamente con Javier?' Antes de que puedas responder, añade: 'Es que hay algo más. Un cliente me dijo que Javier llegó 45 minutos early a una reunión y se quedó sitting solo en el conference room antes de que llegáramos. Parecía lost.' ¿Qué le dices a Andrés?",
            opciones: [
              { letra: "A", texto: "'Andrés, no hables directamente con Javier sobre esto. Pero me parece bien que estés atento. Voy a tener una conversación informal con él esta semana. Gracias por cuidarlo.'", correcta: true, puntos: 10, feedback: "Redirigir a Andrés sin contacto directo, mientras reconoces su preocupación y te comprometes a actuar, es el balance correcto entre proteger a Javier y aprovechar el apoyo del equipo.", empatia: 8, asertividad: 9, ie: 8, cohesion: 9 },
              { letra: "B", texto: "'Sí, habla con él. A veces un amigo en el trabajo es lo que alguien necesita.'", correcta: false, puntos: -5, feedback: "Enviar a alguien a 'hablar de sentimientos' sin preparación ni contexto puede causar más ansiedad a Javier. Andrés no está equipado para manejar una crisis de salud mental.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'Andrés, por favor no hables con él. Eso es cosa de RRHH.'", correcta: false, puntos: -5, feedback: "Redirigir todo a RRHH sin aprovechar el cuidado informal del equipo es over-institucionalizar un momento que necesita humanidad.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Le dices que es muy pronto para saber y que hay que darle más tiempo.", correcta: false, puntos: -5, feedback: "Desestimar las señales observadas (llegar temprano, estar solo, verse perdido) sin investigar es perder la oportunidad de prevenir algo más serio.", empatia: 5, asertividad: 5, ie: 5, cohesion: 4 }
            ]
          }
        ],
        transicion: "Andrés asiente. Te vas pensando en qué vas a decir cuando hables con Javier."
      },
      {
        id: 3,
        titulo: "Escena 3: La conversación",
        narrativa: "Jueves, 4:45 PM. Le pediste a Javier que se quedara '5 minutos' después de la reunión de ingeniería. Es cuando todos se van y el piso queda en silencio.\n\nJavier se queda mirando el piso. Tú no sabes por dónde empezar. Él tampoco.\n\nSilence stretches.\n\nJavier finally speaks: \"Jefe, yo sé que me ven different. No estoy bien. Mi mamá lleva tres semanas en hospice. Los doctores dicen que son días, no semanas. Cada noche viajo a Bucaramanga. Cada morning vuelvo a Cartagena. No duermo más de tres horas. Cuando llegué a la reunión de Fergigrales la semana pasada, no me acordaba cómo se llamaba el cliente.\"\n\nSe le quiebra la voz.\n\n\"No quiero perder el trabajo. Pero no sé cómo seguir así.\"",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dices a Javier en este momento?",
            opciones: [
              { letra: "A", texto: "\"Javier, lo primero que quiero que sepas es que tu trabajo no está en riesgo. Absolutamente no. Segundo: ¿qué necesitas? ¿Flexible hours? ¿Trabajar remoto? ¿una semana más? Dime qué necesitas y lo hacemos.\"", correcta: true, puntos: 10, feedback: "Las dos cosas más importantes: asegurar el empleo Y ofrecer soluciones concretas. Esto elimina la ansiedad sobre el futuro mientras le das agency sobre su situación.", empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "\"Javier, lamento mucho lo que estás pasando. ¿Cómo estás emocionalmente? ¿Has hablado con alguien? Tenemos el programa de apoyo psicológico...\"", correcta: false, puntos: -5, feedback: "Mencionar el programa de apoyo sin asegurar el empleo primero puede hacer que se sienta como que lo estás clinicalizando cuando tiene una crisis real.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "C", texto: "\"Javier, eres invaluable para este equipo. Vamos a figure it out together. No estás solo.\"", correcta: false, puntos: -5, feedback: "Palabras de apoyo sin ofertas concretas leave a alguien en crisis sin actionable support. 'Vamos a figure it out' no es un plan.", empatia: 7, asertividad: 5, ie: 6, cohesion: 6 },
              { letra: "D", texto: "\"Javier, ¿cuánto tiempo necesitas? Porque necesito planificar el equipo.\"", correcta: false, puntos: -5, feedback: "Preguntar por timeline sin haber ofrecido seguridad primero hace que la conversación sea sobre las necesidades de la empresa, no sobre él.", empatia: 3, asertividad: 6, ie: 3, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier te mira y dice: '¿Podemos hacer algo que no sea solo licença? Porque si me voy a mi casa, me quedo solo con mis pensamientos y mi mamá en esa cama.' ¿Qué propones?",
            opciones: [
              { letra: "A", texto: "'Javier, ¿qué te parece si de lunes a miércoles trabajas desde Bucaramanga? Solo necesitas tu computador y las specs del proyecto. Los jueves y viernes estás en la planta. Te doy flexibilidad en horarios también —llegas cuando puedas.'", correcta: true, puntos: 10, feedback: "Proponer trabajo remoto Y flexibilidad de ubicación le da estructura y propósito sin obligarlo a estar en un lugar específico. Es apoyo real adaptado a su situación.", empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Tienes acceso al programa de bienestar emocional. 8 sesiones gratuitas con un psicólogo. ¿Quieres que te ayude a agendar?'", correcta: false, puntos: -5, feedback: "Ofrecer el programa de bienestar sin abordar primero su necesidad de estar cerca de su mamá y tener propósito es clinicalizar prematuramente.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'Javier, vamos a darle una semana más de licença. Cuando vuelvas, vemos cómo estás.'", correcta: false, puntos: -5, feedback: "Más licença sin un plan de reintegración suave puede hacerlo sentirse más isolated y perdido cuando vuelva.", empatia: 6, asertividad: 6, ie: 6, cohesion: 5 },
              { letra: "D", texto: "'¿Y si nos turnamos con Camila para estar con tu mamá? Así tú puedes mantener tu rutina.'", correcta: false, puntos: -5, feedback: "Proponer que la esposa se turns sin conocer la situación familiar, financiera o logística es meterse en decisiones íntimas sin información suficiente.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Javier asiente. Por primera vez en semanas, respira profundo sin que se le note el peso."
      },
      {
        id: 4,
        titulo: "Escena 4: La llamada",
        narrativa: "Han pasado cinco semanas. Javier está trabajando desde Bucaramanga tres días a la semana. El proyecto Fertigrales va bien —su reemplazo temporal hizo un buen trabajo, pero Javier lo está llevando a la meta final.\n\nMiércoles, 6:30 PM. Estás en tu oficina cuando recibes una llamada de un número de Bucaramanga.\n\n\"Jefe, soy Javier. Mi mamá murió hace 40 minutos. Estaba conmigo. Estaba en paz.\"\n\nSilence.\n\n\"Ya sé que tenemos la reunión con Fertigrales el viernes. ¿Debería...?\"",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dices a Javier sobre la reunión del viernes?",
            opciones: [
              { letra: "A", texto: "\"Javier, no pienses en la reunión del viernes. Ahora solo piensa en ti y en tu familia. La reunión se maneja. Tú no necesitas estar ahí. Llora a tu mamá. Yo me encargo de todo.\"", correcta: true, puntos: 10, feedback: "Eliminar cualquier ambigüedad sobre expectativas laborales en un momento de duelo profundo es lo más compasivo y liderazgo que puedes hacer.", empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "\"Javier, siento mucho lo que estás pasando. ¿Quieres que hable con tu esposa? ¿Necesitas algo? La reunión del viernes... podemos hacer algo diferente...\"", correcta: false, puntos: -5, feedback: "Multiplicar las opciones y offers sin priorizar la más importante (quedarse con su familia) puede createparalysis cuando necesita claridad absoluta.", empatia: 7, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "C", texto: "\"Javier, lo primero: mi pésame. Lo segundo: no te preocupes por el viernes. Estamos contigo.\"", correcta: false, puntos: -5, feedback: "Un pésame y 'no te preocupes' está bien, pero no le dice específicamente que no necesita estar en la reunión ni qué va a pasar con ella.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "D", texto: "\"Javier, necesitas estar ahí para tu familia. Yo me encargo de la reunión. Si quieres, podemos vernos la próxima semana para retomar cuando estés listo.\"", correcta: false, puntos: -5, feedback: "Proponer una reunión 'para retomar' mientras está en duelo puede send the message that work is waiting for him.", empatia: 6, asertividad: 6, ie: 5, cohesion: 6 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier te pregunta: '¿Puedo tomarme dos semanas?' No tienes presupuesto aprobado para licencias extendidas y el proyecto Fertigrales termina exactamente el viernes. ¿Qué le dices?",
            opciones: [
              { letra: "A", texto: "'Sí. Dos semanas. Yo me encargo del papeleo y del proyecto. Tú dedícate a tu familia.'", correcta: true, puntos: 10, feedback: "Aprobar sin burocracia antes de tener la aprobación muestra liderazgo. Arreglar el presupuesto después es administración. El ser humano primero.", empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Dos semanas es mucho. ¿Te parece una semana y luego reevaluamos?'", correcta: false, puntos: -5, feedback: "Negociar tiempo de duelo es cruel. Una semana no es suficiente para processar la muerte de un padre.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'Sí, pero necesito que me envíes un email formal solicitando la licencia para tener documentación.'", correcta: false, puntos: -5, feedback: "Requiere documentation laboral en un momento de duelo destruye la confianza. El proceso puede esperar.", empatia: 3, asertividad: 5, ie: 3, cohesion: 3 },
              { letra: "D", texto: "'Javier, ¿por qué no te tomas una semana y luego vemos?'", correcta: false, puntos: -5, feedback: "No tomar una decisión y kick the can down the road crea incertidumbre sobre cuándo puede dejar de trabajar.", empatia: 5, asertividad: 4, ie: 5, cohesion: 4 }
            ]
          }
        ],
        transicion: "Javier llora. Por primera vez en meses, son lágrimas de alivio, no de dolor."
      },
      {
        id: 5,
        titulo: "Escena 5: El regreso final",
        narrativa: "Han pasado tres semanas desde la muerte de la mamá de Javier. Volvió ayer.\n\nLo primero que hiciste cuando entró a la planta fue-pararte y decirle: 'Bienvenido, Javier.' Sin abrazo —él no es de abrazos— pero con la voz. Toda la oficina levantó la mirada. Andrés —el director comercial— se paró también.\n\nHoy a las 3 PM, Javier toca tu puerta. 'Jefe, ¿tienes 5 minutos?' Se sienta. Saca un papel.\n\n'Tengo una propuesta. Durante estos meses que estuve absent,learned mucho sobre lo que significa estar presente cuando alguien más lo necesita. Quiero crear un programa aquí en la empresa — peer support para personas que están pasando por cosas difíciles. Le he llaman 'Presentes'.'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo respondes a la propuesta de Javier?",
            opciones: [
              { letra: "A", texto: "'Javier, esto es exactamente lo que necesitamos en esta empresa. Vamos a hacerlo. ¿Qué necesitas de mí?'", correcta: true, puntos: 10, feedback: "Empoderr a alguien que transformó su dolor en algo que ayuda a otros es liderazgo en su máxima expresión. Decir sí sin syarat es el primer paso.", empatia: 9, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Me encanta la idea, Javier. Vamos a llevarla a RRHH para que la evaluen y nos den presupuesto.'", correcta: false, puntos: -5, feedback: "Redirigir a RRHH sin compromiso personal diluye la energía del momento y puede hacer que el proyecto muera en la burocracia.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'Es una idea hermosa, Javier. Pero tenemos que asegurarnos de que no se vuelva una carga para los que participan.'", correcta: false, puntos: -5, feedback: "Comenzar con las limitaciones en lugar de celebrar la iniciativa destruye la creatividad antes de que nazca.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Cuánto cuesta?'", correcta: false, puntos: -5, feedback: "Preguntar por costos antes de explorar el concepto significa que el presupuesto drive la visión en lugar de la visión informing el presupuesto.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier te mira y dice: 'Quiero que esto no sea solo para gente con problemas. Quiero que sea para todos. Porque todos necesitamos estar presentes para alguien.' Tienes la sensación de que algo grande está naciendo en tu organización. ¿Qué haces?",
            opciones: [
              { letra: "A", texto: "'Javier, esto es un movimiento cultural. Vamos a hacerlo piloto con tu equipo primero, lo medimos, y si funciona —y sé que va a funcionar— lo escalamos a toda la empresa. ¿Tú lideras el piloto?'", correcta: true, puntos: 10, feedback: "Crear un piloto measurable mientras empoderas al creador para liderarlo transforma una idea en un programa con ownership real.", empatia: 8, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Me parece perfecto. Voy a hablar con la alta gerencia para que lo implementen company-wide desde el inicio.'", correcta: false, puntos: -5, feedback: "Implementar sin piloto ni measurement puede create el programa que ‘murió de éxito’ — bien intentionado pero sin base real.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'¿Por qué crees que esto debería ser diferente al programa de bienestar que ya tenemos?'", correcta: false, puntos: -5, feedback: "Comparar con lo existente antes de celebrar la diferencia uniqueness del concepto puede percibirse como skepticism o falta de apoyo.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Y si lo hacemos primero con los supervisores que terminaron el programa de liderazgo emocional?'", correcta: false, puntos: -5, feedback: "Conectar con el programa de liderazgo es inteligente, pero no responder a la visión amplia de Javier primero puede make him feel his idea is being redirected.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 }
            ]
          }
        ],
        transicion: "Javier sonríe. Por primera vez desde que murió su mamá, tiene algo por lo que levantarse cada mañana."
      }
    ]
  },
  {
    id: 3,
    titulo: "El Trimestre que Nadie Olvidará",
    tema: "Presión extrema vs. bienestar del equipo",
    escenarios: [
      {
        id: 1,
        titulo: "Escena 1: El ultimátum",
        narrativa: "Lunes, 8:00 AM. Estás en la planta de Barrancabermeja cuando llega el mensaje del Director de Operaciones:\n\n\"Cifras del Q4: necesitamos 147% de la cuota trimestral para mantener el presupuesto del próximo año. La gerencia nos está mirando. Si no llegamos, hay reducciones de personal en el presupuesto del 2026.\"\n\nTu equipo tiene 23 personas. Si el presupuesto se corta 15%, son 3 o 4 personas menos. En una planta donde cada operador es crítico para la seguridad.\n\nEl VP de Operaciones te llama a las 9:00 AM: \"Necesito que el equipo llegue. ¿Puedes hacer que suceda?\"\n\nSon las 9:03 AM. Tu equipo de 23 personas no sabe nada todavía.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo comunicas la situación a tu equipo?",
            opciones: [
              { letra: "A", texto: "Convocas a una reunión de equipo a las 10 AM. Les presentas los números con transparencia, explicas lo que está en juego —presupuesto, recortes, y la realidad del Q4— y les pides que te ayuden a encontrar soluciones.", correcta: true, puntos: 10, feedback: "Transparencia radical con el equipo sobre lo que está en juego, mientras se invited a contribución collective, es liderazgo que respeta la inteligencia del equipo.", empatia: 8, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "Hablas primero con tus líderes de línea para alinear el mensaje antes de hablar con todo el equipo. Necesitas un united front.", correcta: false, puntos: -5, feedback: "Hablar primero con líderes antes que con el equipo puede create separación entre 'los que saben' y 'los que no saben', undermining trust.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 },
              { letra: "C", texto: "Les komunikas el objetivo como un desafío: 'El Q4 va a ser difícil pero vamos a lograrlo. Si llegamos, el presupuesto se protege y todos conservamos nuestros trabajos.'", correcta: false, puntos: -5, feedback: "Presentarlo como 'conservar trabajos' sin Transparency about los números reales puede crear anxiety ocult rather than understanding.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "D", texto: "Esperas a tener un plan antes de decir nada. No quieres alarmar al equipo prematuramente.", correcta: false, puntos: -5, feedback: "Esperar sin comunicación sementara crea vacío que se llena con rumores. El silencio es también un mensaje.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "En la reunión, Roberto —un operador con 11 años de experiencia— levanta la mano: '¿Cuánto es exactamente el 147%? Porque el mes pasado nos dijeron que el 120% era 'el máximo histórico' y lo logramos. ¿Ahora es el 147%? ¿Cuál va a ser el próximo número?' Los demás operadores asienten. Tienes que responder.",
            opciones: [
              { letra: "A", texto: "'Roberto, tienes razón en hacer esa pregunta. 147% no es sostenible como meta permanente. Esto es una emergencia de un trimestre. Pero necesito que sepas exactamente dónde estamos: sin ese número, perdemos el 15% del presupuesto. Eso son 3 o 4 puestos de trabajo. No voy a fingir que esto es fácil.'", correcta: true, puntos: 10, feedback: "Reconocer la legitimacy de la preocupación, Transparency about las consecuencias, y anclar el ask en algo concreto (3-4 empleos) hace que el equipo entienda el why sin manipulación.", empatia: 9, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Roberto, no estamos aquí para discutir el número. Estamos aquí para encontrar la manera de llegar.'", correcta: false, puntos: -5, feedback: "Shutdown a legitimate concern before addressing it builds resentment and undermines psychological safety.", empatia: 3, asertividad: 7, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'Roberto, ¿tú qué harías si estuvieras en mi posición?'", correcta: false, puntos: -5, feedback: "Turning the question back without answering redirects accountability in a moment when the team needs clarity, not deflection.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'El 120% fue el máximo histórico el mes pasado. El 147% es lo que la empresa necesita hoy. Son números distintos.'", correcta: false, puntos: -5, feedback: "Explicar los números sin abordar el pattern de 'always moving the goalposts' fails to acknowledge the team's legitimate frustration.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Roberto asiente lentamente. No está feliz, pero está pensando. Eso es más de lo que esperabas."
      },
      {
        id: 2,
        titulo: "Escena 2: Las grietas",
        narrativa: "Han pasado tres semanas. El equipo está funcionando al 130% —mejor de lo esperado pero aún por debajo del 147%. Has implementado turnos extra optativos pagados a1.5x y un programa defood allowance para los que se quedan más tiempo.\n\nPero hoy recibes dos mensajes casi simultáneos.\n\nEl primero es de Miguel Ángel —tu líder de turno nocturno: 'Tengo un problema. Duvan Felipe Arenas, uno de mis operadores nuevos, lleva tres noches sin presentarse al turno. No contesta el teléfono. No ha llamado. Solo apareció una vez en 8 días.'\n\nEl segundo es de Duvan Felipe himself: 'Jefe, necesito hablar con usted. No es fácil escribir esto. Estoy en un lugar muy oscuro. No quiero hacer nada pero no quiero estar vivo.'"
        preguntas: [
          {
            id: 1,
            pregunta: "Javier —tu Head of Engineering que tú apoyaste hace meses con su mamá— te busca en persona: 'Jefe, necesito decirte algo difícil. Uno de mis ingenieros, Carlos Iván, me dijo que lleva semanas sintiéndose igual que Duvan. No quiere hacer nada, no quiere hablar con nadie. Pero Carlos Iván no se va a automotar.\" La pregunta: ¿Cuál es tu primera acción?",
            opciones: [
              { letra: "A", texto: "'Gracias por decirme, Javier. Vamos a hablar con Carlos Iván ahora. Tú te vienes conmigo.'", correcta: true, puntos: 10, feedback: "Act immediately when someone discloses they fear another person is in crisis, and include the trusted colleague, demonstrates care without ostracizing.", empatia: 9, asertividad: 8, ie: 9, cohesion: 8 },
              { letra: "B", texto: "'Gracias, Javier. Voy a activar el protocolo de bienestar emocional para Carlos Iván. Tú podrías acercarte a él? Los próximos días, solo para preguntarle cómo está?'", correcta: false, puntos: -5, feedback: "Delegating to the colleague without personal involvement shifts responsibility inappropriately when you are the leader they trusted.", empatia: 6, asertividad: 7, ie: 6, cohesion: 7 },
              { letra: "C", texto: "'Gracias, Javier. Necesito que documentemos esto formalmente para RRHH.'", correcta: false, puntos: -5, feedback: "Formally documenting someone's disclosure about a mental health crisis before talking to them can feel like betrayal of trust.", empatia: 3, asertividad: 5, ie: 3, cohesion: 4 },
              { letra: "D", texto: "'¿Carlos Iván? Me surprised. ¿Estás seguro? ¿No será que simplemente está tired?'", correcta: false, puntos: -5, feedback: "Questioning the validity of Javier's concern can discourage future disclosures and signals that reporting is unwelcome.", empatia: 3, asertividad: 4, ie: 3, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "Hablaron con Carlos Iván con Javier presente. Carlos Iván dice: 'Sé que estoy así. Solo necesito que me den un descanso. No me siento seguro de venir a trabajar así. ¿Me pueden dar una semana?' La planta está running a130% con 4 operadores menos de lo óptimo. ¿Qué decides?",
            opciones: [
              { letra: "A", texto: "'Sí, Carlos Iván. Te doy la semana. ¿Quieres queJavier se quede contigo mientras talks about what's happening? Y cuando vuelvas, quiero que tengamos un plan para que no llegues a este punto otra vez.'", correcta: true, puntos: 10, feedback: "Grant the time immediately while offering peer support and committing to a preventive plan addresses the immediate crisis and prevents recurrence.", empatia: 10, asertividad: 8, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Carlos Iván, te entiendo. Pero hoy solo somos 19. Si te vas tú, quedamos 18. ¿Podemos darnos una semana y vemos cómo estamos el viernes?'", correcta: false, puntos: -5, feedback: "Añadir qualifiers y negotiation al request de alguien en crisis lo hace más difícil, no más fácil.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'Sí, pero necesito que me envíes una solicitud formal por email para justificar la ausencia.'", correcta: false, puntos: -5, feedback: "Req including formal documentation for someone in acute distress is bureaucratic cruelty that will be remembered.", empatia: 2, asertividad: 5, ie: 3, cohesion: 3 },
              { letra: "D", texto: "'Carlos Iván, ¿ya hablaste con el programa de apoyo psicológico? Porque tal vez eso es lo que necesitas más que licencia.'", correcta: false, puntos: -5, feedback: "Redirecting to mental health resources before granting the time off that was requested dismisses what they're actually asking for.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Carlos Iván llora. Por primera vez en semanas, alguien le dijo que sí sin condiciones."
      },
      {
        id: 3,
        titulo: "Escena 3: El punto de quiebre",
        narrativa: "Jueves, 11:45 PM. Estás en tu casa cuando suena el teléfono. Es Miguel Ángel, líder de turno nocturno.\n\n\"Jefe, necesitamos hablar. Ahora. Hay 14 operadores que quieren hablar contigo. Están en la planta. Se van a ir a la gerencia si no te ven.\"\n\nCuelgas y manejas a la planta. Son las 12:30 AM cuando llegas. Los 14 operadores están ahí, noch entropy, conduces.\n\nEl que parece más decidido habla primero. Se llama Duvan Felipe —no el Duvan de siempre, otro Duvan: \"Venimos a decirle que esto no puede seguir así. Llevamos semanas haciendo 14 horas. Los que quisieron negate the extra shifts are getting punished con los peores turnos. Los que sí quisieron están exhausted. No es justo.\"\n\nLos demás asienten.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué haces?",
            opciones: [
              { letra: "A", texto: "Dices: 'Duvan, gracias por venir a las 12:30 de la noche a decirme esto. Tienen toda la razón. Siéntense. Vamos a hablar de cómo llegamos al 147% sin destruir a las personas que lo hacen posible.'", correcta: true, puntos: 10, feedback: "Validar su courage para speak up, acknowledge la justicia del concern, y instantly pivot to problem-solving con ellos demuestra que el liderazgo existe cuando más importa.", empatia: 10, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "Dices: 'Entiendo que están cansados. Pero el 147% es lo que nos da trabajo a todos. ¿Cómo proponemos soluciones?'", correcta: false, puntos: -5, feedback: "Agrandar la meta sin reconocer el sacrifice que están haciendo convierte su preocupación en un 'sí pero' manager speak.", empatia: 5, asertividad: 7, ie: 5, cohesion: 6 },
              { letra: "C", texto: "Llamas a la gerencia para que ellos escuchen esto directamente.", correcta: false, puntos: -5, feedback: "Traer a la gerencia a una conversación con operadores a las 12:30 AM sin preparar el contexto puede create defensiveness de ambos lados.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "Dices: '¿Quién organize esta reunión?'", correcta: false, puntos: -5, feedback: "Preguntar por el organizer antes de responder al mensaje enviado put the team on defensive before you hear them.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Duvan te mira y dice: 'Necesitamos que alguien de arriba nos diga si vale la pena. Si el 147% es la diferencia entre que haya trabajo o no el próximo año, lo hacemos. Pero si es para que los directivos se division bonus, no.' Los 13 operadores asienten con fuerza. ¿Qué respondes?",
            opciones: [
              { letra: "A", texto: "'Duvan, voy a ser honesto. El 147% protege el presupuesto, que incluye trabajos. Pero no te voy a mentir: si llegamos, el presupuesto se maneja diferente. No puedo prometerte que los bonuses de directivos dependen de esto. Pero puedo promise que cada persona en esta planta es más valiosa que cualquier bonus.'", correcta: true, puntos: 10, feedback: "Honesty about what you can and cannot promise, while affirming their value, es integrity. No false promises, pero sí values clear.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'El presupuesto protege los trabajos. Eso es lo que importa.'", correcta: false, puntos: -5, feedback: "No address Duvan's concern about executive bonuses while deflecting to 'budgets and jobs' dodges the real question of fairness.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'Duvan, no tengo control sobre los bonuses de nadie. Solo tengo control sobre cómo lidero este equipo. Y les estoy pidiendo que me sigan a una meta difícil porque confío en ustedes.'", correcta: false, puntos: -5, feedback: "Redirecting to trust and leadership without addressing the concrete concern about executive compensation is emotional manipulation.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Quieren la verdad? No sé qué va a pasar con los bonuses. Solo sé que si no llegamos al 147%, voy a ser yo el primero en perder mi trabajo.'", correcta: false, puntos: -5, feedback: "Making it about your own job loss when workers are questioning fairness shifts the emotional burden to them.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Duvan asiente. Los 13 operadores se miran entre ellos. No están de acuerdo, pero están siendo escuchados."
      },
      {
        id: 4,
        titulo: "Escena 4: La carta",
        narrativa: "Viernes, 3:00 PM. Una semana después de la reunión de las 12:30 AM, recibes esto por correo, con copia a la gerencia general:\n\n\"Los abajo firmantes —operadores del turno nocturno y diurno de la Planta de Barrancabermeja— queremos expresar nuestra preocupación por las condiciones laborales del último trimestre.\"\n\nFirman 31 personas. Casi todo el turno nocturno y la mitad del diurno.\n\nEl tono es respetuoso pero firme. No es una amenaza. Es un cry for help disfrazado de carta formal.\n\nEl Director de Operaciones te llama en 5 minutos: \"¿Qué está pasando en tu planta?\"",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dices al Director de Operaciones?",
            opciones: [
              { letra: "A", texto: "'Estamos pasando por un momento difícil. Mi equipo está bajo presión extrema. La carta es una señal de que necesito trabajar diferente, no de que tenga mala gente. Estoy manejándolo. Te doy un update en 48 horas.'", correcta: true, puntos: 10, feedback: "Taking ownership while giving a concrete timeline, sin defensiveness ni blaming el equipo, es la respuesta de un líder que protege a su gente y a la relación con sus superiores.", empatia: 8, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Es una reacción al cansancio del Q4. Vamos a darle tiempo.'", correcta: false, puntos: -5, feedback: "Dismiss la carta como 'reacción al cansancio' sin reconocer la seriedad del documento y sin plan de acción es perder una oportunidad de liderazgo.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'Esta es la reacción normal bajo presión extrema. Estamos haciendo todo lo posible.'", correcta: false, puntos: -5, feedback: "Making excuses for the team to protect them from the Director while not addressing the underlying issue prevents real resolution.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'Creo que algunos de mis operadores están exaggerando. Necesito hacer un assessment más profundo.'", correcta: false, puntos: -5, feedback: "Using words like 'exaggerating' about a formally written concern signed by 31 people demonstrates dismissiveness that will reach the team.", empatia: 3, asertividad: 5, ie: 3, cohesion: 3 }
            ]
          },
          {
            id: 2,
            pregunta: "Después de colgar con el Director, recibes un mensaje de Duvan —el Duvan que líder de la reunión: 'Jefe, no fue nuestra intención meterlo en problemas. Solo necesitamos que alguien nos escuche. ¿Podemos hablar?' ¿Qué haces?",
            opciones: [
              { letra: "A", texto: "'Duvan, gracias por escribir. Nada de problemas — esta conversación es exactamente lo que necesitamos. ¿Están disponibles mañana a las 7 AM antes del turno? Vamos a hablar de verdad.'", correcta: true, puntos: 10, feedback: "Separating la preocupación de 'meterte en problemas' mientras inmediatamente offering a genuine conversation demuestra que el liderazgo sigue abierto incluso después de la carta formal.", empatia: 10, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Claro, Duvan. ¿Qué necesitas?'", correcta: false, puntos: -5, feedback: "Open-ended question without specific time, place, or acknowledgment that the conversation matters can feel like you're fitting them in around other priorities.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'Duvan, antes de hablar, necesito que me digan quiénes fueron los que no quisieron firmar la carta. Porque necesito entender el nivel real de discontent.'", correcta: false, puntos: -5, feedback: "Solicitar que identifiquen a los no-signers before having the conversation puts them in a position of further conflict within the team.", empatia: 3, asertividad: 5, ie: 3, cohesion: 3 },
              { letra: "D", texto: "'La carta llegó a la gerencia. Primero necesito manejar eso internamente antes de hablar con ustedes.'", correcta: false, puntos: -5, feedback: "Making them wait to address their concerns while you manage upward delays the actual problem-solving they came to you for.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Duvan responde: 'Mañana a las 7 AM. Aquí estaré.'"
      },
      {
        id: 5,
        titulo: "Escena 5: El legado",
        narrativa: "Seis meses después. La planta de Barrancabermeja tiene un nuevo programa que se llama 'Presentes' —iniciado por Javier Morales, inspirado en lo que él vivió con su mamá. Cada operador puede asignar 4 horas al mes para estar presente con un compañero que lo necesite: llevándole groceries, sentándose con él en el Break, o simplemente preguntándole cómo está.\n\nEl Q4 del año anterior se alcanzó el 138% —no el 147%. La empresa recortó el presupuesto de la planta en un 8%. Se fueron 2 personas, no 4.\n\nHoy es tu última día como Director de Planta. Te van a asumir una nueva aventura profesional. El equipo te organizó una cena de despedida.\n\nEstás en la puerta de la planta, mirando los towers de proceso que han sido tu vida por los últimos 8 años. Llegas a la cena. Hay 43 personas. Toda la planta vino.\n\nEl operador que más te challengeó en la reunión de las 12:30 AM —Duvan Felipe— se para y levanta su vaso:\n\n\"Por el jefe que nos escuchó cuando pensábamos que nadie lo haría.\"",
        preguntas: [
          {
            id: 1,
            pregunta: "Estás parado frente a 43 personas, Duvan te acaba de hacer un brindis. Tienes 3 minutos. ¿Qué les dices?",
            opciones: [
              { letra: "A", texto: "'Gracias, Duvan. Pero quiero que quede claro algo: yo no los escuché. Ustedes me hicieron un favor. Me obligaron a ser mejor líder cuando prefería ser un manager. Cada vez que me confrontaron, cada carta que escribieron, cada pregunta difícil que me hicieron —eso fue lo que me hizo crecer. El equipo de esta planta me enseñó a liderar. Yo solo intenté no estorbar demasiado.'", correcta: true, puntos: 10, feedback: "Creditando al equipo por tu crecimiento mientras mantienes humildad es liderazgo generoso. No te atribuyes el éxito —lo distributed.", empatia: 10, asertividad: 9, ie: 10, cohesion: 10 },
              { letra: "B", texto: "'Gracias a todos. Fueron el mejor equipo que podía pedir. Vamos a mantenernos en contacto.'", correcta: false, puntos: -5, feedback: "agradecer sin specifics es genérico y no captura el momento transformacional que la planta representó.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'Ustedes hicieron esto posible. Yo solo puse la visión. El crédito es suyo.'", correcta: false, puntos: -5, feedback: "Attributing success entirely to the team while diminishing your role feels falso. Los líderes tienen agency y la tuya mattered.", empatia: 6, asertividad: 5, ie: 6, cohesion: 6 },
              { letra: "D", texto: "'Espero que el próximo líder que llegue los escuche igual que yo lo hice. Y si no lo hace, espero que ustedes lo exijan.'", correcta: false, puntos: -5, feedback: "Preparing al próximo líder en lugar de cerrar tu propio liderazgo con un legado claro es perder la oportunidad de dejar un mensaje memorable.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 }
            ]
          },
          {
            id: 2,
            pregunta: "Después de la cena, Javier Morales —el que tuvo la crisis con su mamá— te busca en privado. 'Jefe, me preguntaron si quería asumir la coordinación del programa Presentes full-time. ¿Debería hacerlo?'",
            opciones: [
              { letra: "A", texto: "'Javier, ¿tú qué piensas? ¿Quieres hacerlo?'", correcta: true, puntos: 10, feedback: "Asking what he wants instead of telling him what to do honors his agency after a journey of reclaiming his purpose.", empatia: 9, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Sí, Javier. Es una oportunidad increíble. Deberías tomarla.'", correcta: false, puntos: -5, feedback: "Telling someone who just reclaimed their sense of purpose what they 'should' do, even with good intentions, closes the space for his own decision.", empatia: 6, asertividad: 7, ie: 6, cohesion: 7 },
              { letra: "C", texto: "'¿Cuánto te pagan?'", correcta: false, puntos: -5, feedback: "Opening with compensation before understanding desire and meaning misses what he's actually asking.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'Creo que es una buena idea, pero no quiero que sea a costa de tu recuperación.'", correcta: false, puntos: -5, feedback: "Making his recovery the lens through which you evaluate his professional choice subtly stigmatizes mental health as a barrier.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 }
            ]
          }
        ],
        transicion: "Javier sonríe. 'Creo que sí. Creo que esta es la manera en que le puedo dar sentido a todo lo que pasé.'"
      }
    ]
  },
  {
    id: 4,
    titulo: "Heredé un Velorio",
    tema: "Liderazgo en transición",
    escenarios: [
      {
        id: 1,
        titulo: "Escena 1: El primer día",
        narrativa: "Tres meses atrás, Rodrigo Téllez asumió como Director de Planta de Cartagena. Antes era subdirector en la Refinería de Barrancabermeja. Es su primera vez como director de planta.\n\nViene porque su predecesor —Felipe Restrepo— dejó el cargo de manera abrupta. Nadie sabe exactamente por qué, pero los rumores dicen que hubo un conflito serio con la Vicepresidencia de Operaciones.\n\nFelipe tenía 58 años, 30 en la empresa. Era respetado. Algunos dicen que era 'la empresa'. Cuando se fue, no hubo comunicación formal. Solo un correo de dos líneas que decía: 'A partir del lunes, Rodrigo Téllez asume como director.'\n\nHoy es el día 45 de Rodrigo como director. Todavía hay personas que lo miran raro en los pasillos. Todavía hay decisiones donde alguien dice 'así no lo hacíamos antes'.\n\nY hoy, por primera vez, alguien te Buscar privately: Carolina Méndez —una Ingeniera química senior con 14 años en la planta— dice que necesita hablar contigo 'de algo importante'.",
        preguntas: [
          {
            id: 1,
            pregunta: "Carolina llega a tu oficina. Cierra la puerta. 'Rodrigo, necesito que sepas algo antes de que lo escuches de otra manera. Felipe no se fue por voluntad propia. Lo sacaron. Y lo que lo sacó fue una decisión que involucraba a la Vicepresidencia de Operaciones sobre un tema de seguridad que Felipe elevó porque no era seguro.' ¿Qué respondes?",
            opciones: [
              { letra: "A", texto: "'Gracias por confiar en mí, Carolina. Necesito saber: ¿el tema de seguridad está resuelto o es algo que todavía está pasando?'", correcta: true, puntos: 10, feedback: "Acknowledgments her trust while immediately pivoting to the operational reality — es leadership que prioriza la planta sobre la política.", empatia: 8, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'¿Por qué no me lo habían dicho antes?'", correcta: false, puntos: -5, feedback: "Making it about yourself ('why didn't they tell ME') desvía el foco del problema operativo que ella está raised.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'¿Quién te contó esto?'", correcta: false, puntos: -5, feedback: "Solicitar la fuente antes de processar el contenido silenciates a la persona y signals que estás más interested in el gossip que en el problema.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'¿Estás segura de esto? Porque necesito facts antes de actuar.'", correcta: false, puntos: -5, feedback: "Questioning her certainty before hearing the full story puede percibirse como disbelief y desincentivar future disclosures.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Carolina te dice que el tema de seguridad involucra un contractors que trabaja en los muelles de la planta, que ha habido múltiples incidentes menores que nunca se reportaron formalmente, y que a Felipe le hicieron presión para 'no causar ruido' cuando elevó sus preocupaciones internamente. Te mira y dice: '¿Qué vas a hacer?'",
            opciones: [
              { letra: "A", texto: "'Voy a hacer lo que Felipe no pudo. Voy a revisar personally los reportes de seguridad de los muelles, hablar con el equipo de seguridad, y si hay algo que no está bien, lo vamos a arreglar. Independientemente de quién sea el contractor o quién sea su jefe.'", correcta: true, puntos: 10, feedback: "Committing to action that honors Felipe's legacy while prioritizing safety over politics es exactly what the team needs from a new leader.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Necesito revisar esto con el VP de Operaciones primero para entender el contexto completo.'", correcta: false, puntos: -5, feedback: "Going to the VP first cuando una empleada está alleging that the VP's previous decision suppressed safety concerns create a clear conflict of interest and signals you can't be trusted.", empatia: 3, asertividad: 5, ie: 3, cohesion: 3 },
              { letra: "C", texto: "'¿Hay documentation de estos incidentes?'", correcta: false, puntos: -5, feedback: "Solicitar documentación before committing to any action can be perceived as requiring proof when lo que Carolina necesita es que demuestres que la tomas en serio.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Por qué no se fue Carolina antes con recursos humanos o el compliance officer?'", correcta: false, puntos: -5, feedback: "Preguntar por qué no escaló antes sin reconocer que está escalando ahora ignora el contexto de por qué people don't trust the system.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Carolina asiente lentamente. Algo en sus ojos cambia —es esperanza."
      },
      {
        id: 2,
        titulo: "Escena 2: Los secretos",
        narrativa: "Han pasado tres semanas. Hiciste la auditoría de los muelles. Encontraste 7 incidentes menores no reportados en los últimos 18 meses. El contractor tiene 3 workers que nunca completaron la capacitación de seguridad. Los muelles no tienen señal de emergencia adecuada.\n\nMientras tanto, has descubierto otra cosa: un pattern de 'buena voluntad' en la planta donde la gente ha estado ocultando problemas para no 'causar ruido'. Alguien te dijo que 'así se manejó siempre aquí'.\n\nHoy recibes un mensaje de Carolina: 'Tengo información adicional. No por email. ¿Cuándo podemos hablar?'",
        preguntas: [
          {
            id: 1,
            pregunta: "Encuentras un momento para hablar con Carolina. Ella te dice: 'Hay algo que necesitas saber sobre Felipe. No solo lo sacaron. Lo blacklistaron de la industria. Le pusieron una referencia que lo hace ineligible para trabajar en cualquier planta de hydrocarbons en Colombia. Y él no sabe.' Te quedas callado. Carolina continúa: '¿Qué vas a hacer con esto?'",
            opciones: [
              { letra: "A", texto: "'Carolina, esto es muy serious. Necesito think about cómo manejarla sin dañar a Felipe más de lo que ya está. Pero lo primero es saber: ¿cómo lo sabes tú?'", correcta: true, puntos: 10, feedback: "Reconociendo la seriedad mientras proteges a Felipe y seeking más información antes de actuar es el balance correcto entre urgencia y cuidado.", empatia: 9, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'¿Quién le puso la blacklist?'", correcta: false, puntos: -5, feedback: "Immediately seeking the perpetrator before understanding the full picture y protecting Felipe hace la pregunta equivocada.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'¿Por cuánto tiempo sabe esto?'", correcta: false, puntos: -5, feedback: "Cuantificar quién más lo sabe antes de process qué hacer con la información es avoidance del problema central.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'Necesito pensar esto con más calma. ¿Podemos talk más tarde?'", correcta: false, puntos: -5, feedback: "Adjournir una conversación sobre blacklist y reputación de un colega sin compromiso de timeline específico es leave her hanging.", empatia: 5, asertividad: 4, ie: 5, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Carolina te mira y dice: 'Rodrigo, tengo que preguntarte algo directamente. ¿Tú también estás aquí para callar esto como los demás?'",
            opciones: [
              { letra: "A", texto: "'Carolina, honestamente: no tengo todas las respuestas todavía. Pero te puedo decir esto: no vine aquí a hacer carrera sobre los errores de otros. Vine a liderar esta planta. Y si hay algo que está mal, necesito saberlo. ¿Estás segura de que quieres ser parte de esto conmigo?'", correcta: true, puntos: 10, feedback: "Honestidad sobre tu uncertainty combined with clarity about your values, y devolver la pregunta a su agencia, es leadership vulnerable y forte at the same time.", empatia: 10, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Carolina, yo no soy como los demás. Tendrás que ver si puedes confiar en mí.'", correcta: false, puntos: -5, feedback: "Asserting you're different without showing it through action es una promesa vacía que requires trust she hasn't given yet.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'No tengo nada que ver con lo que le hicieron a Felipe.'", correcta: false, puntos: -5, feedback: "Defending yourself before committing to action fails to address whether you will behave differently going forward.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Hay alguien más en la planta que sepa esto?'", correcta: false, puntos: -5, feedback: "Preguntar por 'cuántos saben' antes de process qué hacer con la información es evasión de responsabilidad.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Carolina dice: 'Sí. Estoy segura. ¿Qué necesitas de mí?'"
      },
      {
        id: 3,
        titulo: "Escena 3: La conversación con la gerencia",
        narrativa: "Han pasado cinco semanas. Carolina y tú han creado un plan: primero arreglar los problemas de seguridad de los muelles (documentados, remediados), luego abordar el tema de Felipe más adelante.\n\nPero hoy te llaman de la Vicepresidencia de Operaciones: 'Rodrigo, necesito que vengas a la oficina principal. Tenemos que hablar.'\n\nNo dice qué es. No dice si es bueno o malo. Solo 'tenemos que hablar'.\n\nLlegas a la oficina. La Vicepresidencia —Sandra Milena— te recibe con una sonrisa que no llega a los ojos.\n\n'Senta, Rodrigo. ¿Cómo estás adaptándote?' Te hace preguntas geniales durante 20 minutos. Finalmente: 'Hay algo que quiero discutir contigo. Hemos recibido concerns sobre decisiones que has estado tomando en la planta. Específicamente, la auditoría de los muelles.'\n\nTe mira: '¿Quién te pidió hacer esa auditoría?'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué respondes?",
            opciones: [
              { letra: "A", texto: "'Sandra, nadie me la pidió. Yo la encargué porque encontré 7 incidentes menores no reportados en los muelles y un contractor con workers sin capacitación. Como director de esta planta, mi responsabilidad es la seguridad de quienes trabajan aquí. Eso hice.'", correcta: true, puntos: 10, feedback: "Anclar que tomaste la decisión based on your judgment as director, backed by data, without implicating anyone else, es integrity operativa sin politics.", empatia: 7, asertividad: 10, ie: 8, cohesion: 9 },
              { letra: "B", texto: "'Había concerns que llegaron a mí por varios canales. Investigué.'", correcta: false, puntos: -5, feedback: "Vague about 'several channels' without specificity neither protects Carolina nor establishes your own judgment as the leader.", empatia: 5, asertividad: 6, ie: 5, cohesion: 6 },
              { letra: "C", texto: "'¿Qué concerns specifically?'", correcta: false, puntos: -5, feedback: "Deflecting con counter-question before answering hers delays the conversation y signals you're not ready to engage.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Esto es una pregunta oficial o informal?'", correcta: false, puntos: -5, feedback: "Solicitar clarificar el formato de la conversación before responding to substantive concerns about your decisions es evitar el engagement.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Sandra te mira y dice: 'Rodrigo, la auditoría que hiciste encontró problemas que no existían antes de que llegaras. Eso raise questions sobre tu capacidad de mantener relationships con nuestros socios estratégicos.' Es la primera vez que menciona 'relationships'. Los contractors de los muelles tienen una relación importante con la empresa. ¿Qué respondes?",
            opciones: [
              { letra: "A", texto: "'Sandra, con todo respeto: 7 incidentes menores no reportados en 18 meses existían antes de que yo llegará. No los creé yo. Los encontré porque alguien confió en mí lo suficiente como para raised concerns. La relación más importante que tengo como director es con las personas que trabajan en esta planta. Eso es lo que voy a proteger.'", correcta: true, puntos: 10, feedback: "Anclar en facts, señalización de que no creaste el problema, y claridad sobre tus prioridades sin confront direct es leadership con espina dorsal.", empatia: 8, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'¿Cuándo empezaron los contratos con este contractor?'", correcta: false, puntos: -5, feedback: "Preguntar sobre timeline del contractor sin address the safety issue directly is deflection.", empatia: 4, asertividad: 6, ie: 4, cohesion: 5 },
              { letra: "C", texto: "'Sandra, el contractor tiene workers sin capacitación de seguridad. Eso es un liability enorme para la empresa.'", correcta: false, puntos: -5, feedback: "Introducir 'liability' como argumento puede sound threatening y escalation a la VP en lugar de diálogo.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Hay algo específico que quieras discutir?'", correcta: false, puntos: -5, feedback: "Continuing to deflect when she's specifically calling out your decisions signals you're not prepared to engage in this conversation.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Sandra se reclina en su silla. Te mira. Silencio.\n\n'Rodrigo, necesito que entiendas algo. Esta empresa tiene 60 años. Ha sobrevivido cambios de gobierno, carteles, crisis económicas. Lo ha hecho porque sabe cuándo hacer ruido y cuándo callar.'\n\nPausa.\n\n'Tú estás haciendo ruido. Necesito que entiendas el costo de eso.'\n\nTe acaba de threaten implicitement con tu trabajo."
      },
      {
        id: 4,
        titulo: "Escena 4: La decisión",
        narrativa: "Es martes por la noche. Estás en tu casa. Carolina te escreveu preguntándote cómo fue la reunión. No le has respondido todavía.\n\nTu esposa —Catalina— te pregunta: '¿Estás bien? llevas días stressado.'\n\nTe sentás en el sofá. El choices son estos:\n\nSi hablas con Carolina sobre la amenaza, ella va a saber que estás siendo pressure. Eso la pone en riesgo si decide testify sobre Felipe.\n\nSi no hablas con ella, no estás protecting a tu source.\n\nSi hablas con el CEO directamente —que es una opción— estás escalando contra la VP de Operaciones.\n\nSi callas y sigues, puedes keep your trabajo pero la planta sigue igual.\n\nY hay una cuarta opción que nadie te ha mencionado: la industria de hydrocarbons en Colombia es pequeña. Si te blacklistean de una planta, te pueden blacklistean de todas.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué haces esa noche?",
            opciones: [
              { letra: "A", texto: "Le escribes a Carolina: 'La reunión fue difícil. Hay concerns sobre mi trabajo. Necesito unos días para entender mejor el landscape. Por favor no hables con nadie sobre esto hasta que sepamos más.'", correcta: true, puntos: 10, feedback: "Warning her to stay quiet while you navigate es protective pero honesto. Le da space para que ella también se proteja.", empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "Le chiam a tu antiguo profesor de la universidad —ahora consultor independiente— para pedir advice sin dar nombres.", correcta: false, puntos: -5, feedback: "Consulting externos sin contexto puede create riesgos legales y profesionales no contemplados.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "Llamas al CEO directamente: 'Necesito hablar con usted sobre una situación que está developing.'", correcta: false, puntos: -5, feedback: "Escalar al CEO antes de tener un plan o understanding de las consecuencias puede create un conflito directo con la VP sin preparación.", empatia: 4, asertividad: 7, ie: 4, cohesion: 4 },
              { letra: "D", texto: "No le escribes a Carolina todavía. Esperas a ver qué pasa.", correcta: false, puntos: -5, feedback: "Silencio mientras la situación se develops sin comunicación es leaves Carolina exposed y a ti sin allies.", empatia: 5, asertividad: 4, ie: 5, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Al día siguiente, Carolina te Buscar: 'Rodrigo, necesito saber qué pasó. Me está matando la incertidumbre.' ¿Qué le dices?",
            opciones: [
              { letra: "A", texto: "'Carolina, lo que puedo decirte es esto: tenemos allies en la gerencia, no solo opposition. Hay people que saben lo que está pasando y no están de acuerdo. Estoy intentando encontrar una manera de resolver esto sin poner a nadie en riesgo —incluyéndote a ti, incluyéndome a mí. ¿Puedes confiar en mí un poco más?'", correcta: true, puntos: 10, feedback: "Providing reassurance that there are allies while no prometiendo resultados, y explicitly naming the protection of her and yourself, es leadership con boundaries claros.", empatia: 10, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Hay concerns sobre algunas decisiones que he tomado. Nada sobre ti. Estoy manejándolo.'", correcta: false, puntos: -5, feedback: "Minimize sin contexto puede hacer que ella se sienta menos protected y más curious.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'Necesito que confíes en mí. Pronto vas a saber más.'", correcta: false, puntos: -5, feedback: "Blind trust requests without information son emocionalmente manipulative.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'No puedo decirte más por tu propia protección.'", correcta: false, puntos: -5, feedback: "Using her safety as justification for withholding information es paternalismo que no respects her agency to make informed decisions.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Carolina asiente. No está feliz pero está calm."
      },
      {
        id: 5,
        titulo: "Escena 5: El legado",
        narrativa: "Ocho meses después. Las cosas cambiaron de maneras que no esperabas.\n\nLa auditoría de seguridad de los muelles se formalizó. El contractor fue reemplazado. Los incidentes menores ahora se reportan en un sistema nuevo. Eso lo ganaste tú.\n\nPero también hubo costos. El VP de Operaciones —Sandra Milena— no te ha perdonado. Te ha excluded de 3 reuniones estratégicas. La planta de Cartagena está bien, pero tú estás isolated dentro de la empresa.\n\nY hay algo más: hace tres semanas, Felipe Restrepo —tu predecessor— te encontró en una conference en Medellín. Te reconoció. Te llevó a un café.\n\n'Rodrigo, ouí lo que hiciste con los muelles. Gracias. No sé quién fue, pero alguien me ayudó a entender que lo que yo encontré era real.'\n\nNo sabe que fuiste tú. No sabe que Carolina te contó. No sabe nada.\n\nPero hoy, Felipe te envía un mensaje: 'Rodrigo, ¿puedo invitarte un almuerzo? Quiero contarte algo.'",
        preguntas: [
          {
            id: 1,
            pregunta: "Almuerzas con Felipe. Después de 40 minutos de conversación sobre la industria, eventualmente llega al punto: 'Rodrigo, quiero volver a trabajar. ¿Hay algún espacio para mí en tu planta?' Tienes una vacante en el equipo de ingeniería de procesos. ¿Qué le dices?",
            opciones: [
              { letra: "A", texto: "'Felipe, tengo una vacante. Pero necesito ser honesto: no sé todo lo que pasó entre tú y la gerencia anterior. Y no te voy a preguntar si no quieres contármelo. Lo que sí sé es que sabes de esta planta más que cualquier persona. Si quieres aplicar formalmente, yo no tengo objeciones. Y si hay algo que necesites saber antes de hacerlo, me dices.'", correcta: true, puntos: 10, feedback: "Being transparent about the vacancy, acknowledging you don't know everything, offering him agency, y opening the door for him to share if he wants es leadership that heals while maintaining integrity.", empatia: 10, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Felipe, la vacante existe. Te la paso a recursos humanos para que apliques como cualquier candidato.'", correcta: false, puntos: -5, feedback: "Formal process without personal engagement sends the message that the past doesn't matter y que él no es special.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'¿Qué pasó exactamente con la Vicepresidencia?'", correcta: false, puntos: -5, feedback: "Asked directly for the gossip before addressing whether you'd hire him misses the human moment entirely.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'Felipe, necesito pensarlo. No es una decisión que pueda tomar así de lightweight.'", correcta: false, puntos: -5, feedback: "Using 'pensarlo' sin timeline o context cuando él vulnerable y open te está asking can feel like rejection.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Felipe te mira y dice: 'Rodrigo, ¿cuál fue tu recompensa por hacer lo correcto con los muelles?'",
            opciones: [
              { letra: "A", texto: "'Ninguna que pueda mostrar. Pero me levanto cada día sabiendo que nadie se fue a su casa lastimado por mi culpa. Eso para mí es suficiente recompensa.'", correcta: true, puntos: 10, feedback: "Choosing meaning over recognition, while honest, es integrity that will sustain you through the political isolation that came with it.", empatia: 9, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'Me aislaron de 3 reuniones estratégicas. ¿Esa es la recompensa?'", correcta: false, puntos: -5, feedback: "Being bitter about the cost doesn't honor the choice you made — it undermines it.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'¿Recompensa? Esto es el trabajo.'", correcta: false, puntos: -5, feedback: "Dismissiveness about the personal cost makes it seem like the sacrifice was nothing, when the isolation is real.", empatia: 5, asertividad: 7, ie: 5, cohesion: 6 },
              { letra: "D", texto: "'La recompensa es que ustedes —gente como tú y como Carolina— ahora tienen un lugar más seguro donde trabajar.'", correcta: false, puntos: -5, feedback: "Making the reward about others without acknowledging the personal cost no te hace humano a los ojos de Felipe.", empatia: 6, asertividad: 7, ie: 7, cohesion: 6 }
            ]
          }
        ],
        transicion: "Felipe sonríe. 'Tienes razón. Eso es suficiente.'"
      }
    ]
  },
  {
    id: 5,
    titulo: "El Ascenso que Parte el Alma",
    tema: "Decisión difícil con impacto humano",
    escenarios: [
      {
        id: 1,
        titulo: "Escena 1: El proceso",
        narrativa: "Patricia Montoya es la Gerente de Recursos Humanos de la empresa. Tiene 12 años en la organización, los últimos 4 como HR Director. Es rigurosa, ética, y tiene una reputación de integrity que nadie cuestiona.\n\nLa empresa —Fertilizantes y Petroderivados— está en medio de un proceso de expansión. Necesitan un nuevo Director Comercial para la Regional Costa. El candidato ideal es internally promoted: Javier Mendoza. 38 años, 10 en la empresa, conoce todos los productos, tiene relaciones profundas con los clientes más importantes.\n\nPatricia ha led the hiring process personally. Ha interviews a 6 candidatos externos y 2 internos. Javier ha pasado por 3 rounds de entrevistas.\n\nHoy, Patricia recibe un mensaje de Javier:\n\n'Patricia, necesito hablar contigo antes de la última entrevista. Hay algo que necesito que sepas.'\n\nSe ven en la oficina después de horas. Javier está nervioso.\n\n'Patricia, hace tres semanas me enteré de algo. La razón por la que el candidato externo —Rodrigo Vásquez— está tan interesado en este puesto es porque tiene información sobre cómo conseguí el contrato con Agronales hace 4 años. Información que si se sabe, me podría perjudicar.'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dice Patricia a Javier?",
            opciones: [
              { letra: "A", texto: "'Javier, necesito que me cuentes exactamente qué hiciste con el contrato de Agronales. Sin edit, sin filtros.'", correcta: true, puntos: 10, feedback: "Asking for the full unvarnished truth before forming any judgment es integrity process que protege tanto a Javier como a la empresa.", empatia: 8, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'¿Rodrigo tiene documentación de esto?'", correcta: false, puntos: -5, feedback: "Focused on Rodrigo's evidence before understanding the allegation puts the focus en el wrong thing — lo que importa es what Javier did.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'¿Cuánto tiempo llevas pensando en decírmelo?'", correcta: false, puntos: -5, feedback: "Preguntar por el timing antes de entender el content shifts the focus to why he waited rather than what happened.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Qué quieres que haga?'", correcta: false, puntos: -5, feedback: "Devolver la pregunta a Javier without guidance fails to exercise your judgment as HR Director on a matter of integrity.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier hesitates, then: 'Hace 4 años, cuando competíamos por el contrato de Agronales —el más grande que tenemos— yo tenía un informante en el equipo de la competencia. Me decía qué estaban ofreciendo. No era ilegal, pero no era... right. Cuando me enteré de que eso no se hacía, paré. Pero Rodrigo tiene screenshots de las conversaciones.'\n\nPatricia lleva 12 años en recursos humanos. Ha visto cosas. Esta es la primera vez que alguien se presenta antes de ser descubierto. ¿Qué hace Patricia?",
            opciones: [
              { letra: "A", texto: "'Javier, necesito process esto. No puedo tomar una decisión ahora. Lo que puedo decirte es esto: el hecho de que estés aquí matters. Y el hecho de que paraste cuando te enteraste también matter. ¿Me das 48 horas para pensar cómo procedemos?'", correcta: true, puntos: 10, feedback: "Taking time to think while explicitly validating his disclosure y su agency es leadership que no sacrifica la justicia por la velocidad.", empatia: 10, asertividad: 9, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'¿Estás retirando tu aplicación?'", correcta: false, puntos: -5, feedback: "Asking him to withdraw antes de entender el full picture de si mismo o si hay remedial action possible es avoidance del rol de HR.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'¿Quién era el informante?'", correcta: false, puntos: -5, feedback: "Solicitar names de otros antes de address what Javier did no es el foco correcto.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'Necesito report esto al CEO.'", correcta: false, puntos: -5, feedback: "Reporting before understanding what remediation looks like y before giving Javier una oportunidad de addressed es premature.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Javier asiente. Patricia sale de la reunión sabiendo que esta decisión va a define su legado."
      },
      {
        id: 2,
        titulo: "Escena 2: La complejidad",
        narrativa: "Han pasado 48 horas. Patricia ha revisado todo lo que puede internamente. Ha hablado con un abogado externo familiarizado con derecho laboral. Ha buscado precedentes.\n\nLo que sabe:\n1. El informante de Javier fue someone en el equipo competidor que tenía acceso legítimo a esa información. No fue un hack. No fue robo. Fue una informal network que ahora no existe.\n2. No hay evidencia de que el contrato de Agronales hubiera sido perdido si no fuera por la información. El competidor perdió por razones legítimas: precio y relación.\n3. Javier lleva 4 años exemplary desde entonces.\n4. Rodrigo Vásquez —el otro candidato— aparentemente tiene solo conocimiento de segunda mano. No tiene documentos, solo historias.\n5. El CEO ha dicho públicamente que quiere promover from within en este rol.\n\nEl CEO —Hernán García— te llama:\n\n'Patricia, necesito el update sobre el proceso del Director Comercial. ¿Para cuándo tenemos una recomendación?'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dice Patricia al CEO?",
            opciones: [
              { letra: "A", texto: "'Hernán, el proceso está almost completo. Tengo una recommendation que quiero darte con contexto. ¿Podemos hablar mañana a primera hora? Es importante que entiendas el background antes de la decisión.'", correcta: true, puntos: 10, feedback: "Providing a clear timeline while signaling there is complexity without hiding it, y pidiendo un espacio privado para dar contexto, es leadership that respects the CEO's position.", empatia: 8, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Hernán, tenemos un tema complicated con uno de los candidatos internos. Necesito tu advice antes de proceder.'", correcta: false, puntos: -5, feedback: "Using 'complicated' y 'advice' diluye la responsabilidad de Patricia como HR Director y crea ambiguity sobre whose call this is.", empatia: 5, asertividad: 6, ie: 5, cohesion: 6 },
              { letra: "C", texto: "'El proceso va bien. La recomendación viene el viernes.'", correcta: false, puntos: -5, feedback: "Omitting la complication cuando el CEO está asking for update es deshonestidad que erosiona la confianza.", empatia: 3, asertividad: 5, ie: 3, cohesion: 4 },
              { letra: "D", texto: "'Javier tiene un issue de integridad que necesito resolver antes de proceder.'", correcta: false, puntos: -5, feedback: "An opaque 'integrity issue' sin contexto set up el CEO para desconfiar de Javier sin tener los hechos.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia has now drafted 3 options:\n1. Recommend Javier with a formal warning and mandatory ethics training — preserving the internal promotion but creating accountability\n2. Pause the process to investigate formally — giving time but signaling something is wrong\n3. Disqualify Javier — removing the risk entirely but punishing someone who self-reported\n\nShe needs to decide which to recommend to the CEO. What is the ethical framework she should use?",
            opciones: [
              { letra: "A", texto: "Option 1 is correct: Self-reporting demonstrates genuine remorse and a commitment to change. A formal warning combined with training creates accountability while honoring the disclosure. The self-report itself is evidence of character.", correcta: true, puntos: 10, feedback: "Option 1 balances accountability with recognition of Javier's integrity in disclosing. This is justice tempered with mercy.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "Option 2 is correct: An investigation protects everyone by establishing facts before any decision.", correcta: false, puntos: -5, feedback: "A formal investigation, while thorough, signals distrust of Javier's self-report and could deter future disclosures.", empatia: 5, asertividad: 6, ie: 5, cohesion: 6 },
              { letra: "C", texto: "Option 3 is correct: Integrity violations disqualify someone from leadership positions regardless of self-reporting.", correcta: false, puntos: -5, feedback: "Disqualifying Javier solely for the original violation ignores the transformation demonstrated by self-reporting and misaligns consequences.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Option 1 is correct: The self-report proves Javier is trying to change, and change should matter.", correcta: false, puntos: -5, feedback: "While self-report is important, the reason matters — if he only disclosed because he feared Rodrigo would expose him anyway, it complicates the ethical calculation.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Patricia decides. Tomorrow she'll present her recommendation to the CEO."
      },
      {
        id: 3,
        titulo: "Escena 3: La presentación",
        narrativa: "Patricia entra a la oficina del CEO —Hernán García, 30 años en la empresa, los últimos 8 como CEO. La conoce bien. Sabe que cuando ella pide una reunión privada, es serious.\n\nHernán se reclina en su silla: 'Patricia, ¿qué tienes para mí?'\n\nPatricia takes a breath and lays out everything —the disclosure, the context, the three options, her recommendation. Hernán listens without interrupting.\n\nSilence.\n\n'¿Cuál es tu recommendation?'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué recommendation presenta Patricia?",
            opciones: [
              { letra: "A", texto: "'Javier ha sido recomendado para el puesto con una amonestación formal y training obligatorio de ética corporativa. También disclosed voluntarily, lo cual demuestra que puede leadership under pressure. El risk para la empresa si lo descartamos es mayor que el risk de mantenerlo con oversight.'", correcta: true, puntos: 10, feedback: "Presenting the full recommendation with rationale — accountability plus recognition — shows she has exercised judgment rather than passing the buck.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Recomiendo que posterguemos la decisión 30 días mientras hacemos una investigación interna.'", correcta: false, puntos: -5, feedback: "Recommending delay when she has a clear recommendation avoids the hard call the CEO needs her to make.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'Recomiendo que disqualifiquemos a Javier. No podemos tener integridad selectiva.'", correcta: false, puntos: -5, feedback: "Disqualifying someone for self-reporting sets a precedent that punishes honesty and rewards silence.", empatia: 4, asertividad: 6, ie: 4, cohesion: 5 },
              { letra: "D", texto: "'¿Tú qué piensas, Hernán?'", correcta: false, puntos: -5, feedback: "Asking the CEO for his opinion before stating your recommendation fails to exercise the HR judgment you were hired to provide.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Hernán te mira y dice: 'Patricia, si hacemos esto y Rodrigo o alguien más se entera, ¿qué mensaje estamos enviando?'",
            opciones: [
              { letra: "A", texto: "'El mensaje es que la integridad no es solo sobre lo que haces cuando nadie te ve. También es sobre lo que haces cuando te descubres a ti mismo. Javier tuvo integrity cuando nobody was watching. Eso cuenta.'", correcta: true, puntos: 10, feedback: "Reframing integrity as including self-discovery vs. solo being caught addresses the CEO's concern about precedent while staying true to the recommendation.", empatia: 10, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'El mensaje es que somos una empresa que cree en second chances.'", correcta: false, puntos: -5, feedback: "Second chances framing ignores the seriousness of the original violation and oversimplifies the ethical complexity.", empatia: 5, asertividad: 6, ie: 5, cohesion: 6 },
              { letra: "C", texto: "'Eso es un risk reputacional que tengo que considerar.'", correcta: false, puntos: -5, feedback: "Acknowledging reputational risk without addressing it philosophically fails to defend your recommendation.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'¿Qué prefieres? ¿Perder a alguien que integrity o perder a alguien que no integrity?'", correcta: false, puntos: -5, feedback: "Framing it as a binary choice about preference sidesteps the ethical framework the CEO is asking for.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Hernán asiente lentamente. 'Hazlo. Pero quiero que tú le cuentes a Javier tú personally.'"
      },
      {
        id: 4,
        titulo: "Escena 4: La conversación con Javier",
        narrativa: "Patricia llega a la oficina de Javier. Lo encuentra working late como siempre. Es Friday night, 8 PM.\n\n'Javier, ¿tienes 10 minutos?'\n\nSe sientan. Patricia le cuenta todo: la recommendation, el rationale, la decisión del CEO. También le cuenta lo que dijo Hernán sobre contarle personalmente.\n\nJavier llora. No esperaba continuar en el proceso. No esperaba que alguien entendiera lo que le cost\u00f3 admitirlo.\n\n'Patricia, gracias. No sé qué decir.'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dice Patricia?",
            opciones: [
              { letra: "A", texto: "'Javier, lo que hiciste —venir a mí antes de que Rodrigo lo usara— fue lo más valiente que he visto en 12 años de recursos humanos. Pero esto no termina aquí. El training de ética es real. Y voy a estar following your progress de cerca. ¿Entendido?'", correcta: true, puntos: 10, feedback: "Acknowledging his courage while setting clear expectations for accountability y follow-up demuestra que hay mercy con estructura.", empatia: 10, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Gracias por confiar en mí. Esto es un nuevo chapter para ti.'", correcta: false, puntos: -5, feedback: "Being warm without being specific about expectations leaves the accountability fuzzy.", empatia: 7, asertividad: 5, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'No me agradezcas. haz lo correct porque es lo correcto, no porque yo te ayudé.'", correcta: false, puntos: -5, feedback: "Turning the moment back on him with a moral imperative after his vulnerability can feel like additional pressure.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "'Ahora ve a casa y descansa. Mañana starts fresh.'", correcta: false, puntos: -5, feedback: "Dismissiveness after such an emotional exchange undermines the gravity of what just happened.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Javier eventually says: 'Patricia, ¿qué me hubiera pasado si no te hubiera dicho nada?' ¿Qué le respondes?",
            opciones: [
              { letra: "A", texto: "'Javier, no sé. No quiero especular sobre lo que habría pasado si hubieras chosen differently. Lo que sé es lo que pasó cuando elegiste differently. Eso es lo que cuenta.'", correcta: true, puntos: 10, feedback: "Redirecting to the choice he made rather than exploring the hypothetical protects the forward-looking perspective that allows him to move on.", empatia: 9, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'Si Rodrigo hubiera expuesto esto, la situación habría sido muy different.'", correcta: false, puntos: -5, feedback: "Detallar lo que habría pasado si Rodrigo lo exposed adds to his guilt without adding value.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'No lo sé. Pero no matters porque así no lo hiciste.'", correcta: false, puntos: -5, feedback: "While true, the bluntness can feel dismissive of the emotional weight of his question.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "D", texto: "'¿Por qué preguntas?'", correcta: false, puntos: -5, feedback: "Deflecting his question when he's vulnerable after a significant disclosure shuts down the emotional openness.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Javier asiente. Se va a casa."
      },
      {
        id: 5,
        titulo: "Escena 5: Un año después",
        narrativa: "Patricia receives a message from Javier on the anniversary of his disclosure:\n\n'Patricia, un año después de una de las noches más difíciles de mi vida. El training de ética me hizo rethink how I've operated for 15 years. Fui aloja a mi antiguo competidor y me disculpé personally. Le devolví el contrato de Agronales a la mesa —no porque lo pidieran, sino porque era lo right. No sé si me blacklistearon de alguna oportunidad. Pero dormimos mejor. Gracias por lo que hiciste.'",
        preguntas: [
          {
            id: 1,
            pregunta: "Patricia reads the message and realizes something: the process she designed —accountability with mercy— produced a transformation that punishment alone never could have achieved. What's the leadership lesson here?",
            opciones: [
              { letra: "A", texto: "The lesson is that people who make mistakes but choose integrity deserve a pathway back. What matters most is not the violation — it's what people do after.", correcta: true, puntos: 10, feedback: "This captures the core insight: accountability structures that enable redemption produce more lasting change than punitive approaches.", empatia: 10, asertividad: 9, ie: 10, cohesion: 10 },
              { letra: "B", texto: "The lesson is that as HR Director, I have the power to design systems that allow people to grow.", correcta: false, puntos: -5, feedback: "Making it about her power misses the point — the lesson is about Javier's choice, not Patricia's authority.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "The lesson is that self-reporting should always be rewarded, even if the violation was serious.", correcta: false, puntos: -5, feedback: "Overgeneralizing to 'always reward self-reporting' ignores the nuance that accountability must still accompany any second chance.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "D", texto: "The lesson is that ethical leadership means understanding the difference between someone's worst moment and their entire character.", correcta: false, puntos: -5, feedback: "While true, framing it as 'worst moment vs. entire character' risks minimizing the seriousness of what happened.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia is mentoring a new HR Business Partner —Daniela, 28 years old, 2 years at the company. Daniela asks: 'If you had to do it again, would you make the same call?' What's Patricia's honest answer?",
            opciones: [
              { letra: "A", texto: "'Every day. Because the process I designed — accountability with humanity — created a transformation that punishment never could. And because Javier deserved to be seen not as his worst moment, but as a person capable of change.'", correcta: true, puntos: 10, feedback: "This shows confidence in the decision, the principled reasoning behind it, and the humility to recognize what Javier's journey revealed about human potential.", empatia: 10, asertividad: 10, ie: 10, cohesion: 10 },
              { letra: "B", texto: "'Probably. Though I still worry about the precedent.'", correcta: false, puntos: -5, feedback: "Expressing ongoing doubt undermines the conviction needed to defend the decision to future leaders.", empatia: 6, asertividad: 5, ie: 6, cohesion: 6 },
              { letra: "C", texto: "'I'd need to review the case details again.'", correcta: false, puntos: -5, feedback: "Being unable to commit to a decision you made a year ago undermines your credibility as a leader.", empatia: 4, asertividad: 5, ie: 4, cohesion: 5 },
              { letra: "D", texto: "'What would you have done?'", correcta: false, puntos: -5, feedback: "Deflecting to a mentee rather than answering directly fails to fulfill the mentoring responsibility.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Daniela takes notes. Something just shifted in how she thinks about HR."
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
        titulo: "Escena 1: La viralización",
        narrativa: "Patricia Montoya is the HR Director. You've worked with her in Case 5.\n\nIt's Tuesday, 8:30 AM. Patricia arrives at the office and sees 47 unread messages on WhatsApp. Her team is in chaos. One of the senior commercial executives —Roberto García— is calling her repeatedly.\n\nShe answers.\n\n'Patricia, ¿has visto Twitter? Hay un thread sobre la empresa. Sobre mí. Sobre supuesto bullying. Es mentira. Esto es alguien que tiene un problema personal conmigo y está usando la empresa para hacerme daño.'\n\nPatricia checks Twitter. The thread has 127 comments. Most are from current employees — people she knows. Some are from former employees. The allegations include: ' Roberto shouts in meetings, 'has favorites', 'made me cry twice', 'doesn't respect boundaries'.\n\nPatricia's phone rings again. It's the CEO.\n\n'Patricia, ¿qué está pasando?'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Qué le dice Patricia al CEO?",
            opciones: [
              { letra: "A", texto: "'Hernán, estoy investigating esto ahora. Lo que puedo decirte es esto: algunas de las allegations son de personas que ya no están en la empresa — no tenemos manera de verificar su versión. Otras son de personas que aún trabajan aquí. Voy a hablar con cada una. Te doy un update en 24 horas.'", correcta: true, puntos: 10, feedback: "Separating verifiable from unverifiable, outlining action, y dando timeline específico sin ser defensive es respuesta de crisis profesional.", empatia: 8, asertividad: 10, ie: 9, cohesion: 9 },
              { letra: "B", texto: "'Hernán, esto es un ataque coordinated contra Roberto. Necesitamos una respuesta legal.'", correcta: false, puntos: -5, feedback: "Calling it a 'coordinated attack' before investigation es prematurely taking sides sin entender el full picture.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'Déjame reviewarlo y te llamo.'", correcta: false, puntos: -5, feedback: "Generic 'let me review' sin specifics o timeline fails to demonstrate urgency or leadership in a crisis.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'¿Qué quieres hacer, Hernán?'", correcta: false, puntos: -5, feedback: "Devolving la decisión al CEO sin recomendación de Patricia fails the purpose of having an HR Director.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia starts investigating. She identifies 8 people who commented on the thread publicly. 3 are former employees, 5 are current. Of the current employees, 2 are in Roberto's direct team, 3 are not.\n\nShe also discovers something unexpected: one of the comments —the most damning— came from an account with the name 'María Fernanda'. When she traces the account, she finds it was created 3 weeks ago and has only posted that thread.\n\nMaría Fernanda doesn't exist in the company's HR system.\n\nBut Lucía Fernández —a commercial coordinator who reports to Roberto— has been on sick leave for stress for the last 4 weeks.\n\nPatricia calls Lucía.\n\n'Lucía, soy Patricia. ¿Cómo estás?'",
            opciones: [
              { letra: "A", texto: "'Patricia, supongo que llamas por lo del thread. Yo lo escribí. Todo es verdad. Y sí, usé otro nombre porque tenía miedo de las represalias.'", correcta: true, puntos: 10, feedback: "Lucía owned her account directly. Reconociendo que anonymous pero truthful speech es integrity incluso when scared.", empatia: 10, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'Patricia, no sé de qué hablas.'", correcta: false, puntos: -5, feedback: "Denying cuando claramente ella initiated el thread destruye credibilidad si se prueba después.", empatia: 3, asertividad: 4, ie: 3, cohesion: 3 },
              { letra: "C", texto: "'Sí, lo escribí. Pero no soy yo. Es alguien que está copiando mi historia.'", correcta: false, puntos: -5, feedback: "Claiming identity theft when actually you wrote it es layers of deception que complica todo.", empatia: 3, asertividad: 3, ie: 3, cohesion: 3 },
              { letra: "D", texto: "'¿Cómo me conseguiste el número?'", correcta: false, puntos: -5, feedback: "Focusing on how she was contacted rather than addressing the substance deflects from the actual issue.", empatia: 3, asertividad: 4, ie: 3, cohesion: 3 }
            ]
          }
        ],
        transicion: "Patricia se queda callada. Tiene confirmation de quien escribió el thread. Ahora tiene que decidir qué hacer con esta información."
      },
      {
        id: 2,
        titulo: "Escena 2: La decisión sobre Lucía",
        narrativa: "Patricia tiene 3 hechos:\n1. Lucía escribió el thread con un nombre falso\n2. Lucía está en licencia por estrés — lo que sugiere que la situación la afectó profundamente\n3. Las alegaciones contra Roberto incluyen gritos y haberla hecho llorar\n\nPatricia también tiene una cuarta consideración: Roberto es uno de los mayores generadores de ingresos de la empresa. Él trajo el contrato de Agronales.\n\nNecesita decidir cómo manejar esto.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cuál es el approach correcto?",
            opciones: [
              { letra: "A", texto: "Separar los dos issues completamente: primero address the substance of Lucía's allegations —investigar si Roberto creó un ambiente tóxico—; segundo address el uso de fake name — que es una violación del código de conducta pero comprensible given fear of retaliation.", correcta: true, puntos: 10, feedback: "Separating los dos issues —valid concern sobre bullying vs. violation of conduct policy— permite justice para Lucía sin excused the deception.", empatia: 10, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "Primero confrontar a Lucía por usar fake name. Una vez that issue is resolved, then address Roberto.", correcta: false, puntos: -5, feedback: "Prioritizing the procedural violation over the substantive allegation sends the message that how you speak up matters more than what you're speaking up about.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "Primero hablar con Roberto para entender su versión antes de actuar sobre cualquiera.", correcta: false, puntos: -5, feedback: "Going to Roberto first before addressing the substance with Lucía risks contaminating any future investigation y alerting Roberto to cover tracks.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Report the fake name usage to legal para determinar si hay basis para action.", correcta: false, puntos: -5, feedback: "Legal involvement before understanding whether there's legitimate substance detrás del anonymous complaint es inverted priorities.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia decide how to approach this. She calls Lucía back.\n\n'Lucía, voy a ser directa contigo. Sé que fuiste tú. Pero antes de hablar de eso, necesito saber: ¿lo que publicaste sobre Roberto es verdad?'",
            opciones: [
              { letra: "A", texto: "'Patricia, el thread era la única manera de que alguien me creyera. Roberto grita en las reuniones. Me hizo llorar frente a otros. Fui a HR tres veces y nunca pasó nada. No me quedaba otra opción.'", correcta: true, puntos: 10, feedback: "Lucía's response reveals that she had exhausted internal channels. Her use of a fake name was a last resort after institutional failure — understandable, even if policy-violating.", empatia: 10, asertividad: 9, ie: 10, cohesion: 9 },
              { letra: "B", texto: "'Sí, es verdad. Y volvería a hacerlo.'", correcta: false, puntos: -5, feedback: "Being defiant about the method without expressing any willingness to engage through proper channels makes reconciliation harder.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'Algunas cosas son exageradas. Pero la mayoría es verdad.'", correcta: false, puntos: -5, feedback: "Acknowledging exaggeration without clarifying which parts undermines the credibility of the valid allegations.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "D", texto: "'¿Qué más da? Ya está público.'", correcta: false, puntos: -5, feedback: "Resignation to the public nature of the disclosure forecloses any possibility of resolution through proper channels.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Patricia pregunta: '¿Fuiste a RRHH tres veces? ¿Qué pasó?'"
      },
      {
        id: 3,
        titulo: "Escena 3: La historia completa",
        narrativa: "Lucía le cuenta a Patricia la historia completa:\n\nTres veces en 18 meses reportó a Roberto a RRHH. Dos veces al Director de RRHH anterior —quien le dijo que 'trabajara su resiliencia'. Una vez con un business partner senior de RRHH —quien le dijo que 'Roberto genera ingresos y necesitamos ser comprensivos'.\n\nCada vez, no pasó nada. Cada vez, el ambiente de trabajo empeoró.\n\nEl último incidente —hacerla llorar frente a colegas— ocurrió hace 6 semanas. Se fue a licencia por estrés 3 días después.\n\nEl thread se viralizó internamente primero, luego llegó a Twitter.\n\nPatricia ahora tiene el cuadro completo: falla institucional para atender un patrón conocido de comportamiento, que llevó a un acto desesperado que dañó la reputación de la empresa.",
        preguntas: [
          {
            id: 1,
            pregunta: "Patricia has a difficult conversation with the CEO the next day. She recommends: 1) Formal investigation of Roberto's behavior; 2) Acknowledgment that the company's previous response to complaints was inadequate; 3) Support for Lucía; 4) A public statement acknowledging the situation and the company's commitment to change.\n\nThe CEO pushes back: 'Patricia, esto es demasiado. No podemos admitir que fallamos en handle complaints. Eso es litigation risk.'\n\nWhat should Patricia do?",
            opciones: [
              { letra: "A", texto: "'Hernán, puedo reducir el litigation risk significativamente si manejamos esto con transparencia. Lo que genera litigation no es la admisión — es la percepción de que we knew and we ignored. Si investigamos y actuamos, demonstramos que ahora sí nos importa. Eso reduce riesgo, no lo aumenta.'", correcta: true, puntos: 10, feedback: "Reencuadrar el riesgo legal desde transparencia vs. secreto hacia si la empresa parece haber respondido una vez que las alegaciones se hicieron públicas es el argumento correcto. Investigación y acción = menor riesgo. Silencio = mayor riesgo.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Tienes razón. Puedo hacer esto más quietly.'", correcta: false, puntos: -5, feedback: "Siding with the CEO's risk aversion without challenging the underlying assumption about what actually creates legal exposure fails the employees who weren't protected.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "C", texto: "'¿Qué propones tú?'", correcta: false, puntos: -5, feedback: "Devolving back to the CEO after presenting a principled recommendation fails to exercise the HR leadership you're being paid to provide.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'Si no hacemos nada, la próxima persona que venga a mí va a hacer lo mismo que Lucía. Porque no tiene otra opción.'", correcta: false, puntos: -5, feedback: "Warning about future consequences without addressing the CEO's immediate concern es filosófico pero no es estrategia.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia needs to make a decision that will define her career. If she pushes for transparency and the CEO refuses, she may need to escalate — potentially to the board.\n\nBut she also knows that escalating publicly could destroy her reputation in the industry.\n\nWhat is the principled path forward?",
            opciones: [
              { letra: "A", texto: "Make a final recommendation in writing to the CEO, clearly outlining the legal, reputational, and human costs of inaction. If he refuses, give him 48 hours to reconsider. If he still refuses, consult external counsel confidentially about board escalation options —without notifying him.", correcta: true, puntos: 10, feedback: "Seguir los canales correctos mientras se documenta todo, y explorar opciones de escalada sin divulgación prematura, equilibra lealtad con rendición de cuentas.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "Resign quietly and find a new job. Fighting the CEO on this is career suicide.", correcta: false, puntos: -5, feedback: "Renunciar silenciosamente sin agotar las opciones internas abandona a los empleados que confiaron en RRHH para protegerlos.", empatia: 4, asertividad: 4, ie: 4, cohesion: 4 },
              { letra: "C", texto: "Leaky to the press about the company's handling of the situation to force change.", correcta: false, puntos: -5, feedback: "Filtrar a la prensa antes de agotar las opciones internas de escalada puede destruir tu carrera y es éticamente cuestionable.", empatia: 3, asertividad: 3, ie: 3, cohesion: 3 },
              { letra: "D", texto: "Aceptar la decisión del CEO porque él tiene más información sobre el contexto completo.", correcta: false, puntos: -5, feedback: "Aceptar la decisión del CEO con el argumento de que 'él tiene más contexto' abdica el juicio profesional exactamente en el tema donde más se necesita la expertise de RRHH.", empatia: 5, asertividad: 4, ie: 5, cohesion: 5 }
            ]
          }
        ],
        transicion: "Patricia se va a casa esa noche y se pregunta si este trabajo todavía tiene sentido."
      },
      {
        id: 4,
        titulo: "Escena 4: La rendición",
        narrativa: "Han pasado tres semanas. Patricia hizo su recomendación por escrito. El CEO no respondió en 48 horas. A las 72, ella envió un seguimiento. Después de una semana, el CEO la llamó.\n\n'Siéntate, Patricia. He estado pensando en esto. No me gusta cómo resultó. Pero tienes razón en una cosa: si lo ignoramos, vuelve a pasar. Y la próxima vez, puede que no tengamos a alguien tan íntegra como Lucía que solo quería ser escuchada.'\n\nPatricia no podía creer lo que oía.\n\n'Esto es lo que vamos a hacer. Vamos a investigar a Roberto. Vamos a hablar con todos los que comentaron. Y vamos a hacer un comunicado. Yo voy a estar en ese comunicado personalmente. ¿De acuerdo?'",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Cómo responde Patricia?",
            opciones: [
              { letra: "A", texto: "'Gracias, Hernán. Una cosa: en el statement, necesitamos incluir un mecanismo anónimo para que otras personas con concerns puedan reportarlos sin fear of retaliation. Ese fue el vacío que creó la situación.'", correcta: true, puntos: 10, feedback: "Aceptar la decisión del CEO mientras inmediatamente se agrega el cambio sistémico que prevendría la recurrencia demuestra que el liderazgo aprende de la crisis.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Gracias, Hernán. Voy a começar la investigación inmediatamente.'", correcta: false, puntos: -5, feedback: "Simple gratitud sin añadir ningún insight sistémico desperdicia la oportunidad de transformar la crisis en cambio estructural.", empatia: 6, asertividad: 7, ie: 6, cohesion: 6 },
              { letra: "C", texto: "¿Y sobre Lucía? ¿Qué pasa con ella?'", correcta: false, puntos: -5, feedback: "Immediately moving to next steps without acknowledging the CEO's change of heart misses the moment of organizational learning that just occurred.", empatia: 6, asertividad: 6, ie: 6, cohesion: 6 },
              { letra: "D", texto: "'También necesitamos compensate a Lucía por el daño que causó el sistema.'", correcta: false, puntos: -5, feedback: "Compensation before investigation establishes facts runs ahead of proper process.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "El statement sale. El CEO personally apologizes for the company's failure to listen. Roberto is placed on administrative leave pending investigation.\n\nLucía writes to Patricia: 'Patricia, no sé si hice lo correcto. Pero después de 18 meses de no ser escuchada, finalmente alguien me escuchó. Gracias.'\n\n¿Qué debería hacer Patricia?",
            opciones: [
              { letra: "A", texto: "Le respondes: 'Lucía, lo que hiciste fue imperfecto pero completamente comprensible. Lo que importó fue que eventually alzaste la voz. Ahora ayúdanos a terminar esto — cuéntanos todo lo que necesitas para que tu regreso sea seguro.'", correcta: true, puntos: 10, feedback: "Validar que su voz fue escuchada mientras se la involucra en el proceso de resolución, y condicionar su retorno a la seguridad y no solo al proceso, cierra el ciclo de manera productiva.", empatia: 10, asertividad: 9, ie: 10, cohesion: 10 },
              { letra: "B", texto: "Le dices que process está en manos de legal y ella necesita seguir las vías oficiales.", correcta: false, puntos: -5, feedback: "Redirecting to legal/process after the emotional exchange erases the humanity that just allowed her to be heard.", empatia: 5, asertividad: 7, ie: 5, cohesion: 5 },
              { letra: "C", texto: "No respondes porque cualquier comunicación puede ser discoverable si Roberto presenta demanda.", correcta: false, puntos: -5, feedback: "Concern about litigation discoverability overriding basic human acknowledgment undermines the relationship Patricia just built with Lucía.", empatia: 4, asertividad: 6, ie: 4, cohesion: 4 },
              { letra: "D", texto: "Le dices que ella needs to apologize publicly for using a fake name.", correcta: false, puntos: -5, feedback: "Demanding public apology for the method of disclosure before ensuring the substance of her complaint is addressed is priorities backwards.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 }
            ]
          }
        ],
        transicion: "Patricia piensa en sus próximos 20 años en esta industria."
      },
      {
        id: 5,
        titulo: "Escena 5: El futuro",
        narrativa: "Roberto fue despedido formalmente tras la investigación que encontró un patrón de acoso, humillación y represalias contra empleados que alzaron la voz. La empresa llegó a acuerdos privados con 4 exempleados. El costo total superó los $2 millones en honorarios legales, acuerdos e impacto en productividad.\n\nEl mecanismo anónimo de reporte que Patricia implementó ahora es usado por más de 200 empleados. En su primer año generó 47 reportes —12 de los cuales llevaron a investigaciones formales y 3 desvinculaciones.\n\nPatricia recibe un mensaje de un nuevo Director de RRHH en una empresa competidora: 'Me enteré de lo que hiciste en Fertilizantes. Estamos construyendo una función de RRHH desde cero. ¿Considerarías una conversación?'\n\nPatricia piensa en su carrera, sus decisiones y el costo de hacer lo correcto.",
        preguntas: [
          {
            id: 1,
            pregunta: "¿Debería Patricia considerar la oportunidad en la competencia?",
            opciones: [
              { letra: "A", texto: "Sí. Porque demuestra que hacer lo correcto puede ser rewarded, not punished. Y porque 200+ employees now have a voice in a company where before they didn't. Eso es un legacy más grande que cualquier título.", correcta: true, puntos: 10, feedback: "Seeing career mobility as validation that integrity is rewarded, while recognizing the systemic change implemented, makes this a natural next step.",
 empatia: 10, asertividad: 9, ie: 9, cohesion: 9 },
              { letra: "B", texto: "No. Las circunstancias que la llevaron ahí ya no existen. Ahora tiene que proteger lo que construyó.", correcta: false, puntos: -5, feedback: "Rechazar una oportunidad de crecimiento por miedo a perder lo que se construyó es conservadurismo que puede limitar el impacto a largo plazo.", empatia: 6, asertividad: 5, ie: 6, cohesion: 6 },
              { letra: "C", texto: "No todavía. Hay mucho trabajo pendiente en Fertilizantes antes de poder irse.", correcta: false, puntos: -5, feedback: "Quedarse por obligación cuando hay una oportunidad de mayor impacto puede crear resentimiento que deteriora el trabajo que queda.", empatia: 5, asertividad: 5, ie: 5, cohesion: 5 },
              { letra: "D", texto: "Solo si le garantizan que podrá implementar sus estándares de RRHH sin restricciones.", correcta: false, puntos: -5, feedback: "Poner condiciones antes de la primera conversación puede cerrar oportunidades antes de entender el contexto real.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 }
            ]
          },
          {
            id: 2,
            pregunta: "Patricia acepta la conversación con la empresa competidora. Le ofrecen un cargo con más presupuesto, más equipo y más autonomía. En su última semana en Fertilizantes, el CEO —Hernán García— le pregunta: 'Patricia, ¿qué necesita esta empresa para que lo que construiste no se desmorone cuando te vayas?'",
            opciones: [
              { letra: "A", texto: "'Hernán, necesita tres cosas: uno, que el mecanismo de reporte anónimo sea auditado externamente cada año para que nadie lo pueda silenciar internamente. Dos, que la persona que me reemplace tenga acceso directo al Comité Ejecutivo cuando haya conflictos de interés. Tres, que Javier Morales lidere la transición de RRHH durante los primeros tres meses — él conoce la cultura y sabe lo que cuesta construirla.'", correcta: true, puntos: 10, feedback: "Dejar un legado institucional con acciones concretas —auditoría externa, acceso al comité, continuidad con Javier— demuestra que el liderazgo no es sobre la persona sino sobre el sistema que deja atrás.", empatia: 9, asertividad: 10, ie: 9, cohesion: 10 },
              { letra: "B", texto: "'Necesita contratar a alguien con mi perfil. Sé exactamente qué buscar.'", correcta: false, puntos: -5, feedback: "Definir el sucesor en términos de 'mi perfil' es ego disfrazado de generosidad. El sistema debe ser mayor que cualquier persona.", empatia: 5, asertividad: 6, ie: 5, cohesion: 5 },
              { letra: "C", texto: "'Que no contraten a nadie que venga a hacer carrera aquí. Necesitan a alguien que realmente se quede.'", correcta: false, puntos: -5, feedback: "Descalificar ambición profesional sin contexto proyecta las propias inseguridades sobre el legado.", empatia: 4, asertividad: 5, ie: 4, cohesion: 4 },
              { letra: "D", texto: "'Hernán, eso es lo que les dejo por escrito. Tengo un documento de transición listo.'", correcta: false, puntos: -5, feedback: "Un documento sin conversación pierde la oportunidad de anclar el compromiso del CEO con el legado institucional en un momento humano clave.", empatia: 5, asertividad: 7, ie: 5, cohesion: 6 }
            ]
          }
        ],
        transicion: "Hernán asiente. Patricia sale de esa conversación sabiendo que construyó algo que sobrevivirá más allá de ella."
      }
    ]
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CASOS };
}
