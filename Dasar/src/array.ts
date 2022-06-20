// Array
console.log("Belajar Array");

let array: number[]
array = [1,2,3,4,5]

let array2: string[]
array2 = ["Rifki", "Rizki", "Rizki"]

let array3:any[]
array3 = [1,2,3,4,5, "Rifki", "Rizki", "Rizki", false, true,[1,2,3,4,5], {
    nama: "Rifki",
    umur: 17,
    jurusan: "RPL"
}]

console.log("lol");



// Tuples

let biodata : [string, number] // apa yang dimasukan di array ini itu menandakan jumlah elemen array nya, dan urutan array nya
biodata = ["Rifki", 17]
biodata = [17, "Rifki"]


biodata = ["Rizki", 17, "anjay"]
biodata = ["Rizki", 17, true]
biodata = ["Rizki", true]