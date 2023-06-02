function buildAWall(arr) {

    let heightBuiltToday = 0;
    let result = [];
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentSection = arr[i];

        if (currentSection < 30) {
            arr[i]++;
            heightBuiltToday++;
        }

        if (i === arr.length - 1) {
            let concreteUsedToday = heightBuiltToday * 195;
            result.push(concreteUsedToday);
            heightBuiltToday = 0;

            for (el of arr) {
                if (el === 30) {
                    counter++;
                } else {
                    counter = 0;
                }
            }

            if (counter === arr.length) {
                break;
            }
            i = -1;
            counter = 0;
        }
    }

    let sum = 0;

    for (num of result) {
        sum += num;
    }

    sum = sum * 1900;
    console.log(result.join(', '));
    console.log(`${sum} pesos`)
}

buildAWall([21, 25, 28]);
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);