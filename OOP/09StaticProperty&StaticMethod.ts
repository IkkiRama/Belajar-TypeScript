class Ayam {
    static kaki: number = 2;

    static jalan(){
        console.log(`Ayam berjalan dengan ${this.kaki} kaki`);
    }


    getKaki(){
        return Ayam.kaki;
    }
}

let ayam = new Ayam();
Ayam.jalan()
console.log(ayam.getKaki());