function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function getRandomChinese(length) {
    const p = new Promise(function (resolve, reject) {
        let newArr = [];
        for (let i = 0; i < length; i++) {
            const input = Date.now();
            let number = input.toString().split("").slice(-6, -1).join("");
            let sign = String.fromCharCode(number);
            newArr[newArr.length] = sign;
            sleep(50);
        }
        resolve(newArr.join(""));
    });
    return p;
}
let input = document.getElementById('amount')
input.addEventListener('change', function () {
    let amount = +document.getElementById('amount').value
    let promise = getRandomChinese(amount)
    let output = document.getElementById('output');
    promise.then(
    (res) => output.innerHTML = res,
    (err) => output.innerHTML = err);
})


