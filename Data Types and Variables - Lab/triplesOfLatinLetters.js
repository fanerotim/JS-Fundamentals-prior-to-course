function triplesOfLattinLetters(n) {
    
    let intervalStart = 97;
    let intervalEnd = 97 + Number(n);


    let firstLetter = 0;
    for (let i = intervalStart; i < intervalEnd; i++) {
        firstLetter = String.fromCharCode(i);
        
        let secondLetter = 0;
        for (let j = intervalStart; j < intervalEnd; j++) {
            secondLetter = String.fromCharCode(j);

            let thirdLetter = 0;
            for (let k = intervalStart; k < intervalEnd; k++) {
                thirdLetter = String.fromCharCode(k);

                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }  
}

triplesOfLattinLetters(3);