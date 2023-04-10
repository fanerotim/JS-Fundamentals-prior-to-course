function condenseArrayToNum(input) {

    let index = 0;
    let counter = 0;
    let numOne = 0;
    let numTwo = 0;
    let result = 0;
    let newArr = [];

    while (input.length >= 1) {
        
        if (counter === 0 && input.length === 1) {
            console.log(input[0]);
            return;
        }

        if (input.length === 1) {

            if (newArr.length === 2) {
                console.log(newArr[0] + newArr[1]);
                return;
            } else {
                input = newArr;
                newArr = [];
                continue;
            } 
        }

        numOne = input.shift(Number(index));
        numTwo = Number(input[index]);

        result = numOne + numTwo;
        newArr.push(result)
        counter++;
    }
    console.log(input);

}

condenseArrayToNum(5,0,4,1,2)