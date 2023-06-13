function memoryGame(input) {
    let elements = input.shift().split(" ");

    let inputLenght = input.length;
    let moves = 0;
    let isWon = false;

    for (let i = 0; i < inputLenght; i++) {
        let command = input.shift().split(" ");
        let elementsLength = elements.length;
        moves++;
        if (command[0] === "end") {
            break;
        }

        let firstIndex = Number(command[0]);
        let secondIndex = Number(command[1]);

        if (firstIndex === secondIndex) {
            elements.splice(elementsLength / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;
        }

        if (firstIndex < 0 || firstIndex >= elementsLength || secondIndex < 0 || secondIndex >= elementsLength) {
            elements.splice(elementsLength / 2, 0, `-${moves}a`, `-${moves}a`);
            console.log(`Invalid input! Adding additional elements to the board`);
            continue;
        }

        if (elements[firstIndex] !== elements[secondIndex]) {
            console.log(`Try again!`);
            continue;
        }

        if (elements[firstIndex] === elements[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${elements[firstIndex]}!`);
            if (firstIndex > secondIndex) {
                elements.splice(firstIndex, 1);
                elements.splice(secondIndex, 1);
            } else {
                elements.splice(secondIndex, 1);
                elements.splice(firstIndex, 1);
            }

        }

        if (elements.length === 0) {
            console.log(`You have won in ${moves} turns!`);
            isWon = true;
            break;
        }

    }

    if (!isWon) {
        console.log(`Sorry you lose :(`);
        console.log(elements.join(' '));
    }
}
memoryGame([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end",
])
console.log('--------------')
memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"])
console.log('--------------')
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"])