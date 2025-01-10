class MyClass {
    private variable1: string;
    private variable2: number;

    constructor() {
        this.variable1 = '';
        this.variable2 = 0;
    }

    public setValues(value1: string, value2: number): void {
        this.variable1 = value1;
        this.variable2 = value2;
    }

    public printValues(): void {
        console.log(`Variable 1: ${this.variable1}`);
        console.log(`Variable 2: ${this.variable2}`);
    }
}

const myClassInstance = new MyClass();
myClassInstance.setValues('Hello', 42);
myClassInstance.printValues();