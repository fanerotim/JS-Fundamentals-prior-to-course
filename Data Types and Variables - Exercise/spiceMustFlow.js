function spiceMustFlow(spiceQuantity) {

    let daysCount = 0;
    let totalSpice = 0;

    for (let i = spiceQuantity; spiceQuantity >= 100; i++) {
        daysCount++;

        totalSpice += spiceQuantity;

        if (totalSpice >= 26) {
            totalSpice -= 26;
        }

        if (daysCount >= 1) {
            spiceQuantity -= 10;
        }
    }

    if (spiceQuantity < 100 && totalSpice >= 26) {
        totalSpice -= 26;
    }

    console.log(daysCount);
    console.log(totalSpice);
}

spiceMustFlow(450)