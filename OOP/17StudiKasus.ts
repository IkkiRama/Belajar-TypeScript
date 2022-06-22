

// Contoh Studi Kasus Untuk Penerapan Yang Benar -------------
interface IToko {
    name : string
    profit : number
    getProfit() : number
}


class TokoLama implements IToko {
    name : string = "Store A"
    profit : number = 34000
    getProfit() : number{
        return this.profit
    }
}

class TokoBaru implements IToko {
    name : string = "Store B"
    profit : number = 100000
    getProfit() : number{
        return this.profit
    }
}


class FoodProduct {
    private store : IToko
    private name : string;
    private price : number

    constructor(store : IToko, name : string, price:number){
        this.store = store
        this.name = name
        this.price = price
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} di toko ${this.store.name} `);
    }
}

class BuahProduct {
    private store : IToko
    private name : string;
    private price : number

    constructor(store : IToko, name : string, price:number){
        this.store = store
        this.name = name
        this.price = price
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} di toko ${this.store.name} `);
    }
}

const tokoLama = new TokoLama()
const tokoBaru = new TokoBaru()

let gedang = new FoodProduct(tokoLama,"Gedang", 10000)
let salak = new FoodProduct(tokoBaru,"Salak", 10000)

console.log(gedang);
gedang.sel()


console.log(salak);
salak.sel()
