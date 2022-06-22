// Gunakan Interface apabila mau menggunakan class
// Gunakan Type apabila mau menggunakan functions


// Interface bisa digunakan untuk class, functions, dan variabel
// Type bisa digunakan untuk functions, dan variabel

interface ISiswa{
    nama:string;
}
interface ISiswa{
    age:number;
}

class Siswa {
    nama:string;
    age:number;
}

type Nama = {
    nama:string;
}

type Kelas = {
    kelas:number;
}


type Employee = Nama & Kelas;
type Employee2 = Nama | Kelas;
const getEmployee:Employee ={
    nama:'Rizki',
    kelas:1
}

const getEmployee2:Employee2 ={
    kelas:1
}


console.log(getEmployee);
console.log(getEmployee2);
