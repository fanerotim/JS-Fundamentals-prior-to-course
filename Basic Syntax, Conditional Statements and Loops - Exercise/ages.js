function ages(age) {

    let stageOfLife = '';

    if (age < 0) {
        stageOfLife = "out of bounds";
    } else if (age >= 0 && age <= 2) {
        stageOfLife = "baby";
    } else if (age <= 13) {
        stageOfLife = "child";
    } else if (age <= 19) {
        stageOfLife = "teenager";
    } else if (age <= 65) {
        stageOfLife = "adult";
    } else if (age > 65) {
        stageOfLife = "elder";
    }

    console.log(stageOfLife);
}

ages(20);