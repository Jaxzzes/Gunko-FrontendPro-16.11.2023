function Student(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);

    this.present = function () {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance[this.attendance.indexOf(undefined)] = true;
            console.log(`${this.firstName} ${this.lastName} is present.`);
        } else {
            console.log("Attendance array is full.");
        };
    };

    this.absent = function () {
        if (this.attendance.filter(Boolean).length < 25) {
            this.attendance[this.attendance.indexOf(undefined)] = false;
            console.log(`${this.firstName} ${this.lastName} is absent.`);
        } else {
            console.log("Attendance array is full.");
        };
    };

    this.calculateAge = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.yearOfBirth;
    };

    this.calculateGPA = function () {
        const totalGrades = this.grades.reduce((sum, grade) => sum + grade, 0);
        return this.grades.length === 0 ? 0 : totalGrades / this.grades.length;
    };

    this.summary = function () {
        const averageGrade = this.calculateGPA();
        const attendancePercentage = this.attendance.filter(Boolean).length / 25;

        if (averageGrade > 90 && attendancePercentage > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendancePercentage > 0.9) {
            return "Добре, але можна краще!";
        } else {
            return "Редиска!";
        };
    };
};

const student1 = new Student("Ivan", "Bayrak", 1990);
const student2 = new Student("Anna", "Shevchenko", 1995);

student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.present();

student1.grades = [95, 88, 92];
student2.grades = [90, 85, 88, 94];

console.log(Student);
console.log(student1.calculateAge());
console.log(student1.calculateGPA());
console.log(student1.summary());