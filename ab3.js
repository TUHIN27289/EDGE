var A = /** @class */ (function () {
    function A(a1) {
        this.a1 = a1;
    }
    A.prototype.get = function () {
        return this.a1;
    };
    return A;
}());
var ab = new A("a_");
console.log(ab.get());
