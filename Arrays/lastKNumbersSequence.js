function lastKNumbersSequence(n, k){
   
    let arr = [1];

    while(n > arr.length){
        let kArr = arr.slice(-k);
        let sum = 0;
        for(let i = 0; i < kArr.length; i++){
            sum += kArr[i];
        }

        arr.push(sum)
    }

    console.log(arr.join(" "));
}

lastKNumbersSequence(6,3)