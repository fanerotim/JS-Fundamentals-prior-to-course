function heartDelivery(arr) {

    let neighbourhood = arr.shift().split('@');

    let index = 0;
    let command = arr[index];
    let decreaseHearts = 2;
    let cupid = 0;

    while (command !== 'Love!') {

        let curCommand = command.split(' ');
        let curIndex = Number(curCommand.pop());

        cupid = cupid + curIndex;

        if (cupid > neighbourhood.length - 1) {
            cupid = 0;
        }

        if (neighbourhood[cupid] > 0) {
            neighbourhood[cupid] -= decreaseHearts;
            if (neighbourhood[cupid] === 0) {
                console.log(`Place ${cupid} has Valentine's day.`)
            }
        } else {
            console.log(`Place ${cupid} already had Valentine's day.`)
        }
        index++;
        command = arr[index];
    }
    let leftHouses = 0;
    for (el of neighbourhood) {
        if (Number(el) > 0) {
            leftHouses++;
        }
    }
    console.log(`Cupid's last position was ${cupid}.`)
    if (leftHouses === 0) {
        console.log("Mission was successful.")
    } else {
        console.log(`Cupid has failed ${leftHouses} places.`)
    }
}

// heartDelivery([
//     "10@10@10@2",
//     "Jump 1",
//     "Jump 2",
//     "Love!"]);

heartDelivery([
    "2@4@2@6@8@10",
    "Jump 5",
    "Jump 0",
    "Jump 1",
    "Jump 10",
    "Jump 10",
    "Love!"]);

