// Callback for the setup function once DOM is fully loaded
document.addEventListener('DOMContentLoaded', setupHighScoresPage);

function setupHighScoresPage() {
    displayHighScores();
    document.getElementById('clear').addEventListener('click', clearHighScores);
}

function getScores() {
    let scores = localStorage.getItem('highScores');
    return scores ? JSON.parse(scores) : [];
}

function displayHighScores() {
    let scores = getScores();
    let highScoresList = document.getElementById('highscores-list');

    for (const [key, value] of Object.entries(scores)) {
        let listItem = document.createElement('li');
        listItem.textContent = `${key}: ${value}`;
        highScoresList.appendChild(listItem);
    }
}

function clearHighScores() {
    // Clear localStorage & UI
    localStorage.removeItem('highScores');
    document.getElementById('highscores-list').innerHTML = '';
}