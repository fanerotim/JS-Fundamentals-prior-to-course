function pyramidOfKingDjoser(base, increment) {

    let height = 0;
    let stoneNeeded = 0;
    let width = 0;
    let length = 0;
    let perimeterMarble = 0;
    let perimeterLapisLazuli = 0;
    let goldRequired = 0;
    let heightA = 0;
    
    for (let i = base; i >= 0; i -= 2) {
        height += increment;
        heightA++;
        width = i;
        length = i;

        if (i === 1) {
            goldRequired += (width * length) * increment;
        } else if (i === 2) {
            goldRequired += (width * length) * increment;
            break;
        } else {
            stoneNeeded += ((width - 2) * (length - 2)) * increment;
        }

        if (heightA % 5 === 0) {
            perimeterLapisLazuli += ((length + length + width + width) - 4) * increment;
        } else {
            perimeterMarble += ((length + length + width + width) - 4) * increment;
        }   
    }
    console.log(`Stone required: ${Math.ceil(stoneNeeded)}`);
    console.log(`Marble required: ${Math.ceil(perimeterMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(perimeterLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(goldRequired)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}

pyramidOfKingDjoser(11, 1);

