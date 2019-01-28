"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var employee_abstract_class_1 = require("./employee-abstract-class");
var Director = /** @class */ (function (_super) {
    __extends(Director, _super);
    function Director(name, age, position) {
        return _super.call(this, name, age, position) || this;
    }
    Director.prototype.cook = function () {
        _super.prototype.cook.call(this);
    };
    Director.prototype.sing = function () {
        _super.prototype.sing.call(this);
    };
    Director.prototype.dance = function () {
        _super.prototype.dance.call(this);
    };
    Director.prototype.teach = function () {
        _super.prototype.teach.call(this);
    };
    Director.prototype.flyPlanes = function () {
        console.log("Fly planes...");
    };
    Director.prototype.playFootbal = function () {
        console.log("Play football...");
    };
    Director.prototype.displayEmployeeAbilities = function () {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.flyPlanes();
        this.playFootbal();
    };
    return Director;
}(employee_abstract_class_1.EmployeeAbstract));
exports.Director = Director;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, age, position) {
        return _super.call(this, name, age, position) || this;
    }
    Developer.prototype.cook = function () {
        _super.prototype.cook.call(this);
    };
    Developer.prototype.sing = function () {
        _super.prototype.sing.call(this);
    };
    Developer.prototype.dance = function () {
        _super.prototype.dance.call(this);
    };
    Developer.prototype.teach = function () {
        _super.prototype.teach.call(this);
    };
    Developer.prototype.code = function () {
        console.log("Write code...");
    };
    Developer.prototype.displayEmployeeAbilities = function () {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.code();
    };
    return Developer;
}(employee_abstract_class_1.EmployeeAbstract));
exports.Developer = Developer;
var Accountant = /** @class */ (function (_super) {
    __extends(Accountant, _super);
    function Accountant(name, age, position) {
        return _super.call(this, name, age, position) || this;
    }
    Accountant.prototype.cook = function () {
        _super.prototype.cook.call(this);
    };
    Accountant.prototype.sing = function () {
        _super.prototype.sing.call(this);
    };
    Accountant.prototype.dance = function () {
        _super.prototype.dance.call(this);
    };
    Accountant.prototype.teach = function () {
        _super.prototype.teach.call(this);
    };
    Accountant.prototype.shootGuns = function () {
        console.log("Shoot guns...");
    };
    Accountant.prototype.repairElectronics = function () {
        console.log("Repair electronics...");
    };
    Accountant.prototype.displayEmployeeAbilities = function () {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.shootGuns();
        this.repairElectronics();
    };
    return Accountant;
}(employee_abstract_class_1.EmployeeAbstract));
exports.Accountant = Accountant;
