import { htmlQuestions } from './html-questions.js';
import { cssQuestions } from './css-questions.js';
import { jsQuestions } from './js-questions.js';
import { displayQuestion } from './questions.js';

const allQuestions = [...htmlQuestions, ...cssQuestions, ...jsQuestions];

document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('start');
    var userNameForm = document.getElementById('user-name-form');
  
    userNameForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Store the user's name
      var userName = document.getElementById('user-name').value;
      console.log("User's name: " + userName);
  
      // Hide the form and show the start button
      userNameForm.classList.add('hide');
      startButton.classList.remove('hide');
    });
  });

document.addEventListener('DOMContentLoaded', function () {
    // Get the start button and questions div
    var startButton = document.getElementById('start');
    var questionsDiv = document.getElementById('questions');

    // Add a click event listener to the start button
    startButton.addEventListener('click', function () {
        questionsDiv.classList.remove('hide');

        // Display the questions
        displayNextQuestion();
    });
});

let currentQuestionIndex = 0;

function displayNextQuestion() {
    if (currentQuestionIndex < allQuestions.length) {
        displayQuestion(allQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
    } else {
        // End of quiz logic
    }
}

export { displayNextQuestion };