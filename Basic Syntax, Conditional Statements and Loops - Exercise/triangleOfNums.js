function triangle(n) {

    let counter = 0;
    let result = '';

    for (let i = 1; i <= n; i++) {
        counter++;
        for (let j = 1; j <= i; j++) {
            result += `${counter} `
        }
        console.log(result);
        result = '';
    }
}

triangle(9);