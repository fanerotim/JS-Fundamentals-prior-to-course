function rageQuit(input) {

    let text = input[0];
    let nums = '0123456789'.split('');

    let strToPrint = '';
    let result = '';
    let num = '';
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        let curEl = text[i];

        if (!nums.includes(curEl)) {
            strToPrint += curEl;
        } else {
            num += curEl;
            counter++;
        }

        if (nums.includes(text[i + 1])) {
            continue;
        } else if (counter > 0) {
            strToPrint = strToPrint.repeat(num);
            result += strToPrint;
            strToPrint = '';
            counter = 0;
            num = 0;
        }
    }

    const lengthArr = new Set();
    
    for (let letter of result) {
        lengthArr.add(letter.toUpperCase());
    }

    console.log(`Unique symbols used: ${lengthArr.size}`);
    console.log(result.toUpperCase());
}

// rageQuit('a3');
rageQuit('aSd2&5s@1');
rageQuit('e-!btI17z=E:DMJ19U1Tvg VQ>11P"qCmo.-0YHYu~o%/%b.}a[=d15fz^"{0^/pg.Ft{W12`aD<l&$W&)*yF1WLV9_GmTf(d0($!$`e/{Dxi]-~17 *%p"%|N>zq@ %xBD18<Y(fHh`@gu#Z#p"Z<v13fI]:\Iz.17*W:\mwV`z-15g@hUYE{_$~}+X%*nytkW15')
