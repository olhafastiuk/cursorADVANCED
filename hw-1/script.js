const lipstick = 15.678;
const eyeshadows = 90.2345;
const perfumes = 123.965;

function truncated(num) {
    return Math.trunc(num * 100) / 100;
    }

let maxNumber = Math.max(lipstick, eyeshadows, perfumes);
console.log('Max price: ' + maxNumber + 'USD');

let minNumber = Math.min(lipstick, eyeshadows, perfumes);
console.log('Min price: ' + minNumber + 'USD');

let sum = lipstick + eyeshadows + perfumes;
console.log('Amount: ' + sum + 'USD');

let sumRounded = Math.floor(lipstick) + Math.floor(eyeshadows) + Math.floor(perfumes);
console.log('Rounded amount: ' + sumRounded + 'USD');

let sumRounded_100 = (sum/100).toFixed(0) * 100;
console.log('Rounded amount to 100: ' + sumRounded_100 + 'USD');

let isSumEven;
    if (sumRounded % 2 === 0) {
        isSumEven = 'even number';
    } else {
        isSumEven = 'odd number';
    }
console.log('is the sum an even number? : ' + isSumEven);
// console.log(sumRounded % 2 ===0);

let remainder_500 = 500 - sum;
console.log('Delivery from 500 USD: ' + remainder_500 + 'USD');

let medium = (truncated(lipstick) + truncated(eyeshadows) + truncated(perfumes)) / 3;
console.log('Average price: ' + medium + 'USD');

let discount = Math.random() * 100;
console.log('Discount: ' + discount.toFixed(2) + '%');

let sumDiscount = sum - sum * discount / 100;
console.log('Amount due: ' + sumDiscount.toFixed(2) + 'USD');

let profit = sumDiscount - sum/2;
console.log('Profit: ' + profit.toFixed(2) + 'USD');


document.querySelector(".receipt").innerHTML = `
    <h1>RECEIPT</h1>
    <div class="line"></div>
    <div class="info">
        <p>Max price: <span>${maxNumber} USD</span></p>
        <p>Min price: <span>${minNumber} USD</span></p>
        <p>Amount: <span>${sum} USD</span></p>
        <p>Rounded amount: <span>${sumRounded} USD</span></p>
        <p>Rounded amount to 100: <span>${sumRounded_100} USD</span></p>
        <p>Avarange price: <span>${medium} USD</span></p>
        <p>Is the sum an even number? <span>${isSumEven}</span></p>
    </div>
    <div class="line"></div>
     <div class="check">
        <p>Delivery from 500 USD: <span>${remainder_500} USD</span></p>
        <p>Discount: <span>${discount.toFixed(2)}%</span> </p>
        <p>Amount due: <span>${sumDiscount.toFixed(2)} USD</span></p>
    </div>
    <div class="line"></div>
    <div class="check">
        <p>Profit: <span>${profit.toFixed(2)} USD</span></p>
    </div>`;

// Максимальнальна ціна: ${maxNumber}грн; <br>
// Мінімальна ціна: ${minNumber}грн;<br>
// Вартість всіх товарів: ${sum}грн;<br>
// Округлена вартість всіх товарів: ${sumRounded}грн;<br>
// Округлена вартість всіх товарів до 100: ${sumRounded_100}грн;<br>
// Парне чи непарне? ${sumBool};<br>
// Здача від 500грн: ${remainder_500}грн;<br>
// Середня вартість товарів: ${medium}грн;<br>
// Ваша знижка: ${discount}%;<br>
// Сума зі знижкою: ${sumDiscount}грн;<br>
// Прибуток: ${profit}грн`;
