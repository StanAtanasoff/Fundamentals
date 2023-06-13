function muOnline(input) {
    let rooms = input.split('|');

    let health = 100;
    let bitcoins = 0;
    let roomsCounter = 0;
    let isDeath = false;

    for (let i = 0; i < rooms.length; i++) {

        let current = rooms[i].split(' ');
        let command = current[0];
        let amount = current[1];

        roomsCounter++;

        if (command === "potion") {
            health += Number(amount);
            if (health > 100) {
                amount = amount - (health - 100);
                health = 100;
            }
            console.log(`You healed for ${amount} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === "chest") {
            console.log(`You found ${amount} bitcoins.`);
            bitcoins += Number(amount);
        } else {
            health -= amount;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomsCounter}`);
                isDeath = true;
                break;
            }
        }

    }

    if (!isDeath) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }

}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")