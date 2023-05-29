function commonElements(firstArr, secondArr) {

    for (let index = 0; index < firstArr.length; index++) {

        let currentElement = firstArr[index];
        if (secondArr.includes(currentElement)) {
            console.log(currentElement);
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2'],
)