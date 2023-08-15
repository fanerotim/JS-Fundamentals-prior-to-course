function winningTicket(input) {

    let text = input;
    // let pattern = /(.[^@#$\^,\s]){0,4}(?<left>[@]{6,10}|[#]{6,10}|[$]{6,10}|[\^]{6,10}])(.[^@#$\^,\s]){0,4}(?<right>\2)(.[^@#$\^,\s]){0,4}/g;
    let pattern = /(\@{6,10}|\${6,10}|\^{6,10}|\#{6,10})/g;
    let ticketsArr = text.trim().split(/\s*,\s*/);

    for (let item of ticketsArr) {

        let match = pattern.exec(item);

        if (item.length !== 20) {
            console.log("invalid ticket");
            continue;
        }

        let left = item.toString().substring(0, item.length / 2).match(pattern);
        let right = item.toString().substring(item.length / 2).match(pattern);

        if (left === null || right === null) {
            console.log(`ticket "${item}" - no match`);
            continue;
        }

        left = left.toString();
        right = right.toString();

        if (left.length == 10 && right.length == 10) {
            console.log(`ticket "${item}" - ${left.length}${left[0]} Jackpot!`)
        }
        else if (right[0] == left[0]) {
            if (left.length < right.length) {
                console.log(`ticket "${item}" - ${left.length}${left[0]}`)
            }
            if (right.length < left.length) {
                console.log(`ticket "${item}" - ${right.length}${right[0]}`)
            }
            if (right.length == left.length) {
                console.log(`ticket "${item}" - ${left.length}${left[0]}`)

            }
        } else {
            console.log(`invalid ticket`)
        }
    }
}

winningTicket('Cash$$$$$$Ca$$$$$$sh');
winningTicket('$$$$$$$$$$$$$$$$$$$$, aabb , th@@@@@@eemo@@@@@@ey');
winningTicket('validticketnomatch:(');
winningTicket('Cash$$$$$$Ca@@@@@@sh');
