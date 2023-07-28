function solve(input) {

    let pattern = /([=|\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let text = input;
    let match = pattern.exec(text);
    let destinations = [];
    let totalSum = 0;

    while (match) {
        let destination = match.groups['destination'];
        totalSum += destination.length;
        destinations.push(destination);
        match = pattern.exec(text);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${totalSum}`);
}

solve("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
solve("ThisIs some InvalidInput");