function solve(input) {

    let text = input[0];
    text = text.split(' ');
    let words = input[1];

    for (let i = 0; i < text.length; i++) {
        let slot = text[i];
        let punctuation = '';
        if (slot.includes('_')) {
            if (slot[slot.length - 1] !== '_') {
                punctuation = slot[slot.length - 1];
                slot = slot.replace(slot[slot.length - 1], '');
            }

            for (let word of words) {
                if (slot.length === word.length) {
                    text[i] = word + punctuation;
                }
            }
        }
    }
    console.log(text.join(' '));
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])