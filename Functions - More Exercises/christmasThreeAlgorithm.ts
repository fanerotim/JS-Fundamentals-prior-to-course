function solve(number: number) {

    const length = number * 2 - 1;
    
    let stars = '';

    for (let i = 0; i < number; i++) {
        
        if (i === 0) {
            stars = '*';
        } else {
            stars = stars + '**';
        }
        
        const numberOfStars = stars.length;
        const numberOfEmptySpaces = length - stars.length;
        
        // console.log('number of empty spaces: ', numberOfEmptySpaces, ', number of stars:  ', numberOfStars)
        const finalString = ' '.repeat(numberOfEmptySpaces / 2) + stars + ' '.repeat(numberOfEmptySpaces / 2)
        console.log(finalString);
    }
    
}

solve(15)