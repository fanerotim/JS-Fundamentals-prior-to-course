function solve(arr) {

    let countries = {};

    for (let line of arr) {
        let [country, town, cost] = line.split(' > ');
        cost = Number(cost);

        if (!countries.hasOwnProperty(country)) {
            countries[country] = [];
            countries[country].push(town, cost);
            continue;
        }

        if (countries.hasOwnProperty(country)) {
            if (!countries[country].includes(town)) {
                countries[country].push(town, cost);
            } else {
                let townIndex = countries[country].indexOf(town);
                if (countries[country][townIndex + 1] > cost) {
                    countries[country][townIndex + 1] = cost;
                }
            }
        }
    }
    countries = Object.entries(countries).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of countries) {
        let towns = {};
        let town;
        let cost;
        let currentArr = el[1];
        let output = [el[0]];
        for (let i = 0; i < currentArr.length; i++) {
            if (i % 2 === 0) {
                town = currentArr[i];
            } else {
                cost = Number(currentArr[i]);
                towns[town] = cost;
            }
        }
        towns = Object.entries(towns).sort((a, b) => a[1] - b[1]);
        for (let curEl of towns) {
            for (let lastEl of curEl) {
                output.push(lastEl);
            }
        }
        let strToPrint = '';
        let counter = 0;
        for (let j = 0; j < output.length; j++) {
            let currentElement = output[j];

            if (j === 0) {
                strToPrint += `${currentElement} -> `
                continue;
            }
            counter++;

            if (counter % 2 !== 0) {
                strToPrint += `${currentElement} -> `
            } else if (counter % 2 === 0 && j + 1 === output.length) {
                strToPrint += `${currentElement}`
            } else {
                strToPrint += `${currentElement} `
            }
        }
        console.log(strToPrint);
    }
}

solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

// solve([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
//     ]);