import BaseLeptop from "./BaseLeptop";

class Asus <T> extends BaseLeptop<T> {
    constructor(
        name: T,
        price: number,
        color: string,
        withNumericKeyboard: boolean, withTouchScreen: boolean
    ) {
        super(
            "Asus",
            name,
            price,
            color,
            withNumericKeyboard,
            withTouchScreen
        );
    }
}

export default Asus;
