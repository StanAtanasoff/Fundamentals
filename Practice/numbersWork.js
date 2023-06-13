function numbers(str) {
    let numbersArr = str.split(' ');
    let avg = 0;

    for (let i = 0; i <= numbersArr.length - 1; i++) {
        avg += Number(numbersArr[i]);
    }

    avg = avg / numbersArr.length
    let aboveAvg = [];

    for (let i = 0; i <= numbersArr.length - 1; i++) {
        if (Number(numbersArr[i]) > avg) {
            aboveAvg.push(Number(numbersArr[i]));
        }
    }

    aboveAvg.sort((a, b) => b - a);

    if (aboveAvg.length > 5 && aboveAvg.length <= 10000) {
        let lastFive = aboveAvg.splice(0, 5);
        console.log(lastFive.join(' '));
    } else if (aboveAvg.length <= 0) {
        console.log('No');
    } else {
        console.log(aboveAvg.join(' '));
    }
}
numbers(['-1 -2 -3 -4 -5 -6'])