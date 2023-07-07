function cutAndReverse(input) {

    let totalLength = input.length;

    let firstHalf = input.substring(0, totalLength / 2).split('').reverse().join('');
    let secondHalf = input.substring(totalLength / 2).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');