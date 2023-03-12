function theaterPromotions(day, age) {

    let costPerTicket = 0;

    switch(day) {
        case "Weekday":

        if (age >= 0 && age <= 18) {
            costPerTicket = 12;
        } else if (age > 18 && age <= 64) {
            costPerTicket = 18;
        } else if (age > 64 && age <= 122) {
            costPerTicket = 12;
        }
            break;
        case "Weekend":

        if (age >= 0 && age <= 18) {
            costPerTicket = 15;
        } else if (age > 18 && age <= 64) {
            costPerTicket = 20;
        } else if (age > 64 && age <= 122) {
            costPerTicket = 15;
        }
            break;
        case "Holiday":

        if (age >= 0 && age <= 18) {
            costPerTicket = 5;
        } else if (age > 18 && age <= 64) {
            costPerTicket = 12;
        } else if (age > 64 && age <= 122) {
            costPerTicket = 10;
        }
            break;
    }

    if (age >= 0 && age <= 122) {
        console.log(`${costPerTicket}$`);
    } else {
        console.log("Error!")
    }
}

theaterPromotions("Holiday",
    80)