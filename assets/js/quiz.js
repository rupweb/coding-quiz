import { htmlQuestions } from './html-questions.js';
import { cssQuestions } from './css-questions.js';
import { jsQuestions } from './js-questions.js';
import { displayQuestion } from './questions.js';
import { getCurrentScore, resetCurrentScore, saveHighScores } from './scores.js';

const allQuestions = [...htmlQuestions, ...cssQuestions, ...jsQuestions];

// when DOM is fully loaded
document.addEventListener('DOMContentLoaded', startQuiz());

function startQuiz() {
    console.log("Starting quiz");
    showForm();
    showQuiz();
    readyContinueButton();
}

function showForm() {
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
}

function showQuiz() {
    // Get the start button and questions div
    var startButton = document.getElementById('start');
    var questionsDiv = document.getElementById('questions');

    // Add a click event listener to the start button
    startButton.addEventListener('click', function () {
        questionsDiv.classList.remove('hide');

        // Display the questions
        displayNextQuestion();
    });
}

function readyContinueButton() {
    var continueButton = document.getElementById('next-quiz');
    continueButton.addEventListener('click', restartQuiz);
}

function restartQuiz() {
    console.log("Restarting quiz");

    // Reset the quiz state
    currentQuestionIndex = 0;
    resetCurrentScore();

    // Reset the UI to the initial state
    document.getElementById('start-screen').classList.remove('hide');
    document.getElementById('start').classList.remove('hide');
    document.getElementById('questions').classList.add('hide');
    document.getElementById('end-screen').classList.add('hide');
    document.getElementById('next-quiz').classList.add('hide');
}

let currentQuestionIndex = 0;

function displayNextQuestion() {
    if (currentQuestionIndex < allQuestions.length) {
        displayQuestion(allQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
    } else {
        // End quiz
        endQuiz();
    }
}

function endQuiz() {
    // Hide the questions & quiz dividers
    document.getElementById('start').classList.add('hide');
    document.getElementById('questions').classList.add('hide');

    // Save high scores
    saveHighScores();

    // Show current score
    let currentScore = getCurrentScore();
    document.getElementById('final-score').textContent = currentScore;

    // Show end page
    document.getElementById('end-screen').classList.remove('hide');
    document.getElementById('next-quiz').classList.remove('hide');

    // Reset current quiz score
    // resetCurrentScore();
}

export { displayNextQuestion, startQuiz };