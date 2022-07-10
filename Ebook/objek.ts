namespace Objek{
    type siswa = {
        nama: string,
        umur: number,
    }
    const siswa :siswa = {
        nama : "Rifki",
        umur : 17
    }
}


let dataSiswa = function(nama:string, umur:number, energi: number, isJomblo:boolean): void {
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
    this.isJomblo = isJomblo;

    this.makan = (porsi:number):number =>{
        console.log(`Selamat makan ${nama} sebanyak ${porsi} porsi`);
        return energi+=porsi;
    }
    this.main = (jam:number):number =>{
        console.log(`Selamat main ${nama} selama ${jam} jam`);
        return energi-=jam;
    }
    this.tidur = (jam:number):number =>{
        console.log(`Selamat tidur ${nama} selama ${jam} jam`);
        return energi+=jam;
    }
    this.getEnergi = () => {
        return console.log(energi);
    }
}

let rifki = new dataSiswa("Rifki", 17, 100, true);
console.log(rifki);
rifki.makan(20);
rifki.getEnergi();

if (rifki.energi > 0) {
    rifki.main(2);
    rifki.getEnergi();
}

