class Hewan3{
    constructor(public nama:string, public kaki: number ){}
}

class Hewan4 extends Hewan3{
    constructor(nama:string, kaki:number, public mamalia:boolean){
        super(nama, kaki);
    }

    bernafas(){
        console.log(`${this.nama} sedang bernafas`);
    }
}


let hewan4 = new Hewan4('Kucing', 4, true);
console.log(hewan4);
console.log(hewan4.nama);
console.log(hewan4.mamalia);
