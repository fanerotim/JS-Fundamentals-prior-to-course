function movingTarget(arr) {

    let targetSequence = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];
    
    
    while (command !== 'End') {

        let curCommandArray = command.split(' ');
        let curAction = curCommandArray.shift();
        let curIndex = Number(curCommandArray.shift());
        let value = Number(curCommandArray.shift());
        let isWithinBounds = curIndex >= 0 && curIndex <= targetSequence.length - 1;

        switch(curAction) {
            case "Shoot":
                if (isWithinBounds) {
                    targetSequence[curIndex] = targetSequence[curIndex] - value;
                }

                if (Number(targetSequence[curIndex]) <= 0) {
                    targetSequence.splice(curIndex, 1)
                }
                break;
            case "Add":
                if (isWithinBounds) {
                    targetSequence.splice(curIndex, 0, value);
                } else {
                    console.log("Invalid placement!")
                }
                break;
            case "Strike":
                if (curIndex - value < 0 || curIndex + value > targetSequence.length - 1) {
                    console.log("Strike missed!");
                    break;
                } else {
                    for (let j = curIndex - value; j <= curIndex + value; j++) {
                        targetSequence[j] = 0;
                    }

                    let updatedArray = [];
                    for (let k = 0; k < targetSequence.length; k++) {
                        if (targetSequence[k] !== 0) {
                            updatedArray.push(targetSequence[k]);
                        }
                    }
                    targetSequence = updatedArray;
                }
                break;
        }

        index++;
        command = arr[index];
    }
    let result = '';

    for (let h = 0; h < targetSequence.length; h++) {
        if (h !== targetSequence.length - 1) {
            result += `${targetSequence[h]}|`
        } else {
            result += `${targetSequence[h]}`
        }
    }
    console.log(result);
}

movingTarget(
    ["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(
    ["1 2 3 4 5",
    "Strike 0 1",
    "End"])

