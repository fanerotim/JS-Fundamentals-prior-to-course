function solve(input) {

    let text = input.slice(0);
    let middlePoint = Math.floor(input.length / 2);
    let firstHalf = text.substring(0, middlePoint).split('').reverse().join('');
    let secondHalf = text.substring(middlePoint).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');