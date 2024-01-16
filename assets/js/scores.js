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

function getCurrentScore() {
    return currentScore;
}

function getScore() {
    return localStorage.getItem('currentQuizScore');
}

function resetCurrentScore() {
    localStorage.removeItem('currentQuizScore');
}

// Highscores part
function saveHighScores() {
    let finalScore = getScore();
    console.log("Saving score " + finalScore);

    let highScores = localStorage.getItem('highScores');
    console.log("Highscores: " + highScores);

    if (highScores == '{}') {
        localStorage.setItem('highScores', localStorage.getItem('currentQuizScore'));
    }
    else {
        localStorage.setItem('highScores', mergeScores(highScores, finalScore));
    }
}

function mergeScores(json1, json2) {
    try {
        let obj1 = JSON.parse(json1);
        let obj2 = JSON.parse(json2);

        var mergedObj = Object.assign({}, obj1, obj2);
        return JSON.stringify(mergedObj);
    } catch (error) {
        console.log(error);
    }
}

export { saveScore, updateScore, getCurrentScore, resetCurrentScore, saveHighScores, mergeScores };
