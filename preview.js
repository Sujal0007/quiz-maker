import { showModal } from "./savequiz.js";
import { navigate } from './router.js'; 

export function previewQuiz() {
  const savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
  // console.log(savedQuizzes)
  if (savedQuizzes.length === 0) {
    showModal("No quiz present");
    return;
  }

  const latestQuiz = savedQuizzes[savedQuizzes.length - 1];
  // console.log(latestQuiz)
  const previewContainer = document.getElementById("quizPreview");

  let previewContent = `
        <h1>${latestQuiz.title}</h1>
        <div class="questions">`;

  latestQuiz.questions.forEach((question, index) => {
    previewContent += `<div class="question-preview">
                <h2>Q${index + 1}: ${question.question}</h2><ul>`;

    question.options.forEach((option) => {
      previewContent += `<li>${option}</li>`;
    });
    previewContent += `</ul></div>`;
  });

  previewContent += `</div>`;

  previewContainer.innerHTML = previewContent;
  previewContainer.style.display = "block";
  document.querySelector(".quiz-maker").style.display = "none";
}

export function renderSavedQuizzes() {
  let savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
  const appDiv = document.getElementById("app");

  if (savedQuizzes.length === 0) {
    showModal("No quiz present");
  }

  let quizzesHtml = `<header>
    <div class="left-head">
      <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
    </div>
    <div class="center-head">
      <ul>
        <li id="homeBtn">Home</li>
        <li id="templatesBtn">Templates</li>
        <li>About</li>
        <li>Contact us</li>
      </ul>
    </div>
    <div class="right-head">
      <button class="login-btn">Login</button>
      <button class="sign-btn">Sign up</button>
    </div>
  </header>
  <h1 class='saved-head'>Attempt Quizzes</h1>
  <div class="saved-quizzes">
     <ul>`;

  savedQuizzes.forEach((quiz, index) => {
    quizzesHtml += `<li data-index="${index}"><span>${quiz.title}</span>
      <button class="delete-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button>
    </li>`;
  });

  quizzesHtml += `</ul></div>`;
  appDiv.innerHTML = quizzesHtml;

  document.querySelectorAll(".saved-quizzes li").forEach((li) => {
    li.addEventListener("click", function () {
      const quizIndex = this.getAttribute("data-index");
      attemptQuiz(quizIndex);
    });
  });

  document.querySelectorAll(".delete-btn").forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const quizIndex = this.getAttribute("data-index");
      event.stopPropagation();
      deleteQuiz(quizIndex);
    });
  });

  document.getElementById('homeBtn').addEventListener('click', function() {
    navigate('/');
  });
  document.getElementById('templatesBtn').addEventListener('click', function() {
    navigate('/templates'); 
  });
}


function attemptQuiz(quizIndex) {
  const savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
  const selectedQuiz = savedQuizzes[quizIndex];
  // console.log(selectedQuiz);
  const appDiv = document.getElementById("app");

  let attemptContent = `
        <header>
          <div class="left-head">
              <img src="https://cdn.prod.website-files.com/60aca2b71ab9a5e4ececf1cf/62fa6419161d3a641f681ceb_Logo.svg" alt="Quizizz Logo" class="logo-image">
          </div>
          <div class="center-head">
              <ul>
                  <li id="homeBtn">Home</li>
                  <li id="templatesBtn">Templates</li>
                  <li>About</li>
                  <li>Contact us</li>
              </ul>
          </div>
          <div class="right-head">
              <button class="login-btn">Login</button>
              <button class="sign-btn">Sign up</button>
          </div>
        </header>
        <div class="quiz-attempt">
            <h1>${selectedQuiz.title}</h1>
            <div class="questions">`;

  selectedQuiz.questions.forEach((question, index) => {
    attemptContent += `<div class="question-attempt">
                <h2>Q${index + 1}: ${question.question}</h2><ul>`;

    question.options.forEach((option) => {
      attemptContent += `<li><input type="radio" name="question${index}" value="${option}"> ${option}</li>`;
    });
    attemptContent += `</ul></div>`;
  });

  attemptContent += `</div><button id="submitQuizBtn">Submit Quiz</button></div>
            <div id="quizScore" class="animate__animated animate__rubberBand">
              <h2 class="animate__animated animate__bounce">Your Score: <span id="scoreValue"></span></h2>
              <button id='retryBtn'>Retry</button>
          </div>
`;

  appDiv.innerHTML = attemptContent;

  document.getElementById("submitQuizBtn").addEventListener("click", function () {
      // console.log('clicked');
      calculateScore(selectedQuiz)
    });
    document.getElementById("retryBtn").addEventListener("click", function () {
      // console.log('clicked');
     navigate('/templates')
    });

    document.getElementById('templatesBtn').addEventListener('click', renderSavedQuizzes);

}
function deleteQuiz(quizIndex) {
  let savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
  savedQuizzes.splice(quizIndex, 1);
  localStorage.setItem("savedQuizzes", JSON.stringify(savedQuizzes));
  renderSavedQuizzes();
}


function calculateScore(quiz) {
  let score = 0;
  quiz.questions.forEach((question, index) => {
    const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
    if (selectedOption && selectedOption.value === question.correctOption) {
      score++;
    }
  });

  document.querySelector(".quiz-attempt").style.display = 'none';
  document.getElementById("quizScore").style.display = "flex";
  document.getElementById("scoreValue").textContent = `${score} / ${quiz.questions.length}`;
}