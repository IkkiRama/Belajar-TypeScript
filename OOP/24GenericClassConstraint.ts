interface Generic {
    sell(): void;
    buy(): void;
}

class Motor implements Generic {
    sell() {
        console.log("Selling Motor");
    }
    buy() {
        console.log("Buying Motor");
    }
}

class Mobil implements Generic {
    sell() {
        console.log("Selling Mobil");
    }
    buy() {
        console.log("Buying Mobil");
    }
}

function sellProduct<T extends Generic>(products: T[]): void {
    products.forEach(product => {
        product.sell()
        product.buy()
    });
}

let motor = new Motor();
let mobil = new Mobil();
sellProduct([motor, mobil]);