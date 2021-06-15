const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів:

const girls = students.filter(student => student[student.length - 1] === 'а');
const boys = students.filter(student => student[student.length - 1] !== 'а');

function getPairs(boys, girls){
    const p = [];
    for (let i = 0; i < boys.length; i++) {
        p[i] = [boys[i], girls[i]];
    }

    return p;
}

console.log(getPairs(boys, girls));

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

const pairs = getPairs(boys, girls);

function getProject(pairs, themes) {
    const p = [];
    for (let i = 0; i < pairs.length; i++) {
        p[i] = [pairs[i].join(' і '), themes[i]];
    }

    return p;
}

console.log(getProject(pairs, themes));

//3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getStudentMark(students, marks) {
    const p = [];
    for (let i = 0; i < students.length; i++) {
        p[i] = [students[i], marks[i]];
    }
    return p;
}

console.log(getStudentMark(students, marks));

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)

function getTeamMarks(team){
    const p = [];
    for (let i = 0; i < team.length; i++) {
        p [i] = [team[i], Math.trunc(Math.random() * 4+1)];
    }
    return p;
}

console.log(getTeamMarks(getProject(pairs, themes)));
