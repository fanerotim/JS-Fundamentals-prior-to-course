function deserialize(arr) {

    let index = 0;
    let command = arr[index];
    let result = [];

    while (command !== 'end') {
        
        command = command.split(':').join('/').split('/')
        let letter = command.shift();    
        
        for (let index of command) {
            result[index] = letter;
        }

        index++;
        command = arr[index];
    }
    console.log(result.join(''));
}

deserialize([
    'a:0/2/4/6',
    'b:1/3/5',
    'end']);

deserialize([
    'a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end']);