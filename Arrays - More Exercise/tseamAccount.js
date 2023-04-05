function tseamAccount(arr) {
    let index = 0;
    let tseamAccount = arr[index];
    tseamAccount = tseamAccount.split(" ")
    index++;

    let matchIndex = 0;

    let command = arr[index];
    index++;

    while (command !== 'Play!') {
        let currentCommand = command.split(" ");
        let action = '';
        let currentGame = '';

        for (let i = 0; i < currentCommand.length; i++) {

            if (i % 2 === 0) {
                action = currentCommand[i];
            } else {
                currentGame = currentCommand[i];
            }
        }
        let isFound = false;

        for (let j = 0; j < tseamAccount.length; j++) {
            if (tseamAccount[j] === currentGame) {
                isFound = true;
                break;
            }
        }

        if (isFound === false) {
            if (action === "Install") {
                tseamAccount.push(currentGame);
            }
        } else {
            if (action === "Uninstall") {
                let gameToUninstall = tseamAccount.indexOf(currentGame);
                tseamAccount.splice(gameToUninstall, 1);
            } else if (action === "Update") {
                let gameToUpdate = tseamAccount.indexOf(currentGame);
                let updatedGame = tseamAccount.splice(gameToUpdate, 1);
                
                tseamAccount.push(currentGame);
            }
        }

        let expansionCounter = 0;
        let expansionName = '';
        let expansionGame = '';
        if (action === "Expansion") {
            for (let i = 0; i < currentGame.length; i++) {
                let currentElement = currentGame[i];
                if (currentElement === "-") {
                    expansionCounter++;
                } else if (currentElement !== "-" && expansionCounter === 0) {
                    expansionGame += currentElement;
                }

                if (expansionCounter >= 1 && currentElement !== "-") {
                    expansionName += currentElement;
                }
            }

            let currentExpansionGame = '';
            let expansionGameToAdd = '';
            for (let k = 0; k < tseamAccount.length; k++) {
                currentExpansionGame = tseamAccount[k];
                if (currentExpansionGame === expansionGame) {
                    matchIndex = tseamAccount.indexOf(expansionGame);
                    expansionGameToAdd = `${expansionGame}:${expansionName}`;
                    tseamAccount.splice(matchIndex + 1, 0, expansionGameToAdd);
                }
            }
        }
        command = arr[index];
        index++;
    }
    console.log(tseamAccount.join(" "));
}

tseamAccount([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Uninstall LoL',
    'Play!']);

// tseamAccount(['CS WoW Diablo',
// 'Uninstall XCOM',
// 'Update PeshoGame',
// 'Update WoW',
// 'Expansion Civ-V',
// 'Play!'])

