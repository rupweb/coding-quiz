var timerCompleted;

function startTimer(duration, callback) {
    let remainingTime = duration;

    const timerInterval = setInterval(() => {
        remainingTime--;

        console.log(`Time left: ${remainingTime} second(s)`);

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

export { startTimer, isTimerCompleted };