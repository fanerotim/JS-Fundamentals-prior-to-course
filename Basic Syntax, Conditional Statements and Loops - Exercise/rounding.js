function rounding(round, tofix) {
    
    if (tofix <= 15) {
        round = parseFloat(round.toFixed(tofix));
    } else {
        round = parseFloat(round.toFixed(15));
    }
   
    console.log(round);
}

rounding(3.1415926535897932384626433832795, 2)