function solve(arr) {

    let pattern = /([|]?[#]?)(?<name>[a-zA-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]+)\1/g;

    let match = pattern.exec(arr);
    let info = [];
    let totalCalories = 0;
    let itemName;
    let expDate;
    let cals;

    while (match) {
        itemName = match.groups['name'];
        expDate = match.groups['date'];
        cals = match.groups['calories'];
        totalCalories += Number(cals);

        info.push(itemName, expDate, cals);
        match = pattern.exec(arr);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);

    let counter = 0;
    let output = '';
    for (let i = 0; info.length > 0; i++) {
        counter++;

        if (counter === 1) {
            output += `Item: ${info.shift()}, `
        } else if (counter === 2) {
            output += `Best before: ${info.shift()}, `
        } else if (counter === 3) {
            output += `Nutrition: ${info.shift()}`;
            console.log(output);
            output = '';
            counter = 0;
        }
    }
}

// solve([
//     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
// ]);

// solve(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);

solve(['Hello|#Invalid food#19/03/20#450|$5*(@']);