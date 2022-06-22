function getData<T>(value:T) {
    return value;
}

let data = getData<string>("Hello World".toLowerCase())
console.log(data);

let data2 = getData<string>("Hello World").toUpperCase()
console.log(data2);

console.log(getData<number>(10).toFixed(2));

