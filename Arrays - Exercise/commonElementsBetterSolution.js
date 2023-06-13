function commonElements(arrOne, arrTwo) {

    let result = arrOne.map(a => {
        if (arrTwo.includes(a)) {
            console.log(a);
        }
    })
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l'])