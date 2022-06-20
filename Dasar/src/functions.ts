console.log("Belajar Functions");


function getName(): string {
    return `Hello, nama saya Rifki`;
}

console.log(getName());


// Func with parameter
function getAge(age: number): string {
    return `Saya berumur ${age} tahun`;
}

console.log(getAge(17));


// Func Void
function printName() :void {
    console.log("Print Name");
}

printName()




// Type Function
type Age = number;
let age:Age = 17; 
console.log(age);


type Tambah = (val1:number, val2:number) => number;
let tambah:Tambah = function(val1:number, val2:number):number {
    return val1 + val2 * val1 - val1 + val2;
}

console.log(tambah(2,3));



// Default Parameter
function getData(first:string, umur:number, last:string = "Romadhan") {
    return `Hai, nama saya ${first} ${last}, dan saya berumur ${umur} tahun`
}

console.log(getData("Rifki", 17));
console.log(getData("Anjay", 20, "kimak"));




// Optional Parameter
function getData2(first:string, umur:number, last?:string) {
    return `Hai, nama saya ${first} ${last}, dan saya berumur ${umur} tahun`
}
console.log(getData2("Rifki", 17));
console.log(getData2("Rifki", 17, "kimak"));



function getUmur(val1: number, val2?: number): string {
    return `${val1} ${val2}`;
}

console.log(getUmur(10, 5));
console.log(getUmur(20));


// Optional Parameter tidak bisa untuk type number yang mengembalikan number
function getUmur2(val1: number, val2?: number): number {
    return val1 + val2;
}

console.log(getUmur2(40, 35));
console.log(getUmur2(34));