import BaseLeptop from "./BaseLeptop";

class MacBook <T> extends BaseLeptop<T> {
    constructor(
        name: T,
        price: number,
        color: string,
        withNumericKeyboard: boolean, withTouchScreen: boolean
    ) {
        super(
            "MacBook",
            name,
            price,
            color,
            withNumericKeyboard,
            withTouchScreen
        );
    }
}

export default MacBook;
