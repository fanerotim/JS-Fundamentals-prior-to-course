function solve(input) {

    let text = input.toLowerCase().split(' ');
    let output = [];
    for (let word of text) {
        let result = [];
        let filteredText = text.filter(el => {
            if (el.toLowerCase() === word) {
                result.push(el);
            }
        });
        if (result.length % 2 !== 0) {
            output.push(word);
        }
    }
    let finalResult = [output[0]];

    for (let item of output) {
        if (!finalResult.includes(item)) {
            finalResult.push(item);
        }
    }
    console.log(finalResult.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');

