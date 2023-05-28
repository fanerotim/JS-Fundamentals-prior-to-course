function sortArrayByCriteria(arr) {

    let sortedArray = arr.sort((a, b) => {
        if (a.length < b.length) {
            return -1;
        } else if (a.length > b.length) {
            return 1;
        } else if (a.length === a.length) {
            return a.localeCompare(b);
        }
    })
    
    for (element of arr) {
        console.log(element);
    }
}

sortArrayByCriteria(['alpha', 'beta', 'gamma']);
// sortArrayByCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByCriteria(['test', 'Deny', 'omen', 'Default']);