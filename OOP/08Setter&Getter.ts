class Product{
    private _name:string = "Jaket";
    private _price:number = 0;
    private _discount:number = 50;

    get name():string{
        return this._name;
    }

    get price():number{
        return this._discount / 100 * this._price;
    }

    set name(newName:string){
        this._name = newName;
    }

    set price(newPrice:number){
        this._price = newPrice;
    }
}

let product = new Product();
product.name = "Jaket";
product.price = 20000;
console.log(product.name);
console.log(product.price);
