function blackFlag(arr) {

    let plunderDays = Number(arr.shift());
    let dailyPlunder = Number(arr.shift());
    let goalPlunder = Number(arr.shift());
    let totalPlunder = 0;

    for (let i = 1; i <= plunderDays; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.5;
        }
        
        if (i % 5 === 0) {
            totalPlunder -= totalPlunder * 0.3;
        }
    }

    let plunderPercentage = (totalPlunder / goalPlunder) * 100;

    if (totalPlunder >= goalPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`)
    } else {
        console.log(`Collected only ${plunderPercentage.toFixed(2)}% of the plunder.`)
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

