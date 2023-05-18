function integerAndFloat(firstNum, secondNum, thirdNum) {

    let sum = firstNum + secondNum + thirdNum;
    let isFloat = sum % 1 === 0;

    if (isFloat) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }
    
}
integerAndFloat(9, 100, 1.1)