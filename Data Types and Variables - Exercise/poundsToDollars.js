function poundsToDollars(num) {

    let britishPound = 1.31;
    let totalDollars = num * britishPound;

    console.log(totalDollars.toFixed(3));
}

poundsToDollars(80);