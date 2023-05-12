function orders(product, quantity) {
    
    let coffee = 1.50;
    let water = 1.00;
    let coke = 1.40;
    let snacks = 2.00;
    let cost = 0;

    switch(product) {
        case "coffee":
            cost = coffee;
            break;
        case "water":
            cost = water;
            break;
        case "coke":
            cost = coke;
            break;
        case "snacks":
            cost = snacks;
            break;
    }
    
    let result = cost * quantity;

    console.log(result.toFixed(2));
}

orders("water", 5);
orders("coffee", 2);