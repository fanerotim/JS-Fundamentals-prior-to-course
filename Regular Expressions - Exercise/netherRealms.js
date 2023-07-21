function netherRealms(input) {

    let namePattern = /[^ ,]+/g;
    let healthPattern = /[^0-9\+\-\*\/\.]/g;
    let damagePattern = /[+-]?[0-9]+[\.]?[0-9]*/g;

    let demonNames = {};

    let text = input;
    let match = namePattern.exec(text);

    while (match) {
        demonNames[match[0]] = [];
        match = namePattern.exec(text);
    }

    for (let item in demonNames) {
        let currentHelth = 0;

        for (let letter of item) {
            if (letter.match(healthPattern)) {
                currentHelth += letter.charCodeAt();
            }
        }
        demonNames[item].push(currentHelth);
    }

    for (let curDemon in demonNames) {
        let number = damagePattern.exec(curDemon);

        let totalSum = 0;
        while (number) {
            totalSum += Number(number[0]);
            number = damagePattern.exec(curDemon);
        }

        let operators = [];

        for (let letter of curDemon) {
            if (letter === '/' || letter === '*') {
                operators.push(letter);
            }
        }

        for (let operator of operators) {
            if (operator === '/') {
                totalSum /= 2;
            } else {
                totalSum *= 2;
            }
        }

        demonNames[curDemon].push(totalSum);
    }
    demonNames = Object.entries(demonNames).sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of demonNames) {
        if (item[1][1] !== 0) {
            console.log(`${item[0]} - ${item[1][0]} health, ${item[1][1].toFixed(2)} damage`)
        } else {
            console.log(`${item[0]} - ${item[1][0]} health, ${'0.00'} damage`)
        }
    }
}

netherRealms('M3ph-0.5s-0.5t0.0**');
netherRealms('M3ph1st0**, Azazel');
netherRealms('Gos/ho');