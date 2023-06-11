function ladybugs(arr) {

    let fieldSize = arr.shift();
    let initialIndices = arr.shift().split(' ');
    initialIndices = initialIndices.map(a => Number(a));
    let field = [];
    let index = '';
    let flyLength = '';

    for (let i = 0; i < fieldSize; i++) {
        if (initialIndices.includes(i)) {
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for (let j = 0; j < arr.length; j++) {
        let commandAsArray = arr[j].split(' ');
        index = Number(commandAsArray.shift());
        let direction = commandAsArray.shift();
        flyLength = Number(commandAsArray.shift());

        if (flyLength === 0) {
            continue;
        }

        if (flyLength < 0) {
            if (direction === 'left') {
                direction = 'right'
            } else if (direction === 'right') {
                direction = 'left';
            }
            flyLength = Math.abs(flyLength);
        }

        switch (direction) {
            case "right":
                right(commandAsArray)
                break;
            case "left":
                left(commandAsArray);
                break;
        }
    }

    function right(command) {
        if (index >= 0 && index < field.length) {
            if (field[index] === 1) {
                for (let r = index; r < field.length; r += flyLength) {
                    if (field[r + flyLength] === 0) {
                        field[r + flyLength] = 1;
                        field[index] = 0;
                        break;
                    } else if (r + flyLength >= field.length) {
                        field[index] = 0;
                    }
                }
            }
        }
    }

    function left(command) {
        if (index >= 0 && index < field.length) {
            if (field[index] === 1) {
                for (let l = index; l >= 0; l -= flyLength) {
                    if (field[l - flyLength] === 0) {
                        field[l - flyLength] = 1;
                        field[index] = 0;
                        break;
                    } else if (l - flyLength < 0) {
                        field[index] = 0;
                    }
                }
            }
        }
    }
    console.log(field.join(' '));
}

// ladybugs([ 
//     3, '0 1',
// '0 right 1',
// '2 right 1' ])

// ladybugs([ 
//     3, '0 1 2',
//     '0 right 1',
//     '1 right 1',
//     '2 right 1']);

// ladybugs([ 
//     5, '3',
//     '3 left 2',
//     '1 left -2']);

ladybugs([
    5, '0 1',
    '0 left 0']);