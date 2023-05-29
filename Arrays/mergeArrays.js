function mergeArrays(firstArr, secondArr) {

    let outPut = [];

    for (let index = 0; index < firstArr.length; index++) {

        if (index % 2 === 0) {
            outPut[index] = Number(firstArr[index]) + Number(secondArr[index]);
        } else {
            outPut[index] = firstArr[index] + secondArr[index];
        }

    }

    console.log(outPut.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])