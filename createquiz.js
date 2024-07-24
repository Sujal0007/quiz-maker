import { addQuestions, saveQuiz, newQuiz } from "./savequiz.js";
import { previewQuiz, renderSavedQuizzes } from "./preview.js";
import { navigate } from './router.js'; // Imported navigate

export function renderQuizGenerator() {
  const quizTemp = `<header>
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
  <div class='quiz-cont'>
    <h1>Create an awesome quiz in minutes</h1>
    <p>Quizizz is the easiest way to make quizzes FREE</p>
    <div class="quiz-maker">
      <h1>Quiz Maker</h1>
      <div class="quiz-title">
        <input type="text" id="quizTitle" placeholder="Enter quiz title">
      </div>
      <div id="questionsContainer"></div>
      <button id="addQuestionBtn">Add Question</button>
      <div class="buttons">
        <button id="previewBtn">Preview Quiz</button>
        <button id="saveBtn">Save Quiz</button>
        <button id="newQuizBtn">New Quiz</button>
      </div>
    </div>
  </div>
  <div id="quizPreview"></div>
  <div id="savedQuizzes"></div>`;

  document.querySelector('#app').innerHTML = `${quizTemp}`;

  document.getElementById('addQuestionBtn').addEventListener('click', addQuestions);
  document.getElementById('saveBtn').addEventListener('click', saveQuiz);
  document.getElementById('previewBtn').addEventListener('click', previewQuiz);
  document.getElementById('templatesBtn').addEventListener('click', function() {
    navigate('/templates');
  });
  document.getElementById('homeBtn').addEventListener('click', function() {
    navigate('/'); 
  });
  document.getElementById('newQuizBtn').addEventListener('click', newQuiz);
}

