function repeatString(string, count) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(string);
    }
    console.log(result.join(""));
}


repeatString("abc", 3);
repeatString("String", 2)