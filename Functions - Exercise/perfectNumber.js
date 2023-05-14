function perfectNum(number) {

    let result = 0;
    for (let i = 1; i < number; i++) {
        
        if (number % i === 0) {
            result += i;
        }
    }
    
    if (result === number) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
    result = 0;
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);