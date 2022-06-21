class Leptop {
    constructor() {
        console.log("constructor selalu dijalankan terlebih dahulu");
    }
}
class Leptop1 {
    name : string;
    constructor(name : string) {
        this.name = name;
    }
}

class Leptop2 {
    constructor(public name: string, public price: number) {
    }
}

let leptop = new Leptop();
let asus = new Leptop1('Asus');
let dell = new Leptop2("Dell", 50000);
console.log(leptop);
console.log(dell);
console.log(dell.name);
console.log(asus);
