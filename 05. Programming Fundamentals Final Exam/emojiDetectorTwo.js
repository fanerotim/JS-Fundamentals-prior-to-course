function solve(arr) {

    let pattern = /([\::]{2}|[**]{2})(?<emoji>[A-Z][a-z]{2,})\1/g;
    let digitsPattern = /[0-9]/g;
    let text = arr.toString();
    
    let coolnessThreshold = 1;

    for (let char of text) {
        if (char.match(digitsPattern)) {
            coolnessThreshold *= Number(char);
        }
    }
    
    let match = pattern.exec(text);
    let foundEmojis = [];
    let coolEmojis = [];

    for (let i = 0; i < text.length; i++) {
        if (match) {
            let emoji = match.groups['emoji'];
            foundEmojis.push(match[0]);
            let currentCoolnessSum = 0;

            for (let letter of emoji) {
                currentCoolnessSum += letter.charCodeAt();
            }

            if (currentCoolnessSum > coolnessThreshold) {
                coolEmojis.push(match[0]);
            }
            match = pattern.exec(text);
        }
    }
    console.log(`Cool threshold: ${coolnessThreshold}`);
    console.log(`${foundEmojis.length} emojis found in the text. The cool ones are:`);
    coolEmojis.forEach(el => console.log(el));
}

// solve(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"]);
