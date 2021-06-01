const lipstick = 15.678;
const eyeshadows = 90.2345;
const perfumes = 123.965;
function truncated(num) {
    return Math.trunc(num * 100) / 100;
    }
    truncated(3.1416);

let MaxNumber = Math.max(lipstick, eyeshadows, perfumes);
console.log('Max price: ' + MaxNumber + 'USD');
let MinNumber = Math.min(lipstick, eyeshadows, perfumes);
console.log('Min price: ' + MinNumber + 'USD');
let sum = lipstick + eyeshadows + perfumes;
console.log('Amount: ' + sum + 'USD');
let sumRounded = Math.floor(lipstick) + Math.floor(eyeshadows) + Math.floor(perfumes);
console.log('Rounded amount: ' + sumRounded + 'USD');
let sumRounded_100 = Math.trunc(sum/100) * 100;
console.log('Rounded amount to 100: ' + sumRounded_100 + 'USD');
let sumBool;
    if (sumRounded % 2 === 0) {
        sumBool = 'even number';
    } else {
        sumBool = 'odd number';
    }
console.log('is the sum an even number? : ' + sumBool);

let remainder_500 = 500 - sum;
console.log('Delivery from 500 USD: ' + remainder_500 + 'USD');
let medium = (truncated(lipstick) + truncated(eyeshadows) + truncated(perfumes)) / 3;
console.log('Average price: ' + medium + 'USD');
let discount = Math.random() * 100;
console.log('Discount: ' + truncated(discount) + '%');
let sumDiscount = truncated( sum - sum * discount / 100);
console.log('Amount due: ' + sumDiscount + 'USD');
let profit = truncated(sumDiscount - sum/2);
console.log('Profit: ' + profit + 'USD');

document.querySelector(".receipt").innerHTML = `
    <h1>RECEIPT</h1>
    <div class="line"></div>
    <div class="info">
        <p>Max price: <span>${MaxNumber} USD</span></p>
        <p>Min price: <span>${MinNumber} USD</span></p>
        <p>Amount: <span>${sum} USD</span></p>
        <p>Rounded amount: <span>${sumRounded} USD</span></p>
        <p>Rounded amount to 100: <span>${sumRounded_100} USD</span></p>
        <p>Avarange price: <span>${medium} USD</span></p>
        <p>Is the sum an even number? <span>${sumBool}</span></p>
    </div>
    <div class="line"></div>
     <div class="check">
        <p>Delivery from 500 USD: <span>${remainder_500} USD</span></p>
        <p>Discount: <span>${truncated(discount)}%</span> </p>
        <p>Amount due: <span>${sumDiscount} USD</span></p>
    </div>
    <div class="line"></div>
    <div class="check">
        <p>Profit: <span>${profit} USD</span></p>
    </div>`;

// Максимальнальна ціна: ${MaxNumber}грн; <br>
// Мінімальна ціна: ${MinNumber}грн;<br>
// Вартість всіх товарів: ${sum}грн;<br>
// Округлена вартість всіх товарів: ${sumRounded}грн;<br>
// Округлена вартість всіх товарів до 100: ${sumRounded_100}грн;<br>
// Парне чи непарне? ${sumBool};<br>
// Здача від 500грн: ${remainder_500}грн;<br>
// Середня вартість товарів: ${medium}грн;<br>
// Ваша знижка: ${discount}%;<br>
// Сума зі знижкою: ${sumDiscount}грн;<br>
// Прибуток: ${profit}грн`;
