"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Belajar Interface Class");
class Lenovo {
    constructor(brand, model, price, isGaming) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.isGaming = isGaming;
    }
    on() {
        console.log("Laptop Lenovo On");
    }
    off() {
        console.log("Laptop Lenovo Off");
    }
}
class Mackbook {
    constructor(brand, model, price, keyboardLight) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log("Laptop Mackbook On");
    }
    off() {
        console.log("Laptop Mackbook Off");
    }
}
let lenovo = new Lenovo("Lenovo", "Thinkpad", 100000, true);
let mackbook = new Mackbook("Apple", "Macbook", 200000, true);
console.log(lenovo);
console.log(lenovo.brand);
lenovo.on();
console.log(mackbook);
console.log(mackbook.brand);
mackbook.on();
