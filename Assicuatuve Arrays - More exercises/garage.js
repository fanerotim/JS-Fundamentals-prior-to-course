function garage(arr) {

    let garageNum = 0;
    let finalRes = {};

    arr.forEach(el => {
        let currentItem = el.split(', ');
        for (let i = 0; i < currentItem.length; i++) {
            currentItem[i] = currentItem[i].split(' - ');
            let innerObj = {};

            for (let j = 0; j < currentItem.length; j++) {
                let curCommnad = currentItem[j];

                if (curCommnad.length === 2) {
                    garageNum = Number(curCommnad.shift());
                    curCommnad = curCommnad.join('');
                }

                curCommnad = curCommnad.split(': ')

                if (!finalRes.hasOwnProperty(garageNum)) {
                    finalRes[garageNum] = [];
                }

                let property = curCommnad[0];
                let value = curCommnad[1]
                innerObj[property] = value;
            }

            finalRes[garageNum].push(innerObj);
            break;
        }
    })

    finalRes = Object.entries(finalRes)

    finalRes.forEach(el => {
        let garageNum = el.shift();
        let strToPrint = '--- ';
        console.log(`Garage № ${garageNum}`);
        for (let item of el) {
            for (let element in item) {
                let lastArr = Object.entries(item[element]);
                for (let curEl of lastArr) {
                    strToPrint += `${curEl[0]} - ${curEl[1]}, `
                }
                strToPrint = strToPrint.slice(0, -2)
                console.log(strToPrint);
                strToPrint = '--- ';
            }
        }
    })
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);

// garage(['13 - color: green, fuel type: petrol',
//     '1 - color: dark red, manufacture: WV',
//     '2 - fuel type: diesel',
//     '3 - color: dark blue, fuel type: petrol']);