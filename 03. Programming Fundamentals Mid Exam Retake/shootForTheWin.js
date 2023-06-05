function shootForTheWin(arr) {

    let targetArr = arr.shift().split(' ');

    let index = 0;
    let command = arr[index];
    let shotTargetsCounter = 0;

    for (let i = 0; i < targetArr.length; i++) {
        targetArr[i] = Number(targetArr[i]);
    }

    while (command !== 'End') {
        let curIndex = Number(command);
        let valueOfIndexAt;

        if (curIndex >= 0 && curIndex <= targetArr.length - 1) {

            if (targetArr[curIndex] !== -1) {
                valueOfIndexAt = targetArr[curIndex];
                targetArr[curIndex] = -1;
                shotTargetsCounter++;
            }

            for (let j = 0; j < targetArr.length; j++) {
                if (targetArr[j] > valueOfIndexAt && targetArr[j] !== -1) {
                    targetArr[j] -= valueOfIndexAt;
                } else if (targetArr[j] <= valueOfIndexAt && targetArr[j] !== -1) {
                    targetArr[j] += valueOfIndexAt;
                }
            }
        } else {
            index++;
            command = arr[index];
            continue;
        }
        index++;
        command = arr[index];
    }
    let targetArrAsStr = targetArr.join(' ');
    console.log(`Shot targets: ${shotTargetsCounter} -> ${targetArrAsStr}`)
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

