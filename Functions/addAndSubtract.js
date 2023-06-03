function demo(firstNumber, secondNumber, thirdNumber) {

    function sum(firstNumber, thirdNumber) {

        return firstNumber + thirdNumber;

    }

    let sumResult = sum(firstNumber, secondNumber);

    function subtract(sumResult, thirdNumber) {
        return sumResult - thirdNumber;
    }

    return subtract(sumResult, thirdNumber);


}

console.log(demo(5, 3, 2))
// console.log(demo(5, 3, 2));