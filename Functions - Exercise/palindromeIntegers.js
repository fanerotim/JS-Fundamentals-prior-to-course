function palindromeIntegers(arr) {

    for (let i = 0; i < arr.length; i++) {
        
        let currentElement = arr[i];
        currentElement = currentElement.toString();
        let reversedElement = '';

        for (let j = currentElement.length - 1; j >= 0; j--) {
            reversedElement += `${currentElement[j]}`
        }
        
        if (currentElement === reversedElement) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}

// palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);