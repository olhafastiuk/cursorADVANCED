const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

//   1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - 
//   яка повертає список предметів для конкретного студента. 
//   Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

  function getSubjects(student) {
    let subjects = [];
    for (let subject in student.subjects) {
      subjects.push((subject.toString()[0].toUpperCase() + subject.toString().slice(1)).replace(/_/g, ' '))
    }
  
    return subjects
  }
  const result1 = getSubjects(students[0]);
  document.writeln(`1. Функція getSubjects(students[0]) => ${result1} <br>`)


// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – 
// яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(student) {
    let count = 0;
    let sum = 0;
  
    for (let subject in student.subjects) {
      for (let mark in student.subjects[subject]) {
        sum += student.subjects[subject][mark];
        ++count;
      }
    }
    return Math.round(sum / count * 100) / 100
  }
  const result2 = getAverageMark(students[0]);
  document.writeln(`2. Функція getAverageMark(students[0]) => ${result2}<br>`)



// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – 
// яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// Повинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(student) {
    return { course: student.course, name: student.name, avarageMark: getAverageMark(student) }
  }
const result3 = getStudentInfo(students[0]);
  document.writeln(`3. Функція  getStudentInfo(students[0]) => ${JSON.stringify(result3)} <br>`)
  



// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – 
// яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
    let names = [];
  
    for (let student in students) {
      names.push(students[student].name)
    }
  
    return names.sort()
  }
  const result4 = getStudentsNames(students);
  document.writeln(`4. Функція getStudentsNames(students) => ${result4}<br>`)


// 5. Створіть функцію getBestStudent(students) --> "Anton" – 
// яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    let theBest = students[0].name;
    let theBestMark = getAverageMark(students[0]);
  
    for (let student in students) {
        let currentMark = getAverageMark(students[student]);
        if (theBestMark < currentMark) {
            theBest = students[student].name;
            theBestMark = currentMark;
        }
    }
  
    return theBest
  }
  const result5 = getBestStudent(students);
  document.writeln(`5. Функція getBestStudent(students) => ${result5}<br>`)


// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – 
// яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(str) {
    let object = {};
  
    for (let letter in str) {
        if (isNaN(object[str[letter]])) {
            object[str[letter]] = 1
        } else {
            ++object[str[letter]]
        }
    }
  
    return object
  }
  const result6 = calculateWordLetters("students");
  document.writeln(`6. Функція calculateWordLetters("students") => ${JSON.stringify(result6)}`)