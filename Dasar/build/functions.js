"use strict";
console.log("Belajar Functions");
function getName() {
    return `Hello, nama saya Rifki`;
}
console.log(getName());
// Func with parameter
function getAge(age) {
    return `Saya berumur ${age} tahun`;
}
console.log(getAge(17));
// Func Void
function printName() {
    console.log("Print Name");
}
printName();
let age = 17;
console.log(age);
let tambah = function (val1, val2) {
    return val1 + val2 * val1 - val1 + val2;
};
console.log(tambah(2, 3));
// Default Parameter
function getData(first, umur, last = "Romadhan") {
    return `Hai, nama saya ${first} ${last}, dan saya berumur ${umur} tahun`;
}
console.log(getData("Rifki", 17));
console.log(getData("Anjay", 20, "kimak"));
// Optional Parameter
function getData2(first, umur, last) {
    return `Hai, nama saya ${first} ${last}, dan saya berumur ${umur} tahun`;
}
console.log(getData2("Rifki", 17));
console.log(getData2("Rifki", 17, "kimak"));
function getUmur(val1, val2) {
    return `${val1} ${val2}`;
}
console.log(getUmur(10, 5));
console.log(getUmur(20));
// Optional Parameter tidak bisa untuk type number yang mengembalikan number
function getUmur2(val1, val2) {
    return val1 + val2;
}
console.log(getUmur2(40, 35));
console.log(getUmur2(34));
