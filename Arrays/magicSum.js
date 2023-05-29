function magicSum(arr, magicNum) {

    for (let index = 0; index < arr.length; index++) {

        for (let j = index + 1; j < arr.length; j++) {

            let sum = Number(arr[index]) + Number(arr[j])

            if(sum === magicNum){
                let result = '';
                console.log(`${arr[index]} ${arr[j]}`)
            }

        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8)