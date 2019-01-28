"use strict";
exports.__esModule = true;
var EmployeeAbstract = /** @class */ (function () {
    function EmployeeAbstract(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    EmployeeAbstract.prototype.displayEmployeeInfo = function () {
        console.log(" name: " + this.name);
        console.log(" age: " + this.age);
        console.log(" position: " + this.position);
    };
    EmployeeAbstract.prototype.cook = function () {
        console.log("Cooking...");
    };
    EmployeeAbstract.prototype.sing = function () {
        console.log("Singing...");
    };
    EmployeeAbstract.prototype.dance = function () {
        console.log("Dancing...");
    };
    EmployeeAbstract.prototype.teach = function () {
        console.log("Teaching...");
    };
    return EmployeeAbstract;
}());
exports.EmployeeAbstract = EmployeeAbstract;
