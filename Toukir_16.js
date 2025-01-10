var MyClass = /** @class */ (function () {
    function MyClass() {
        this.variable1 = '';
        this.variable2 = 0;
    }
    MyClass.prototype.setValues = function (value1, value2) {
        this.variable1 = value1;
        this.variable2 = value2;
    };
    MyClass.prototype.printValues = function () {
        console.log("Variable 1: ".concat(this.variable1));
        console.log("Variable 2: ".concat(this.variable2));
    };
    return MyClass;
}());
var myClassInstance = new MyClass();
myClassInstance.setValues('Hello', 42);
myClassInstance.printValues();
