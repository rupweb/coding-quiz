var timerCompleted;

function startTimer(duration, callback) {
    let remainingTime = duration;

    const timerInterval = setInterval(() => {
        remainingTime--;

        console.log(`Time left: ${remainingTime} second(s)`);
        document.getElementById('time').textContent = remainingTime;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            timerCompleted = true;
            callback();
        }
    }, 1000);
}

function isTimerCompleted() {
    return timerCompleted;
}

function resetTimer() {
    timerCompleted = false;
}

export { startTimer, isTimerCompleted, resetTimer };