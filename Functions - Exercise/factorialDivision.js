function factorialDivision(numOne, numTwo) {

    let firstNumResult = 1;
    for (let i = 1; i <= numOne; i++) {
        firstNumResult = firstNumResult * i; 
    }
    
    let secondNumResult = 1;
    for (let j = 1; j <= numTwo; j++) {
        secondNumResult = secondNumResult * j;
    }

    let finalResult = firstNumResult / secondNumResult;
    console.log(`${finalResult.toFixed(2)}`);
 
}

factorialDivision(5, 2);
factorialDivision(6, 2);