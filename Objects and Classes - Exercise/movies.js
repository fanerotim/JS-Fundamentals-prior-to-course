function movies(arr) {

    let moviesObj = {};

    let itemIndex;
    let movieName;

    for (let i = 0; i < arr.length; i++) {
        let currentCommand = arr[i].split(' ');
        moviesObj = {};

        if (currentCommand.shift() === 'addMovie') {
            moviesObj.name = currentCommand.join(' ');
        }
        
        for (let j = i + 1; j < arr.length; j++) {
            let command = arr[j].split(' ');

            if (command.includes('directedBy')) {
                itemIndex = command.indexOf('directedBy');
                movieName = command.slice(0, itemIndex).join(' ');
                let director = command.slice(itemIndex + 1).join(' ');
                
                if (!moviesObj.hasOwnProperty('director') && moviesObj.name === movieName) {
                    moviesObj.director = director;
                } else if (moviesObj.hasOwnProperty('director') && moviesObj.name === movieName) {
                    moviesObj.director = director;
                }
            } else if (command.includes('onDate')) {
                itemIndex = command.indexOf('onDate');
                movieName = command.slice(0, itemIndex).join(' ');
                let releaseDate = command.slice(itemIndex + 1).join(' ');
                
                if (!moviesObj.hasOwnProperty('date') && moviesObj.name === movieName) {
                    moviesObj.date = releaseDate;
                } else if (moviesObj.hasOwnProperty('date') && moviesObj.name === movieName) {
                    moviesObj.date = releaseDate;
                }
            }
        }
        if (Object.keys(moviesObj).length === 3) {
            console.log(JSON.stringify(moviesObj));
        }
    }   
}

// movies([
//     'addMovie Fast and Furious',
//     'addMovie Godfather',
//     'Inception directedBy Christopher Nolan',
//     'Godfather directedBy Francis Ford Coppola',
//     'Godfather onDate 29.07.2018',
//     'Fast and Furious onDate 30.07.2018',
//     'Batman onDate 01.08.2018',
//     'Fast and Furious directedBy Rob Cohen'
// ]);

// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ])

movies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'addMovie Pacman',
    'Pacman onDate 23.06.2023',
    'addMovie Captain America',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo',
    'Captain America directedBy Pesho'
    ])