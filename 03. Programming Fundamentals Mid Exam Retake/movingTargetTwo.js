function movingTarget(arr) {

    let sequence = arr.shift().split(' ').map(a => Number(a));

    let index = 0;
    let command = arr[index];

    while (command !== 'End') {
        command = command.split(' ');
        let action = command.shift();
        let arrIndex = Number(command.shift());
        let element = Number(command.shift());

        switch (action) {
            case "Shoot":
                if (arrIndex >= 0 && arrIndex < sequence.length) {
                    sequence[arrIndex] -= element;
                    if (sequence[arrIndex] <= 0) {
                        sequence.splice(arrIndex, 1);
                    }  
                }
                break;
            case "Add":
                if (arrIndex >= 0 && arrIndex < sequence.length) {
                    sequence.splice(arrIndex, 0, element);
                } else {
                    console.log("Invalid placement!")
                }
                break;
            case "Strike":
                let endIndex = arrIndex + element;
                if (arrIndex - element < 0 || endIndex > sequence.length - 1) {
                    console.log("Strike missed!");
                    break;
                } else {
                    sequence.splice(arrIndex - element, element * 2 + 1)
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(sequence.join('|'))
}

movingTarget([
    "52 74 23 44 96 110",
    "Shoot 10 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget([
    "1 2 3 4 5",
    "Strike 0 1",
    "End"]);

