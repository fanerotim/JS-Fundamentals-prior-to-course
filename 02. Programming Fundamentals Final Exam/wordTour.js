function wordTour(arr) {

    let initialList = arr.shift();
    let index = 0;
    let command = arr[index];

    while (command !== 'Travel') {
        command = command.split(':');
        let action = command.shift();

        switch (action) {
            case 'Add Stop':
                let curIndex = Number(command.shift());
                let strToAdd = command.shift();

                if (curIndex >= 0 && curIndex < initialList.length) {
                    initialList = initialList.split('');
                    initialList.splice(curIndex, 0, strToAdd);
                    initialList = initialList.join('');
                }
                console.log(initialList);
                break;
            case 'Remove Stop':
                let startIndex = Number(command.shift());
                let endIndex = Number(command.shift());
                if (startIndex <= endIndex) {
                    if (startIndex >= 0 && endIndex < initialList.length) {
                        for (let i = startIndex; i <= endIndex; i++) {
                            initialList = initialList.replace(initialList[startIndex], '');
                        }
                    }
                }
                console.log(initialList);
                break;
            case 'Switch':
                let oldStr = command.shift();
                let newStr = command.shift();

                if (initialList.includes(oldStr)) {
                    initialList = initialList.replace(oldStr, newStr);
                }

                console.log(initialList);
                break;
        }
        index++;
        command = arr[index];
    }
    console.log(`Ready for world tour! Planned stops: ${initialList}`);
}

// wordTour([
//     "Hawai::Cyprys-Greece",
//     "Add Stop:7:Rome",
//     "Remove Stop:11:16",
//     "Switch:Hawai:Bulgaria",
//     "Travel"]);

wordTour([
    "Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:4:8",
    "Switch:Albania: Azərbaycan",
    "Travel"])

