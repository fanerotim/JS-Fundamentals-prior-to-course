function solve(arr) {

    let pieces = {};
    let picesCount = Number(arr.shift());

    for (let i = 0; i < picesCount; i++) {
        let line = arr.shift();
        let [piece, composer, key] = line.split('|');
        pieces[piece] = [composer, key];
    }

    let command = arr.shift();

    while (command !== 'Stop') {
        command = command.split('|');
        let action = command.shift();
        let curPiece;
        
        switch(action) {
            case 'Add':
                curPiece = command.shift();
                let curComposer = command.shift();
                let curKey = command.shift();

                if (pieces.hasOwnProperty(curPiece)) {
                    console.log(`${curPiece} is already in the collection!`);
                    break;
                }
                pieces[curPiece] = [curComposer, curKey];
                console.log(`${curPiece} by ${curComposer} in ${curKey} added to the collection!`)
                break;
            case 'Remove':
                curPiece = command.shift();

                if (pieces.hasOwnProperty(curPiece)) {
                    delete pieces[curPiece];
                    console.log(`Successfully removed ${curPiece}!`)
                } else {
                    console.log(`Invalid operation! ${curPiece} does not exist in the collection.`)
                }

                break;
            case 'ChangeKey':
                curPiece = command.shift();
                let newKey = command.shift();

                if (pieces.hasOwnProperty(curPiece)) {
                    pieces[curPiece][1] = newKey;
                    console.log(`Changed the key of ${curPiece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${curPiece} does not exist in the collection.`)
                }
                break;
        }
        command = arr.shift();
    }

    for (let key in pieces) {
        console.log(`${key} -> Composer: ${pieces[key][0]}, Key: ${pieces[key][1]}`)
    }
}

// solve([
//     '3',
//     'Fur Elise|Beethoven|A Minor',
//     'Moonlight Sonata|Beethoven|C# Minor',
//     'Clair de Lune|Debussy|C# Minor',
//     'Add|Sonata No.2|Chopin|B Minor',
//     'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
//     'Add|Fur Elise|Beethoven|C# Minor',
//     'Remove|Clair de Lune',
//     'ChangeKey|Moonlight Sonata|C# Major',
//     'Stop'
// ]);

solve([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]);
