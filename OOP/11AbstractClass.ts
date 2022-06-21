abstract class Hewan8{
    constructor(public nama:string){}

    makan():void{
        console.log(`Hewan ${this.nama} sedang makan`);
    }

    abstract bergerak():void;
}


class Kucing8 extends Hewan8{
    constructor(){
        super("Kucing");
    }

    bergerak():void{
        console.log(`Kucing Berjalan`);
    }
}

class Burung extends Hewan8{
    constructor(){
        super("Burung");
    }

    bergerak():void{
        console.log(`Burung Terbang`);
    }
}

let Kucing = new Kucing8();
console.log(Kucing);
Kucing.bergerak()
Kucing.makan()



let burung = new Burung();
console.log(burung);
burung.bergerak()
burung.makan()