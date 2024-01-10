class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };

    displayInfo() {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    };
};

class Car {
    constructor(make, model, year, licensePlate) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    };

    assignOwner(person) {
        if (person.age > 18) {
            this.owner = person;
        } else {
            console.log(`Cannot assign owner. ${person.name} is under 18 years old.`);
        };
    };

    displayInfo() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}, License Plate: ${this.licensePlate}`);
        if (this.owner) {
            console.log("Owner:");
            this.owner.displayInfo();
        } else {
            console.log("No owner assigned.");
        };
    };
};

const person1 = new Person("Yuriy Stycko", 25);
const person2 = new Person("Maria Velychko", 17);

const car1 = new Car("BMW", "M4", 2022, "AE 7777 KE");
const car2 = new Car("BYD", "Seal", 2023, "AI 0000 KI");

car1.assignOwner(person1);
car2.assignOwner(person2); // Error massage

person1.displayInfo();
car1.displayInfo();
car2.displayInfo();