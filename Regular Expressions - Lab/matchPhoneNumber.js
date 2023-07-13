function matchPhoneNum(numbers) {

    let pattern = /\+359([ -])2\1[0-9]{3}\1[0-9]{4}\b/g;

    let result = [];

    while ((validPhone = pattern.exec(numbers)) !== null) {
        result.push(validPhone[0]);
    }

    console.log(result.join(', '));
}

matchPhoneNum('+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222')