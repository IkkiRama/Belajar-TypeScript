class Store {
    private nama:string = "Store A"
    private profit:number = 1000

    getName():string{
        return this.nama
    }

    getProfit():number{
        return this.profit
    }
}


class FashionProduct {
    private store : Store
    private name : string;
    private price : number
    
    constructor(name : string, price:number){
        this.name = name
        this.price = price
    
        this.store = new Store()
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} `);
    }
}
class TechProduct {
    private store : Store
    private name : string;
    private price : number
    
    constructor(name : string, price:number){
        this.name = name
        this.price = price
    
        this.store = new Store()
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} `);
    }
}

const baju = new FashionProduct("Baju Lengan Panjang", 10000)

console.log(baju);
baju.sel()




// Contoh Studi Kasus Untuk Penerapan Yang Benar -------------
interface IStore {
    name : string
    profit : number
    getProfit() : number
}


class StoreA implements IStore {
    name : string = "Store A"
    profit : number = 34000
    getProfit() : number{
        return this.profit
    }
}

class StoreB implements IStore {
    name : string = "Store B"
    profit : number = 100000
    getProfit() : number{
        return this.profit
    }
}


class HijabProduct {
    private store : IStore
    private name : string;
    private price : number

    constructor(store : IStore, name : string, price:number){
        this.store = store
        this.name = name
        this.price = price
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} di toko ${this.store.name} `);
    }
}

class SportProduct {
    private store : IStore
    private name : string;
    private price : number

    constructor(store : IStore, name : string, price:number){
        this.store = store
        this.name = name
        this.price = price
    }

    sel(): void{
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price} di toko ${this.store.name} `);
    }
}

const storeA = new StoreA()
const storeB = new StoreB()

let hijab = new HijabProduct(storeA,"Hijab", 10000)
let hijabB = new HijabProduct(storeB,"Hijab", 10000)

console.log(hijab);
hijab.sel()


console.log(hijabB);
hijabB.sel()
