import {getMaxNumber} from "./functions/hw3"

document.forms.form_1.onsubmit = function(){
    const inputNumber = document.getElementById('input-1').value;
    const maxNumber = getMaxNumber(inputNumber);
    if (maxNumber != undefined) {
    document.getElementById("output-1").innerHTML = `Найбільше цифра у введеному числі: ${maxNumber}`;
    }
    return false;
}

import {getPairs} from "./functions/hw4"
document.getElementById("input-2").addEventListener('click', () => {
    const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
    const girls = students.filter(student => student[student.length - 1] === 'а');
    const boys = students.filter(student => student[student.length - 1] !== 'а');
    const itemsPairs = getPairs(boys, girls).map((item) => item.join( ", " )).join(';<br>');
    document.getElementById("output-2").innerHTML = `${itemsPairs}`;
})

import {getRandomArray} from "./functions/hw5"
document.getElementById("input-3").addEventListener('click', () =>  {
    const minNumber = +document.getElementById('input-3min').value
    const maxNumber = +document.getElementById('input-3max').value
    const len = +document.getElementById('input-3len').value
    if (minNumber && maxNumber && len) {
        document.getElementById("output-3").innerHTML =`Новий масив з випадкових чисел: ${getRandomArray (len, minNumber, maxNumber).join(', ')}`

    }
})

import {getAverageMark} from "./functions/hw6"
const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4],
        },
    },
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5],
        },
    },
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5],
        },
    },
];
document.getElementById("input-4").addEventListener('click', () =>  {
    document.getElementById("output-4").innerHTML =`Середній бал: ${getAverageMark(students[0])}`
})

import {getMyTaxes} from "./functions/hw7"
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

document.forms.form5.onsubmit = function() {
    const sal = Number(document.getElementById('input-5').value);
    const radioValue = document.querySelector('input[name="form5"]:checked').value; 
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
    document.getElementById('output-5').innerHTML = `Ви заплатите податків на таку суму: <span>${getMyTaxes(country.tax, sal)} $</span>`
    return false
}

import {Student} from "./functions/hw8"
const firstStudent = new Student(
    "Вищої Школи Психотерапії м.Одеса",
    "1",
    "Остап Бендер"
);
document.getElementById("input-6").addEventListener('click', () =>  {
    
    document.getElementById("output-6").innerHTML =`${firstStudent.getInfo()}`
})

import {generateBlocksInterval} from "./functions/hw9"
document.getElementById("input-7").addEventListener('click', () =>  {
    generateBlocksInterval()
})

import {playNow} from "./functions/hw10"
import './styles/hw10.css'

import {getRandomChinese} from "./functions/hw11"
let input = document.getElementById('input-9')
input.addEventListener('change', function () {
    let amount = +document.getElementById('input-9').value
    let promise = getRandomChinese(amount)
    let output = document.getElementById('output-9');
    promise.then(
    (res) => output.innerHTML = res,
    (err) => output.innerHTML = err);
})

import "./styles/main.css";
import background from '../assets/bg.jpg'
document.body.style.backgroundImage = `url("${background}")`