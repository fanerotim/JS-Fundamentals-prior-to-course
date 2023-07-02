function travelTime(arr) {

    let result = {};

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let [country, city, cost] = el.split(' > ');
        cost = Number(cost);

        if (!result.hasOwnProperty(country)) {
            result[country] = [city, cost];
        } else {
            if (result[country].includes(country)); {
                if (result[country].includes(city)) {
                    let cityIndex = result[country].indexOf(city);
                    if (result[country][cityIndex + 1] > cost) {
                        result[country].splice(cityIndex + 1, 1, cost);
                    }
                } else {
                    let resultCountry = result[country];
                    for (let i = 1; i < resultCountry.length; i += 2) {
                        if (resultCountry[i] > cost) {
                            let indexOfCost = result[country].indexOf(resultCountry[i]);
                            result[country].splice(indexOfCost - 1, 0, city, cost);
                            break;
                        } else {
                            result[country].push(city, cost);
                            break;
                        }
                    }
                }
            }
        }
    }
    result = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    let finalResult = '';

    for (let i = 0; i < result.length; i++) {
        let currentItemArr = result[i];
        finalResult += currentItemArr[0];
        let counter = 0;
        let itemArr = currentItemArr[1];
        for (let j = 0; j < itemArr.length; j++) {
            counter++;
            if (counter < 3) {
                finalResult += ` -> ${itemArr[j]}`
            } else {
                finalResult += ` ${itemArr[j]}`;
                counter = 0;
            }
        }
        console.log(finalResult);
        finalResult = '';
    }
}

travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]);

// travelTime([
//     'Bulgaria > Sofia > 25000',
//     'Bulgaria > Sofia > 25000',
//     'Kalimdor > Orgrimar > 25000',
//     'Albania > Tirana > 25000',
//     'Bulgaria > Varna > 25010',
//     'Bulgaria > Lukovit > 10'
// ]);