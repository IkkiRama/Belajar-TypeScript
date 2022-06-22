interface Length {
    length: number;
}

function generic<T extends Length>(arg: T): T {
    console.log(arg.length);
    return arg;
}

let generic1 = generic("Hello World");
console.log(generic1);

let generic2 = generic({ length: 10, value: "Hello World" });
console.log(generic2);
