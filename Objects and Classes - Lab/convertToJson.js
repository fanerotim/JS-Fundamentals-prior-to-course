function convertToJson(firstName, lastName, hairColor) {

    let result = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor,
    }
    
    result = JSON.stringify(result);
    console.log(result);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');