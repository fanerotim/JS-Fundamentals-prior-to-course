function houseParty(arr) {

    let guestList = [];
    let guestCounter = 0;

    for (let i = 0; i < arr.length; i++) {

        let currentGuest = arr[i].split(' ');

        if (currentGuest.length === 3 && i === 0) {
            guestList.push(currentGuest[0]);
            continue;
        }

        for (guest of guestList) {
            let name = currentGuest[0];

            if (name === guest && currentGuest.length === 3) {
                console.log(`${name} is already in the list!`);
                break;
            } else if (name === guest && currentGuest.length === 4) {
                guestList.splice(guestList.indexOf(name, 1))
            } else if (currentGuest.length === 4) {

                if (name !== guest) {
                    guestCounter++;

                    if (guestCounter === guestList.length) {
                        console.log(`${name} is not in the list!`);
                        guestCounter = 0;
                        continue
                    }
                }
            } else {
                guestList.push(name);
                break;
            }
        }
    }
    for (guestName of guestList) {
        console.log(guestName);
    }
}

houseParty([
    'Allie is going!',
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!',
    'Petar is not going']);

// houseParty([
//     'Tom is going!',
//     'Annie is going!',
//     'Tom is going!',
//     'Garry is going!',
//     'Jerry is going!']);