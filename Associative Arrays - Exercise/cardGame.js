function cardGame(arr) {

    let result = {};
    
    for (let i = 0; i < arr.length; i++) {
        let [name, cards] = arr[i].split(': ');
        cards = cards.split(', ');
        
        if (!result.hasOwnProperty(name)) {
            result[name] = [];
        }

        for (let card of cards) {
            if (!result[name].includes(card)) {
                result[name].push(card);
            }
        }
    }

    for (let item in result) {
        let cardsArr = result[item];
        let cardSum = 0;
        for (let curCard of cardsArr) {
            curCard = curCard.split('');
            let type = curCard.pop();
            let power = curCard.join('');  

            switch(power) {
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
                    break
            }
            power = Number(power);  
            cardSum += power * type;
        }
        console.log(`${item}: ${cardSum}`);
    }
}

// cardGame([
//     'Peter: 2C, 4H, 9H, AS, QS',
//     'Tomas: 3H, 10S, JC, KD, 5S, 10S',
//     'Andrea: QH, QC, QS, QD',
//     'Tomas: 6H, 7S, KC, KD, 5S, 10C',
//     'Andrea: QH, QC, JS, JD, JC',
//     'Peter: JD, JD, JD, JD, JD, JD'
//     ]);

cardGame([
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