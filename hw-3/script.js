// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8
function getMaxNumber(inputNumber) {
    let arrInput = [];
    let len = inputNumber.length;
    
    for (i = 0; i < len; ++i) {
        arrInput.push(inputNumber[i]);
    }

    let maxNumber = arrInput[0];

    for (i = 0; i <len; i++){

        if (arrInput[i] > maxNumber){
            maxNumber = arrInput[i];
        } 
    }

    return maxNumber
}
document.forms.form_1.onsubmit = function(){
    let inputNumber = document.getElementById('input-1').value;
    document.getElementById("output-1").innerHTML = `Найбільше цифра у введеному числі: ${getMaxNumber(inputNumber)}`;
    return false;
}


// // 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getNumberInPower(number, power) {
    let newNumber = number;
    if(power > 0){
        for (i = 1;i < power;i++ ){
        newNumber = newNumber * number;
        }
    } 
    if (power < 0){
        power = power * -1;
        newNumber = 1/number;
        for (i = 1; i < power; i++){
            newNumber = newNumber / number;
        }
    }
    if (power == 0){
        newNumber = 1;
    }
    return newNumber
}
document.forms.form_2.onsubmit = function(){
    let number = Number(document.getElementById('input-2_1').value);
    let power = Number(document.getElementById('input-2_2').value);

    document.getElementById("output-2").innerHTML = `Результат: ${getNumberInPower(number, power)}`;
    return false;
}


// 3.Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalize(str){
    str = str.toLowerCase();
    strNew = str[0].toUpperCase();
    for (i=1; i<str.length; i++){
        strNew = strNew + str[i];
    }
    return strNew;
}

document.forms.form_3.onsubmit = function(){
    let name = document.getElementById('input-3').value;
    document.getElementById("output-3").innerHTML = `Результат: ${capitalize(name)}`;
    return false;
}



// // 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
// // (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

// let salary = 1000;
// let tax = 19.5;
// function getSalary(salary, tax){
//     let taxAmount = salary * tax / 100;
//     let newSalary = salary - taxAmount;
//     return newSalary;
// }

// console.log(getSalary(salary, tax))

// // 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
// // Приклад: getRandomNumber(1, 10) -> 5
// let date = new Date();
// let seed = date.getSeconds();
// function getRandomNumber(number1, number2){
//     let random = (seed * seed).toString().padStart(4, '0').slice(1,3);
//     seed2 = parseInt(random);
//     while (seed == seed2){
//         seed2 = date.getSeconds() + 1;
//         random = (seed2 * seed2).toString().padStart(4, '0').slice(1,3);
//         seed2 = parseInt(random);
//     }
//     seed = seed2;
//     let div = number2 - number1 + 1;
//     let result = number1 + seed % div ;
//     return result;
// }

// document.writeln(getRandomNumber(5, 95))










// // 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
// // Приклад: countLetter("а", "Асталавіста") -> 4

// let word = 'асталавіста';
// let letter = 'а';

// function countLetter(letter, word){
//     let x = 0;
//     for(i=0; i<word.length; i++){
//         if (word[i]==letter){
//             x += 1;
//         }
//     }
//     return x;
// }

// console.log(countLetter(letter, word));

// // 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. 
// // Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// // Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.



// let input = '25000Uah';
// let output;

// function convertCurrency(str){
//     str = str.toUpperCase();
//     let newStr = '';
//     for (i=0; i<str.length; i++){

//         if (str[i]=='$'){
//             output = Number(newStr) * 25; 
//             console.log(output + 'UAH')
//         }

//         if (str[i]=='U'&& str[i+1]=="A" && str[i+2]=="H"){
//             output = Number(newStr) / 25; 
//             console.log(output + '$')
//         }

//         newStr = newStr + str[i];
//     }
// }
// convertCurrency(input);


// // 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// // Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

// function getRandomPassword(numbers){
//     let password = '';
//     if (numbers==undefined){
//         for (i=0; i<8; i++){
//             password = password + Math.trunc(Math.random()*10);
//         }
//     } else{
//         for (i=0; i<numbers; i++){
//             password = password + Math.trunc(Math.random()*10);
//         }
//     }
    
//     console.log(password);
// }

// getRandomPassword();

// // 9. Створіть функцію, яка видаляє всі букви з речення. 
// // Приклад: deleteLetters('a', "blablabla") -> "blblbl"

// function deleteLetters(letter, text){
//     let output = '';
//     for(i=0; i<text.length; i++){
//         if (text[i]==letter){
//             continue
//         }else {
//             output = output + text[i];
//         }
//     }
//     return output;
// }

// console.log(deleteLetters('a', 'ababahalamaha'))


// // 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. 
// // Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

// function isPalyndrom(word){
//     let palyndrom;
//     let x = word.length;

//     for (let i = 0; i < (word.length / 2); i++){
//         x = x-1;
//         if (word[i] == word[x]){
//             palyndrom = true;
//         } else {
//             palyndrom = false;
//             break
//         }
//     }
//     return palyndrom;
// }
// console.log(isPalyndrom('мад'));
// console.log(isPalyndrom('мам'));
// console.log(isPalyndrom('маад'));
// console.log(isPalyndrom('маам'));







// // 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. 
// // Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

// let textIn = 'ааБбвгггддdk,fv';
// let textOut = [];

// const length = textIn.length;
// let flag = false;

// for (let i = 0; i < length; ++i) {
//     textOut.push(textIn[i]);
// }
// function deleteDuplicateLetter(){
//     for (let i=0; i<length; i++){
//     flag = false;
//       for ( let x=i+1; x<length; x++){
//         if (textOut[i] == textOut[x]){
//             textOut[x] = undefined;
//             flag = true;
//         }
//       }
//       if (flag) {
//         textOut[i] = undefined;
//       }
//     }
//     for (let i=0; i<length; i++){
//         if (textOut[i] != undefined){
//             document.writeln(textOut[i]);
//         }
//     }
// }

// deleteDuplicateLetter();