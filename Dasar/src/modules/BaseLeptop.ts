import ILeptop from "./ILeptop";
import * as Keyboard from "./Keyboard";
import {b} from "./Keyboard";

abstract class BaseLeptop <T> implements ILeptop<T> {
    brand: string;
    name: T;
    price: number;
    color: string;
    withNumericKeyboard: boolean;
    withTouchScreen: boolean;

    constructor(brand: string, name: T, price: number, color: string, withNumericKeyboard: boolean, withTouchScreen: boolean) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.color = color;
        this.withNumericKeyboard = withNumericKeyboard;
        this.withTouchScreen = withTouchScreen;
    }

    a(){
        return console.log(`Anda menekan tombol ${Keyboard.a()}`);
    }

    b(){
        return console.log(`Anda menekan tombol ${b()}`);
    }
}


export default BaseLeptop;