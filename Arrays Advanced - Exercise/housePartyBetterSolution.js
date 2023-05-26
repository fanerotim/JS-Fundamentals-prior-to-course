function houseParty(arr) {

    let guestList = [];

    for (let i = 0; i < arr.length; i++) {

        let currentGuest = arr[i].split(' ');

        if (currentGuest.length === 3 && i === 0) {
            guestList.push(currentGuest[0]);
            continue;
        }

        let name = currentGuest[0];
        let lengthCurCommand = currentGuest.length;

        if (guestList.includes(name) && lengthCurCommand === 3) {
            console.log(`${name} is already in the list!`);
            continue;
        } else if (lengthCurCommand === 3) {
            guestList.push(name);
            continue;
        }

        if (guestList.includes(name) && lengthCurCommand === 4) {
            guestList.splice(guestList.indexOf(name), 1);
            continue;
        } else {
            console.log(`${name} is not in the list!`);
            continue;
        }
    }
    for (guestName of guestList) {
        console.log(guestName);
    }
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!']);

houseParty([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);