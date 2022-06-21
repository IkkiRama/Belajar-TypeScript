class Hewan5{
    constructor(public nama:string){}
    bernafas(){
        console.log(`${this.nama} sedang bernafas`);
    }
}

class Hewan6 extends Hewan5{
    constructor(nama:string, public mamalia:boolean){
        super(nama);
    }
    bernafas(): void {
        console.log(`${this.nama} mencoba untuk bernafas`);
    }
}

let hewan6 = new Hewan6('Kucing', true);
console.log(hewan6);
hewan6.bernafas()