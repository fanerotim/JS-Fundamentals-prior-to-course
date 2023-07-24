function solve(input) {

    let pattern = /[a-z]/g;
    input = input.split('');
    let arr = [];

    while (input.length > 0) {
        let word = input.shift();
        
        while (input.length > 0) {
            let letter = input[0];
            if (letter.match(pattern)) {
                word += input.shift();
            } else{
                break;
            }
        }
        arr.push(word);
    }
    console.log(arr.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');