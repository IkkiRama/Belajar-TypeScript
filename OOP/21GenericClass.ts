interface GenericInterface2<T> {
    value: T;
    method() : T
}

class GenericClass<T> implements GenericInterface2<T> {
    value: T;
    constructor(value: T) {
        this.value = value;
    }

    method() {
        return this.value;
    }
}

let genericClass1 = new GenericClass<string>("Hello");
let genericClass2 = new GenericClass<number>(1290);
let genericClass3 = new GenericClass<boolean>(true);
console.log(genericClass1.method());
console.log(genericClass2.method());
console.log(genericClass3.method());
