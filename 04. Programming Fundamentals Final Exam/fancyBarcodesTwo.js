function solve(arr) {

    let pattern = /(@[#]+)(?<barcode>[A-Z][A-Za-z0-9]{4,}[A-Z])(@[#]+)/g;
    let barcodesCount = Number(arr.shift());
    let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for (let i = 0; i < barcodesCount; i++) {
        let currentBarcode = arr[i];

        if (currentBarcode.match(pattern)) {
            let productGroup = '';
            for (let letter of currentBarcode) {
                if (numbers.includes(letter)) {
                    productGroup += letter;
                }
            }
            if (productGroup === '') {
                console.log('Product group: 00');
            } else {
                console.log(`Product group: ${productGroup}`);
            }
        } else {
            console.log('Invalid barcode')
        }
    }
}

solve([
    "3",
    "@#FreshFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);

// solve(["6",
// "@###Val1d1teM@###",
// "@#ValidIteM@#",
// "##InvaliDiteM##",
// "@InvalidIteM@",
// "@#Invalid_IteM@#",
// "@#ValiditeM@#"])

