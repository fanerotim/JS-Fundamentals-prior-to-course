function fancyBarcodes(arr) {

    let barcodesCount = Number(arr.shift());
    let pattern = /@[#]+(?<barcode>[A-Z][A-Za-z\d]{4,}[A-Z])@[#]+/;
    let validBarcodes = [];

    for (let i = 0; i < barcodesCount; i++) {
        let currentBarcode = arr[i];
        let validBarcode = pattern.exec(currentBarcode);

        if (validBarcode) {
            let currentBarcode = validBarcode.groups['barcode'];
            let isFound = false;
            let productGroup = '';

            for (let letter of currentBarcode) {
                if (letter >= 0 && letter <= 9) {
                    productGroup += letter;
                    isFound = true;
                }
            }
            if (!isFound) {
                console.log(`Product group: 00`);
            } else {
                console.log(`Product group: ${productGroup}`);
            }

        } else {
            console.log("Invalid barcode");
        }
    }
}

// fancyBarcodes([
//     "3",
//     "@#FreshFisH@#",
//     "@###Brea0D@###",
//     "@##Che4s6E@##"]);

fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);

