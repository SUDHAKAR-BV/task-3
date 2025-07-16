function switchTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.classList.add('hidden');
  });
  document.getElementById(tabId).classList.remove('hidden');
}

// Quiz Logic
const quizQuestions = [
  {
    question: "What is JavaScript mainly used for?",
    answers: ["Styling webpages", "Adding interactivity", "Managing databases"],
    correct: 1
  },
  {
    question: "Which method fetches data from an API?",
    answers: ["loadData()", "fetch()", "getInfo()"],
    correct: 1
  },
  {
    question: "Which variable cannot be reassigned?",
    answers: ["let", "const", "var"],
    correct: 1
  }
];

let currentQuestionIndex = 0;

function renderQuestion() {
  const q = quizQuestions[currentQuestionIndex];
  document.getElementById('question').textContent = q.question;
  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';
  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.textContent = ans;
    btn.onclick = () => checkAnswer(i);
    answersDiv.appendChild(btn);
  });
  document.getElementById('quiz-feedback').textContent = '';
}

function checkAnswer(index) {
  const correct = quizQuestions[currentQuestionIndex].correct;
  const feedback = document.getElementById('quiz-feedback');
  if (index === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "❌ Wrong. Try again!";
    feedback.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestionIndex = (currentQuestionIndex + 1) % quizQuestions.length;
  renderQuestion();
}

renderQuestion();

// Joke API
async function fetchJoke() {
  const jokeEl = document.getElementById('joke');
  jokeEl.textContent = "Loading...";
  try {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await res.json();
    jokeEl.textContent = `${data.setup} — ${data.punchline}`;
  } catch (err) {
    jokeEl.textContent = "Oops! Couldn't load a joke.";
  }
}
