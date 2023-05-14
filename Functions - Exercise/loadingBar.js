function loadingBar(number) {

    let result = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

    for (let i = 10; i <= number; i += 10) {
        result.unshift('%');
        result.pop();
    }

    result.push(']');
    result.unshift('[')
    result.unshift(`${number}% `)

    if (number < 100) {
        console.log(result.join(''));
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]')
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);