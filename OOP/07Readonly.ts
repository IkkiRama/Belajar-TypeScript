// Person tidak bisa dirubah nilainya, sama seperti v-once
class Person{
    readonly gender: string = "Laki-laki"
}

let person = new Person()
person.gender = "Perempuan"
console.log(person);
