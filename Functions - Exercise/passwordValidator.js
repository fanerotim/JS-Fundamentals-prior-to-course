function passwordValidator(pass) {

    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }

    let digitCount = 0;
    let letterCount = 0;
    let currentElement = '';
    let specialCharCount = 0;

    for (let i = 0; i < pass.length; i++) {
        currentElement = pass[i];

        if (currentElement.charCodeAt() >= 48 && currentElement.charCodeAt() <= 57) {
            digitCount++;
        } else if ((currentElement.charCodeAt() >= 65 && currentElement.charCodeAt() <= 90) || (currentElement.charCodeAt() >= 97 && currentElement.charCodeAt() <= 122)) {
            letterCount++;
        } else {
            specialCharCount++;
            if (specialCharCount === 1) {
                console.log('Password must consist only of letters and digits')
            }
        }
    }

    if (digitCount < 2) {
        console.log('Password must have at least 2 digits')
    } else if (specialCharCount === 0) {
        console.log('Password is valid');
    }   
}

passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');