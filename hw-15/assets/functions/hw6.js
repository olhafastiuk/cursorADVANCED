// homework 6
export function getAverageMark(student) {
    let count = 0;
    let sum = 0;

    for (let subject in student.subjects) {
        for (let mark in student.subjects[subject]) {
            sum += student.subjects[subject][mark];
            ++count;
        }
    }
    return Math.round((sum / count) * 100) / 100;
}
