console.log("Belajar static property");


export class User {
    public name: string;
    static getStaticName: string = "this is static name bitch";
    private static getJodoh = "Ngga tahu jodohnya siapa"


    constructor(name:string, public age:number) {
        this.name = name
    }

    get Jodoh(){
        return User.getJodoh
    }

    static sapa(name: string): string{
        return `Hai, nama saya adalah ${name}`
    }
}


class Admin extends User {
    read:boolean = true
    write:boolean = true
    private email: string
    private password: string
    static getRoleName: string = 'admin'
    private static getHoby = "Ngoding"
    
    constructor(name:string, age:number, email:string, password: string) {
        super(name, age)
        this.email = email
        this.password = password
    }

    get Hoby(){
        return Admin.getHoby
    }

}

let admin = new Admin("Rifki", 18, "a@gmail.com", "aaaa")

console.log(Admin.getRoleName);
console.log(admin.Jodoh);
console.log(admin.Hoby);
// console.log(Admin.getHoby);
console.log(User.getStaticName);



console.log(User.sapa("Rifki Anjay"));
console.log(admin);

