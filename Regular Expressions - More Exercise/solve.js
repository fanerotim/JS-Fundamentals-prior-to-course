function solve(input) {

    let numsArr = input[0].split(/[^0-9]+/).filter(x => x !== '');
    let letterArr = input[0].toUpperCase().split(/[0-9]+/).filter(y => y !== '');
    
    let result = '';
    for (let i = 0; i < letterArr.length; i++) {
        result += letterArr[i].repeat(numsArr[i]);
    }
    const lengthArr = new Set();
    
    for (let letter of result) {
        lengthArr.add(letter);
    }
    console.log(`Unique symbols used: ${lengthArr.size}`);
    console.log(result);
}

solve('a3');
solve('aSd2&5s@1');
// solve('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{Dxi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]:\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15');