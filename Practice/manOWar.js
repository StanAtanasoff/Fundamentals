function manOWar(input) {

    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxSectionHealth = Number(input.shift());

    let twentyPercentageHealtg = maxSectionHealth * 0.2;

    let pirateSunk = false;
    let warSunk = false;

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command[0] === "Retire") {
            break;
        }

        if (command[0] === "Fire") {
            let index = Number(command[1]);
            let damage = Number(command[2]);

            if (index >= 0 && index < warShip.length) {
                warShip[index] = warShip[index] - damage;

                if (warShip[index] <= 0) {
                    console.log(`You won! The enemy ship has sunken.`);
                    pirateSunk = true
                    warSunk = true;
                    break;
                }
            }
        } else if (command[0] === "Defend") {
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            let damage = Number(command[3]);

            if (startIndex >= 0 && startIndex < pirateShip.length) {
                if (endIndex >= 0 && endIndex < pirateShip.length) {
                    for (let j = startIndex; j <= endIndex; j++) {
                        pirateShip[j] = pirateShip[j] - damage;
                        if (pirateShip[j] <= 0) {
                            console.log(`You lost! The pirate ship has sunken.`);
                            pirateSunk = true;
                            warSunk = true;
                            break;
                        }
                    }
                }
            }

        } else if (command[0] === "Repair") {
            let index = Number(command[1]);
            let health = Number(command[2]);
            if (index >= 0 && index < warShip.length) {
                pirateShip[index] = pirateShip[index] + health;
                if (pirateShip[index] > maxSectionHealth) {
                    pirateShip[index] = maxSectionHealth;
                }
            }

        } else if (command[0] === "Status") {
            let counter = 0;
            for (let k = 0; k < pirateShip.length; k++) {

                if (pirateShip[k] < twentyPercentageHealtg) {
                    counter++;
                }
            }

            console.log(`${counter} sections need repair.`);
        }
    }

    let pirateStatus = 0;
    let warShipStatus = 0;

    for (let l = 0; l < pirateShip.length; l++) {
        pirateStatus += pirateShip[l];
    }

    for (let m = 0; m < warShip.length; m++) {
        warShipStatus += warShip[m];
    }

    if (!warSunk || !pirateSunk) {
        console.log(`Pirate ship status: ${pirateStatus}`);
        console.log(`Warship status: ${warShipStatus}`);
    }

}
manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])

console.log("-------");

manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])




