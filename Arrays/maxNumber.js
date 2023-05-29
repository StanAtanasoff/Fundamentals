function maxNumber(arr) {

    let result = '';
    let arrLength = arr.length;

    for (let index = 1; index <= arrLength; index++) {

        let isMax = true;

        let currentNumer = Number(arr[index - 1]);

        for (let j = index; j < arr.length; j++) {

            let nextNumber = Number(arr[j]);

            if (nextNumber >= currentNumer) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += `${currentNumer} `;
        }
    }

    console.log(result);

}
maxNumber([1, 4, 3, 2])