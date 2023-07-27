function solve(arr) {

    let companies = {};

    arr.forEach(line => {
        let [company, employee] = line.split(' -> ');
        
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [employee];
        } else {
            if (!companies[company].includes(employee)) {
                companies[company].push(employee);
            }
        }
    });

    companies = Object.entries(companies).sort((a, b) => a[0].localeCompare(b[0]));

    for (let item of companies) {
        console.log(item[0]);
        for (let employee of item[1]) {
            console.log(`-- ${employee}`);
        }
    }
}

// solve([
//     'SoftUni -> AA12345',
//     'SoftUni -> BB12345',
//     'Microsoft -> CC12345',
//     'HP -> BB12345'
//     ]);

solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]);