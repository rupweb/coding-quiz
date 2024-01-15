async function sleep(msec) {
    console.log("Sleeping for " + msec + " milliseconds");
    return new Promise(resolve => setTimeout(resolve, msec));
}

export { sleep };