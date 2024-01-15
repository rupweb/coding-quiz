import { displayNextQuestion } from './script.js';

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
            button.classList.add('btn', 'btn-primary', 'm-2', 'question-button'); // Added 'm-2' for margin
            button.onclick = function() { checkAnswer(key, questionObj.correctAnswer); };
            choicesDiv.appendChild(button);
        }
    }
}

function checkAnswer(selectedChoiceKey, correctAnswerKey) {
    if (selectedChoiceKey === correctAnswerKey) {
        answer.textContent = "Correct!";
        answer.style.color = 'green';
        // Proceed to the next question or any other logic
    } else {
        answer.textContent = "Incorrect!";
        answer.style.color = 'red';
        // Implement the penalty and proceed to the next question
    }

    // Display next question
    displayNextQuestion();
}

export { displayQuestion };