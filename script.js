const questions = [
    {
        question: "Html stand for ?",
        answers: [
            {text: "HyperText Module Language", correct: false},
            {text: "HyperText Markup Language", correct: true},
            {text: "HyperTool Markup Language", correct: false},
            {text: "Hyper Transfer Markup Language", correct: false},
        ]
    },
    {
        question: "CSS stands for?",
        answers: [
            {text: "Cascading Style Sheets", correct: true},
            {text: "Computer Style Sheets", correct: false},
            {text: "Creative Style Sheets", correct: false},
            {text: "Colorful Style Sheets", correct: false}
        ]
    },
    {
        question: "Which property is used to change the text color of an element?",
        answers: [
            {text: "color", correct: true},
            {text: "text-color", correct: false},
            {text: "font-color", correct: false},
            {text: "background-color", correct: false}
        ]
    },
    {
        question: "How do you add a background color in CSS?",
        answers: [
            {text: "background-color", correct: true},
            {text: "color", correct: false},
            {text: "bg-color", correct: false},
            {text: "background", correct: false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answersButton = document.getElementById("ans-btn");
const nextButton = document.getElementById("nxt-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz() {
    currentQueIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQueIndex];
    let questionNo = currentQueIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answersButton.appendChild(button);
    });

}

function resetState() {
    nextButton.style.display = "none";
    while (answersButton.firstChild) {
        answersButton.removeChild(answersButton.firstChild);
    }
}

function selectAnswer(e){
    const selectbtn = e.target;
    const isCorrect = selectbtn.dataset.correct === "true";
    if(isCorrect){
        selectbtn.classList.add("correct");
    }else{
        selectbtn.classList.add("incorrect");
    }
}
startQuiz();