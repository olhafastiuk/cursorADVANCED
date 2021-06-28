const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – 
// яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary) {
    const newSalary = this.tax * salary;
    return newSalary.toFixed(2)
}
document.forms.form1.onsubmit = function() {
    const sal = Number(document.getElementById('salary-input').value);
    const radioValue = document.querySelector('input[name="form1"]:checked').value; 
    let country;
    if (radioValue === 'ukraine') {
        country = ukraine;
    }
    if (radioValue === 'latvia') {
        country = latvia;
    }
    if (radioValue === 'litva') {
        country = litva;
    }
    document.getElementById('res1').innerHTML = `Ви заплатите податків на таку суму: <span>${getMyTaxes.call(country, sal)} UAH</span>`
    return false
}


// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – 
// яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
// Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes() {
    const middleTax = this.tax * this.middleSalary;
    return middleTax.toFixed(2)
}

function handleClick(){
    let country;
    const radioValue = document.querySelector('input[name="form2"]:checked').value; 
    if (radioValue === 'ukraine'){
        country = ukraine;
    }
     if (radioValue === 'latvia'){
        country = latvia;
    }
    if (radioValue === 'litva'){
        country = litva;
    }
    document.getElementById('res2').innerHTML = `У середньому ІТ-спеціалісти платять таку суму податків:<span> ${getMiddleTaxes.call(country)} UAH</span>`
}


// 3. Створіть функцію getTotalTaxes.call(country) -> number; – 
// яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies). 
// Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes() {
    const totalTax = this.tax * this.middleSalary * this.vacancies;
    return totalTax.toFixed(2)
}

function getSelectorValue(){
    let country;
    const selector = document.getElementById("selector3").value
    if (selector === 'ukraine'){
        country = ukraine;
    }
     if (selector === 'latvia'){
        country = latvia;
    }
    if (selector === 'litva'){
        country = litva;
    }
    document.getElementById('res3').innerHTML = `<span>${getTotalTaxes.call(country)} UAH</span>`
}

// 4. Створіть функцію getMySalary(country) – 
// яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
// Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. 
// taxes – розраховується в залежності від вибраної країни та значення salary.
// profit = salary - taxes;

function getMySalary(country) {
    const salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    const taxes = salary * country.tax;
    const profit = salary - taxes;
    const obj = {
        salary: salary.toFixed(2),
        taxes: taxes.toFixed(2),
        profit: profit.toFixed(2),
    }
  
    document.getElementById('salary').innerHTML = `Зарплата: <span>${obj.salary} UAH</span>`;
    document.getElementById('taxes').innerHTML = `Податок: <span>${obj.taxes} UAH</span>`;
    document.getElementById('profit').innerHTML = `Профіт: <span>${obj.profit} UAH</span>`;


    setTimeout(getMySalary, 10000, country)
}
function getSelectorValue2(){
    let country;
    const selector = document.getElementById("selector4").value
    if (selector === 'ukraine'){
        country = ukraine;
    }
     if (selector === 'latvia'){
        country = latvia;
    }
    if (selector === 'litva'){
        country = litva;
    }
    getMySalary(country)
}