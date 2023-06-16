function inventory(arr) {

    let inventory = arr.shift().split(', ');
    
    let index = 0;
    let command = arr[index];

    while (command !== 'Craft!') {
        command = command.split(' - ');
        let action = command.shift();
        let item = command.shift();

        switch(action) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    inventory.splice(inventory.indexOf(item), 1);
                }
                break;
            case "Combine Items":
                item = item.split(':');
                let oldItem = item.shift();
                let newItem = item.shift();

                if (inventory.includes(oldItem)) {
                    let indexOfOldItem = inventory.indexOf(oldItem);
                    inventory.splice(indexOfOldItem + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    let renewedItem = inventory.splice(inventory.indexOf(item), 1);
                    renewedItem = renewedItem.join(' ');
                    inventory.push(renewedItem);
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(inventory.join(', '))  
}

inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]);

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]);