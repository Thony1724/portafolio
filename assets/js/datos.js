/* =========================================================================
   CONTENIDO DEL PORTAFOLIO (grupal)
   -------------------------------------------------------------------------
   · Integrantes: foto en assets/img/, "foto: null" muestra las iniciales.
   · Documentos: copia el archivo a docs/semana-N/ y escribe su ruta en
     "pdf" (vista previa) y/o "word" (descarga). Ambos en null = "Pendiente".
   · Foros: cada integrante tiene su respuesta en "respuestas".
   ========================================================================= */

window.PORTAFOLIO = {
  grupo: "Ingeniería y Arquitectura",

  /* ======================================================== INTEGRANTES */
  integrantes: [
    {
      id: "anthony",
      nombre: "Anthony Alberto Loyaga Chávez",
      nombreCorto: "Anthony Loyaga",
      iniciales: "AL",
      foto: "assets/img/anthony.jpg",
      carrera: "Ingeniero de Sistemas · Desarrollador de software",
      bio: "Soy ingeniero de sistemas y me dedico al desarrollo de software: diseño y construyo soluciones tecnológicas que resuelven problemas reales de las organizaciones. Actualmente curso la <strong>Maestría en Docencia Universitaria</strong> en la Universidad César Vallejo, porque quiero llevar esa experiencia profesional al aula y formar a otros profesionales con metodologías activas, centradas en el estudiante y apoyadas en la tecnología.",
      tags: ["Ingeniería de Sistemas", "Desarrollo de software", "Docencia universitaria", "Andragogía y TIC"]
    },
    {
      id: "guadalupe",
      nombre: "Guadalupe Piedra Olano",
      nombreCorto: "Guadalupe Piedra",
      iniciales: "GP",
      foto: "assets/img/guadalupe.jpg",
      carrera: "Ingeniera de Sistemas",
      bio: "Soy ingeniera de sistemas titulada, con conocimientos en desarrollo de software en entornos desktop, web y móvil, facturación electrónica y administración de bases de datos. Actualmente curso la <strong>Maestría en Docencia Universitaria</strong> en la Universidad César Vallejo, motivada por mi convicción de que el conocimiento no debe ser egoísta, sino compartido. Considero que enseñar es una oportunidad para transmitir experiencias, generar nuevos aprendizajes y contribuir al crecimiento profesional y personal de otras personas. Por ello, deseo complementar mi formación como ingeniera con competencias pedagógicas que me permitan compartir mis conocimientos y aportar a la educación.",
      tags: ["Ingeniería de Sistemas", "Desarrollo web y móvil", "Bases de datos", "Facturación electrónica"]
    },
    {
      id: "veronica",
      nombre: "Verónica Lourdes Hurtado Nuñez",
      nombreCorto: "Verónica Hurtado",
      iniciales: "VH",
      foto: null,
      carrera: "Ingeniera Industrial",
      bio: null, // ← pegar aquí su descripción
      tags: ["Ingeniería Industrial", "Docencia universitaria"]
    }
  ],

  /* ======================================================== SEMANAS */
  semanas: [
    /* ------------------------------------------------------------ SEMANA 1 */
    {
      numero: 1,
      capacidad: 1,
      titulo: "Fundamentos de la educación de adultos",
      descripcionCapacidad: "Analiza las teorías y fundamentos que sustentan la educación para adultos en el nivel universitario.",
      sesiones: "Sesiones 1 y 2",
      reflexion: [
        "En esta primera semana comprendimos que el adulto no llega al aula “vacío”: trae experiencias, valores y motivaciones que deben convertirse en el punto de partida del aprendizaje. Los aportes de Félix Adam sobre la horizontalidad y la participación, y los principios de Knowles (necesidad de saber, autoconcepto, experiencia previa, disposición, orientación a problemas y motivación interna) nos permitieron leer críticamente los casos de la Práctica 1.",
        "Al analizar la capacitación obligatoria que nadie quería, al director que rechazaba aprender o al docente que seguía enseñando como instructor, identificamos que el problema rara vez está en el participante, sino en un diseño que ignora su autonomía y la utilidad inmediata de lo que aprende. Desde el foro, además, relacionamos estos fundamentos con la dimensión ética: el facilitador forma en responsabilidad cuando guía sin imponer, escucha y abre espacios de diálogo horizontal, y la autonomía se entiende como la capacidad de decidir con responsabilidad y asumir las consecuencias."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-1" },
        {
          tipo: "practica",
          titulo: "Práctica 1 · Análisis de casos andragógicos",
          descripcion: "Análisis de casos desde los principios de Knowles y el aprendizaje experiencial de Kolb, con propuestas de solución.",
          pdf: "docs/semana-1/practica-1.pdf",
          word: "docs/semana-1/practica-1.docx"
        },
        {
          tipo: "colaborativo",
          titulo: "Primer avance del producto colaborativo",
          descripcion: "Informe académico: primera entrega del proyecto del equipo.",
          pdf: "docs/semana-1/primer-avance.pdf",
          word: null
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 2 */
    {
      numero: 2,
      capacidad: 2,
      titulo: "La andragogía y el modelo andragógico",
      descripcionCapacidad: "Aplica un modelo de enseñanza aprendizaje en entornos de aprendizaje que generan la participación activa de los maestristas, y gestiona el currículo con énfasis en estrategias metodológicas efectivas en el proceso educativo de adultos.",
      sesiones: "Sesiones 3 y 4",
      reflexion: [
        "Contrastar la pedagogía tradicional con el modelo andragógico nos ayudó a reconocer ventajas y límites de ambos. La enseñanza tradicional organiza bien los contenidos para grupos grandes, pero ubica al adulto como sujeto pasivo; el modelo andragógico, en cambio, lo reconoce como protagonista y valora su trayectoria profesional, aunque le exige mayor autorregulación y no todos los estudiantes cuentan con las mismas condiciones de tiempo y competencias para aprender de forma autónoma.",
        "Coincidimos en que las universidades responden solo parcialmente a los principios andragógicos, porque todavía predominan las clases expositivas y la evaluación memorística. Por eso propusimos el aprendizaje basado en problemas y proyectos vinculados a la experiencia laboral, el trabajo colaborativo, el uso de herramientas digitales e inteligencia artificial, y una evaluación formativa con portafolios, autoevaluación y coevaluación (Acosta-Leal et al., 2023; Samayoa Juárez de Conde et al., 2023; Zainuddin et al., 2024)."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-2" },
        {
          tipo: "practica",
          titulo: "Cuadro comparativo y casos",
          descripcion: "Cuadro comparativo de las teorías de Maslow, Rogers y Bisquerra sobre la motivación, y análisis de casos.",
          pdf: "docs/semana-2/cuadro-comparativo-casos.pdf",
          word: "docs/semana-2/cuadro-comparativo-casos.docx"
        },
        {
          tipo: "colaborativo",
          titulo: "Segundo avance del producto colaborativo",
          descripcion: "Informe académico: segunda entrega del proyecto del equipo.",
          pdf: "docs/semana-2/segundo-avance.pdf",
          word: null
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 3 */
    {
      numero: 3,
      capacidad: 3,
      titulo: "Motivación y estrategias para el aprendizaje autónomo",
      descripcionCapacidad: "Analizan reflexivamente acerca de las estrategias de aprendizaje andragógico en el foro de análisis, a partir de lecturas académicas.",
      sesiones: "Sesiones 5 y 6",
      reflexion: [
        "Esta semana analizamos por qué un estudiante adulto participa solo para obtener una nota. Desde nuestra propia experiencia como profesionales que trabajan mientras cursan el posgrado, reconocemos el desgaste que producen las jornadas extensas, las responsabilidades familiares y las tareas repetitivas. Con Maslow, Rogers, Bisquerra y la teoría de la autodeterminación de Ryan y Deci entendimos que la motivación intrínseca aparece cuando el adulto percibe utilidad y propósito, experimenta autonomía y competencia, y aprende en un clima de confianza que le permite equivocarse sin temor.",
        "Como estrategias para nuestras especialidades en ingeniería proponemos reemplazar los trabajos memorísticos por estudios de caso y proyectos aplicados a los centros laborales de los estudiantes; por ejemplo, que cada participante analice y mejore un proceso real de su organización, lo documente en un e-portafolio y reciba retroalimentación y coevaluación entre pares. Esta línea de trabajo se concreta en la sesión de aprendizaje sobre análisis y mejora de procesos y en el producto colaborativo del equipo."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-3" },
        {
          tipo: "practica",
          titulo: "Sesión de aprendizaje: Análisis y mejora de procesos",
          descripcion: "Sesión completa para Ingeniería Industrial y de Sistemas: análisis y mejora de procesos para optimizar la productividad organizacional.",
          pdf: "docs/semana-3/sesion-aprendizaje.pdf",
          word: "docs/semana-3/sesion-aprendizaje.docx"
        },
        {
          tipo: "colaborativo",
          titulo: "Tercer avance del producto colaborativo",
          descripcion: "Informe académico: El enfoque andragógico en la formación universitaria: fundamentos teóricos y estrategias de aplicación mediante TIC.",
          pdf: "docs/semana-3/tercer-avance.pdf",
          word: "docs/semana-3/tercer-avance.docx"
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 4 */
    {
      numero: 4,
      capacidad: 4,
      titulo: "Plan de Mejora con enfoque andragógico",
      descripcionCapacidad: "Diseñan una sesión de intervención del Plan de Mejora (taller) incorporando estrategias andragógicas efectivas centradas en los estudiantes.",
      sesiones: "Sesiones 7 y 8",
      enDesarrollo: true,
      reflexion: [
        "Esta semana está en desarrollo. Aquí se presentará el Plan de Mejora con enfoque andragógico y la entrega final del producto colaborativo."
      ],
      plan: [
        "Problema identificado",
        "Causas",
        "Metas",
        "Acciones",
        "Responsables",
        "Recursos",
        "Indicadores",
        "Seguimiento"
      ],
      evidencias: [
        {
          tipo: "practica",
          titulo: "Actividad de la semana 4",
          descripcion: "Por desarrollar.",
          pdf: null,
          word: null
        },
        {
          tipo: "colaborativo",
          titulo: "Cuarto avance del producto colaborativo",
          descripcion: "Informe académico final y Plan de Mejora.",
          pdf: null,
          word: null
        }
      ]
    }
  ],

  /* ======================================================== FOROS */
  foros: {
    "foro-1": {
      numero: 1,
      titulo: "Ética y autonomía en la educación de adultos",
      contexto: [
        "En muchos entornos laborales y universitarios, la capacitación de adultos sigue reproduciendo modelos tradicionales centrados en la transmisión de información, sin considerar la experiencia, autonomía y motivaciones del aprendiz.",
        "Sin embargo, como plantean Félix Adam y Lucila Vallejo Romo, el aprendizaje adulto requiere un enfoque horizontal, participativo y flexible, donde el facilitador reconozca que los adultos no aprenden para aprobar, sino para resolver problemas reales y desarrollarse integralmente.",
        "Este desafío se amplía cuando la formación implica dilemas éticos: ¿cómo guiar sin imponer?, ¿cómo formar en responsabilidad sin controlar el pensamiento del otro?"
      ],
      preguntas: [
        "¿Cómo puede la praxis andragógica fomentar la autonomía ética y el pensamiento crítico del adulto en procesos formativos laborales o académicos?"
      ],
      respuestas: {
        anthony: {
          fecha: "22 de octubre de 2026",
          parrafos: [
            "¡Hola a todos, profesora y compañeros!",
            "Considero que la praxis andragógica fomenta la autonomía ética y el pensamiento crítico cuando el facilitador (nosotros) deja de imponer conocimientos y, en su lugar, promueve el diálogo horizontal y el análisis de situaciones reales. A diferencia de la educación tradicional, los adultos no llegan al aula sin conocimientos previos; traen consigo sus experiencias y valores, que deben ser el motor principal de su aprendizaje.",
            "Para desarrollar este pensamiento crítico, considero que es clave conectar la formación con el día a día del estudiante. La ética no se enseña memorizando reglas, sino debatiendo dilemas reales que ocurren en el trabajo. Según De La Cruz Medina (2025), cuando el adulto analiza estos casos prácticos, puede confrontar sus propias decisiones y reflexionar profundamente sobre el impacto moral de sus acciones en la sociedad.",
            "Además, desde mi punto de vista, el facilitador debe asumir el rol de un guía o mediador, creando un ambiente de confianza y respeto mutuo. Como señalan Acosta-Leal et al. (2023), al establecer una relación horizontal se elimina el miedo a equivocarse o a ser juzgados con autoridad. Esto nos da la libertad necesaria para dudar, preguntar y construir nuestros propios criterios con verdadera responsabilidad.",
            "En conclusión, si aplicamos la andragogía de forma empática y participativa, logramos que el adulto no solo adquiera habilidades técnicas, sino que aprenda a tomar decisiones éticas por convicción propia y no por simple obligación. De esta manera, logramos formar personas y profesionales verdaderamente comprometidos con mejorar su entorno."
          ],
          referencias: ["acosta", "delacruz", "knowles2020"]
        },
        guadalupe: {
          fecha: "29 de octubre de 2026",
          parrafos: [
            "Considero que la andragogía ayuda a dejar atrás la enseñanza tradicional, porque reconoce que los adultos tienen experiencias, conocimientos y motivaciones que pueden aprovecharse para aprender mejor. Knowles, Holton y Swanson (2015), en su libro The Adult Learner, destacan que los adultos necesitan participar activamente y tener autonomía en su aprendizaje. Asimismo, Freire (1998), en Pedagogía de la autonomía, señala la importancia del diálogo, el respeto y la responsabilidad en la educación.",
            "Desde mi punto de vista, el facilitador no debe imponer sus ideas, sino orientar y escuchar a los participantes, creando espacios donde puedan compartir sus experiencias, expresar opiniones y tomar decisiones de manera responsable. Por ejemplo, en una capacitación laboral, si se presenta una situación que requiere tomar una decisión ética, el facilitador puede plantear preguntas para que los participantes analicen las posibles consecuencias y elijan la alternativa que consideren correcta.",
            "Por ello, considero que ser autónomo no significa hacer lo que uno quiera, sino aprender a tomar decisiones con responsabilidad y asumir sus consecuencias.",
            "En conclusión, una educación basada en el respeto, el diálogo y la reflexión permite que los adultos sean más independientes, críticos y responsables, tanto en su vida personal como en su entorno laboral y social."
          ],
          referencias: ["freire", "knowles2015"]
        }
      }
    },

    "foro-2": {
      numero: 2,
      titulo: "La andragogía y el modelo andragógico como fundamentos para la formación de personas adultas en contextos educativos contemporáneos",
      contexto: [
        "La educación de personas adultas enfrenta desafíos derivados de las transformaciones sociales, económicas, científicas y tecnológicas de la sociedad del conocimiento: globalización, digitalización, inteligencia artificial, formación continua y necesidad permanente de actualización profesional.",
        "El modelo andragógico, sustentado en los aportes de Malcolm Knowles, Adam, Lindeman y otros investigadores, plantea principios como la necesidad de conocer el propósito del aprendizaje, el aprovechamiento de las experiencias previas, la motivación intrínseca, la autonomía, el aprendizaje basado en problemas y la aplicación inmediata del conocimiento, y redefine al docente como facilitador, mediador y diseñador de experiencias significativas.",
        "Sin embargo, en muchas instituciones aún predominan las clases magistrales, las evaluaciones memorísticas y la escasa participación estudiantil, lo que obliga a analizar críticamente si responden a las necesidades de los estudiantes adultos."
      ],
      preguntas: [
        "¿Cuáles considera que son las principales ventajas y limitaciones de cada uno en la formación de estudiantes adultos?",
        "¿En qué medida las estrategias de enseñanza, las metodologías utilizadas por los docentes y los procesos de evaluación responden a los principios de la andragogía? Proponga acciones concretas e innovadoras que permitan fortalecer la aplicación del modelo andragógico para mejorar la calidad del aprendizaje de las personas adultas."
      ],
      respuestas: {
        anthony: {
          fecha: "23 de octubre de 2026",
          parrafos: [
            "Respecto a la primera pregunta sobre las ventajas y limitaciones de ambos modelos, creo que la ventaja de la pedagogía tradicional radica en su facilidad para organizar y estructurar contenidos en grupos masivos, pero su gran limitación es que nos ubica como sujetos pasivos; al respecto, Samayoa Juárez et al. (2023) señalan que este enfoque impone un conocimiento rígido y memorístico que ignora la experiencia del adulto. Por otro lado, opino que la ventaja principal del modelo andragógico es que valora nuestro recorrido profesional previo, aunque su limitación es la dificultad para adaptarnos a un ritmo de estudio independiente; en este sentido, Acosta-Leal et al. (2023) afirman que la andragogía sostiene que el adulto aprende desde su experiencia y motivación propia, lo que nos exige una mayor autorregulación y demanda que el docente pase de expositor a facilitador.",
            "En relación con la segunda pregunta sobre si las estrategias y evaluaciones actuales responden a la andragogía, considero que la enseñanza universitaria actual responde solo a medias, pues aún estamos muy atados a exámenes teóricos; como menciona Samayoa Juárez et al. (2023), en las aulas todavía predominan las clases magistrales y las evaluaciones memorísticas desconectadas del contexto laboral real. Frente a esta situación, mi propuesta de mejora es trabajar en proyectos reales del entorno utilizando herramientas de inteligencia artificial y aplicar evaluaciones prácticas; esto coincide con lo planteado por Samayoa Juárez et al. (2023) sobre la socioformación basada en proyectos reales para resolver problemas de la comunidad, así como con Acosta-Leal et al. (2023), quienes plantean medir el saber ser, hacer y conocer mediante portafolios y autoevaluaciones que refuercen nuestra autorregulación."
          ],
          referencias: ["acosta", "samayoa"]
        },
        guadalupe: {
          fecha: "2 de noviembre de 2026",
          parrafos: [
            "Respecto a la primera pregunta, considero que la principal ventaja de la andragogía y del modelo andragógico es que reconocen al adulto como protagonista de su aprendizaje, valorando sus experiencias previas y promoviendo la autonomía, el pensamiento crítico y la aplicación de conocimientos en situaciones reales. Acosta-Leal et al. (2023) destacan la importancia de las experiencias y la autorregulación en el aprendizaje adulto. Sin embargo, una limitación es que no todos los estudiantes tienen las mismas condiciones, competencias o disponibilidad de tiempo para aprender autónomamente. Por ello, es necesario aplicar este enfoque con flexibilidad, considerando las necesidades y características individuales.",
            "Según la segunda pregunta, considero que las prácticas educativas responden parcialmente a los principios andragógicos, porque todavía predominan clases expositivas y evaluaciones memorísticas que limitan la participación del estudiante. Para fortalecer este modelo, propongo implementar el aprendizaje basado en problemas, proyectos relacionados con experiencias laborales, trabajo colaborativo, herramientas digitales e inteligencia artificial, así como evaluaciones formativas mediante autoevaluación y coevaluación. Estas estrategias favorecen la autonomía y la participación activa, en concordancia con Zainuddin et al. (2024), quienes resaltan la importancia del aprendizaje independiente y el intercambio de experiencias. Así, el docente debe asumir el papel de facilitador y promotor de aprendizajes significativos aplicables a la vida profesional y social."
          ],
          referencias: ["acosta", "zainuddin"]
        }
      }
    },

    "foro-3": {
      numero: 3,
      titulo: "La motivación auténtica: estrategias para promover el aprendizaje autónomo en el estudiante adulto",
      contexto: [
        "En una Escuela de Posgrado, profesionales adultos de distintas áreas combinan sus estudios con jornadas laborales extensas y responsabilidades familiares. Tras unas semanas con expectativas elevadas, los docentes observan una disminución progresiva de la participación: cámaras apagadas, respuestas breves en los foros orientadas a la calificación y trabajos colaborativos divididos solo para cumplir.",
        "Algunos docentes proponen más puntos e incentivos; otros advierten que las recompensas externas no generan un compromiso auténtico y sostenido, y proponen analizar la motivación intrínseca y extrínseca desde los aportes de Maslow, Rogers y Bisquerra, junto con estrategias como estudios de casos, proyectos aplicados, autoevaluación, coevaluación y recursos digitales que favorezcan la interacción y la autorregulación."
      ],
      preguntas: [
        "¿Qué factores explicarían que un estudiante adulto participe únicamente para obtener una calificación o cumplir con una exigencia académica, y qué acciones concretas podría desarrollar el docente para favorecer el tránsito desde una motivación predominantemente extrínseca hacia una motivación más intrínseca y vinculada con su desarrollo personal y profesional?"
      ],
      respuestas: {
        anthony: {
          fecha: "25 de octubre de 2026",
          parrafos: [
            "Que un estudiante adulto participe solo para aprobar se explica por el desgaste de combinar el trabajo con los estudios y por metodologías desconectadas de su realidad diaria (Ardila García, 2023). En mi experiencia trabajando en desarrollo de sistemas mientras curso el posgrado, cuando llegas agotado de tu jornada y encuentras tareas repetitivas, entras en “modo ahorro” y cumples solo por la nota. Como señala Knowles (citado en Contreras y Flórez Villamizar, 2025), el adulto necesita saber para qué le sirve lo que estudia y orienta su aprendizaje a resolver problemas reales. Si la clase no aporta esa utilidad práctica, predomina la motivación extrínseca (estudiar solo por el título o la calificación) y el miedo a equivocarse frente a otros colegas (Ardila García, 2023), alejándonos de metas personales como la autorrealización (Maslow, 1943).",
            "Para lograr el tránsito hacia una motivación intrínseca, el docente debe actuar como un guía en un ambiente horizontal y de confianza entre pares (Cadamuro, citado en Contreras y Flórez Villamizar, 2025). Una acción concreta es reemplazar los trabajos memorísticos por estudios de casos o proyectos aplicados a nuestros propios centros laborales, permitiéndonos comprobar el valor real de cada tema (Ardila García, 2023)."
          ],
          referencias: ["ardila", "contreras", "maslow"]
        },
        guadalupe: {
          fecha: "14 de noviembre de 2026",
          parrafos: [
            "Considero que uno de los factores que explica que los estudiantes adultos participen únicamente para obtener una calificación es que, muchas veces, perciben las actividades académicas como una obligación y no como una oportunidad para aprender. Esto puede relacionarse con las jornadas laborales extensas, las responsabilidades familiares, el cansancio y la falta de tiempo para dedicar a sus estudios. Asimismo, cuando las actividades son repetitivas y no se relacionan con sus experiencias profesionales, disminuye su interés y compromiso.",
            "Al respecto, Ryan y Deci (2020) señalan que la motivación intrínseca se fortalece cuando las personas experimentan autonomía, competencia y vinculación con los demás. Por su parte, Maslow (1943) explica que las necesidades humanas influyen en la motivación y en la búsqueda de autorrealización; mientras que Rogers (1969) destaca la importancia de relacionar el aprendizaje con las experiencias y necesidades personales. Asimismo, Bisquerra (2003) resalta la importancia de las competencias emocionales para el desarrollo integral.",
            "Frente a esta situación, considero que el docente debe promover estrategias que permitan al estudiante encontrar utilidad en lo que aprende, como estudios de casos relacionados con problemas reales de sus centros laborales, proyectos aplicados, debates y trabajos colaborativos donde puedan compartir sus experiencias y proponer soluciones. También debe brindar autonomía para elegir temas de interés, utilizar herramientas tecnológicas como foros y e-portafolios para favorecer la interacción y ofrecer retroalimentación que valore sus avances, no solamente la calificación obtenida. Finalmente, es importante generar un ambiente de confianza y respeto, considerando que cada estudiante tiene diferentes responsabilidades y necesidades.",
            "Desde mi punto de vista, el verdadero propósito de la educación de adultos no debe ser conseguir que participen únicamente por una recompensa, sino lograr que comprendan que aprender les permite fortalecer sus capacidades, resolver problemas de su entorno y crecer tanto personal como profesionalmente."
          ],
          referencias: ["bisquerra", "maslow", "rogers", "ryan"]
        }
      }
    }
  },

  /* ======================================================== CONCLUSIONES */
  conclusiones: [
    {
      titulo: "El adulto aprende desde su experiencia",
      texto: "La experiencia previa del estudiante adulto es la materia prima del aprendizaje. Cuando el diseño formativo la ignora, como en los casos analizados en la Práctica 1, aparecen la desmotivación y la resistencia; cuando se convierte en recurso, el aprendizaje se vuelve colectivo y transferible a la práctica profesional."
    },
    {
      titulo: "Del expositor al facilitador",
      texto: "El modelo andragógico exige que el docente deje de ser el único poseedor del conocimiento y asuma el rol de facilitador y mediador. Un clima horizontal, de diálogo y de confianza permite dudar, debatir y construir criterios propios, lo que fortalece tanto el pensamiento crítico como la autonomía ética y responsable."
    },
    {
      titulo: "La motivación nace del propósito",
      texto: "Los incentivos externos generan cumplimiento, pero no compromiso. La motivación intrínseca surge cuando el adulto entiende para qué aprende, experimenta autonomía y competencia, y comprueba la utilidad de lo aprendido en su trabajo; por eso los estudios de casos y los proyectos aplicados son más eficaces que las tareas repetitivas o memorísticas."
    },
    {
      titulo: "Un compromiso con nuestra práctica docente",
      texto: "Como profesionales de la ingeniería y futuros docentes universitarios, asumimos el reto de diseñar experiencias de aprendizaje basadas en problemas reales, mediadas por la tecnología y la inteligencia artificial, y evaluadas con portafolios, autoevaluación y coevaluación que promuevan la autorregulación de nuestros estudiantes."
    }
  ],

  /* ======================================================== REFERENCIAS (APA 7) */
  referencias: {
    acosta: {
      texto: "Acosta-Leal, D. A., Acuña Gil, M., Cuesta Montañez, J. C., y Ponce Martínez, E. H. (2023). <em>La andragogía como teoría mediadora del aprendizaje: Guía para docentes</em>. Corporación Universitaria Minuto de Dios - UNIMINUTO.",
      url: "https://doi.org/10.26620/uniminuto/978-958-763-606-2"
    },
    ardila: {
      texto: "Ardila García, A. K. (2023). La motivación en contextos educativos andragógicos. <em>Gaceta Pedagogía y Educación</em>, 138–141.",
      url: null
    },
    bisquerra: {
      texto: "Bisquerra Alzina, R. (2003). Educación emocional y competencias básicas para la vida. <em>Revista de Investigación Educativa, 21</em>(1), 7–43.",
      url: null
    },
    contreras: {
      texto: "Contreras, I. A., y Flórez Villamizar, I. (2025). La andragogía: una acción pedagógica desde la cotidianidad como complemento de la formación docente. <em>Línea Imaginaria, 1</em>(23), 297–320.",
      url: "https://doi.org/10.56219/lineaimaginaria.v1i23.4985"
    },
    delacruz: {
      texto: "De La Cruz Medina, S. (2025). Transformando la educación superior: Implementación de modelos andragógicos en instituciones de educación superior. <em>LATAM Revista Latinoamericana de Ciencias Sociales y Humanidades, 6</em>(2), 1951–1960.",
      url: "https://doi.org/10.56712/latam.v6i2.3741"
    },
    freire: {
      texto: "Freire, P. (1998). <em>Pedagogía de la autonomía: Saberes necesarios para la práctica educativa</em>. Siglo XXI Editores.",
      url: null
    },
    knowles2015: {
      texto: "Knowles, M. S., Holton III, E. F., y Swanson, R. A. (2015). <em>The adult learner: The definitive classic in adult education and human resource development</em> (8.ª ed.). Routledge.",
      url: null
    },
    knowles2020: {
      texto: "Knowles, M. S., Holton III, E. F., y Swanson, R. A. (2020). <em>La educación de adultos: Andragogía y desarrollo de talentos</em> (8.ª ed.). Paidós.",
      url: null
    },
    kolb: {
      texto: "Kolb, D. A. (1984). <em>Experiential learning: Experience as the source of learning and development</em>. Prentice Hall.",
      url: null
    },
    maslow: {
      texto: "Maslow, A. H. (1943). A theory of human motivation. <em>Psychological Review, 50</em>(4), 370–396.",
      url: "https://doi.org/10.1037/h0054346"
    },
    rogers: {
      texto: "Rogers, C. R. (1969). <em>Freedom to learn</em>. Charles E. Merrill Publishing Company.",
      url: null
    },
    ryan: {
      texto: "Ryan, R. M., y Deci, E. L. (2020). Intrinsic and extrinsic motivation from a self-determination theory perspective: Definitions, theory, practices, and future directions. <em>Contemporary Educational Psychology, 61</em>, Artículo 101860.",
      url: "https://doi.org/10.1016/j.cedpsych.2020.101860"
    },
    samayoa: {
      texto: "Samayoa Juárez de Conde, S. M., Solís Veliz, K. I., y Escobar Orozco, L. C. (2023). La andragogía con enfoque socioformativo como modelo educativo. <em>Revista Académica CUNZAC, 6</em>(1), 66–77.",
      url: "https://doi.org/10.46780/cunzac.v6i1.100"
    },
    zainuddin: {
      texto: "Zainuddin, Z., Chu, S. K. W., y Othman, J. (2024). The evaluation of gamification implementation for adult learners: A scale development study based on andragogical principles. <em>Education and Information Technologies, 29</em>(14), 18591–18620.",
      url: "https://doi.org/10.1007/s10639-024-12561-x"
    }
  }
};
