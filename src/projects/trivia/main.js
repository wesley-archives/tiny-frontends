const quizData = [
    {
        question: "What is the name of our galaxy?",
        options: [
            { emoji: "🌌", text: "Milky Way", correct: true },
            { emoji: "🌠", text: "Andromeda" },
            { emoji: "🌍", text: "Earth's Loop" }
        ]
    },
    {
        question: "Which language is used to style websites?",
        options: [
            { emoji: "💅", text: "CSS", correct: true },
            { emoji: "🐍", text: "Python" },
            { emoji: "🔤", text: "HTML" }
        ]
    },
    {
        question: "Who created the theory of relativity?",
        options: [
            { emoji: "🧠", text: "Albert Einstein", correct: true },
            { emoji: "🌿", text: "Charles Darwin" },
            { emoji: "🍎", text: "Isaac Newton" }
        ]
    },
    {
        question: "Which of these is a pirate flag symbol?",
        options: [
            { emoji: "🏴‍☠️", text: "Skull and Crossbones", correct: true },
            { emoji: "⚓", text: "Anchor" },
            { emoji: "🚩", text: "Red Flag" }
        ]
    },
    {
        question: "What does 'CPU' stand for?",
        options: [
            { emoji: "🧠", text: "Central Processing Unit", correct: true },
            { emoji: "🔋", text: "Computer Power Unit" },
            { emoji: "🧰", text: "Control Panel Utility" }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: [
            { emoji: "🚀", text: "Mars", correct: true },
            { emoji: "🪐", text: "Saturn" },
            { emoji: "☀️", text: "Mercury" }
        ]
    },
    {
        question: "What kind of apocalypse involves the undead?",
        options: [
            { emoji: "🧟", text: "Zombie Apocalypse", correct: true },
            { emoji: "👽", text: "Alien Invasion" },
            { emoji: "🌋", text: "Volcano Disaster" }
        ]
    },
    {
        question: "Which one is NOT a programming language?",
        options: [
            { emoji: "☕", text: "Java" },
            { emoji: "🐍", text: "Python" },
            { emoji: "🍕", text: "Pizza", correct: true }
        ]
    },
    {
        question: "Which of these is a web browser?",
        options: [
            { emoji: "🦊", text: "Firefox", correct: true },
            { emoji: "🐘", text: "ElephantDB" },
            { emoji: "🦍", text: "GorillaBrowse" }
        ]
    },
    {
        question: "What was the goal of Hermione Granger in her free time?",
        options: [
            { emoji: "📚", text: "Read more books", correct: true },
            { emoji: "⚔️", text: "Train with a sword" },
            { emoji: "🧙", text: "Travel the world" }
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");
const progressEl = document.getElementById("progress");
const restartBtn = document.getElementById("restartBtn");

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    progressEl.innerHTML =
        currentQuestion + 1 + " <span>/ " + quizData.length + "</span>";

    optionsEl.innerHTML = "";
    nextBtn.disabled = true;
    nextBtn.setAttribute("aria-disabled", "true");

    q.options.forEach((opt, index) => {
        const optionBtn = document.createElement("button");
        optionBtn.type = "button";
        optionBtn.className = "quiz__option";
        optionBtn.innerHTML =
            '<div class="quiz__avatar" aria-hidden="true">' +
            opt.emoji +
            "</div><p>" +
            opt.text +
            "</p>";
        optionBtn.addEventListener("click", () =>
            selectOption(optionBtn, Boolean(opt.correct))
        );
        optionsEl.appendChild(optionBtn);
    });
}

function selectOption(selectedBtn, isCorrect) {
    const optionButtons = optionsEl.querySelectorAll(".quiz__option");
    optionButtons.forEach((btn) => {
        btn.disabled = true;
        btn.setAttribute("aria-disabled", "true");
    });

    if (isCorrect) {
        selectedBtn.classList.add("quiz__option--correct");
        const indicator = document.createElement("div");
        indicator.className = "quiz__indicator";
        indicator.textContent = "✅";
        selectedBtn.appendChild(indicator);
        score++;
        scoreEl.textContent = score;
    } else {
        selectedBtn.classList.add("quiz__option--incorrect");
        const indicator = document.createElement("div");
        indicator.className = "quiz__indicator";
        indicator.textContent = "❌";
        selectedBtn.appendChild(indicator);
        optionButtons.forEach((btn, idx) => {
            if (quizData[currentQuestion].options[idx].correct) {
                btn.classList.add("quiz__option--correct");
                const correctIndicator = document.createElement("div");
                correctIndicator.className = "quiz__indicator";
                correctIndicator.textContent = "✅";
                btn.appendChild(correctIndicator);
            }
        });
    }

    nextBtn.disabled = false;
    nextBtn.setAttribute("aria-disabled", "false");
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "You’ve completed the Geek Quiz!";
        optionsEl.innerHTML = "";
        nextBtn.style.display = "none";
        progressEl.textContent = "";
        restartBtn.style.display = "inline-block";
    }
});

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    scoreEl.textContent = "0";
    restartBtn.style.display = "none";
    nextBtn.style.display = "inline-block";
    loadQuestion();
});

loadQuestion();
