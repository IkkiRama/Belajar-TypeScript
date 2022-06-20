export class User {
    public name: string;
    constructor(name:string, public age:number) {
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


class Admin extends User {
    read:boolean = true
    write:boolean = true
    private email: string
    private password: string
    
    constructor(name:string, age:number, email:string, password: string) {
        super(name, age)
        this.email = email
        this.password = password
    }

    getRole(): { read:boolean, write:boolean } {
        return{
            read: this.read,
            write: this.write
        }
    }

    get Email() {
        return this.email
    }

    get Password(){
        return this.password
    }


    set Email(email:string) {
        if (email.includes('@') && email.includes('.') && email.length > 5) {
            this.email = email
        }else{
            this.email = "Email Salah"
        }
    }
    
    set Password(password:string) {
        this.password = password
    }

}


let admin = new Admin("Rifki Romadhan", 17, "Anjay@gmail.com", "12345");



console.log(admin);
console.log(admin.getName());
console.log(admin.getAge());
console.log(admin.getRole());


console.log(admin.Email);
console.log(admin.Password);


admin.setName("Kimak Anjay");
admin.setAge(40);
admin.Email = "a"
admin.Email = "a@gmail.com"
admin.Password = "aaa rahasia dong"



console.log(admin.getName());
console.log(admin.getAge());



console.log(admin.Email);
console.log(admin.Password);

