function pianist(arr) {

    let piecesCount = Number(arr.shift());

    let pieces = {};

    for (let i = 0; i < piecesCount; i++) {
        let currentPiece = arr.shift();
        let [piece, composer, key] = currentPiece.split('|');
        
        if (!pieces.hasOwnProperty(piece)) {
            pieces[piece] = [composer, key];
        } 
    }

    let index = 0;
    let command = arr[index];

    while (command !== 'Stop') {
        command = command.split('|');
        let action = command.shift();
        let piece = '';

        switch(action) {
            case 'Add':
                piece = command.shift();
                let composer = command.shift();
                let key = command.shift();

                if (!pieces.hasOwnProperty(piece)) {
                    pieces[piece] = [composer, key];
                    console.log(`${piece} by ${composer} in ${key} added to the collection!`)
                } else {
                    console.log(`${piece} is already in the collection!`)
                }

                break;
            case 'Remove':
                piece = command.shift();

                if (pieces.hasOwnProperty(piece)) {
                    delete pieces[piece];
                    console.log(`Successfully removed ${piece}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }

                break;
            case 'ChangeKey':
                piece = command.shift();
                let newKey = command.shift();

                if (pieces.hasOwnProperty(piece)) {
                    pieces[piece][1] = newKey;
                    console.log(`Changed the key of ${piece} to ${newKey}!`)
                } else {
                    console.log(`Invalid operation! ${piece} does not exist in the collection.`)
                }
                break;
        }
        index++;
        command = arr[index];
    }

    for (let key in pieces) {
        console.log(`${key} -> Composer: ${pieces[key][0]}, Key: ${pieces[key][1]}`);
    }  
}

pianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'  
  ]);