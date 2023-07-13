function matchDates(input) {

    // let pattern = /\b[0-9]{2}([.\/-])[A-Z]{1}[a-z]{2}\1\d{4}\b/g;
    let pattern = /\b(?<day>[0-9]{2})([.\/-])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>\d{4})\b/g;

    let text = input.shift();
    // let result = text.match(pattern);
    let match = pattern.exec(text);

    while (match) {
        let day = match.groups['day'];
        let month = match.groups['month'];
        let year = match.groups['year'];
        match = pattern.exec(text);
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])