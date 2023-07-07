function bookShelf(arr) {

    let result = {};
    let finalResult = {};

    for (let i = 0; i < arr.length; i++) {
        let curInfo = arr[i];

        if (curInfo.includes('->')) {
            let [shelfId, genre] = curInfo.split(' -> ');
            shelfId = Number(shelfId);
            if (!result.hasOwnProperty(shelfId)) {
                result[shelfId] = genre;
            }
        } else {
            curInfo = curInfo.split(': ');
            let bookTitle = curInfo.shift();
            curInfo = curInfo.join(' ');
            let [author, bookGenre] = curInfo.split(', ')

            for (let key in result) {
                if (result[key] === bookGenre) {
                    if (!finalResult.hasOwnProperty(bookGenre)) {
                        finalResult[bookGenre] = [];
                        let innerObj = {
                            [bookTitle]: author,
                        }
                        finalResult[bookGenre].push(innerObj);
                    } else {
                        innerObj = {
                            [bookTitle]: author,
                        }
                        finalResult[bookGenre].push(innerObj);
                    }
                }
            }
        }
    }
    finalResult = Object.entries(finalResult).sort((a, b) => b[1].length - a[1].length);


    for (let curItem of finalResult) {
        let currentGenre = curItem[0];
        for (let key in result) {

            if (result[key] === currentGenre) {
                console.log(`${key} ${result[key]}: ${curItem[1].length}`)
            }
        }
        for (let currentBook of curItem[1]) {
            currentBook = Object.entries(currentBook).sort((a, b) => a.localeCompare(b));
            let arrToPrint = currentBook.join('').split(',');
            console.log(`--> ${arrToPrint[0]}: ${arrToPrint[1]}`)
        }
    }
}

// bookShelf([
//     '1 -> history',
//     '1 -> action',
//     'Death in Time: Criss Bell, mystery',
//     '2 -> mystery',
//     '3 -> sci-fi',
//     'Child of Silver: Bruce Rich, mystery',
//     'Hurting Secrets: Dustin Bolt, action',
//     'Future of Dawn: Aiden Rose, sci-fi',
//     'Lions and Rats: Gabe Roads, history',
//     '2 -> romance',
//     'Effect of the Void: Shay B, romance',
//     'Losing Dreams: Gail Starr, sci-fi',
//     'Name of Earth: Jo Bell, sci-fi',
//     'Pilots of Stone: Brook Jay, history']);

bookShelf(['1 -> mystery', '2 -> sci-fi',
'Child of Silver: Bruce Rich, mystery',
'Lions and Rats: Gabe Roads, history',
'Effect of the Void: Shay B, romance',
'Losing Dreams: Gail Starr, sci-fi',
'Name of Earth: Jo Bell, sci-fi'])