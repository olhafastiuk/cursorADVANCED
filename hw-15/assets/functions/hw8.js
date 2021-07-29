// homework 8
export class Student {
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
        } else return null;
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

// const firstStudent = new Student(
//     "Вищої Школи Психотерапії м.Одеса",
//     "1",
//     "Остап Бендер"
// );

// // console.log(firstStudent.getInfo())