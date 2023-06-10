function smallestTwoNumbers(input) {
    input.sort((a, b) => a - b);

    let smallest = input.splice(0,2);

    console.log(smallest.join(" "));
}
smallestTwoNumbers([30, 15, 50, 5])