function solve(arr) {

    let firstString = arr.shift();
    let secondString = arr.shift();
    let word = arr.shift().split('');
    let vowels = 'aeiou'.split('');
    let finalString = firstString.concat(secondString).split('');
    let letterCounter = 0;

    for (let i = 0; i < finalString.length; i++) {
        let letter = finalString[i];
        
        if (vowels.includes(letter)) {
            finalString[i] = word[letterCounter].toUpperCase();
            letterCounter++;

            if (letterCounter === word.length) {
                letterCounter = 0;
            }
        }
    }
    console.log(`Your generated password is ${finalString.reverse().join('')}`);
}

solve(['ilovepizza', 'ihatevegetables', 'orange']);
solve([ 'easymoneyeazylife', 'atleasttencharacters', 'absolute' ]);
solve([ 'areyousureaboutthisone', 'notquitebutitrustyou', 'disturbed' ]);