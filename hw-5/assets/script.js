// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. У функції є параметри: 
// length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

function getRandomArray(length, min, max){
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr[i] = Math.trunc(Math.random() * (max - min + 1)) + min;
    }
    return arr;
}

document.writeln(`Новий масив з випадкових чисел: ${getRandomArray (4, 1, 5)} <br>`)

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2


function getModa(...input) {
    const numbers = input.map(function(item) {
        if ((item ^ 0) === item) {
            return item;
        }
    })
    const amount = numbers.concat();
    for (let i = 0; i < numbers.length; i++) {
        amount[i] = 0;
        for (let x = 0; x < numbers.length; x++) {
            if (numbers[i] === numbers[x]) {
                amount [i] += 1;
            }
        }
    }
    let max = amount.indexOf(amount.reduce((a, b) => Math.max(a, b)));
    return numbers[max];
}

document.writeln(`Мода = ${getModa(6, 2, 55, 11, 100.5, 2, 100.5, 77, 57, 100, 23, 100.5, 56, 3, 2)}<br>`);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

function getAverage(...input) {
    const numbers = input.map(function(item) {
        if ((item ^ 0) === item) {
            return item;
        }
    })
    let sum = 0;
    for (let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}

document.writeln(`Середнє арифметичне значення = ${getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`)

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 Приклад: getMedian(1, 2, 3, 4) –> 2.5 
// Приклад: getMedian(1, 2, 3, 4, 5) –> 3

function getMedian(...input) {
    const numbers = input.map(function(item) {
        if ((item ^ 0) === item) {
            return item;
        }
    })
    let mediana = 0;
    const arr = numbers.sort((a, b) => a-b).concat();
    if (numbers.length % 2 !== 0) {
        mediana = arr[Math.ceil(numbers.length / 2) - 1];
    } else {
        mediana = (arr[numbers.length / 2 - 1] + arr[numbers.length / 2]) / 2;
    }

    return mediana;
}

document.writeln(`Медіана = ${getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 23, 2, 56, 3, 2)}<br>`)

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

function filterEvenNumbers(...numbers) {
    const arr = numbers.filter (function (item) {
        if (item % 2 !== 0){
            return item
        }        
    })
    return arr
}

document.writeln(`Тільки непарні числа: ${filterEvenNumbers(1, 2, 3, 4, 5, 6)}<br>`)

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

function countPositiveNumbers(...numbers) {
    let count = 0;
    numbers.filter(function(item) {
        if (item > 0){
            return count +=1;
        }
    })
    return count
}
document.writeln(`Кількість чисел більших за 0: ${countPositiveNumbers(1, -2, 3, -4, -5, 6, 7, 8)}<br>`)

// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

function getDividedByFive(...numbers) {
    const arr = numbers.filter(function(item) {
        if (item % 5 === 0){
            return item
        }
    })
    return arr;
}

document.writeln(`На ціло діляться тільки: ${getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)}<br>`)

// 8. Створіть функцію replaceBadWords(string) – яка 
// 1) розіб'є фразу на слова, 
// 2) замінить погані слова на зірочки (*). 
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), 
// після чого масив необхідно буде склеїти .join(" ") 
// Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" 
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" 
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(input) {
    str = input.toLowerCase();
    const arr = str.split(' ');
    const badWords = ['shit', 'fuck'];

    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < badWords.length; x++) {
            if (arr[i].includes(badWords[x])) {
                // TODO: визначення довжини слова і кількості зірочок
                arr[i] = arr[i].replace(badWords[x], '****');
            }
        }
    }
    const strNew = arr.join(' ')

    return strNew;
}

document.writeln(`Цензурована фраза: ${replaceBadWords("Fucking bullshit!")}<br>`)

// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word) {
    workWord = word.toLowerCase();
    const arr = [];
    let x = 0;
    for (let i = 0; i < workWord.length; i += 3) {
        arr[x] = workWord.slice(i, i+3);
        x += 1;
    }
    let str = arr.join('-')
    return str
}

document.writeln(`Слово по складах: ${divideByThree("Commander")}<br>`)

// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
// Для тестів не передавайте слова в яких більше 10 букв. 
// Краще взагалі обмежити работу функції 10 буквами. 
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] Приклад: generateCombinations("ol") -> ["ol", "lo"]

// Функція для обміну місцями двох літер
// word - вхідна стрічка
// a, b - номери літер які потрібно обміняти
// повернення - стрічка з обміняними літерами
function swap(str, a, b) {
    let letters;
    let t;

    letters = str.split('');

    t = letters[a];
    letters[a] = letters[b];
    letters[b] = t;

    return letters.join('');
}

// Функція для генерації перестановок без повторень
// word - вхідне слово для генерації перестановок
// s - номер першого символу
// e - номер останнього символу
function permute(word, s, e) {
    if (typeof set == 'undefined') {
        set = new Set()
    }

    if (s == e) {
        set.add(word)
    } else {
        for (let i = s; i <= e; ++i) {
            word = swap(word, s, i)
            permute(word, s + 1, e)
        }
    }

    return set
}

function generateCombinations(word) {
    return Array.from(permute(word, 0, word.length - 1))
}

document.writeln(`Всі можливі перестановки без повторів: ${generateCombinations("abca")}<br>`)
