function solve(arr) {

    let stops = arr.shift();
    let command = arr.shift();

    while (command !== 'Travel') {

        if (command.includes('Switch')) {
            command = command.split(':');
        } else {
            command = command.split(' ');
        }
        let action = command.shift();

        switch (action) {
            case 'Add':
                command = command.join('').split(':');
                let index = Number(command[1]);
                let string = command[2];

                if (index >= 0 && index < stops.length) {
                    let initialString = stops.substring(0, index);
                    stops = stops.replace(initialString, '');
                    stops = initialString + string + stops;
                }
                console.log(stops);
                break;
            case 'Remove':
                command = command.join('').split(':');
                let startIndex = Number(command[1]);
                let endIndex = Number(command.pop());

                if ((startIndex >= 0 && startIndex < stops.length) && (endIndex >= 0 && endIndex < stops.length)) {
                    let stringToRemove = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(stringToRemove, '');
                }
                console.log(stops);
                break;
            case 'Switch':
                let oldString = command.shift();
                let newString = command.pop();

                if (stops.includes(oldString)) {
                    stops = stops.replace(oldString, newString);
                }
                console.log(stops);
                break;
        }
        command = arr.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)
}

// solve([
//     "Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]); 

// solve([
//     "Albania:Bulgaria:Cyprus:Deuchland",
//     "Add Stop:3:Nigeria",
//     "Remove Stop:4:8",
//     "Switch:Albania: Azərbaycan",
//     "Travel"])

solve([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Switch:Greece:Greece",
    "Travel"]);

