function inventory(arr) {

    let journal = arr.shift().split(", ");
    
    let index = 0;
    let command = arr[index];
    
    while (command !== "Craft!") {
        let curCommand = command.split(" - ");
        let action = curCommand.shift();
        let item = curCommand.shift();

        switch(action) {
            case "Collect":
                if (!journal.includes(item)) {
                    journal.push(item);
                }
                break;
            case "Drop":
                if (journal.includes(item)) {
                    journal.splice(journal.indexOf(item), 1);
                }
                break;
            case "Combine Items":
                let combinedArr = item.split(":");
                item = combinedArr.shift();
                let newItem = combinedArr.shift();

                if (journal.includes(item)) {
                    let oldItemIndex = journal.indexOf(item);
                    journal.splice(oldItemIndex + 1, 0, newItem)
                }
                break;
            case "Renew":
                if (journal.includes(item)) {
                    let renewedItem = journal.splice(journal.indexOf(item), 1);
                    journal.push(renewedItem);
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(journal.join(", "))
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'])


inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])