function triangleArea(numOne, numTwo, numThree) {

    let s = (numOne + numTwo + numThree) / 2;
    let oneSideArea = Math.sqrt(s * ((s - numOne) * (s - numTwo) * (s - numThree)));
    console.log(oneSideArea);

}

triangleArea(2,
    3.5,
    4)