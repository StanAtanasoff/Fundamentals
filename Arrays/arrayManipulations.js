function arrayManipulations(input) {
    let arr = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let currentArr = input[i].split(" ");
        let command = currentArr[0];
        let num1 = Number(currentArr[1]);
        let num2 = Number(currentArr[2]);

        if (command === "Add") {
            arr.push(num1);

        } else if (command === "Remove") {
            for (let j = 0; j < arr.length; j++) {
                let currentNum = Number(arr[j]);
                if (currentNum === num1) {
                    arr.splice(j, 1);
                }
            }

        } else if (command === "RemoveAt") {
            arr.splice(num1, 1);

        } else if (command === "Insert") {
            arr.splice(num2, 0, num1);
        }
    }

    console.log(arr.join(" "));
}
arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3',
])