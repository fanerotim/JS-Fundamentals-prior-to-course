function hearthDelivery(arr) {

    let neighbourhood = arr.shift().split('@').map(a => Number(a));

    let index = 0;
    let command = arr[index];
    let jumpLength;
    let startPosition = 0;
    let houseCount = 0;

    while (command !== 'Love!') {
        command = command.split(' ');
        jumpLength = Number(command[1]);
        startPosition = startPosition + jumpLength;

        if (startPosition > neighbourhood.length - 1) {
            startPosition = 0;
        }

        if (neighbourhood[startPosition] <= 0) {
            console.log(`Place ${startPosition} already had Valentine's day.`)
        } else {
            neighbourhood[startPosition] -= 2;
            if (neighbourhood[startPosition] <= 0) {
                console.log(`Place ${startPosition} has Valentine's day.`)
            }
        }
        index++;
        command = arr[index];
    }
    neighbourhood.map(a => {
        if (a > 0) {
            return houseCount++;
        }
    })
    console.log(`Cupid's last position was ${startPosition}.`);

    if (houseCount !== 0) {
        console.log(`Cupid has failed ${houseCount} places.`)
    } else {
        console.log("Mission was successful.")
    }
}

// hearthDelivery([
//     "10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

hearthDelivery([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"]);

