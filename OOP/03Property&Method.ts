class Hewan2{
    public nama:string;
    public kaki: number;
    mamalia: boolean = false;

    constructor(nama:string, kaki:number, mamalia:boolean){
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }

    bernafas(){
        return `${this.nama} sedang bernafas`;
    }
}

let kucing = new Hewan2('kucing', 4, true);
let anjing = new Hewan2('anjing', 4, false);
console.log(kucing);
console.log(kucing.bernafas());
console.log(anjing);

kucing.nama = 'kucing mirip anjing';
console.log(kucing);


