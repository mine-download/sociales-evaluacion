const questions = [
    {
        question: "¿Quién fue el creador del baloncesto?",
        options: ["Michael Jordan", "James Naismith", "Kobe Bryant"],
        correctAnswer: 1
    },
    {
        question: "¿En qué año se fundó el baloncesto?",
        options: ["1891", "1901", "1921"],
        correctAnswer: 0
    },
    {
        question: "¿Qué es driblar en el baloncesto?",
        options: ["Correr sin la pelota", "Rebotar el balón continuamente mientras te desplazas", "Saltar en defensa"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la posición básica en el baloncesto?",
        options: ["Sentado en la banca", "Cuerpo en equilibrio y flexionado", "En la línea de 3 puntos"],
        correctAnswer: 1
    },
    {
        question: "¿Cuál es la medida de una cancha de baloncesto reglamentaria?",
        options: ["28 metros de largo por 15 de ancho", "30 metros de largo por 20 de ancho", "25 metros de largo por 12 de ancho"],
        correctAnswer: 0
    }
];

const questionsContainer = document.getElementById("questionsContainer");

questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionText = document.createElement("p");
    questionText.textContent = `${index + 1}. ${q.question}`;
    questionDiv.appendChild(questionText);

    q.options.forEach((option, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `question${index}`;
        input.value = i;
        label.appendChild(input);
        label.append(option);
        questionDiv.appendChild(label);
        questionDiv.appendChild(document.createElement("br"));
    });

    questionsContainer.appendChild(questionDiv);
});

function evaluateQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.correctAnswer) {
            score += 1;
        }
    });

    const grade = ((score / questions.length) * 4.9 + 0.1).toFixed(1);
    document.getElementById("result").textContent = `Tu calificación es: ${grade}`;
}
