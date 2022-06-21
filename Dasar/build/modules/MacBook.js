"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseLeptop_1 = __importDefault(require("./BaseLeptop"));
class MacBook extends BaseLeptop_1.default {
    constructor(name, price, color, withNumericKeyboard, withTouchScreen) {
        super("MacBook", name, price, color, withNumericKeyboard, withTouchScreen);
    }
}
exports.default = MacBook;
