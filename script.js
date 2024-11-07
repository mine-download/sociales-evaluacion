// Preguntas y respuestas
const questions = [
    {
        question: "¿Cuál fue uno de los principales sustentos del imperio español en América?",
        options: ["El cultivo de maíz", "La extracción de plata", "La ganadería extensiva", "El comercio de esclavos"],
        answer: 1
    },
    {
        question: "¿Qué sistema obligaba a los indígenas a trabajar bajo administración española?",
        options: ["La encomienda", "El feudalismo", "La mita", "El mestizaje"],
        answer: 0
    },
    {
        question: "¿Qué orden religiosa tuvo un papel destacado en la conversión de indígenas?",
        options: ["Los franciscanos", "Los benedictinos", "Los cistercienses", "Los salesianos"],
        answer: 0
    },
    {
        question: "¿Cómo se justificaba la conquista de los territorios indígenas?",
        options: ["Por la superioridad racial", "Por derecho divino y evangelización", "Por acuerdos pacíficos", "Por alianzas entre imperios"],
        answer: 1
    },
    {
        question: "¿Qué recurso natural fue fundamental para la economía colonial?",
        options: ["Oro", "Cobre", "Plata", "Hierro"],
        answer: 2
    },
    {
        question: "¿Qué ciudad fue conocida por su riqueza en minas de plata?",
        options: ["Potosí", "Tenochtitlan", "Cuzco", "Quito"],
        answer: 0
    },
    {
        question: "¿Qué sistema de transporte usaba España para proteger la plata?",
        options: ["Trenes", "Flotas protegidas", "Caravanas", "Carretas"],
        answer: 1
    },
    {
        question: "¿Quiénes implementaron las leyes españolas en las colonias?",
        options: ["Los soldados", "Los letrados", "Los agricultores", "Los mercaderes"],
        answer: 1
    },
    {
        question: "¿Qué papel tenían los soldados en las colonias?",
        options: ["Misioneros", "Encargados de justicia", "Educadores", "Mantenían el orden y protegían el territorio"],
        answer: 3
    },
    {
        question: "¿Cómo afectó la religión a los indígenas?",
        options: ["Fusión completa", "Rechazo absoluto", "Impacto limitado con resistencias culturales", "Conversión total"],
        answer: 2
    },
    {
        question: "¿Qué relación tenían la guerra y el comercio en el imperio?",
        options: ["Eran completamente independientes", "Marchaban juntos en las últimas cruzadas", "Se enfrentaban constantemente", "No tenían ninguna relación"],
        answer: 1
    },
    {
        question: "¿Por qué se utilizaba la teoría de la monarquía universal?",
        options: ["Para fortalecer alianzas", "Para justificar la conquista y dominación", "Para promover el comercio", "Para unir las órdenes religiosas"],
        answer: 1
    },
    {
        question: "¿Qué aspecto cultural limitó la conversión religiosa de los indígenas?",
        options: ["Resistencias culturales", "Avances tecnológicos", "Escasez de misioneros", "Falta de apoyo económico"],
        answer: 0
    },
    {
        question: "¿Qué motivó el establecimiento de la encomienda?",
        options: ["Necesidad de evangelización", "Obligación de los indígenas a trabajar", "Intercambio comercial", "Desarrollo de la agricultura"],
        answer: 1
    },
    {
        question: "¿Qué justificación daban los españoles para colonizar América?",
        options: ["Evangelización de los pueblos indígenas", "Intercambio cultural", "Búsqueda de oro", "Ninguna de las anteriores"],
        answer: 0
    },
    {
        question: "¿Cómo se aseguraba la plata en el transporte a España?",
        options: ["A través de acuerdos con piratas", "Mediante flotas escoltadas", "Por caminos terrestres", "Por rutas subterráneas"],
        answer: 1
    },
    {
        question: "¿Qué era la encomienda?",
        options: ["Un acuerdo comercial", "Un sistema de trabajo obligatorio", "Una orden religiosa", "Un tipo de gobierno local"],
        answer: 1
    },
    {
        question: "¿Qué justificaba la expansión del imperio español en América?",
        options: ["La ideología de la cristiandad", "El poder militar de los indígenas", "El apoyo de otros imperios", "La superioridad económica"],
        answer: 0
    },
    {
        question: "¿Qué impacto tuvo la extracción de plata en la economía global?",
        options: ["Solo benefició a España", "Financió operaciones en Asia", "Benefició únicamente a América", "No tuvo impacto global"],
        answer: 1
    },
    {
        question: "¿Qué grupo administraba las leyes coloniales en América?",
        options: ["Los comerciantes", "Los soldados", "Los letrados", "Los indígenas"],
        answer: 2
    }
    // ... Añade aquí el resto de las preguntas
];

// Función para mezclar un array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para cargar preguntas aleatorias
function loadQuestions() {
    const questionsContainer = document.getElementById('questions-container');
    shuffleArray(questions);  // Aleatorizar las preguntas
    questionsContainer.innerHTML = '';
    questions.slice(0, 20).forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-container';
        questionDiv.innerHTML = `
            <p>${index + 1}. ${q.question}</p>
            ${q.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label><br>
            `).join('')}
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

// Función para calcular el puntaje y mostrar retroalimentación
function calculateScore() {
    let score = 0;
    let feedback = '';
    questions.slice(0, 20).forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        const isCorrect = selectedOption && parseInt(selectedOption.value) === q.answer;

        if (isCorrect) {
            score++;
            feedback += `<p style="color: green;">Pregunta ${index + 1}: Correcto</p>`;
        } else {
            const correctAnswer = q.options[q.answer];
            feedback += `<p style="color: red;">Pregunta ${index + 1}: Incorrecto. Respuesta correcta: ${correctAnswer}</p>`;
        }
    });

    const finalScore = (score / 20 * 4.9 + 0.1).toFixed(1);
    document.getElementById('result').innerHTML = `Tu puntuación es: ${finalScore}`;
    document.getElementById('feedback').innerHTML = feedback;
}

// Cargar preguntas al iniciar
window.onload = loadQuestions;
