// homework 5
export function getRandomArray(length, min, max){
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.trunc(Math.random() * (max - min + 1)) + min;
    }
    return arr;
}