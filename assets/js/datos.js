/* =========================================================================
   CONTENIDO DEL PORTAFOLIO
   -------------------------------------------------------------------------
   Para agregar un documento: copia el archivo a docs/semana-N/ y escribe su
   ruta en "pdf" (vista previa) y/o "word" (descarga). Si "pdf" y "word"
   están en null, la tarjeta aparece como "Pendiente".
   ========================================================================= */

window.PORTAFOLIO = {
  semanas: [
    /* ------------------------------------------------------------ SEMANA 1 */
    {
      numero: 1,
      capacidad: 1,
      titulo: "Fundamentos de la educación de adultos",
      reflexion: [
        "En esta primera semana comprendí que el adulto no llega al aula “vacío”: trae experiencias, valores y motivaciones que deben convertirse en el punto de partida del aprendizaje. Los aportes de Félix Adam sobre la horizontalidad y la participación, y los principios de Knowles (necesidad de saber, autoconcepto, experiencia previa, disposición, orientación a problemas y motivación interna) me permitieron leer críticamente los casos de la Práctica 1.",
        "Al analizar la capacitación obligatoria que nadie quería, al director que rechazaba aprender o al docente que seguía enseñando como instructor, identifiqué que el problema rara vez está en el participante, sino en un diseño que ignora su autonomía y la utilidad inmediata de lo que aprende. Desde el foro, además, relacioné estos fundamentos con la dimensión ética: el facilitador forma en responsabilidad cuando guía sin imponer y abre espacios de diálogo horizontal."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-1" },
        {
          tipo: "practica",
          titulo: "Práctica 1 · Análisis de casos andragógicos",
          descripcion: "Análisis de cinco casos (1, 2, 4, 5 y 7) desde los principios de Knowles y el aprendizaje experiencial de Kolb, con propuestas de solución.",
          pdf: "docs/semana-1/practica-1.pdf",
          word: "docs/semana-1/practica-1.docx"
        },
        {
          tipo: "colaborativo",
          titulo: "1.ª entrega del producto colaborativo",
          descripcion: "Avance del informe académico elaborado en equipo.",
          pdf: null,
          word: null
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 2 */
    {
      numero: 2,
      capacidad: 2,
      titulo: "La andragogía y el modelo andragógico",
      reflexion: [
        "Contrastar la pedagogía tradicional con el modelo andragógico me ayudó a reconocer ventajas y límites de ambos. La enseñanza tradicional organiza bien los contenidos para grupos grandes, pero ubica al adulto como sujeto pasivo; el modelo andragógico, en cambio, valora la trayectoria profesional del estudiante, aunque le exige mayor autorregulación y obliga al docente a pasar de expositor a facilitador.",
        "Concluí que nuestras universidades responden solo a medias a los principios andragógicos, porque todavía predominan las clases magistrales y la evaluación memorística. Por eso propuse trabajar con proyectos reales del entorno, apoyados en herramientas de inteligencia artificial, y evaluar el saber ser, hacer y conocer mediante portafolios, autoevaluación y coevaluación (Acosta-Leal et al., 2023; Samayoa Juárez de Conde et al., 2023)."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-2" },
        {
          tipo: "practica",
          titulo: "Práctica 2",
          descripcion: "Resolución de casos aplicando los principios del modelo andragógico.",
          pdf: null,
          word: null
        },
        {
          tipo: "colaborativo",
          titulo: "2.ª entrega del producto colaborativo",
          descripcion: "Segundo avance del informe académico elaborado en equipo.",
          pdf: null,
          word: null
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 3 */
    {
      numero: 3,
      capacidad: 3,
      titulo: "Motivación y estrategias para el aprendizaje autónomo",
      reflexion: [
        "Esta semana analicé por qué un estudiante adulto participa solo para obtener una nota. Desde mi propia experiencia (trabajo en desarrollo de software mientras curso el posgrado) reconozco el “modo ahorro” que provocan el cansancio y las tareas repetitivas. Con Maslow, Rogers y Knowles entendí que la motivación intrínseca aparece cuando el adulto percibe utilidad, propósito y un clima de confianza que le permite equivocarse sin temor.",
        "Como estrategias para mi especialidad, Ingeniería de Sistemas, propongo reemplazar los trabajos memorísticos por estudios de caso y proyectos aplicados a los centros laborales de los estudiantes; por ejemplo, que cada participante resuelva un problema real de su organización con una pequeña solución tecnológica, documentada en un e-portafolio y valorada con coevaluación entre pares. Así se integran la evidencia del foro y la del producto colaborativo en una misma línea de trabajo."
      ],
      evidencias: [
        { tipo: "foro", foro: "foro-3" },
        {
          tipo: "practica",
          titulo: "Práctica 3",
          descripcion: "Análisis de estrategias para promover la motivación y la autonomía del adulto.",
          pdf: null,
          word: null
        },
        {
          tipo: "colaborativo",
          titulo: "3.ª entrega del producto colaborativo",
          descripcion: "Tercer avance del informe académico elaborado en equipo.",
          pdf: null,
          word: null
        }
      ]
    },

    /* ------------------------------------------------------------ SEMANA 4 */
    {
      numero: 4,
      capacidad: 4,
      titulo: "Plan de Mejora con enfoque andragógico",
      enDesarrollo: true,
      reflexion: [
        "Esta semana está en desarrollo. Aquí se presentará el Plan de Mejora con enfoque andragógico, junto con el foro, la práctica y la entrega final del producto colaborativo."
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
        { tipo: "foro", foro: null, titulo: "Foro 4" },
        {
          tipo: "practica",
          titulo: "Práctica 4",
          descripcion: "Por desarrollar.",
          pdf: null,
          word: null
        },
        {
          tipo: "colaborativo",
          titulo: "Entrega final del producto colaborativo",
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
      fecha: "22 de octubre de 2026",
      contexto: [
        "En muchos entornos laborales y universitarios, la capacitación de adultos sigue reproduciendo modelos tradicionales centrados en la transmisión de información, sin considerar la experiencia, autonomía y motivaciones del aprendiz.",
        "Sin embargo, como plantean Félix Adam y Lucila Vallejo Romo, el aprendizaje adulto requiere un enfoque horizontal, participativo y flexible, donde el facilitador reconozca que los adultos no aprenden para aprobar, sino para resolver problemas reales y desarrollarse integralmente.",
        "Este desafío se amplía cuando la formación implica dilemas éticos: ¿cómo guiar sin imponer?, ¿cómo formar en responsabilidad sin controlar el pensamiento del otro?"
      ],
      preguntas: [
        "¿Cómo puede la praxis andragógica fomentar la autonomía ética y el pensamiento crítico del adulto en procesos formativos laborales o académicos?"
      ],
      respuesta: [
        "¡Hola a todos, profesora y compañeros!",
        "Considero que la praxis andragógica fomenta la autonomía ética y el pensamiento crítico cuando el facilitador (nosotros) deja de imponer conocimientos y, en su lugar, promueve el diálogo horizontal y el análisis de situaciones reales. A diferencia de la educación tradicional, los adultos no llegan al aula sin conocimientos previos; traen consigo sus experiencias y valores, que deben ser el motor principal de su aprendizaje.",
        "Para desarrollar este pensamiento crítico, considero que es clave conectar la formación con el día a día del estudiante. La ética no se enseña memorizando reglas, sino debatiendo dilemas reales que ocurren en el trabajo. Según De La Cruz Medina (2025), cuando el adulto analiza estos casos prácticos, puede confrontar sus propias decisiones y reflexionar profundamente sobre el impacto moral de sus acciones en la sociedad.",
        "Además, desde mi punto de vista, el facilitador debe asumir el rol de un guía o mediador, creando un ambiente de confianza y respeto mutuo. Como señalan Acosta-Leal et al. (2023), al establecer una relación horizontal se elimina el miedo a equivocarse o a ser juzgados con autoridad. Esto nos da la libertad necesaria para dudar, preguntar y construir nuestros propios criterios con verdadera responsabilidad.",
        "En conclusión, si aplicamos la andragogía de forma empática y participativa, logramos que el adulto no solo adquiera habilidades técnicas, sino que aprenda a tomar decisiones éticas por convicción propia y no por simple obligación. De esta manera, logramos formar personas y profesionales verdaderamente comprometidos con mejorar su entorno."
      ],
      referencias: ["acosta", "delacruz", "knowles"]
    },

    "foro-2": {
      numero: 2,
      titulo: "La andragogía y el modelo andragógico como fundamentos para la formación de personas adultas en contextos educativos contemporáneos",
      fecha: "23 de octubre de 2026",
      contexto: [
        "La educación de personas adultas enfrenta desafíos derivados de las transformaciones sociales, económicas, científicas y tecnológicas de la sociedad del conocimiento: globalización, digitalización, inteligencia artificial, formación continua y necesidad permanente de actualización profesional.",
        "El modelo andragógico, sustentado en los aportes de Malcolm Knowles, Adam, Lindeman y otros investigadores, plantea principios como la necesidad de conocer el propósito del aprendizaje, el aprovechamiento de las experiencias previas, la motivación intrínseca, la autonomía, el aprendizaje basado en problemas y la aplicación inmediata del conocimiento, y redefine al docente como facilitador, mediador y diseñador de experiencias significativas.",
        "Sin embargo, en muchas instituciones aún predominan las clases magistrales, las evaluaciones memorísticas y la escasa participación estudiantil, lo que obliga a analizar críticamente si responden a las necesidades de los estudiantes adultos."
      ],
      preguntas: [
        "¿Cuáles considera que son las principales ventajas y limitaciones de cada uno en la formación de estudiantes adultos?",
        "¿En qué medida las estrategias de enseñanza, las metodologías utilizadas por los docentes y los procesos de evaluación responden a los principios de la andragogía? Proponga acciones concretas e innovadoras que permitan fortalecer la aplicación del modelo andragógico para mejorar la calidad del aprendizaje de las personas adultas."
      ],
      respuesta: [
        "Respecto a la primera pregunta sobre las ventajas y limitaciones de ambos modelos, creo que la ventaja de la pedagogía tradicional radica en su facilidad para organizar y estructurar contenidos en grupos masivos, pero su gran limitación es que nos ubica como sujetos pasivos; al respecto, Samayoa Juárez et al. (2023) señalan que este enfoque impone un conocimiento rígido y memorístico que ignora la experiencia del adulto. Por otro lado, opino que la ventaja principal del modelo andragógico es que valora nuestro recorrido profesional previo, aunque su limitación es la dificultad para adaptarnos a un ritmo de estudio independiente; en este sentido, Acosta-Leal et al. (2023) afirman que la andragogía sostiene que el adulto aprende desde su experiencia y motivación propia, lo que nos exige una mayor autorregulación y demanda que el docente pase de expositor a facilitador.",
        "En relación con la segunda pregunta sobre si las estrategias y evaluaciones actuales responden a la andragogía, considero que la enseñanza universitaria actual responde solo a medias, pues aún estamos muy atados a exámenes teóricos; como menciona Samayoa Juárez et al. (2023), en las aulas todavía predominan las clases magistrales y las evaluaciones memorísticas desconectadas del contexto laboral real. Frente a esta situación, mi propuesta de mejora es trabajar en proyectos reales del entorno utilizando herramientas de inteligencia artificial y aplicar evaluaciones prácticas; esto coincide con lo planteado por Samayoa Juárez et al. (2023) sobre la socioformación basada en proyectos reales para resolver problemas de la comunidad, así como con Acosta-Leal et al. (2023), quienes plantean medir el saber ser, hacer y conocer mediante portafolios y autoevaluaciones que refuercen nuestra autorregulación."
      ],
      referencias: ["acosta", "samayoa"]
    },

    "foro-3": {
      numero: 3,
      titulo: "La motivación auténtica: estrategias para promover el aprendizaje autónomo en el estudiante adulto",
      fecha: "25 de octubre de 2026",
      contexto: [
        "En una Escuela de Posgrado, profesionales adultos de distintas áreas combinan sus estudios con jornadas laborales extensas y responsabilidades familiares. Tras unas semanas con expectativas elevadas, los docentes observan una disminución progresiva de la participación: cámaras apagadas, respuestas breves en los foros orientadas a la calificación y trabajos colaborativos divididos solo para cumplir.",
        "Algunos docentes proponen más puntos e incentivos; otros advierten que las recompensas externas no generan un compromiso auténtico y sostenido, y proponen analizar la motivación intrínseca y extrínseca desde los aportes de Maslow, Rogers y Bisquerra, junto con estrategias como estudios de casos, proyectos aplicados, autoevaluación, coevaluación y recursos digitales que favorezcan la interacción y la autorregulación."
      ],
      preguntas: [
        "¿Qué factores explicarían que un estudiante adulto participe únicamente para obtener una calificación o cumplir con una exigencia académica, y qué acciones concretas podría desarrollar el docente para favorecer el tránsito desde una motivación predominantemente extrínseca hacia una motivación más intrínseca y vinculada con su desarrollo personal y profesional?"
      ],
      respuesta: [
        "Que un estudiante adulto participe solo para aprobar se explica por el desgaste de combinar el trabajo con los estudios y por metodologías desconectadas de su realidad diaria (Ardila García, 2023). En mi experiencia trabajando en desarrollo de sistemas mientras curso el posgrado, cuando llegas agotado de tu jornada y encuentras tareas repetitivas, entras en “modo ahorro” y cumples solo por la nota. Como señala Knowles (citado en Contreras y Flórez Villamizar, 2025), el adulto necesita saber para qué le sirve lo que estudia y orienta su aprendizaje a resolver problemas reales. Si la clase no aporta esa utilidad práctica, predomina la motivación extrínseca (estudiar solo por el título o la calificación) y el miedo a equivocarse frente a otros colegas (Ardila García, 2023), alejándonos de metas personales como la autorrealización (Maslow, 1943).",
        "Para lograr el tránsito hacia una motivación intrínseca, el docente debe actuar como un guía en un ambiente horizontal y de confianza entre pares (Cadamuro, citado en Contreras y Flórez Villamizar, 2025). Una acción concreta es reemplazar los trabajos memorísticos por estudios de casos o proyectos aplicados a nuestros propios centros laborales, permitiéndonos comprobar el valor real de cada tema (Ardila García, 2023)."
      ],
      referencias: ["ardila", "contreras", "maslow"]
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
      texto: "El modelo andragógico exige que el docente deje de ser el único poseedor del conocimiento y asuma el rol de facilitador y mediador. Un clima horizontal y de confianza permite dudar, debatir y construir criterios propios, lo que fortalece tanto el pensamiento crítico como la autonomía ética."
    },
    {
      titulo: "La motivación nace del propósito",
      texto: "Los incentivos externos generan cumplimiento, pero no compromiso. La motivación intrínseca surge cuando el adulto entiende para qué aprende y comprueba su utilidad en su trabajo; por eso los estudios de casos y los proyectos aplicados son más eficaces que las tareas repetitivas o memorísticas."
    },
    {
      titulo: "Un compromiso con mi práctica docente",
      texto: "Como ingeniero de sistemas y futuro docente universitario, asumo el reto de diseñar experiencias de aprendizaje basadas en problemas reales, mediadas por la tecnología y la inteligencia artificial, y evaluadas con portafolios, autoevaluación y coevaluación que promuevan la autorregulación de mis estudiantes."
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
    contreras: {
      texto: "Contreras, I. A., y Flórez Villamizar, I. (2025). La andragogía: una acción pedagógica desde la cotidianidad como complemento de la formación docente. <em>Línea Imaginaria, 1</em>(23), 297–320.",
      url: "https://doi.org/10.56219/lineaimaginaria.v1i23.4985"
    },
    delacruz: {
      texto: "De La Cruz Medina, S. (2025). Transformando la educación superior: Implementación de modelos andragógicos en instituciones de educación superior. <em>LATAM Revista Latinoamericana de Ciencias Sociales y Humanidades, 6</em>(2), 1951–1960.",
      url: "https://doi.org/10.56712/latam.v6i2.3741"
    },
    knowles: {
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
    samayoa: {
      texto: "Samayoa Juárez de Conde, S. M., Solís Veliz, K. I., y Escobar Orozco, L. C. (2023). La andragogía con enfoque socioformativo como modelo educativo. <em>Revista Académica CUNZAC, 6</em>(1), 66–77.",
      url: "https://doi.org/10.46780/cunzac.v6i1.100"
    }
  }
};
