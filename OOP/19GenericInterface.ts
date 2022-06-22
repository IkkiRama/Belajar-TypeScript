interface GenericInterface<T> {
    nama: T;
}

function genericFunction<T>(data: T): GenericInterface<T> {
    return {
        nama: data
    }
}

function genericFunction2<T>(data: T): GenericInterface<T> {
    let result: GenericInterface<T> = {
        nama: data
    }
    return result;
}




console.log(genericFunction<string>("Hello World"));

console.log(genericFunction<number>(1123123));
console.log(genericFunction<boolean>(true));

console.log(genericFunction2<string>("Kimak Anjay"));
