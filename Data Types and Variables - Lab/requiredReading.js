function requiredReading(pageCount, pagesPerHour, daysCount) {
    
    let hoursCount = (pageCount / pagesPerHour) / daysCount;
    console.log(hoursCount);
}

requiredReading(212,
    20,
    2
    )