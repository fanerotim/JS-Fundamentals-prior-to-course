function login(input) {
    let username = input[0];
    let usernameReversed = '';

    for (let i = username.length - 1; i >= 0; i--) {
        usernameReversed += username[i];  
    }

    let currentElement = '';
    let counter = 0;

    for (let j = 1; j < input.length; j++) {
        currentElement = input[j];
        
        if (currentElement === usernameReversed) {
            console.log(`User ${username} logged in.`)
        } else {
            counter++;
            if (counter === 4) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
              console.log("Incorrect password. Try again.")
            }
        }    
    }
}

// login('Acer',
//     'login',
//     'go',
//     'let me in',
//     'recA');

// login('momo',
//     'omom')

login('sunny',
    'rainy',
    'cloudy',
    'sunny',
    'not sunny')