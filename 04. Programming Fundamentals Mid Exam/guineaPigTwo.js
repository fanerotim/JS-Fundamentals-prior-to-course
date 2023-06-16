function guineaPig(arr) {

    let foodInGrams = Number(arr.shift()) * 1000;
    let hayInGrams = Number(arr.shift()) * 1000;
    let coverInGrams = Number(arr.shift()) * 1000;
    let weightInGrams = Number(arr.shift()) * 1000;
    
    for (let i = 1; i <= 30; i++) {
        foodInGrams -= 300;

        if (i % 2 === 0) {
            let dailyHay = foodInGrams * 0.05;
            hayInGrams -= dailyHay;
        }

        if (i % 3 === 0) {
            let dailyCover = weightInGrams / 3;
            coverInGrams -= dailyCover;
        }

        if (foodInGrams <= 0 || hayInGrams <= 0 || coverInGrams <= 0) {
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    console.log(`Everything is fine! Puppy is happy! Food: ${(foodInGrams / 1000).toFixed(2)}, Hay: ${(hayInGrams / 1000).toFixed(2)}, Cover: ${(coverInGrams / 1000).toFixed(2)}.`)
}

guineaPig([
    "10", 
    "5", 
    "5.2", 
    "1"]);

guineaPig([
    "1", 
    "1.5", 
    "3", 
    "1.5"
    ]);

guineaPig(["9",
"5",
"5.2",
"1"])


