const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – 
// яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    let newSalary = this.tax * salary;
    return newSalary
}
document.forms.form1.onsubmit = function() {
    const sal = Number(document.getElementById('salary').value);
    let radioValue = document.querySelector('input[name="form1"]:checked').value; 
    let callFunc;
    if (radioValue === 'ukraine'){
        callFunc = ukraine;
    }
    if (radioValue === 'latvia'){
        callFunc = latvia;
    }
    if (radioValue === 'litva'){
        callFunc = litva;
    }
    document.getElementById('res1').innerHTML = `Ви заплатите податків на таку суму: ${getMyTaxes.call(callFunc, sal)}`
    return false
}


// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – 
// яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
// Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    return this.tax * this.middleSalary
}

function handleClick(){
    let callFunc;
    let radioValue = document.querySelector('input[name="form2"]:checked').value; 
    if (radioValue === 'ukraine'){
        callFunc = ukraine;
    }
     if (radioValue === 'latvia'){
        callFunc = latvia;
    }
    if (radioValue === 'litva'){
        callFunc = litva;
    }
    document.getElementById('res2').innerHTML = `У середньому ІТ-спеціаплісти платять таку суму податків: ${getMiddleTaxes.call(callFunc)}`
}


// 3. Створіть функцію getTotalTaxes.call(country) -> number; – 
// яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). 
// Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies
}

function getSelectorValue(){
    let callFunc;
    let selector = document.getElementById("selector3").value
    if (selector === 'ukraine'){
        callFunc = ukraine;
    }
     if (selector === 'latvia'){
        callFunc = latvia;
    }
    if (selector === 'litva'){
        callFunc = litva;
    }
    document.getElementById('res3').innerHTML = `${getTotalTaxes.call(callFunc)}`
}

// 4. Створіть функцію getMySalary(country) – 
// яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
    let salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    let taxes = salary * country.tax;
    let profit = salary - taxes;
    let obj = {
        salary: salary,
        taxes: taxes,
        profit: profit,
    }
    // console.log(obj)
    document.getElementById('res4').innerHTML = `Якщо зарплата ${obj.salary}, податок ${obj.taxes}, то профіт буде дорівнювати ${obj.profit}`
    setTimeout(getMySalary, 10000, country)
}
function getSelectorValue2(){
    let callFunc;
    let selector = document.getElementById("selector4").value
    if (selector === 'ukraine'){
        callFunc = ukraine;
    }
     if (selector === 'latvia'){
        callFunc = latvia;
    }
    if (selector === 'litva'){
        callFunc = litva;
    }
    getMySalary(callFunc)
}

// getMySalary(ukraine);