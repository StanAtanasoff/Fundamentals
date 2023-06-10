function processOddNumbers(input){
    return input.filter((el, i) => i % 2 !== 0).map(x => x * 2).reverse().join(" ");
}
console.log(processOddNumbers([10, 15, 20, 25]))