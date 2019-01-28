export abstract class EmployeeAbstract {

    protected name: string;
    protected age: number;
    protected position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    abstract displayEmployeeAbilities(): void;

    displayEmployeeInfo() {
        console.log(" name: " + this.name);
        console.log(" age: " + this.age);
        console.log(" position: " + this.position);
    }

    cook(): void {
        console.log("Cooking...");
    }

    sing(): void {
        console.log("Singing...");
    }
    
    dance(): void {
        console.log("Dancing...");
    }
    
    teach(): void {
        console.log("Teaching...");
    }

}