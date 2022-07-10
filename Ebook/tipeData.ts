let nama : string = "Rifki"
nama = nama + " Romadhan"
let sapa : string = `Hai, nama saya ${nama}`




// const namaDepan : String = "Rifki"
// const namaBelakang : string = "Romadhan"
const umur : number = 1217361
const umur2 : Number = 567890

const benar : Boolean = true
const salah : boolean = false

let data : any = "Saya Orang"
data = 2123123
data = true
data = ["Rifki", "Romadhan"]
data = {
    nama : "Rifki Romadhan",
    umur : 17
}

let array = ["Rifki", 123, [], {}]
let array1 : number[] = [1,4,5]
let array2 : any[] = ["Romadhan", 1123, true, [], {}]


// Array Tuples
let array3 : [string, number] = ["Jakarta", 123]
array3 = ["Bandung", 456]
array3.push("Purbalingga", 17)


let array4 : [String, string, number, Number] = ["asasds", "asdads", 1, 9]


console.log(array1);
console.log(array2);
console.log(array3);


let union : string | number = "Rifki"
union = 123


// Enum

// Kalau tidak didefinisikan property dan value didalam enumnya, maka yang ada didalam enum akan dianggap menjadi property dan value
enum enum1{
    Jan,
    feb,
    mar,
    apr
}
enum enum2{
    Jan = 1,
    feb,
    mar = 200,
    apr
}


// Enum berbeda dengan objek, kalau di objek bisa memasukan boolean di valuenya, di enum tidak bisa
// objek bisa di foreach, enum tidak bisa

// coba besok cari di google how to loop in typescript

const siswa = {
    nama : "Rifki",
    umur : 17,
    isJomblo : true
}


enum enum3 {
    nama = "Rifki Romadhan",
    kelas = 12,
    isJomblo = "Benar"
}

console.log(enum1);
console.log(enum1.Jan);
console.log(enum2);
console.log(enum2.Jan);
console.log(enum2.apr);


console.log(enum3);
console.log(enum3.isJomblo);




console.log("hai hai \t haiiiiiii");
console.log("hai hai \t\t haiiiiiii");
console.log("hai hai \nhaiiiiiii");


