import {Director, Developer, Accountant} from '../.vscode/employee-class';

class EmployeeInfo {
    public static main(): void {
        var director = new Director("Ivan Ivanovich", 33, "director");
        var developer = new Developer("Alexey Petrov", 23, "developer");
        var accountant = new Accountant("Anna Frolova", 29, "accountant");
        director.displayEmployeeInfo();
        director.displayEmployeeAbilities();
        developer.displayEmployeeInfo();
        developer.displayEmployeeAbilities();
        accountant.displayEmployeeInfo();
        accountant.displayEmployeeAbilities();
    }
}

EmployeeInfo.main();