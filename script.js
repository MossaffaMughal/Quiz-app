const quizData = [
  {
    question: "How old is Florin?",
    a: "10",
    b: "15",
    c: "24",
    d: "110",
    correct: "c",
  },
  {
    question: "Which is the most used programming language in 2019?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    answer: "d",
  },
  {
    question: "Who is the president of US?",
    a: "Florin Pop",
    b: "Donald Trump",
    c: "Joe Biden",
    d: "Ivan Saldano",
    answer: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascadind Style Sheet",
    c: "JSON Object Notation",
    d: "Helicopters Terminals Motorbots",
    answer: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    answer: "d",
  },
];

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

const questionEl = document.getElementById("question");
const answerELs = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;
  answerELs.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerELs.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <h1> 
        Score: ${score}/${quizData.length} 
      </h1>
      <button onclick="location.reload()" class="btn">
        Reload
      </button>`;
    }
  }
});
