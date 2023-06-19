function songs(arr) {

    let currentType;

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printResult() {
            if (type === 'all') {
                console.log(this.name)
            } else if (type === this.typeList) {
                console.log(this.name)
            }
        }
    }

    let numberOfSongs = arr.shift();
    let type = arr.pop();

    for (let i = 0; i < numberOfSongs; i++) {
        let currentItem = arr[i].split('_');
        currentType = currentItem[0];
        let name = currentItem[1];

        let currentSong = new Song(currentType, name);
        currentSong.printResult();
    }
}

songs([
    3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);

songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);

songs([
    2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);