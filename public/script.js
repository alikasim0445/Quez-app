const questions = [
  {
    question: "What is the capital of France?",
    answers: ["A. Paris", "B. Rome", "C. Madrid", "D. Berlin"],
    correctAnswer: "A",
  },
  {
    question: "Who painted the Mona Lisa?",
    answers: [
      "A. Leonardo da Vinci",
      "B. Vincent van Gogh",
      "C. Pablo Picasso",
      "D. Michelangelo",
    ],
    correctAnswer: "A",
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["A. Jupiter", "B. Saturn", "C. Earth", "D. Mars"],
    correctAnswer: "A",
  },
  {
    question: "Which country is home to the kangaroo?",
    answers: ["A. Australia", "B. Brazil", "C. Canada", "D. India"],
    correctAnswer: "A",
  },
  {
    question: "What is the chemical symbol for the element oxygen?",
    answers: ["A. O", "B. Ox", "C. Oxg", "D. Om"],
    correctAnswer: "A",
  },
  {
    question: "What is the tallest mountain in the world?",
    answers: [
      "A. Mount Everest",
      "B. Mount Kilimanjaro",
      "C. Mount McKinley",
      "D. Mount Fuji",
    ],
    correctAnswer: "A",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    answers: [
      "A. William Shakespeare",
      "B. Arthur Miller",
      "C. Tennessee Williams",
      "D. Oscar Wilde",
    ],
    correctAnswer: "A",
  },
  {
    question: "What is the largest ocean in the world?",
    answers: [
      "A. Pacific Ocean",
      "B. Atlantic Ocean",
      "C. Indian Ocean",
      "D. Arctic Ocean",
    ],
    correctAnswer: "A",
  },
  {
    question: "What is the primary language spoken in Brazil?",
    answers: ["A. Portuguese", "B. Spanish", "C. English", "D. French"],
    correctAnswer: "A",
  },
  {
    question: "Who invented the telephone?",
    answers: [
      "A. Alexander Graham Bell",
      "B. Thomas Edison",
      "C. Albert Einstein",
      "D. Isaac Newton",
    ],
    correctAnswer: "A",
  },
];

const questionText = document.getElementById("question-text");
const answerList = document.querySelector(".answer-list");
const scoreContainer = document.getElementById("score-container");

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  answerList.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = answer;
    li.appendChild(button);
    answerList.appendChild(li);

    button.addEventListener("click", () => {
      if (answer.startsWith(currentQuestion.correctAnswer)) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("incorrect");
        const correctButton = Array.from(answerList.children).find((child) =>
          child.firstChild.textContent.startsWith(currentQuestion.correctAnswer)
        );
        if (correctButton) correctButton.firstChild.classList.add("correct");
      }

      setTimeout(showNextQuestion, 1000);
    });
  });
}

function showNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    questionText.textContent = "Quiz Finished";
    answerList.innerHTML = "";
    scoreContainer.textContent = `You have scored ${score} / ${questions.length}`;
    nextButton.textContent = "Restart";
    nextButton.addEventListener("click", restart);
  }
}

function restart() {
  currentQuestionIndex = 0;
  score = 0;
  scoreContainer.textContent = "";
  nextButton.textContent = "Next";
  nextButton.removeEventListener("click", restart);
  showQuestion();
}

const nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", showNextQuestion);

showQuestion();
