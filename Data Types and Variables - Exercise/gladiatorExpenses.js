function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let totalCost = 0;
    let shieldCounter = 0;
 

    for (let i = 1; i <= lostFightsCount; i++) {
        
        if (i % 2 === 0) {
            totalCost += helmetPrice;
        } 
        
        if (i % 3 === 0) {
            totalCost += swordPrice;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            totalCost += shieldPrice;
            shieldCounter++;
        }

        if (shieldCounter === 2) {
            totalCost += armorPrice;
            shieldCounter = 0;
        }
    } 
    console.log(`Gladiator expenses: ${totalCost.toFixed(2)} aureus`);
}

gladiatorExpenses(
    7,
    2,
    3,
    4,
    5)