"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
console.log("Belajar static property");
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    get Jodoh() {
        return User.getJodoh;
    }
    static sapa(name) {
        return `Hai, nama saya adalah ${name}`;
    }
}
exports.User = User;
User.getStaticName = "this is static name bitch";
User.getJodoh = "Ngga tahu jodohnya siapa";
class Admin extends User {
    constructor(name, age, email, password) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.email = email;
        this.password = password;
    }
    get Hoby() {
        return Admin.getHoby;
    }
}
Admin.getRoleName = 'admin';
Admin.getHoby = "Ngoding";
let admin = new Admin("Rifki", 18, "a@gmail.com", "aaaa");
console.log(Admin.getRoleName);
console.log(admin.Jodoh);
console.log(admin.Hoby);
// console.log(Admin.getHoby);
console.log(User.getStaticName);
console.log(User.sapa("Rifki Anjay"));
console.log(admin);
