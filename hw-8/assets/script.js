class Student {
    constructor(university, course, fullName) {
        this.available = true;
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = [];
    }

    getInfo() {
        return `<b>Студент ${this.course}-го курсу ${this.university}, ${this.fullName}</b><br>`;
    }

    get mark() {
        if (this.available) {
            return this.marks;
        } else {
            return null;
        }
    }

    set mark(mark) {
        if (this.available) {
            this.marks.push(mark);
        }
         else return null;
    }

    getAverageMark() {
        if (this.available) {
            let sum = 0;

            for (let i = 0; i < this.marks.length; i++) {
                sum += this.marks[i];
            }
            return sum / this.marks.length;
        } else return 0;
    }

    dismiss() {
        this.available = false;
    }

    returnStudent() {
        this.available = true;
    }
    
}

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName);
        this.marks = marks;
        this.scholarship = this.getScholarship();
    }

    run() {
        if (this.scholarship) {
            document.writeln(
                `<b>"Ви отримали 1400 грн. стипендії"</b><br><i>(для полегшення перевірки домашнього завдання час видачі стипендії пришвидшено у 10раз)</i><br>`
            );
            setTimeout(this.run.bind(this), 3000);
        } else {
            clearTimeout(this.run.bind(this));
        }
    }

    getScholarship() {
        if (this.available && this.getAverageMark() >= 4) {
            this.scholarship = true;

            setTimeout(this.run.bind(this));
        } else this.scholarship = false;
        return this.scholarship;
    }
}
const firstStudent = new Student(
    "Вищої Школи Психотерапії м.Одеса",
    "1",
    "Остап Бендер"
);

setTimeout(() => {
    document.writeln(`  <h2>HW 8. Прототипи. ES6 класи</h2>`);
    document.writeln(
        `BASIC: Створіть метод, що повертає сукупну інформацію про курс, учбовий заклад та імені студента.<br><br>`
    );
    firstStudent.mark = 5;
    document.writeln(`<br>Додаємо нову оцінку: ${firstStudent.marks}<br> `);

    firstStudent.mark = 4;
    document.writeln(`Додаємо нову оцінку: ${firstStudent.marks} <br>`);

    firstStudent.mark = 4;
    document.writeln(`Додаємо нову оцінку: ${firstStudent.marks} <br>`);

    firstStudent.mark = 5;
    document.writeln(`Додаємо нову оцінку: ${firstStudent.mark}<br> `);

    document.writeln(`<br>Відрахувати студента <br>`);
    firstStudent.dismiss();

    firstStudent.mark = 5;
    document.writeln(`<br>Додаємо нову оцінку: ${firstStudent.mark} <br> `);

    document.writeln(`<br>Зарахувати студента знову <br><br>`);
    firstStudent.returnStudent();

    firstStudent.mark = 5;
    document.writeln(`Додаємо нову оцінку: ${firstStudent.marks}<br> `);

    document.writeln(
        `Cередній бал студента: ${firstStudent.getAverageMark()} <br>`
    );
    document.writeln(
        `-------------------------------------------------------<br>`
    );
}, 0);

setTimeout(() => {
    document.writeln(
        `ADVANCED. Створіть новий клас, який повністю наслідує клас. Бюджетний студент може отримати стипендію. =><br><br>`
    );
}, 8000);

const budjetStudent = new BudgetStudent(`ІФНМУ`, 5, `Петро Петренко`, []); // 1case
setTimeout(() => {
    document.writeln(budjetStudent.getInfo());
    document.writeln(
        `У цього студента ще немає оцінок, тому йому не нараховують стипендію <br>`
    );

    document.writeln(
        `-------------------------------------------------------<br>`
    );
}, 13000);

const budjetStudent2 = new BudgetStudent(`ІФНМУ`, 3, `Василь Василенко`, []); // 2case
setTimeout(function () {
    document.writeln(budjetStudent2.getInfo());
    document.writeln(
        `У студента немає оцінок. Виставляємо оцінки студенту...<br>`
    );
    budjetStudent2.mark = 4;
    budjetStudent2.mark = 4;
    budjetStudent2.mark = 4;
}, 20000);

setTimeout(() => {
    document.writeln(
        `Cередній бал студента: ${budjetStudent2.getAverageMark()}<br>`
    );
    budjetStudent2.getScholarship();
}, 23000);

setTimeout(() => {
    document.writeln(`<br>Виставляємо нові оцінки (0, 0, 0)...<br>`);
    budjetStudent2.mark = 0;
    budjetStudent2.mark = 0;
    budjetStudent2.mark = 0;
    document.writeln(
        `Новий середній бал студента: ${budjetStudent2.getAverageMark()}<br> `
    );
    document.writeln(`Більше в нього стипендії немає)<br>`);
    budjetStudent2.getScholarship();

    document.writeln(
        `-------------------------------------------------------<br>`
    );
}, 35000);

setTimeout(() => {
    document.writeln(`Наступний студент зразу має відмінні оцінки:<br>`);
    const budjetStudent3 = new BudgetStudent(
        `ІФНМУ`,
        4,
        `Іван Василенко`,
        [5, 4, 5]
    );
    document.writeln(budjetStudent3.getInfo());
}, 40000);
