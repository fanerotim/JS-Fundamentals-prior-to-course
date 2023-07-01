function companyUsers(arr) {

    let companies = {};
    
    arr.forEach(item => {
        let [company, employee] = item.split('-> ');
        
        if (!companies.hasOwnProperty(company)) {
            companies[company] = [employee];
        } else {
            if (!companies[company].includes(employee)) {
                companies[company].push(employee);
            }
        }
    });
    companies = Object.entries(companies).sort((compA, compB) => compA[0].localeCompare(compB[0]));

    for (el of companies) {
        console.log(el[0]);
        console.log(`-- ${el[1].join('\n-- ')}`)
    }
}

// companyUsers([
// 'SoftUni -> AA12345',
// 'SoftUni -> BB12345',
// 'Microsoft -> CC12345',
// 'HP -> BB12345'
// ]);

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ])