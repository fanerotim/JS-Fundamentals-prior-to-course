function nextDay(year, month, date) {

    let futureDate = new Date(year, month - 1, date);
  
    futureDate.setDate(futureDate.getDate() + 1);

    let yearResult = futureDate.getFullYear();
    let monthResult = futureDate.getMonth() + 1;
    let dateResult = futureDate.getDate();


    console.log(`${yearResult}-${monthResult}-${dateResult}`);
}

nextDay(2016,
    2,
    28)