function mathPower(x, y) {

    let result = x;

    for (let i = 1; i < y; i++) {
        result = multiplyTwoNumbers(result, x)
    }

    function multiplyTwoNumbers(a,b){
        return a * b
    }
    console.log(result);
}
mathPower(2, 8)