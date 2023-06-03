function demo(password) {

    let isValidPass = true;
    let isInvalidLength = password.length < 6 || password.length > 10;

    if (isInvalidLength) {
        isValidPass = false;
        console.log('Password must be between 6 and 10 characters');
    }

    let isOnlyLettersAndDigits = true;
    let digitsCounter = 0;

    for (let index = 0; index < password.length; index++) {
        let currenCode = password.charCodeAt(index);
        let isNotNumber = currenCode < 48 || currenCode > 57;
        let isNumber = currenCode >= 48 && currenCode <= 57;
        let isNotSmallLetter = currenCode < 97 || currenCode > 122;
        let isNotBigLetter = currenCode < 65 || currenCode > 90;

        if (isNumber) {
            digitsCounter++;
        }
        if (isNotNumber && isNotSmallLetter && isNotBigLetter) {
            isValidPass = false;
            isOnlyLettersAndDigits = false;
        }
    }

    if (!isOnlyLettersAndDigits) {
        console.log('Password must consist only of letters and digits');
    }
    if (!(digitsCounter >= 2)) {
        console.log('Password must have at least 2 digits');
        isValidPass = false;
    }

    if (isValidPass) {
        console.log('Password is valid');
    }
}
console.log(demo('Picture'));