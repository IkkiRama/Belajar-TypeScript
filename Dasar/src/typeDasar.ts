console.log("Hello, Belajar Tipe data");

let nama = "Rifki"
let jurusan:string = "RPL"
let umur:number = 17


let isJomblo:boolean = true

nama = 10
console.log(`Nama saya ${nama}, dan saya berumur ${umur} tahun. saya sekarang berada di jurusan ${jurusan}`);
console.log(`Saya ${isJomblo ? "Jomblo" : "Tidak jomblo"}`);


let heroes: any = "Ultraman"
heroes = 1
heroes = true
heroes = []
heroes = true || false || {} || [] || "Rifki"

console.log(heroes);




// Union Type
let nilai:number | string
nilai = 10
nilai = "10"
nilai = true



