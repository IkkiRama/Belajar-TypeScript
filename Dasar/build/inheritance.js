"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
}
exports.User = User;
class Admin extends User {
    constructor(name, age, email, password) {
        super(name, age);
        this.read = true;
        this.write = true;
        this.email = email;
        this.password = password;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    get Email() {
        return this.email;
    }
    get Password() {
        return this.password;
    }
    set Email(email) {
        if (email.includes('@') && email.includes('.') && email.length > 5) {
            this.email = email;
        }
        else {
            this.email = "Email Salah";
        }
    }
    set Password(password) {
        this.password = password;
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
admin.Email = "a";
admin.Email = "a@gmail.com";
admin.Password = "aaa rahasia dong";
console.log(admin.getName());
console.log(admin.getAge());
console.log(admin.Email);
console.log(admin.Password);
