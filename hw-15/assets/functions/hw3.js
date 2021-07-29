// homework 3
export function getMaxNumber(inputNumber) {
    let arrInput = [];
    const len = inputNumber.length;
    
    for (let i = 0; i < len; ++i) {
        arrInput.push(inputNumber[i]);
    }

    let maxNumber = arrInput[0];

    for (let i = 0; i <len; i++) {

        if (arrInput[i] > maxNumber) {
            maxNumber = arrInput[i];
        } 
    }

    return maxNumber
}
