console.log("Belajar Interface Class");

export interface Leptop {
    brand: string;
    model: string;
    price: number;
    on():void
    off():void
}

class Lenovo implements Leptop {
    brand: string;
    model: string;
    price: number;
    isGaming : boolean;

    constructor(brand: string, model: string, price: number, isGaming: boolean) {
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


class Mackbook implements Leptop {
    brand: string;
    model: string;
    price: number;
    keyboardLight: boolean;

    constructor(brand: string, model: string, price: number, keyboardLight: boolean) {
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
mackbook.on()