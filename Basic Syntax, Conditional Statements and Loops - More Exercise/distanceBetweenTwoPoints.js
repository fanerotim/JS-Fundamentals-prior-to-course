function distanceBetweenPoints(x1, y1, x2, y2) {

    let a = x1 - x2;
    let b = y1 - y2;

    let c = Math.sqrt(a * a + b * b);
    // let c = Math.hypot(a, b);

    console.log(c);
}

distanceBetweenPoints(
    2.33,
    17,
    -3.954,
    -11.2)