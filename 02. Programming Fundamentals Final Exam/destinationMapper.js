function destinationMapper(arr) {

    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z]{2,})\1/g;

    let text = arr;
    let match = pattern.exec(text);
    let totalPoints = 0;
    let destinations = [];

    while (match) {
        let destination = match.groups['destination'];
        let points = destination.length;
        totalPoints += points;
        destinations.push(destination);
        match = pattern.exec(text);
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${totalPoints}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
destinationMapper("ThisIs some InvalidInput");