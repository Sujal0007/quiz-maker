let questionCount = 0;

export function addQuestions() {
  const questionsContainer = document.getElementById("questionsContainer");

  questionCount++;

  const questionDiv = document.createElement("div");
  questionDiv.className = "question";

  const questionInput = document.createElement("input");
  questionInput.type = "text";
  questionInput.placeholder = "Enter your question";
  questionInput.className = "question-input";
  questionInput.required = true;

  questionDiv.appendChild(questionInput);

  for (let i = 1; i <= 4; i++) {
    const optionDiv = document.createElement("div");
    optionDiv.className = "option";

    const optionInput = document.createElement("input");
    optionInput.type = "text";
    optionInput.placeholder = `Option ${i}`;
    optionInput.className = "option-input";
    optionInput.required = true;

    const correctInput = document.createElement("input");
    correctInput.type = "radio";
    correctInput.name = `correctOption${questionCount}`;
    correctInput.value = `Option ${i}`;
    correctInput.className = "correct-input";
    correctInput.required = true;

    optionDiv.appendChild(correctInput);
    optionDiv.appendChild(optionInput);

    questionDiv.appendChild(optionDiv);
  }

  

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-question-btn";
  deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteButton.addEventListener("click", function () {
    questionsContainer.removeChild(questionDiv);
    questionCount--;
    if (questionCount < 1) {
      document.getElementById("saveBtn").style.display = "none";
    }
  });

  questionDiv.appendChild(deleteButton);
  questionsContainer.appendChild(questionDiv);


  if (questionCount >= 1) {
    document.getElementById("saveBtn").style.display = "block";
  }
}

export function saveQuiz() {
  if (validateQuiz()) {
    saveToLocalStorage();
    showModal("Quiz saved successfully");
  } else {
    showModal("Please fill all fields and select a correct option");
  }
}

function validateQuiz() {
  const questions = document.querySelectorAll(".question");

  for (let i = 0; i < questions.length; i++) {
    const questionInput = questions[i].querySelector(".question-input");
    if (!questionInput.value.trim()) {
      return false;
    }

    const optionInputs = questions[i].querySelectorAll(".option-input");
    for (let j = 0; j < optionInputs.length; j++) {
      if (!optionInputs[j].value.trim()) {
        return false;
      }
    }

    const correctInput = questions[i].querySelector(".correct-input:checked");
    if (!correctInput) {
      return false;
    }
  }

  return true;
}

function saveToLocalStorage() {
  const quizTitle = document.getElementById("quizTitle").value.trim();
  const questions = document.querySelectorAll(".question");

  const quizData = {
    title: quizTitle.toUpperCase(),
    questions: [],
  };

  questions.forEach((question) => {
    const questionText = question.querySelector(".question-input").value.trim();
    const options = [];
    let correctOption = null;

    const optionInputs = question.querySelectorAll(".option-input");
    const correctInput = question.querySelector(".correct-input:checked");

    optionInputs.forEach((optionInput, index) => {
      const optionText = optionInput.value.trim();
      options.push(optionText);
      if (correctInput && correctInput.value === `Option ${index + 1}`) {
        correctOption = optionText;
      }
    });

    quizData.questions.push({
      question: questionText,
      options: options,
      correctOption: correctOption,
    });
  });

  let savedQuizzes = JSON.parse(localStorage.getItem("savedQuizzes")) || [];
  savedQuizzes.push(quizData);
  localStorage.setItem("savedQuizzes", JSON.stringify(savedQuizzes));
}

export function showModal(message) {
  let modal = document.getElementById("customModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "customModal";
    modal.className = "modal";
    modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <p id="modalMessage">${message}</p>
            </div>
        `;
    document.body.appendChild(modal);

    modal.querySelector(".close-btn").onclick = function () {
      modal.style.display = "none";
    };
  } else {
    document.getElementById("modalMessage").textContent = message;
  }

  modal.style.display = "block";
}

export function newQuiz() {
    const questionsContainer = document.getElementById("questionsContainer");
    questionsContainer.innerHTML = "";
    questionCount = 0;
    document.getElementById("quizTitle").value = "";
    document.getElementById("saveBtn").style.display = "none";
  }
  