function cetak(nama) {
    return `Hai, ${nama}`
}

console.log(cetak("Rifki Romadhan"));




// Tipe Data
function Hello(nama:string, umur:number, isJomblo:boolean) : string {
    return `Hallo, nama saya adalah ${nama} dan saya berumur ${umur} tahun, dan isJomblo = ${isJomblo}`
}

console.log(Hello("Rifki", 17, true));

function Sapa(nama:string) :void {
    console.log(`Hai hai hai, nama saya ${nama}`);
    
}
Sapa("Anjay")

function Multiply(num1:number, num2:number):number {
    return num1*num2
}
Multiply(2,3);


// Default Parameter
function getEmail(email:string = "null@gmail.com") : string {
    return `Email saya = ${email}`
}

console.log(getEmail()); // Email saya = null@gmail.com
console.log(getEmail("rifki@gmail.com")); //Email saya = rifki@gmail.com








// Optional Parameter

function getData(val1:string, val2?:string): string {
    return `${val1} ${val2}`
}
console.log(`Get Data = ${getData("Rifki 1")}`);


// func objek
function getData2({ val1, val2 }: { val1: string; val2?: string; }): string {
    return `${val1} ${val2}`
}
console.log(`Get Data 2 = ${getData2({ val1: "Rifki 2" })}`); //Get Data 2 = Rifki 2



// Optional Parameter returnya harus string
function getData3(val1:number, val2?:number): string {
    return `${val1} ${val2}`
}

function getData4(val1:number, val2?:number): number {
    return val1 + val2
}
















// Type Func
type getData5 = (nama:string, age:number) => string

const getData5: getData5 = (nama:string, age:number) =>{
    return `Get Data 5 = Hai, nama saya ${nama} dan saya berumur ${age} tahunn ya`
}

console.log(getData5("Rifki 5", 90)); //Get Data 5 = Hai, nama saya Rifki dan saya berumur 90 tahunn ya
console.log(typeof getData5("Rifki 5", 90));
console.log(typeof "asdasdsad");
