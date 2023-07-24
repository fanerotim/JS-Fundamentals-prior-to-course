function solve(input) {

    let pattern = /#[A-Za-z]+\b/g;
    let textArr = input.split(' ');
    
    textArr.forEach(word => {
        if (word.startsWith('#')) {
            if (word.match(pattern)) {
                console.log(word.substring(1));
            }
        }
    });
}

solve('Nowadays everyone uses # to tag a #12sp12ecial word in #socialMedia');
solve('The symbol # is known #variously111 in English-speaking #regions as the #number sign');