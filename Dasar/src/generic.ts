function getData(value:any) {
    return value
}

console.log(getData("Hello").length);

console.log(getData(1).toFixed(3));
console.log(getData(1).length);


function myData<T>(value:T) {
    return value
}

console.log(myData("Hello Aku").length);
console.log(myData(1).length);


const arrowGeneric = <T> (value:T) => value;
console.log(arrowGeneric("Hello").length);
console.log(arrowGeneric(1).length);


