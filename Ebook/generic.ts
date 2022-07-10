namespace Generic{
    function getData<T>(val:T): T {
        return val
    }
    console.log(getData('Hello Kamu'));
    console.log(getData<string>('Hello'));
    console.log(getData<string | number>('Hai'));

    const getDataArrowFunction = <T>(val:T): T => {
        return val
    }

    console.log(getData('Hello').length);
    console.log(getData(10).toFixed(3));
    
}

// Generic Array
function arrayGeneric<T>(val: T[]): T[] {
  console.log(val.length);
  return val;
}
console.log(arrayGeneric(["Jakarta", 123, "Bandung"]));


function arrayGeneric2<T>(val: Array<T>): Array<T> {
    console.log(val.length);
    return val;
}
console.log(arrayGeneric2(["Solo", 456, "Surakarta", true, [1,2,3]]));


// Generic Type
// function identity<T>(val: T): T {
//   return val;
// }
// let myIdentity: <Input>(val: Input) => Input = identity;
// console.log(myIdentity("Hello World"));

function identity<Type>(arg: Type): Type {
  return arg;
}
let myIdentity: { <Type>(arg: Type): Type } = identity;
console.log(myIdentity("Hello World"));