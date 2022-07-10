let nama:string = "Rifki"
let umur:number = 17
let isJob:boolean = true

let any:any = [1,2,"rifki", true, [1,2,3], {
    nama:"rifki",
    umur:17
}]

let dua:number|string = 2
dua = "a"

type nama = string
let nama2:nama = "rifki Kimak"



enum Kelamin {
    LakiLaki,
    Perempuan
}

console.log(Kelamin);
console.log(Kelamin.LakiLaki);


enum JenisKelamin {
    LakiLaki = "Laki-Laki",
    Perempuan = "Perempuan"
}

console.log(JenisKelamin);
console.log(JenisKelamin.LakiLaki);




let array:number[] = [1,2,3,4,5]
let array2:Array<number> = [1,2,3,4,5]
let array3:[number, string] = [1, "rifki"]