var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.greet = function () {
        return "Hello, my name is ".concat(this.firstName, " ").concat(this.lastName, " and I am ").concat(this.age, " years old.");
    };
    return Student;
}());
var student = new Student('John', 'Doe', 20);
console.log(student.greet());
