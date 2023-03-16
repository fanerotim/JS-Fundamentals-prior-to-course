function division(n) {

    let divisor = 0;

    if (n % 10 === 0) {
        divisor = 10;
    } else if (n % 7 === 0) {
        divisor = 7;
    } else if (n % 6 === 0) {
        divisor = 6;
    } else if (n % 3 === 0) {
        divisor = 3;
    } else if (n % 2 === 0) {
        divisor = 2;
    } 

    if (divisor !== 0) {
        console.log(`The number is divisible by ${divisor}`)
    } else {
        console.log("Not divisible");
    }
}

division(12)