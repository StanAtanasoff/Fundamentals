function computerStore(input) {

    let sum = 0;

    let typeClient

    for (let i = 0; i < input.length; i++) {

        let currentComand = input[i]

        if (currentComand === "special") {
            typeClient = "special";
            break;
        }
        if (currentComand === "regular") {
            typeClient = "regular";
            break;
        }
        if (Number(currentComand) <= 0) {
            console.log("Invalid price!");
        } else {
            sum += Number(currentComand);
        }
    }

    let taxes = 0.2 * sum;
    let sumWithTaxes = sum * 1.2;

    if (typeClient === "special") {
        sumWithTaxes *= 0.9;
    }

    if(sumWithTaxes === 0){
        console.log(`Invalid order!`)
    }else{
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        console.log(`Total price: ${sumWithTaxes.toFixed(2)}$`);
    }



}
computerStore([
    'regular',
    ])
    
