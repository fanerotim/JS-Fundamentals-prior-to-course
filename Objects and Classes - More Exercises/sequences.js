function sequences(arr) {

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        el = el.replace(/[^-.a-zA-Z0-9 ]/g, '').split(' ');
        el = el.map(a => Number(a));
        el = el.sort((a, b) => b - a);
        let isSame = false;

        for (let j = 0; j < result.length; j++) {
            let item = result[j];

            if (el.toString() === item.toString()) {
                isSame = true;
            }
        }
        if (!isSame) {
            result.push(el);
        }
    }

    result.sort((a, b) => a.length - b.length)
    result.forEach(el => console.log(`[${el.join(', ')}]`));
}

// sequences([
//     "[1, -2, 3]",
//     "[-3, -2, -1, 0, 1, 2, 3, 4]",
//     "[11, 2, -13, 1, 3, 14]",
//     "[7, -8, 9]",
//     "[10, 1, -17, 0, 2, 13]",
//     "[4, -3, 3, -2, 2, -1, 1, 0]",
//     "[4, -5, 6]" ,
//     "[7, -8, 9]"
// ])

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]", 
    "[10, 1, -17, 0, 2, 13]", 
    "[4, -3, 3, -2, 2, -1, 1, 0]"
])

sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]);