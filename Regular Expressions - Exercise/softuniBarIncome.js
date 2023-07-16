function softuni(arr) {

    // let pattern = /%(?<name>[A-Z][a-z]+)%(?<any>\w*[^|$%\.]*)<(?<product>\w+)>(\w*[^|$%\.]*)\|(?<count>\d+)\|(\w*[^|$%\.]*)\b(?<price>\d+\.*\d+\$)/g;
    let pattern = /%(?<name>[A-Z][a-z]+)%(?<any>\w*[^|$%\.]*)<(?<product>\w+)>(\w*[^|$%\.]*)\|(?<count>\d+)\|(\W*[^|$%\.\d+]*)(?<price>\d+\.*\d+\$)/g;

    let totalSum = 0;
    let index = 0;
    let command = arr[index];

    while (command !== 'end of shift') {

        let text = command.match(pattern);
        let updatedText = pattern.exec(text);
        while (updatedText) {

            let price = updatedText.groups.price;
            price = price.slice(0, -1);
            price = Number(price);
            let quantity = updatedText.groups.count;
            quantity = Number(quantity);

            console.log(`${updatedText.groups.name}: ${updatedText.groups.product} - ${(price * quantity).toFixed(2)}`)
            totalSum += price * quantity
            updatedText = pattern.exec(command);
        }
            
        index++;
        command = arr[index];
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softuni([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);

softuni([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'])