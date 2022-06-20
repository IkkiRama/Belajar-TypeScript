"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
console.log("Belajar Abstract Class");
class Vehicle {
    start() {
        console.log("Brummmmm");
    }
}
exports.Vehicle = Vehicle;
class Car extends Vehicle {
    constructor() {
        super(...arguments);
        this.roda = 4;
    }
}
class Motor extends Vehicle {
    constructor() {
        super(...arguments);
        this.roda = 2;
    }
}
class Truck extends Vehicle {
    constructor() {
        super(...arguments);
        this.roda = 8;
    }
}
let car = new Car();
console.log(car.roda);
car.start();
let motor = new Motor();
console.log(motor.roda);
motor.start();
