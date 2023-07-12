function matchFullName(names) {

    let result = [];

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    while ((word = pattern.exec(names)) !== null) {
        result.push(word[0]);
    }

    console.log(result.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")