function shoppingList(arr) {

    let initialList = arr.shift().split('!');

    let index = 0;
    let command = arr[index];
    let itemIndex = '';

    while (command !== "Go Shopping!") {
        command = command.split(' ');
        let action = command.shift();
        let item = command.shift();

        switch (action) {
            case "Urgent":
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
                break;
            case "Unnecessary":
                if (initialList.includes(item)) {
                    itemIndex = initialList.indexOf(item);
                    initialList.splice(itemIndex, 1);
                }
                break;
            case "Correct":
                let newItem = command.shift();
                if (initialList.includes(item)) {
                    itemIndex = initialList.indexOf(item);
                    initialList.splice(itemIndex, 1, newItem);
                }
                break;
            case "Rearrange":
                if (initialList.includes(item)) {
                    itemIndex = initialList.indexOf(item);
                    let rearrangedItem = initialList.splice(itemIndex, 1);
                    rearrangedItem.join(' ');
                    initialList.push(rearrangedItem);
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(initialList.join(', '))
}

shoppingList([
    "Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);

shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"]);

