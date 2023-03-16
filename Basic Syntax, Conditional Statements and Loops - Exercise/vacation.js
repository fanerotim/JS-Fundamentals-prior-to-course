function vacation(peopleCount, groupType, day) {

    let costPerDay = 0;

    switch(groupType) {
        case "Students":

            if (day === "Friday") {
                costPerDay = 8.45;
            } else if (day === "Saturday") {
                costPerDay = 9.80;
            } else if (day === "Sunday") {
                costPerDay = 10.46;
            }
            break;
        case "Business":

            if (day === "Friday") {
                costPerDay = 10.90;
            } else if (day === "Saturday") {
                costPerDay = 15.60;
            } else if (day === "Sunday") {
                costPerDay = 16;
            }
            break;
        case "Regular":

            if (day === "Friday") {
                costPerDay = 15;
            } else if (day === "Saturday") {
                costPerDay = 20;
            } else if (day === "Sunday") {
                costPerDay = 22.50;
            }
            break;
    }

    if (groupType === "Students") {
        if (peopleCount >= 30) {
            costPerDay -= costPerDay * 0.15;
        }
    } else if (groupType === "Business") {
        if (peopleCount >= 100) {
            peopleCount -= 10;
        }
    } else if (groupType === "Regular") {
        if (peopleCount >= 10 && peopleCount <= 20) {
            costPerDay -= costPerDay * 0.05;
        }
    }

    let finalCost = peopleCount * costPerDay;

    console.log(`Total price: ${finalCost.toFixed(2)}`);
}

vacation(30,
    'Students',
    'Sunday')