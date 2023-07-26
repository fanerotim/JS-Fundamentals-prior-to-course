function solve(arr) {

    let cards = [2, 3, 4, 5, 6, 7, 8, 9, 10];
    let types = ['S', 'H', 'D', 'C'];
    let players = {};
    let playedCards = {};
    let totalSum = 0;

    for (let line of arr) {
        let currentLine = line.split(': ');
        let name = currentLine.shift();

        if (!playedCards.hasOwnProperty(name)) {
            playedCards[name] = [];
        }

        currentLine = currentLine.join('').split(', ');
        
        for (let el of currentLine) {
            let type = el[el.length - 1];

            if (playedCards[name].includes(el)) {
                continue;
            }

            switch(type) {
                case 'S':
                    type = 4;
                    break;
                case 'H':
                    type = 3;
                    break;
                case 'D':
                    type = 2;
                    break;
                case 'C':
                    type = 1;
                    break;
            }

            let power = el.slice(0, -1)

            if (!cards.includes(power)) {
                switch (power) {
                    case 'J':
                        power = 11;
                        break;
                    case 'Q':
                        power = 12;
                        break;
                    case 'K':
                        power = 13;
                        break;
                    case 'A':
                        power = 14;
                        break;
                }
            } 

            playedCards[name].push(el);
            power = Number(power);
            let currentSum = power * type;
            totalSum += currentSum;  
        }

        if (!players.hasOwnProperty(name)) {
            players[name] = totalSum;
        } else {
            players[name] += totalSum;
        }
        totalSum = 0;
    }
    
    for (let key in players) {
        console.log(`${key}: ${players[key]}`)
    }
}

solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]);


solve([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]);