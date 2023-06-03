function training(arr) {

    let targetsToShoot = arr.shift().split(' ').map(Number);
    let counter = 0;

    for (let index = 0; index < arr.length; index++) {
        let element = arr[index];
        let valueToSub = 0;
        if (element === "End") {
            break;
        } else {
            element = Number(element)
        }

        if (element > targetsToShoot.length - 1) {
            continue;
        } else {
            valueToSub = targetsToShoot[element]
            targetsToShoot[element] = -1;
            counter++;
        }

        for (let j = 0; j < targetsToShoot.length; j++) {
            if (targetsToShoot[j] !== -1) {
                if (valueToSub < targetsToShoot[j]) {
                    targetsToShoot[j] -= valueToSub;
                } else {
                    targetsToShoot[j] += valueToSub;
                }
            }
        }
    }

    let text = "";

    for (let k = 0; k < targetsToShoot.length; k++) {
        text += targetsToShoot[k] + " ";
    }


    console.log(`Shot targets: ${counter} -> ${text} `);

}
training(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
])
