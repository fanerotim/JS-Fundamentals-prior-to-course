function blackFlag(arr) {

    let daysCount = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let goalPlunder = Number(arr.shift());
    let totalPlunder = 0;

    for (let i = 1; i <= daysCount; i++) {
        totalPlunder += dailyPlunder;
        
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }

        if (i % 5 === 0) {
            totalPlunder = totalPlunder * 0.70;
        }
    }

    if (totalPlunder >= goalPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${((totalPlunder / goalPlunder) * 100).toFixed(2)}% of the plunder.`)
    }
}

blackFlag([
    "5",
    "40",
    "100"]);

blackFlag([
    "10",
    "20",
    "380"]);

