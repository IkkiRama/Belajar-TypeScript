console.log("Belajar Abstract Class");

export abstract class Vehicle {
    abstract roda:number
    start():void {
        console.log("Brummmmm");
    }
}


class Car extends Vehicle {
    roda:number = 4
}

class Motor extends Vehicle {
    roda:number = 2
}

class Truck extends Vehicle {
    roda:number = 8
}


let car = new Car();
console.log(car.roda);
car.start();

let motor = new Motor();
console.log(motor.roda);
motor.start();