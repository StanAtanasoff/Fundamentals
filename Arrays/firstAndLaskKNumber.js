function firstAndLaskKNumber(input){
    let k = input.shift();
    let firstK = input.slice(0,k);
    let secondK = input.slice(-k);
    console.log(firstK.join(" "));
    console.log(secondK.join(" "));
}

firstAndLaskKNumber([2,
    7, 8, 9])