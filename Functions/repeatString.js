function repeatString(str, n){

    let result = "";

    for(let i = 0; i < n; i++){
        result += str;
    }

    return result

}

let resultFromFuction = repeatString("abc", 3);

console.log(resultFromFuction);