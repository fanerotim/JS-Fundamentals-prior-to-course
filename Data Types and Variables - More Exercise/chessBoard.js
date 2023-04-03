function chessBoard(num) {

    let finalResult = `<div class="chessboard">
    <div> \n`;

    let result = '';
    let resultEven = '';

    for (let i = 1; i <= num; i++) {

        if (i % 2 !== 0) {
            result += `        <span class="black"></span> \n`;
        } else {
            result += `        <span class="white"></span> \n`;
        }

        if (i === num) {
            result += `    </div>`;
        }

    }

    for (let i = 1; i <= num; i++) {

        if (i % 2 !== 0) {
            resultEven += `        <span class="white"></span> \n`;
        } else {
            resultEven += `        <span class="black"></span> \n`;
        }

        if (i === num) {
            resultEven += `    </div>`;
        }

    }

    finalResult += result;
    let section = `\n<div>\n${result}`;
   

    for (let j = 2; j <= num; j++) {

        if (j % 2 === 0) {
            finalResult += `\n<div>\n${resultEven}`;
        } else {
            finalResult += section;
        }
    }

    console.log(finalResult)
    console.log(`</div>`)
}

chessBoard(3);