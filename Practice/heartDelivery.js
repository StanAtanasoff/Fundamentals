function heartDelivery(input) {
    let neighborhood = input.shift().split("@").map(Number);
    let neighborhoodLength = neighborhood.length;

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");

        if (command === "Love!") {
            break;
        }

        let currentPlace = i + Number(command[1]);

        if ((currentPlace + i) > neighborhoodLength) {
            currentPlace = currentPlace - neighborhoodLength
        }

        if(neighborhood[currentPlace] === 0){
            console.log(`Place ${currentPlace} already had Valentine's day.`);
            continue;
        }

        neighborhood[currentPlace] -= 2;

        if(neighborhood[currentPlace] === 0){
            console.log(`Place ${currentPlace} has Valentine's day.`);
        }

        


    }
    
}
heartDelivery(["2@4@2",
"Jump 2",
"Jump 2",
"Jump 8",
"Jump 3",
"Jump 1",
"Love!"])	
