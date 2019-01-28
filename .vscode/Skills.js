"use strict";
exports.__esModule = true;
var employee_class_1 = require("../.vscode/employee-class");
var EmployeeInfo = /** @class */ (function () {
    function EmployeeInfo() {
    }
    EmployeeInfo.main = function () {
        var director = new employee_class_1.Director("Ivan Ivanovich", 33, "director");
        var developer = new employee_class_1.Developer("Alexey Petrov", 23, "developer");
        var accountant = new employee_class_1.Accountant("Anna Frolova", 29, "accountant");
        director.displayEmployeeInfo();
        director.displayEmployeeAbilities();
        developer.displayEmployeeInfo();
        developer.displayEmployeeAbilities();
        accountant.displayEmployeeInfo();
        accountant.displayEmployeeAbilities();
    };
    return EmployeeInfo;
}());
EmployeeInfo.main();
