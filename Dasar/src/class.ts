class User {
    public name: string;
    constructor(name:string, public age:number, public addres: string) {
        this.name = name
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    setName(name:string) {
        this.name = name
    }

    setAge(age:number) {
        this.age = age
    }
}

// public = bisa diakses dimana saja.
// Protected = bisa diakses di class yang sama dan class turunannya.
// Private = bisa diakses di class yang sama.


let user1 = new User("Rifki Romadhan", 17, "Jakarta");
console.log(user1);
console.log(user1.age);

console.log(user1.getName());
console.log(user1.getAge());

user1.setName("Kimak Anjay");
user1.setAge(40);

console.log(user1.getName());
console.log(user1.getAge());
