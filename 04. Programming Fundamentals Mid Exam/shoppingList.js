function shoppingList(arr) {

    let initialList = arr.shift().split('!');
    
    let index = 0;
    let command = arr[index];

    while (command !== "Go Shopping!") {
        let curCommand = command.split(' ');
        let action = curCommand.shift();
        let item = curCommand.shift();
        switch(action) {
            case "Urgent":
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
                break;
            case "Unnecessary":
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1);
                }
                break;
            case "Correct":
                let newItem = curCommand.shift();
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1, newItem);
                }
                break;
            case "Rearrange":
                if (initialList.includes(item)) {
                    let removedItem = initialList.splice(initialList.indexOf(item), 1);
                    removedItem = removedItem.join('');
                    initialList.push(removedItem);
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(initialList.join(', '));
}

// shoppingList([
//     "Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!"]);

shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Blueberry",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Rearrange Blueberry",
    "Go Shopping!"])

