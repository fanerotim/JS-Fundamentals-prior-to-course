function emoji(input) {

    let pattern = /([:]{2}|[*]{2})(?<emoji>[A-Z]{1}[a-z]{2,})\1/g;
    let digitPattern = /[0-9]/g;
    let letterPattern = /[A-Za-z]/g;

    let text = input.shift();
    let coolnessSum = 0;
    let counter = 0;

    for (let i = 0; i < text.length; i++) {
        let currentElement = text[i];
   
        if (currentElement.match(digitPattern)) {
            counter++;
            if (counter === 1) {
                coolnessSum = Number(currentElement);
            } else {
                coolnessSum = coolnessSum * Number(currentElement)
            }
        }
    }
    console.log(`Cool threshold: ${coolnessSum}`);

    let match = pattern.exec(text);
    let emojis = [];

    while (match) {
        emojis.push(match[0]);
        match = pattern.exec(text);
    }

    console.log(`${emojis.length} emojis found in the text. The cool ones are:`)
    for (let item of emojis) {
        let asciiSum = 0;
        for (let letter of item) {
            if (letter.match(letterPattern)) {
                asciiSum += letter.charCodeAt();
            }
        }
        if (asciiSum > coolnessSum) {
            console.log(item);
        }
    }
}

emoji(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
emoji(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
emoji(["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]);