function primeNumChecker(num) {

    let primeCounter = 0;
    let isPrime = true;

    for (let i = 2; i <= num; i++) {
        
        if (num % i === 0) {
            primeCounter++;
        }

        if (primeCounter > 1) {
            isPrime = false;
            break;
        }
    }

    if (isPrime === false) {
        console.log("false");
    } else {
        console.log("true");
    }
}

primeNumChecker(81);
