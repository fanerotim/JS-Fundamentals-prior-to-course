function foreignLanguages(country) {
    // let country = input[0];

    if (country === "USA" || country === "England") {
        console.log("English")
    } else if (country === "Spain" || country === "Argentina" || country === "Mexico") {
        console.log("Spanish")
    } else {
        console.log("unknown");
    }
}

foreignLanguages("abc");