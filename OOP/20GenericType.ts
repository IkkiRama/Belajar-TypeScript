type generic<T> = T

// Perbedaan antara Generic Type Dan Generic Interface
interface GenericInterface<T> {
    nama: T;
}

function getData<T>(value:T):generic<T> {
    return value;
}

console.log(getData<string>("Hello World Generic Type"));

console.log(getData<number>(165789));
console.log(getData<boolean>(true));
