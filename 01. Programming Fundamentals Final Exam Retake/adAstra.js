function adAstra(input) {

    let pattern = /([\||#])(?<itemName>[A-Za-z\s]+)\1(?<date>\d{2}[\/]\d{2}[\/]\d{2})\1(?<calories>\d{1,6})\1/g;
    let text = input.shift();
    let result = [];
    let commands = pattern.exec(text);
    let totalCalories = 0;

    while (commands) {
        let calories = commands.groups['calories'];
        totalCalories += Number(calories);
        let item = commands.groups['itemName'];
        let expiryDate = commands.groups['date'];
        let strToPrint = `Item: ${item}, Best before: ${expiryDate}, Nutrition: ${calories}`;
        result.push(strToPrint);

        commands = pattern.exec(text);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    result.forEach(el => console.log(el));
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'])
adAstra(['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@'])