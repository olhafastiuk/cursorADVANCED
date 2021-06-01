const lipstick = 15.678;
const eyeshadows = 90.2345;
const perfumes = 123.965;
function truncated(num) {
    return Math.trunc(num * 100) / 100;
    }
    truncated(3.1416);

let MaxNumber = Math.max(lipstick, eyeshadows, perfumes);
console.log('Max price: ' + MaxNumber + 'UAH');
let MinNumber = Math.min(lipstick, eyeshadows, perfumes);
console.log('Min price: ' + MinNumber + 'UAH');
let sum = lipstick + eyeshadows + perfumes;
console.log('Amount: ' + sum + 'UAH');
let sumRounded = Math.floor(lipstick) + Math.floor(eyeshadows) + Math.floor(perfumes);
console.log('Rounded amount: ' + sumRounded + 'UAH');
let sumRounded_100 = Math.trunc(sum/100) * 100;
console.log('Rounded amount to 100: ' + sumRounded_100 + 'UAH');
let sumBool;
    if (sumRounded % 2 === 0) {
        sumBool = 'even number';
    } else {
        sumBool = 'odd number';
    }
console.log('is the sum an even number? : ' + sumBool);

let remainder_500 = 500 - sum;
console.log('Delivery from 500 UAH: ' + remainder_500 + 'UAH');
let medium = (truncated(lipstick) + truncated(eyeshadows) + truncated(perfumes)) / 3;
console.log('Average price: ' + medium + 'UAH');
let discount = Math.random() * 100;
console.log('Discount: ' + truncated(discount) + '%');
let sumDiscount = truncated( sum - sum * discount / 100);
console.log('Amount due: ' + sumDiscount + 'UAH');
let profit = truncated(sumDiscount - sum/2);
console.log('Profit: ' + profit + 'UAH');

document.querySelector(".receipt").innerHTML = `
    <h1>RECEIPT</h1>
    <div class="line"></div>
    <div class="info">
        <p>Max price: <span>${MaxNumber} UAH</span></p>
        <p>Min price: <span>${MinNumber} UAH</span></p>
        <p>Amount: <span>${sum} UAH</span></p>
        <p>Rounded amount: <span>${sumRounded} UAH</span></p>
        <p>Rounded amount to 100: <span>${sumRounded_100} UAH</span></p>
        <p>Avarange price: <span>${medium} UAH</span></p>
        <p>Is the sum an even number? <span>${sumBool}</span></p>
    </div>
    <div class="line"></div>
     <div class="check">
        <p>Delivery from 500 UAH: <span>${remainder_500} UAH</span></p>
        <p>Discount: <span>${truncated(discount)}%</span> </p>
        <p>Amount due: <span>${sumDiscount} UAH</span></p>
    </div>
    <div class="line"></div>
    <div class="check">
        <p>Profit: <span>${profit} UAH</span></p>
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
