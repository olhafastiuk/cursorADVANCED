const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. У вас повинен вийти вкладений масив з парами студентів:

const girls = students.filter(student => student[student.length - 1] === 'а');
const boys = students.filter(student => student[student.length - 1] !== 'а');

function getPairs(boys, girls){
    const pairs = [];
    for (let i = 0; i < boys.length; i++) {
        pairs[i] = [boys[i], girls[i]];
    }
    return pairs;
}
const pairs = getPairs(boys, girls);
console.log(pairs);

// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.

function getProject(pairs, themes) {
    const teamProject = [];
    for (let i = 0; i < pairs.length; i++) {
        teamProject[i] = [pairs[i].join(' і '), themes[i]];
    }

    return teamProject;
}
const teamProject = getProject(pairs, themes);
console.log(teamProject);

//3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getStudentMark(students, marks) {
    const studentMark = [];
    for (let i = 0; i < students.length; i++) {
        studentMark[i] = [students[i], marks[i]];
    }
    return studentMark;
}
const studentMark = getStudentMark(students, marks);
console.log(studentMark);

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив)

function getTeamMarks(team){
    const teamMark = [];
    for (let i = 0; i < team.length; i++) {
        teamMark [i] = [team[i], Math.trunc(Math.random() * 5) + 1];
    }
    return teamMark;
}
const teamMark = getTeamMarks(teamProject);
console.log(teamMark);

//Вивід у html
const itemsPairs = pairs.map((item) => item.join( ", " )).join(';<br>');
document.querySelector('.pairs').innerHTML = `${itemsPairs}.`;

const itemsProject = teamProject.map((item) => item.join(': \"')).join('\";<br>');
document.querySelector('.project').innerHTML = `${itemsProject}.`;

const itemsMark = studentMark.map((item)=>item.join(': ')).join(';<br>')
document.querySelector('.student__mark').innerHTML = `${itemsMark}.`;

const itemsTeamMark = teamMark.map((item) => item = `${item[0][0]} - "${item[0][1]}": ${item[1]}`).join(';<br>');
document.querySelector('.teams__marks').innerHTML = `${itemsTeamMark}.`;