interface AndroidPhone {
    brand: string;
    Home(): void;
    Back(): void;
    Menu(): void;
}

class Samsung implements AndroidPhone {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    Home(): void {
        console.log("Home Samsung Tapped");
    }
    Back(): void {
        console.log("Back Samsung Tapped");
    }
    Menu(): void {
        console.log("Menu Samsung Tapped");
    }
}

class Asus implements AndroidPhone {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    Home(): void {
        console.log("Home Asus Tapped");
    }
    Back(): void {
        console.log("Back Asus Tapped");
    }
    Menu(): void {
        console.log("Menu Asus Tapped");
    }
}


class AndroidGame{
    private androidPhone: AndroidPhone;

    constructor(androidPhone: AndroidPhone){
        this.androidPhone = androidPhone;
    }

    Back():void {
        console.log("Back Android Game Tapped, Kembali kemenu utama");
    }

    Home():void {
        this.androidPhone.Home();
    }

    Menu():void {
        this.androidPhone.Menu();
    }
}

let samsung = new Samsung("Samsung Galaxy S10");

let androidGame = new AndroidGame(samsung);

androidGame.Home()
androidGame.Back()
androidGame.Menu()



// Interface ApplePhone
interface ApplePhone {
    brand: string;
    Home(): void;
}

class Iphone implements ApplePhone {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    Home(): void {
        console.log("Home Iphone Tapped");
    }
}


let apple = new Iphone("Iphone X");
let appleGame = new AndroidGame(apple);
console.log(apple);
console.log(appleGame);
