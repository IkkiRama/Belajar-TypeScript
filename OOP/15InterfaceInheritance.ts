interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
}

interface Car extends Vehicle{
    color:string;
}

class MyCar implements Car{
    name:string;
    year:number;
    broken:boolean;
    color:string;

    constructor(name:string,year:number,broken:boolean,color:string){
        this.name = name;
        this.year = year;
        this.broken = broken;
        this.color = color;
    }
}

let myCar = new MyCar("BMW",2020,true,"red");

console.log(myCar);
