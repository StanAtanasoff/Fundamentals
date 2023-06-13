function guineaPig(input) {
    let foodGrams = Number(input[0]) * 1000;
    let hayGrams = Number(input[1]) * 1000;
    let coverGrams = Number(input[2]) * 1000;
    let weightGrams = Number(input[3]) * 1000;

    let days = 1;

    let isBreak = false;

    while (days <= 30) {

        if (foodGrams <= 0 || hayGrams <= 0 || coverGrams <= 0) {
            isBreak = true;
            break
        }

        foodGrams -= 300;

        if (days % 2 === 0) {
            hayGrams -= 0.05 * foodGrams
        }

        if (days % 3 === 0) {
            coverGrams -= weightGrams / 3;
        }

        days++;

    }

    if (isBreak) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${(foodGrams / 1000).toFixed(2)}, Hay: ${(hayGrams / 1000).toFixed(2)}, Cover: ${(coverGrams / 1000).toFixed(2)}.`);
    }
}

guineaPig(["10",
    "5",
    "5.2",
    "1",
])
