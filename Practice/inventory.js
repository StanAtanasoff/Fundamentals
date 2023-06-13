function inventory(input) {
    let items = input.shift().split(', ');

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(' - ');
        if (command[0] === "Craft!") {
            break;
        }

        if (command[0] === "Collect") {
            if (items.includes(command[1])) {
                break;
            } else {
                items.push(command[1])
            }
        } else if (command[0] === "Drop") {
            if (items.includes(command[1])) {
                let cuurentIndex = items.indexOf(command[1]);
                items.splice(cuurentIndex, 1);
            }
        } else if (command[0] === "Combine Items") {
            let itemsToCombine = command[1].split(":");
            let oldItem = itemsToCombine[0];
            let newItem = itemsToCombine[1];

            if (items.includes(oldItem)) {
                let cuurentIndex = items.indexOf(oldItem) + 1;
                items.splice(cuurentIndex, 0, newItem)
            } else {
                break;
            }
        } else if (command[0] === "Renew") {
            if (items.includes(command[1])) {
                let currentIndex = items.indexOf(command[1]);
                items.splice(currentIndex, 1);
                items.push(command[1]);
            }
        }
    }

    console.log(items.join(", "));
}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
)