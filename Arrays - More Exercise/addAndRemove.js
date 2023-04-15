function addAndRemove(arr) {
    let counter = 0;
    let command = '';
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        command = arr[i];
        counter++;

        if (command === "add") {
            result.push(counter);
        } else {
            result.pop();
        }
    }

    result = result.join(" ");

    if (result === '') {
        console.log("Empty");
    } else {
        console.log(result);
    }
}

addAndRemove(['add', 'add', 'add', 'add']);
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);