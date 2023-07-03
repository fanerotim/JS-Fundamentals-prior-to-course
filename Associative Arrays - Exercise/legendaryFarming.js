function legendaryFarming(input) {

    let inputAsArr = input.split(' ');

    let keyMaterials = {
        'fragments': 0,
        'shards': 0,
        'motes': 0
    };
    let junk = {};

    let quantity = 0;
    let material = '';

    let isWon = false;
    let winningMaterial;

    for (let i = 0; i < inputAsArr.length; i++) {

        if (isWon) {
            break;
        }

        if (i % 2 === 0) {
            quantity = Number(inputAsArr[i]);
        } else {
            material = inputAsArr[i].toLowerCase();
            if (material === 'motes' || material === 'fragments' || material === 'shards') {
                keyMaterials[material] = keyMaterials[material] + quantity;
            } else {
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = quantity;
                } else {
                    junk[material] = junk[material] + quantity;
                }
            }
        }
        for (let key in keyMaterials) {
            if (keyMaterials[key] >= 250) {
                winningMaterial = material;
                keyMaterials[key] = keyMaterials[key] - 250;
                isWon = true;
                break;
            }
        }
    }
    if (material === 'shards') {
        console.log('Shadowmourne obtained!')
    } else if (material === 'fragments') {
        console.log('Valanyr obtained!')
    } else {
        console.log('Dragonwrath obtained!');
    }

    keyMaterials = Object.entries(keyMaterials).sort((a, b) => {
        if (b[1] > a[1]) {
            return 1;
        } else if (b[1] < a[1]) {
            return -1;
        } else if (b[1] === a[1]) {
            return a[0].localeCompare(b[0]);
        }
    })

    junk = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of keyMaterials) {
        console.log(`${item[0]}: ${item[1]}`);
    }

    for (let junkItem of junk) {
        console.log(`${junkItem[0]}: ${junkItem[1]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');
// legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')