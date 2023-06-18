function friendListMaintenance(arr) {

    let friendsList = arr.shift().split(', ');
    
    let index = 0;
    let command = arr[index];
    let blacklistCounter = 0;
    let lostNamesCounter = 0;

    while (command !== 'Report') {
        command = command.split(' ');
        let action = command.shift();
        let element;
        let indexOfElement;

        switch(action) {
            case "Blacklist":
                element = command.shift();
                if (friendsList.includes(element)) {
                    console.log(`${element} was blacklisted.`);
                    indexOfElement = friendsList.indexOf(element);
                    friendsList.splice(indexOfElement, 1, "Blacklisted");
                    blacklistCounter++;
                } else {
                    console.log(`${element} was not found.`)
                }
                break;
            case "Error":
                indexOfElement = Number(command.shift());
                if (indexOfElement >= 0 && indexOfElement < friendsList.length) {
                    if (friendsList[indexOfElement] !== 'Blacklisted' && friendsList[indexOfElement] !== 'Lost') {
                        console.log(`${friendsList[indexOfElement]} was lost due to an error.`);
                        friendsList[indexOfElement] = 'Lost';
                        lostNamesCounter++;
                    }
                }
                break;
            case "Change":
                indexOfElement = Number(command.shift());
                let newName = command.shift();
                if (indexOfElement >= 0 && indexOfElement < friendsList.length) {
                    console.log(`${friendsList[indexOfElement]} changed his username to ${newName}.`);
                    friendsList[indexOfElement] = newName;
                }
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`Blacklisted names: ${blacklistCounter}`);
    console.log(`Lost names: ${lostNamesCounter}`);
    console.log(friendsList.join(' '));
}

// friendListMaintenance([
//     "Mike, John, Eddie",
//     "Blacklist Mike",
//     "Error 0",
//     "Report"]);

// friendListMaintenance([
//     "Mike, John, Eddie, William",
//     "Error 3",
//     "Error 3",
//     "Change 0 Mike123",
//     "Report"]);

friendListMaintenance([
    "Mike, John, Eddie, William",
    "Blacklist Maya",
    "Error 1",
    "Change 4 George",
    "Report"]);


