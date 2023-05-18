function printDNA(num) {

    //let sequence = ATCGTTAGGG;
    let arr = ['**AT**', '*C--G*', 'T----T', '*A--G*', '**GG**', '*A--T*', 'C----G', '*T--T*', '**AG**', '*G--G*', 
               'A----T', '*C--G*', '**TT**', '*A--G*', 'G----G', '*A--T*', '**CG**', '*T--T*','A----G', '*G--G*']

    let counter = 0;

    for (let i = 0; i < num; i++) {

        if (counter === 20) {
            counter = 0;
        }
        console.log(arr[counter]);
        counter++;
    }
}

printDNA(1);
// printDNA(10);