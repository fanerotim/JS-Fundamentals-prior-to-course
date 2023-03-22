function bitcoinMining(input) {
    
    let bitcoinCost = 11949.16;
    let gramOfGold = 67.51;

    let currentGold = 0;
    let totalGold = 0;

    let dayCounter = 0;
    let firstBitcoinBought = 0;
    let totalBitcoinsBought = 0;

    for (let i = 0; i < input.length; i++) {
        currentGold = Number(input[i]);
        dayCounter++;

        if (dayCounter % 3 === 0) {
            currentGold *= 0.70;
        }

        totalGold += currentGold * gramOfGold;

        if (totalGold >= bitcoinCost) {
            totalBitcoinsBought += Math.floor(totalGold / bitcoinCost);
            totalGold %= bitcoinCost;
            if (firstBitcoinBought === 0) {
                firstBitcoinBought = dayCounter;
            }
        }
    }
    console.log(`Bought bitcoins: ${totalBitcoinsBought}`);

    if (firstBitcoinBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBought}`);
    }
    console.log(`Left money: ${totalGold.toFixed(2)} lv.`)
}

bitcoinMining(3124.15,
    504.212,
    2511.124);

