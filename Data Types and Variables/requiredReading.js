function requiredReading(bookPages, pagesInHour, days){

    let totalTime = bookPages / pagesInHour;
    let hourPerDay = totalTime / days;

    console.log(hourPerDay)

}
requiredReading(
    212,
    20 ,
    2,
    )