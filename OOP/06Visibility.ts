class Hewan7{
    public nama:string;
    private kaki:number;
    protected mamalia:boolean;

    constructor(nama:string, kaki:number, mamalia:boolean){
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
}

class Katak extends Hewan7{
    private umurTelur:number = 7;
    private umurKecebong:number = 3;
    private umurKatak:number = 1;

    getUmur(){
        return this.umurTelur + this.umurKecebong + this.umurKatak;
    }
}

let katak = new Katak('katak', 4, true);
console.log(katak);
console.log(katak.getUmur());
console.log(katak.nama);
