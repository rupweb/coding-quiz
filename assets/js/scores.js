let currentScore = 0;

function updateScore(name, isCorrect) {
    if (isCorrect) {
        currentScore += 10;
    }
    else {
        // Time penalty
    }
    saveCurrentScore(name);
}

function saveCurrentScore(name) {
    let nameScore = {[name]: currentScore};

    let jsonString = JSON.stringify(nameScore);
    console.log(jsonString);

    localStorage.setItem('currentQuizScore', jsonString);
}

function saveScore(initials, score) {
    let scores = getScores();
    scores.push({ initials, score });
    localStorage.setItem('quizScores', JSON.stringify(scores));
}

function getScores() {
    let scores = localStorage.getItem('quizScores');
    return scores ? JSON.parse(scores) : [];
}

function endQuiz() {
    // Display final score to the user
    let finalScore = JSON.parse(localStorage.getItem('currentQuizScore'));

    // Reset current quiz score
    localStorage.removeItem('currentQuizScore');
}

export { saveScore, getScores, updateScore, endQuiz };
