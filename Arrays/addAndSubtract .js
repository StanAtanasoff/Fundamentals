function addAndSubtract(arr) {

    let sumOfOriginals = 0;
    let sumOfNewArray = 0;
    let arrLength = arr.length;

    for (let i = 0; i < arrLength; i++) {

        let num = Number(arr[i]);
        sumOfOriginals += num;

        if(num % 2 === 0){
            arr[i] = num + i;
            sumOfNewArray += Number(arr[i]);
        }else{
            arr[i] = num - i;
            sumOfNewArray += Number(arr[i]);
        }
    }

    console.log(arr);
    console.log(sumOfOriginals);
    console.log(sumOfNewArray);
}
addAndSubtract([5, 15, 23, 56, 35])