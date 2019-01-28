import {EmployeeAbstract} from './employee-abstract-class';

export class Director extends EmployeeAbstract {

    constructor(name: string, age: number, position: string) {
        super(name, age, position);
    }

    cook() {
        super.cook();
    }

    sing() {
        super.sing();
    }

    dance(){
        super.dance();
    }

    teach() {
        super.teach();
    }

    flyPlanes() {
        console.log("Fly planes...");
    }

    playFootbal() {
        console.log("Play football...");
    }

    displayEmployeeAbilities() {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.flyPlanes();
        this.playFootbal();
    }

}

export class Developer extends EmployeeAbstract {

    constructor(name: string, age: number, position: string) {
        super(name, age, position);
    }

    cook() {
        super.cook();
    }

    sing() {
        super.sing();
    }

    dance(){
        super.dance();
    }

    teach() {
        super.teach();
    }

    code() {
        console.log("Write code...");
    }

    displayEmployeeAbilities() {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.code();
    }
    
}

export class Accountant extends EmployeeAbstract {

    constructor(name: string, age: number, position: string) {
        super(name, age, position);
    }

    cook() {
        super.cook();
    }

    sing() {
        super.sing();
    }

    dance(){
        super.dance();
    }

    teach() {
        super.teach();
    }

    shootGuns() {
        console.log("Shoot guns...");
    }

    repairElectronics() {
        console.log("Repair electronics...");
    }

    displayEmployeeAbilities() {
        this.cook();
        this.sing();
        this.dance();
        this.teach();
        this.shootGuns();
        this.repairElectronics();
    }
    
}