function rightPlace(str1, char, str2) {
    
    let newStr = str1.replace("_", char);

    if (newStr === str2) {
        console.log("Matched");
    } else {
        console.log("Not Matched");
    }
}

rightPlace('Str_ng',
    'I',
    'Strong')