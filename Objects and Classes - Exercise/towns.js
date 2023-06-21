function towns(arr) {

    let resultObj = {};

    for (let i = 0; i < arr.length; i++) {
        let currentItem = arr[i].split(' | ');
        
        for (let j = 0; j < currentItem.length; j++) {
            let currentElement = currentItem[j]
            if (j === 0) {
                resultObj['town'] = currentItem[j];
            } else if (j === 1) {
                resultObj['latitude'] = Number(currentElement).toFixed(2);
            } else {
                resultObj['longitude'] = Number(currentElement).toFixed(2);
            }
        }
        console.log(resultObj);
    }    
}

towns([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);

towns(['Plovdiv | 136.45 | 812.575']);