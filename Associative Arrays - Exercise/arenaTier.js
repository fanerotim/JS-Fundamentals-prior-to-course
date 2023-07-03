function arenaTier(arr) {

    let index = 0;
    let command = arr[index];

    let result = {};

    while (command !== 'Ave Cesar') {
        let [gladiator, technique, skill] = command.split(' -> ');
        skill = Number(skill);

        if (technique !== undefined) {
            if (!result.hasOwnProperty(gladiator)) {
                result[gladiator] = [];
                result[gladiator].push([technique], [skill]);
            } else {
                let curGladiator = result[gladiator];
                if (!curGladiator[0].includes(technique)) {
                    curGladiator[0].push(technique);
                    curGladiator[1].push(skill)
                } else {
                    let techniqueIndex = curGladiator[0].indexOf(technique);
                    let skillArr = curGladiator[1];
                    if (skillArr[techniqueIndex] < skill) {
                        skillArr[techniqueIndex] = skill;
                    }
                }
            }
        } else {
            command = command.split(' ');
            let gladiatorOne = command.shift();
            let gladiatorTwo = command.pop();

            if (result.hasOwnProperty(gladiatorOne) &&
                result.hasOwnProperty(gladiatorTwo)) {

                let firstGladiatorTechniques = result[gladiatorOne];
                let secondGladiatorTechniques = result[gladiatorTwo];
                for (let i = 0; i < firstGladiatorTechniques[0].length; i++) {
                    let allTechniques = firstGladiatorTechniques[0];
                    let curTechnique = allTechniques[i];

                    if (secondGladiatorTechniques[0].includes(curTechnique)) {
                        let skillArrOfGladiatorOne = result[gladiatorOne];
                        let gladiatorOneSkill = 0;
                        skillArrOfGladiatorOne[1].forEach(num => gladiatorOneSkill += num);

                        let skillArrOfGladiatorTwo = result[gladiatorTwo];
                        let gladiatorTwoSkill = 0;

                        skillArrOfGladiatorTwo[1].forEach(el => gladiatorTwoSkill += el);

                        if (gladiatorOneSkill > gladiatorTwoSkill) {
                            delete result[gladiatorTwo];
                            break;
                        } else {
                            delete result[gladiatorOne];
                            break;
                        }
                    }
                }
            }
        }
        index++;
        command = arr[index];
    }

    for (let item in result) {
        let skillsArr = result[item];
        let sum = 0;
        for (let num of skillsArr[1]) {
            sum += num;
        }
        let curGladiator = result[item];
        curGladiator[2] = sum;
    }

    result = Object.entries(result).sort((a, b) => {
        if (b[1][2] > a[1][2]) {
            return 1
        } else if (b[1][2] < a[1][2]) {
            return -1;
        } else if (b[1][2] = a[1][2]) {
            return a[0].localeCompare(b[0]);
        }
    });

    let skillAndTech = {};

    for (let i = 0; i < result.length; i++) {
        let name = result[i][0];
        let totalSkill = result[i];
        console.log(`${name}: ${totalSkill[1][2]} skill`);

        let innerArr = totalSkill[1];
        for (let j = 0; j < innerArr[0].length; j++) {
            skillAndTech[innerArr[0][j]] = innerArr[1][j];
        }

        let skillAndTechArr = Object.entries(skillAndTech).sort((a, b) => {
            if (b[1] > a[1]) {
                return 1;
            } else if (b[1] < a[1]) {
                return -1;
            } else if (b[1] === a[1]) {
                return a[0].localeCompare(b[0]);
            }
        })

        for (let item of skillAndTechArr) {
            console.log(`- ${item[0]} <!> ${item[1]}`);
        }
        skillAndTech = {};
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);

// arenaTier([
//     'Peter -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ])