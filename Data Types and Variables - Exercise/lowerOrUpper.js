function lowerOrUpper(character) {

    character = character.charCodeAt(character);

    if (character >= 97 && character <= 122) {
        console.log("lower-case");
    } else {
        console.log("upper-case");
    }
}

lowerOrUpper('f');