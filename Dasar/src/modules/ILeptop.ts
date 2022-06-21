export default interface ILeptop <T> {
    brand: string;
    name: T;
    price: number;
    color: string;
    withNumericKeyboard: boolean;
    withTouchScreen: boolean;
}