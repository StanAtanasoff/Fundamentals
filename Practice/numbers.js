function numbers(input) {
    let myArr = input[0].split(" ").map(Number);
    let myArrLength = myArr.length;
    let sum = 0;

    for (let i = 0; i < myArrLength; i++) {
        sum += myArr[i]
    }

    let averageValue = sum / myArrLength;

    let arrayToPrint = []

    for (let j = 0; j < myArrLength; j++) {
        if (myArr[j] > averageValue) {
            arrayToPrint.push(myArr[j])
        }
    }

    arrayToPrint.sort((a, b) => b - a);

    if (arrayToPrint.length > 5) {
        arrayToPrint.splice(5)
    }

    if (arrayToPrint.length <= 1) {
        console.log("No");
    }
    console.log(arrayToPrint.join(" "));


}
numbers(['-1 -2 -3 -4 -5 -6'])