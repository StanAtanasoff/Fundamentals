function sumFirstLast(data) {
    if(data.length === 1){
        return console.log(Number(data.toString()));
    }

    let sum = Number(data.shift()) + Number(data.pop());
    console.log(sum);

}
sumFirstLast(['5'])