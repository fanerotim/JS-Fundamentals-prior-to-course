function solve(input) {

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let matches = input.match(pattern);
    let result = [];

    for (let name of matches) {
        result.push(name);
    }

    console.log(result.join(' '));
}

solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov")