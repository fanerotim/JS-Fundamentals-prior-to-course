function shootForTheWin(arr) {

    let targets = arr.shift().split(' ').map(a => Number(a));

    let index = 0;
    let command = arr[index];
    let shotTargets = 0;

    while (command !== 'End') {
        command = Number(command);

        if (command >= 0 && command < targets.length) {
            if (targets[command] !== -1) {
                for (let i = 0; i < targets.length; i++) {
                    if (i !== command) {
                        if (targets[i] !== -1 && targets[i] > targets[command]) {
                            targets[i] -= targets[command];
                        } else if (targets[i] !== -1 && targets[i] <= targets[command]) {
                            targets[i] += targets[command];
                        }
                    }
                }
                targets[command] = -1;
                shotTargets++;
            }
        }
        index++;
        command = arr[index];
    }
    console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`)
}

shootForTheWin([
    "24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"]);

shootForTheWin([
    "30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"]);

