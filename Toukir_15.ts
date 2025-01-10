
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    greet(): string;
}
class Student implements Person {
    firstName: string;
    lastName: string;
    age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(): string {
        return `Hello, my name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
    }
}
const student = new Student('John', 'Doe', 20);
console.log(student.greet());