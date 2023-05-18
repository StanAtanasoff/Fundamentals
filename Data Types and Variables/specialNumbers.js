function specialNumbers(num) {

    for (let i = 1; i <= num; i++) {
        let text = i.toString();
        let lenthg = text.length;
        let sum = 0
        for (let j = 0; j < lenthg; j++) {
            sum += Number(text[j])
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${text} -> True`)
        } else {
            console.log(`${text} -> False`)
        }
        sum = 0;
    }

}
specialNumbers(15)