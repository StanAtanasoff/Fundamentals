function movingTarget(input) {
    let arrayToShoot = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        if (command[0] === "End") {
            break;
        } else if (command[0] === "Shoot") {
            let index = Number(command[1]);
            let power = Number(command[2]);
            if (index >= 0 && index < arrayToShoot.length) {
                arrayToShoot[index] -= power;
                if (arrayToShoot[index] <= 0) {
                    arrayToShoot.splice(index, 1)
                }
            }
        } else if (command[0] === "Add") {
            let index = Number(command[1]);
            let value = Number(command[2]);
            if (index >= 0 && index < arrayToShoot.length) {
                arrayToShoot.splice(index, 0, value)
            } else {
                console.log("Invalid placement!");
            }
            
        } else if (command[0] === "Strike") {
            let index = Number(command[1]);
            let radius = Number(command[2]);
            let startElement = index - radius;
            let endElement = index + radius;

            if (index >= 0 && index < arrayToShoot.length) {
                if (startElement >= 0 && endElement < arrayToShoot.length - 1) {

                    arrayToShoot.splice(startElement, endElement);

                } else {
                    console.log("Strike missed!");
                    break;
                }
            } else {
                console.log("Strike missed!");
                break;
            }
        }

    }

    console.log(arrayToShoot.join("|"));

}
movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"])

