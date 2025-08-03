export const questions = [
  {
    id: 1,
    question: "¿Qué significan las siglas IA?",
    options: ["Información Automática", "Internet Avanzada", "Inteligencia Artificial"],
    correctAnswer: "Inteligencia Artificial",
    type: 'multiple-choice'
  },
  {
    id: 2,
    question: "¿Cuál de estas apps está basada completamente en IA?",
    options: ["WhatsApp", "Instagram", "ChatGPT"],
    correctAnswer: "ChatGPT",
    type: 'multiple-choice'
  },
  {
    id: 3,
    question: "¿Cuál de estas apps incluye funciones de IA?",
    options: ["TikTok", "Canva", "Spotify"],
    correctAnswer: "Canva",
    type: 'multiple-choice'
  },
  {
    id: 4,
    question: "¿Qué son los GPTs personalizados en ChatGPT?",
    options: ["Robots de cocina", "Programas para videojuegos", "Asistentes de IA que puedes personalizar para automatizar tareas"],
    correctAnswer: "Asistentes de IA que puedes personalizar para automatizar tareas",
    type: 'multiple-choice'
  },
  {
    id: 5,
    question: "¿Para qué sirve NotebookLM?",
    options: ["Para ver películas", "Para organizar, resumir y entender documentos con IA", "Para escribir canciones"],
    correctAnswer: "Para organizar, resumir y entender documentos con IA",
    type: 'multiple-choice'
  },
  {
    id: 6,
    question: "¿Cuáles son las partes de un prompt bien hecho?",
    options: ["Entrada – Salida – Pregunta", "Objetivo – Formato de salida – Contexto", "Texto – Resultado – Idioma"],
    correctAnswer: "Objetivo – Formato de salida – Contexto",
    type: 'multiple-choice'
  },
  {
    id: 7,
    question: "¿Es mejor usar frases afirmativas en mis prompts?",
    options: ["Sí, son más claras y efectivas", "No, las frases negativas son mejores", "Solo si la IA lo pide"],
    correctAnswer: "Sí, son más claras y efectivas",
    type: 'multiple-choice'
  },
  {
    id: 8,
    question: "Completa la frase con la palabra correcta: “Con inteligencia artificial, ahora puedes ___ imágenes, música o texto.”",
    options: ["borrar", "imprimir", "crear"],
    correctAnswer: "crear",
    type: 'multiple-choice'
  },
  {
    id: 9,
    question: "¿Qué es un 'prompt' en inteligencia artificial?",
    options: [
        "Un tipo de comida saludable",
        "Una instrucción o pregunta que das a la IA para que te ayude",
        "Una red social de moda"
    ],
    correctAnswer: "Una instrucción o pregunta que das a la IA para que te ayude",
    type: 'multiple-choice'
  },
  {
    id: 10,
    question: "¿Para qué podrías usar ChatGPT como profesora?",
    options: [
        "Para planear clases, generar ideas y resolver dudas",
        "Para jugar videojuegos",
        "Para hacer llamadas"
    ],
    correctAnswer: "Para planear clases, generar ideas y resolver dudas",
    type: 'multiple-choice'
  },
  {
    id: 11,
    question: "Si necesitas entender rápidamente un PDF de 50 páginas, ¿qué estrategia de IA es más útil?",
    options: [
        "Usar frases afirmativas en un prompt",
        "Automatizar la tarea con un GPT personalizado",
        "Usar NotebookLM para resumir el documento"
    ],
    correctAnswer: "Usar NotebookLM para resumir el documento",
    type: 'multiple-choice'
  }
];

export const fairies = [
  { level: 1, name: 'Bebé Hada', xpThreshold: 0, imageUrl: 'https://placehold.co/128x128.png', dataAiHint: 'sprout fairy' },
  { level: 2, name: 'Hada Pícara', xpThreshold: 200, imageUrl: 'https://placehold.co/128x128.png', dataAiHint: 'playful fairy' },
  { level: 3, name: 'Hada Guardiana', xpThreshold: 500, imageUrl: 'https://placehold.co/128x128.png', dataAiHint: 'guardian fairy' },
  { level: 4, name: 'Hada Reina', xpThreshold: 1000, imageUrl: 'https://placehold.co/128x128.png', dataAiHint: 'queen fairy' }
];

export const personalityFairies = [
    { name: 'Desesperada', description: "Tu lema es '¡tierra, trágame!'. Cuando algo sale mal, sientes que el universo conspira en tu contra. Buscas soluciones rápidas y a veces un pañuelo para secar tus lágrimas. ¡No te preocupes! Hasta las hadas más mágicas tienen sus días de drama.", imageUrl: 'https://i.postimg.cc/3ywRMrNC/desesperada.png', dataAiHint: 'desperate fairy' },
    { name: 'Frustrada', description: "Eres como una bebida gaseosa agitada: llena de energía, pero a punto de explotar. Lo intentas una y otra vez, pero los obstáculos te persiguen. Tu superpoder es la perseverancia... y quizás un poquito de terquedad.", imageUrl: 'https://i.postimg.cc/NKBF4kwn/frustrada.png', dataAiHint: 'frustrated fairy' },
    { name: 'Complicada', description: "Si la vida fuera un manual, tú estarías leyendo la letra pequeña con lupa. Analizas cada detalle hasta que tus pensamientos parecen un nudo de audífonos. ¿Simplificar? ¡Eso es para mortales! Tú prefieres un buen laberinto mental.", imageUrl: 'https://i.postimg.cc/crQ6w5PY/Complicada.png', dataAiHint: 'complicated fairy' },
    { name: 'Motivada', description: "Eres un rayo de sol con cafeína. Tu energía es contagiosa y siempre estás lista para un nuevo reto, incluso los lunes. Ves oportunidades donde otros ven problemas y tu agenda está llena de sueños por cumplir (y post-its de colores).", imageUrl: 'https://i.postimg.cc/18BtYVm3/motivada.png', dataAiHint: 'motivated fairy' },
    { name: 'Despistada', description: "Vives en tu propio mundo mágico, donde las llaves juegan a las escondidas y las fechas importantes son solo sugerencias. Tienes un corazón de oro y las mejores intenciones, pero a veces necesitas un mapa para encontrar tus propias ideas.", imageUrl: 'https://i.postimg.cc/nswLn8Q8/despistada.png', dataAiHint: 'clueless fairy' },
];

export const resultFairies = {
  'Hada Desconectada': {
    name: 'Hada Desconectada',
    description: "No logras entender lo que pasó. Te pierdes en las ideas, sonidos, pensamientos... Quizás hoy no fue tu día, y está bien. A veces todo se mezcla y cuesta concentrarse. No estás sola: todos hemos estado ahí. Tu frase típica sería: “¿Había que responder algo?” y tu objetivo ahora es reconectar poco a poco. Respira, toma tu tiempo, y dale una nueva oportunidad a tu mente. No necesitas hacerlo perfecto, solo volver a intentarlo.\n\n¿Qué hace una neurona en huelga? Nada, está desconectada como yo hoy.",
    imageUrl: 'https://i.postimg.cc/8fTkHT26/DESCONECTADA.png',
    dataAiHint: 'disconnected fairy',
  },
  'Hada Embolatada': {
    name: 'Hada Embolatada',
    description: "Lo intentaste con ganas, pero te enredaste. Algunas respuestas salieron bien, otras no tanto, y al final sentiste que estabas girando sin saber por dónde seguir. Tranquila, vas en camino, solo falta ordenar ese torbellino de ideas. Tu frase típica sería: “¡Ay! Eso lo sabía… pero se me fue.” Tu objetivo ahora es ponerle orden al caos. Aprende a ir paso a paso, con calma y claridad. Estás más cerca de lo que crees de entenderlo todo.\n\n¿Cuál es mi superpoder? Convertir cualquier tema en un enredo espectacular.",
    imageUrl: 'https://i.postimg.cc/RJGSpjmb/EMBOLATADA.png',
    dataAiHint: 'confused fairy',
  },
  'Hada Iluminada': {
    name: 'Hada Iluminada',
    description: "¡Lo entendiste todo! Hoy estuviste enfocada, atenta, conectada. Sentiste que todo tenía sentido y que podías incluso explicarlo. Esa sensación de claridad es poderosa y te pertenece. Tu frase típica sería: “¡Lo entendí! ¡Y puedo contártelo!” y tu objetivo ahora es seguir aprendiendo, compartir lo que sabes y ayudar a otras hadas que aún están enredadas. Tú ya tienes la luz, ahora puedes usarla.\n\n¿Por qué el hada iluminada no usa linterna? Porque ya brilla con sabiduría propia.",
    imageUrl: 'https://i.postimg.cc/phfXzm6v/ILUMINADA.png',
    dataAiHint: 'enlightened fairy',
  },
};

export const personalityQuestions = [
  {
    question: "¿Qué haces cuando no te sonó la alarma y vas tarde al trabajo?",
    answers: [
      { text: "Llego tarde y no doy explicaciones.", fairy: "Frustrada" },
      { text: "No me baño para no llegar tan tarde.", fairy: "Desesperada" },
      { text: "Respiro hondo y llamo a Lili para decirle la verdad.", fairy: "Motivada" },
      { text: "Le mando un mensaje a Lili diciendo que amanecí enferma, pero ya voy para el trabajo. ¡Primero el trabajo que mi salud!", fairy: "Complicada" },
    ],
  },
  {
    question: "¿Qué haces si un niño te derrama jugo en la ropa en plena clase?",
    answers: [
      { text: "Pido una toallita con calma, pero por dentro lloro.", fairy: "Complicada" },
      { text: "Me voy al baño a respirar 2 minutos.", fairy: "Frustrada" },
      { text: "Digo: “¡Ay, no importa!” y sigo como si nada.", fairy: "Despistada" },
      { text: "Aprovecho para explicar una lección sobre accidentes.", fairy: "Motivada" },
    ],
  },
  {
    question: "¿Cómo es tu escritorio al final del día?",
    answers: [
      { text: "Un campo de batalla con papeles por todas partes.", fairy: "Desesperada" },
      { text: "Ordenado, pero con una pila de cosas “para mañana”.", fairy: "Frustrada" },
      { text: "Impecable. Me gusta dejarlo listo para el día siguiente.", fairy: "Complicada" },
      { text: "Ni me acuerdo… salí corriendo.", fairy: "Despistada" },
    ],
  },
    {
    question: "¿Qué almuerzo prefieres un lunes?",
    answers: [
      { text: "Grandma's Kitchen.", fairy: "Desesperada" },
      { text: "International Kitchen.", fairy: "Despistada" },
      { text: "Fitness Kitchen.", fairy: "Motivada" },
      { text: "Traer de la casa", fairy: "Complicada" },
    ],
  },
  {
    question: "¿Qué haces cuando suena el timbre y aún no has terminado de explicar?",
    answers: [
      { text: "Me frustro y trato de hacerlo todo rápido.", fairy: "Frustrada" },
      { text: "Les digo que esperen un momentico más.", fairy: "Complicada" },
      { text: "Me río y les digo: “¡Continuamos después del recreo!”", fairy: "Despistada" },
      { text: "Improviso y logro cerrar con estilo.", fairy: "Motivada" },
    ],
  },
  {
    question: "¿Cuál sería tu papel en una obra de teatro escolar?",
    answers: [
      { text: "Olvido el guion pero sonrío igual.", fairy: "Despistada" },
      { text: "Soy la que organiza detrás del telón.", fairy: "Complicada" },
      { text: "Actúo con entusiasmo y disfruto cada línea.", fairy: "Motivada" },
      { text: "¡Yo escribo el guion y hago los vestuarios!", fairy: "Frustrada" },
    ],
  },
  {
    question: "¿Qué haces si olvidaste imprimir una actividad justo antes de clase?",
    answers: [
      { text: "Entro en modo pánico y busco un plan B.", fairy: "Desesperada" },
      { text: "Lo disimulo y me invento algo en el momento.", fairy: "Despistada" },
      { text: "Saco una actividad mágica de emergencia que siempre tengo guardada.", fairy: "Complicada" },
      { text: "Me río y digo: “Hoy haremos algo distinto”.", fairy: "Motivada" },
    ],
  },
  {
    question: "¿Cómo reaccionas cuando los niños hacen muchas preguntas seguidas?",
    answers: [
      { text: "Me bloqueo un poco pero intento responder.", fairy: "Desesperada" },
      { text: "Digo “esperen, uno por uno”.", fairy: "Frustrada" },
      { text: "los ignoro.", fairy: "Despistada" },
      { text: "Les digo que solo respondo preguntas después de la clase.", fairy: "Complicada" },
    ],
  },
  {
    question: "¿Qué haces si te dejan sola con otro grupo sin avisar?",
    answers: [
      { text: "Miro al cielo y digo “¡otra vez no!”.", fairy: "Frustrada" },
      { text: "Respiro y saco un cuento o juego improvisado.", fairy: "Desesperada" },
      { text: "Organizo algo con lo que ya tengo en el salón.", fairy: "Complicada" },
      { text: "Aprovecho para hacer una dinámica divertida.", fairy: "Motivada" },
    ],
  },
  {
    question: "¿Qué frase te representa más?",
    answers: [
      { text: "“¡Estoy sobreviviendo!”", fairy: "Desesperada" },
      { text: "“No sé cómo, pero siempre salgo adelante.”", fairy: "Frustrada" },
      { text: "“Amo lo que hago, incluso en el caos.”", fairy: "Motivada" },
      { text: "“¡Siempre hay espacio para aprender y jugar!”", fairy: "Despistada" },
    ],
  }
];
