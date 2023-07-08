function passwordGenerator(arr) {

    let password = arr[0].concat(arr[1]);
    let vowels = 'aeiou'.split('');
    let lettersWord = arr[2];

    let counter = 0;

    for (let i = 0; i < password.length; i++) {
        let letter = password[i];

        if (vowels.includes(letter)) {
            password = password.replace(password[i], lettersWord[counter].toLocaleUpperCase());
            counter++;

            if (counter === lettersWord.length) {
                counter = 0;
            }
        }
    }
    password = password.split('').reverse().join('');
    console.log(`Your generated password is ${password}`);
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange']);
passwordGenerator([ 'easymoneyeazylife', 'atleasttencharacters', 'absolute' ])