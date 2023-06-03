function theLift(arr) {

    let peopleWaiting = arr.shift();
    let liftWagons = arr.shift().split(' ');
    let curWagon = 0;
    let wagonCounter = 0;
    let isFull = false;

    while (peopleWaiting > 0) {

        for (wagon of liftWagons) {
            if (Number(wagon) === 4) {
                wagonCounter++;
            } else {
                wagonCounter = 0;
            }
    
            if (wagonCounter === liftWagons.length) {
                isFull = true;
                break;
            }
        }

        if (isFull) {
            break;
        }

        if (liftWagons[curWagon] < 4) {
            liftWagons[curWagon]++;
            peopleWaiting--;
        } else if (Number(liftWagons[curWagon]) === 4) {
            curWagon++;
            if (curWagon === liftWagons.length) {
                break;
            }
        }
    }

    for (wagon of liftWagons) {
        if (Number(wagon) === 4) {
            wagonCounter++;
        } else {
            wagonCounter = 0;
        }

        if (wagonCounter === liftWagons.length) {
            isFull = true;
            break;
        }
    }

    if (peopleWaiting === 0 && isFull === false) {
        console.log("The lift has empty spots!");
        console.log(liftWagons.join(' '));
    } else if (peopleWaiting > 0 && isFull === true) {
        console.log(`There isn't enough space! ${peopleWaiting} people in a queue!`);
        console.log(liftWagons.join(' '));
    } else if (peopleWaiting === 0 && isFull === true) {
        console.log(liftWagons.join(' '));
    }
}

// theLift([
//     "15",
//     "0 0 0 0 0"
//    ]);

// theLift([
//     "20",
//     "0 2 0"
//    ])

// theLift([
//     "12",
//     "0 0 0"
//    ])

   theLift([
    "1",
    "4 3 3"
   ])