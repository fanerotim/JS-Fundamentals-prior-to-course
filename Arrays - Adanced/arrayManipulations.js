function arrayManipulation(arr) {
    let result = arr[0].split(' ');

    for (let i = 1; i < arr.length; i++) {
        
        let currentElement = arr[i].split(' ');
        
        for (let j = 0; j < currentElement.length; j++) {
            let command = currentElement[j];
            if (command === 'Add') {
                result.push(currentElement[j + 1]);
                break;
            } else if (command === 'Remove') {
                for (let k = 0; i < result.length; k++) {
                    if (result[k] === currentElement[j + 1]) {
                        let index = result.indexOf(result[k]);
                        result.splice(index, 1);
                        break;
                    }

                    if (k + 1 === result.length) {
                        break;
                    }
                }
                break;
            } else if (command === 'RemoveAt') {
                let removeAtIndex = currentElement [j + 1]; 
                result.splice(removeAtIndex, 1); 
                break; 
            } else if (command === 'Insert') {
                result.splice(currentElement[j + 2], 0, currentElement[j + 1]);
                break;
            }
        }
    }
    console.log(result.join(' '));
}

arrayManipulation([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 1',
    'RemoveAt 1',
    'Insert 8 3']);

// arrayManipulation(['6 12 2 65 6 42',
// 'Add 8',
// 'Remove 12',
// 'RemoveAt 3',
// 'Insert 6 2'])