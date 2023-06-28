function meeting(arr) {

    let schedule = {};

    for (let el of arr) {
        let [day, name] = el.split(' ');

        if (schedule.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            schedule[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (let name in schedule) {
        console.log(`${name} -> ${schedule[name]}`);
    }
}

// meeting([
//     'Monday Peter',
//     'Wednesday Bill',
//     'Monday Tim',
//     'Friday Tim']);

meeting([
    'Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']);