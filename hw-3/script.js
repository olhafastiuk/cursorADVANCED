// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxNumber(inputNumber) {
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
document.forms.form_1.onsubmit = function(){
    const inputNumber = document.getElementById('input-1').value;
    const maxNumber = getMaxNumber(inputNumber);

    document.getElementById("output-1").innerHTML = `Найбільше цифра у введеному числі: ${maxNumber}`;
    return false;
}

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getNumberInPower(number, power) {
    let newNumber = number;
    if(power > 0){
        for (let i = 1; i < power; i++ ) {
        newNumber = newNumber * number;
        }
    } 
    if (power < 0){
        power = power * -1;
        newNumber = 1/number;
        for (let i = 1; i < power; i++) {
            newNumber = newNumber / number;
        }
    }
    if (power === 0) {
        newNumber = 1;
    }
    return newNumber
}
document.forms.form_2.onsubmit = function(){
    const number = Number(document.getElementById('input-2_1').value);
    const power = Number(document.getElementById('input-2_2').value);
    const numberInPower = getNumberInPower(number, power);

    document.getElementById("output-2").innerHTML = `Результат: ${numberInPower}`;
    return false;
}

// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalize(name) {
    const str = name.toLowerCase();
    let strNew = str[0].toUpperCase();

    for (let i = 1; i < name.length; i++) { 
        strNew = strNew + str[i];
    }
    return strNew;
}
document.forms.form_3.onsubmit = function(){
    const name = document.getElementById('input-3').value;
    const capitalizeName = capitalize(name);

    document.getElementById("output-3").innerHTML = `Результат: ${capitalizeName}`;
    return false;
}

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
// (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getSalary(salary, tax) { 
    const taxAmount = salary * tax / 100;
    const newSalary = salary - taxAmount;
    return newSalary;
}

document.forms.form_4.onsubmit = function() {
    const salary = Number(document.getElementById('input-4_1').value);
    const tax = Number(document.getElementById('input-4_2').value);
    const taxableSalary = getSalary(salary, tax);

    document.getElementById("output-4").innerHTML = `Вам нараховано: ${taxableSalary}грн`;
    return false;
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(numberStart, numberFinish, seed) {
    const number1 = Math.min(numberStart, numberFinish);
    const number2 = Math.max(numberStart, numberFinish);
    let random = (seed * seed).toString().padStart(4, '0').slice(1,3);
    let seed2 = parseInt(random);
    while (seed === seed2){
        seed2 = date.getSeconds();
        random = (seed2 * seed2).toString().padStart(4, '0').slice(1,3);
        seed2 = parseInt(random);
    }
    seed = seed2;
    const div = number2 - number1 + 1;
    const result = number1 + seed % div ;
    return result;
}
document.forms.form_5.onsubmit = function() {
    let date = new Date();
    let seed = date.getSeconds();
    const number1 = Number(document.getElementById('input-5_1').value);
    const number2 = Number(document.getElementById('input-5_2').value);
    const randomNumber = getRandomNumber(number1, number2, seed);

    document.getElementById("output-5").innerHTML = `Ваше число: ${randomNumber}`;
    return false;   
}

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
// Приклад: countLetter("а", "Асталавіста") -> 4

function getCountLetter(letter, word){
    const wordLower = word.toLowerCase();
    const letterLower = letter.toLowerCase();
    let amount = 0;
    for(let i=0; i<word.length; i++) {
        if (wordLower[i]===letterLower) {
            amount += 1;
        }
    }
    return amount;
}
document.forms.form_6.onsubmit = function() {
    const word = document.getElementById('input-6_1').value;
    const letter = document.getElementById('input-6_2').value;
    const countLetter = getCountLetter(letter, word);

    document.getElementById("output-6").innerHTML = `Буква '${letter}' повторюється ${countLetter} разів`;
    return false;   
}

// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
// Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(input) {
    const str = input.toUpperCase();
    let newStr = '';
    let output;
    for (let i=0; i<str.length; i++) {
        if (Number(str[i]))
        newStr = newStr + str[i];
    }
    if (str.match(/\$/)) {
        output = `${Number(newStr) * 25} UAH`; 
    }
    if (str.match('UAH')) {
        output = `${Number(newStr) / 25} $`; 
    }
    if (output === undefined) {
        return "Вкажіть валюту '$' або 'UAH' " ;
    }

    return output;
}
document.forms.form_7.onsubmit = function(){
    const inputCurrency = document.getElementById('input-7').value;

    document.getElementById("output-7").innerHTML = convertCurrency(inputCurrency);
    return false;   
}

// 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(numbers = 8) {
    let password = '';

    for (let i = 0; i < numbers; i++) {
        password = password + Math.trunc(Math.random() * 10);
    }
    return password;
}
document.forms.form_8.onsubmit = function() {
    let numbers = document.getElementById('input-8').value;
    if (numbers === "") {
        numbers = undefined;
    }
    const password = getRandomPassword(numbers);

    document.getElementById("output-8").innerHTML = `Ваш новий пароль: ${password}`;
    return false;   
}

// 9. Створіть функцію, яка видаляє всі букви з речення. 
// Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetters(letter, text) {
    let output = '';

    for(let i=0; i<text.length; i++) {
        if (text[i]===letter.toUpperCase() || text[i]===letter.toLowerCase()) {
            continue
        } else {
            output = output + text[i];
        }
    }
    return output;
}
document.forms.form_9.onsubmit = function(){
    const letter = document.getElementById('input-9_1').value;
    const text = document.getElementById('input-9_2').value;
    const newText = deleteLetters(letter, text);
    document.getElementById("output-9").innerHTML = `Нове речення без букви '${letter}': "${newText}"`;
    return false;   
}

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. 
// Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(word) {
    let palyndrom;
    let x = word.length;

    for (let i = 0; i < (word.length / 2); i++) {
        x = x-1;
        if (word[i] === word[x]) {
            palyndrom = true;
        } else {
            palyndrom = false;
            break
        }
    }
    return palyndrom;
}
document.forms.form_10.onsubmit = function(){
    const word = document.getElementById('input-10').value;

    document.getElementById("output-10").innerHTML = isPalyndrom(word);
    return false;   
}

// 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
// Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(textIn) {
    let textOut = [];
    let newStr = '';
    textIn = textIn.toLowerCase();
    const length = textIn.length;
    let flag = false;

    for (let i = 0; i < length; ++i) {
        textOut.push(textIn[i]);
    }
    for (let i=0; i<length; i++){
    flag = false;
      for ( let x=i+1; x<length; x++) {
        if (textOut[i] === textOut[x]) {
            textOut[x] = undefined;
            flag = true;
        }
      }
      if (flag) {
        textOut[i] = undefined;
      }
    }
    for (let i=0; i<length; i++){
        if (textOut[i] != undefined){
            newStr = newStr + String(textOut[i]);
        }
    }
    return newStr;
}
document.forms.form_11.onsubmit = function(){
    const textIn = document.getElementById('input-11').value;

    document.getElementById("output-11").innerHTML = deleteDuplicateLetter(textIn);
    return false;   
}