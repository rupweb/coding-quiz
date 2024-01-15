import { displayNextQuestion } from './script.js';
import { saveScore, getScores, updateScore, endQuiz } from './scores.js';
import { userName } from './users.js';

function displayQuestion(questionObj) {
    // Update the question title
    document.getElementById('question-title').textContent = questionObj.question;

    // Clear previous choices
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';

    // Add new choices
    for (let key in questionObj.choices) {
        if (questionObj.choices.hasOwnProperty(key)) {
            const button = document.createElement('button');
            button.textContent = key.toUpperCase() + ': ' + questionObj.choices[key];
            button.classList.add('btn', 'btn-primary', 'm-2', 'question-button'); // Added m-2 margin
            button.onclick = function() { checkAnswer(key, questionObj.correctAnswer); };
            choicesDiv.appendChild(button);
        }
    }
}

function checkAnswer(selectedChoiceKey, correctAnswerKey) {
    if (selectedChoiceKey === correctAnswerKey) {
        answer.textContent = "Correct!";
        answer.style.color = 'green';
        updateScore(userName, true);
    } else {
        answer.textContent = "Incorrect!";
        answer.style.color = 'red';
        updateScore(false);
    }

    // Display next question
    displayNextQuestion();
}

export { displayQuestion };