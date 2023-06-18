function angryCat(arr, entryPoint, command) {

    let itemsList = arr.slice(0);
    let startIndex = arr[entryPoint];
    let curCommand = command;

    let leftArr = itemsList.slice(0, entryPoint);
    let rightArr = itemsList.slice(entryPoint + 1);

    let sumOfLeftArr = 0;
    let sumOfRightArr = 0;

    switch (curCommand) {
        case "cheap":
            for (el of leftArr) {
                if (el < startIndex) {
                    sumOfLeftArr += el;
                }
            }

            for (item of rightArr) {
                if (item < startIndex) {
                    sumOfRightArr += item;
                }
            }
            break;
        case "expensive":

            for (rightEl of leftArr) {
                if (rightEl >= startIndex) {
                    sumOfLeftArr += rightEl;
                }
            }

            for (rightItem of rightArr) {
                if (rightItem >= startIndex) {
                    sumOfRightArr += rightItem;
                }
            }
            break
    }

    if (sumOfLeftArr >= sumOfRightArr) {
        console.log(`Left - ${sumOfLeftArr}`);
    } else {
        console.log(`Right - ${sumOfRightArr}`);
    }
}

angryCat(
    [1, 5, 1],
    1,
    "cheap");

angryCat(
    [5, 10, 12, 5, 4, 20],
    3,
    "cheap")

angryCat(
    [-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive");

