function getProperty
<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let obj = {
    name: "John",
    age: 30,
    city: "New York",
    country: "USA",
    getName: function () {
        return `Nama saya adalah ${this.name}`;
    }
}

console.log(getProperty(obj, "name"));
console.log(getProperty(obj, "getName"));
