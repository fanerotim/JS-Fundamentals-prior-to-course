function gladiatorInventory(arr) {
    
    
    let inventory = arr.shift().split(' ');
    let finalArr = arr.slice(0)
    let upgradedItem = '';
    
    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(' ');
        let action = currentCommand.shift();
        let equipment = currentCommand.shift();

        switch(action) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;
            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(equipment)) {
                    inventory.splice(inventory.indexOf(equipment), 1);
                    inventory.push(equipment);
                }
                break;
            case 'Upgrade':
                let equipmentToUpgrade = '';
                let equipmentAsStr = equipment.split('');
                for (let j = 0; j < equipment.length; j++) {
                    let currentLetter = equipment[j];
                    
                    if (currentLetter === '-') {
                        equipmentAsStr.splice(equipmentAsStr.indexOf(currentLetter), 1, ':');
                        break;
                    }
                    equipmentToUpgrade += currentLetter;
                }
                upgradedItem = equipmentAsStr.join('');
                if (inventory.includes(equipmentToUpgrade)) {
                    let indexToFind = inventory.indexOf(equipmentToUpgrade);
                    inventory.splice([indexToFind + 1], 0, upgradedItem);
                }
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiatorInventory([
    'SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);

gladiatorInventory([
    'SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'])