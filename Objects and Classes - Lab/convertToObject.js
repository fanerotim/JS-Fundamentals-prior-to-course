function convertToObject(input) {

    let convertedObj = JSON.parse(input);
    
    for (let key in convertedObj) {
        console.log(`${key}: ${convertedObj[key]}`)
    }

    // for (let key of Object.keys(convertedObj)) {
    //     console.log(`${key}: ${convertedObj[key]}`)
    // }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObject('{"name": "Peter", "age": 35, "town": "Plovdiv"}')