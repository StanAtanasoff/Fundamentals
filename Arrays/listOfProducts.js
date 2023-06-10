function listOfProducts(input) {

    input.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < input.length; i++) {
        let product = input[i];

        console.log(`${i + 1}.${product}`);
    }
}
listOfProducts(['Potatoes'])