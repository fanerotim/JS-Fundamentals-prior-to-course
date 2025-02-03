function solve(commands: string[]) {

    let counter = 0;
    const output: number[] = [];

    commands.map((command) => {

        counter++;

        if (command === 'add') {
            output.push(counter)
        } else if (command === 'remove') {
            const poppedItem = output.pop();
        }
    })
    
    if (output.length > 0) {
        console.log(output.join(' '))
    } else {
        console.log('Empty')
    }
}

solve(['add', 'add', 'add', 'add']);
solve(['add', 'add', 'remove', 'add', 'add'])
solve(['remove', 'remove', 'remove'])