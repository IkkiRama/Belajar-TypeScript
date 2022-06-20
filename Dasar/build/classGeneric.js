"use strict";
console.log("Belajar Class Generic");
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(element) {
        this.data.push(element);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    remove(element) {
        this.data = this.data.filter(e => e !== element);
    }
    removeMultiple(...elements) {
        this.data = this.data.filter(e => !elements.includes(e));
    }
    getAll() {
        return this.data;
    }
}
let list = new List([1, 2, 3], [4, 5, 6]);
let list2 = new List(1, 2, 4, 5, 6);
console.log(`List 1: ${list}`);
console.log(`List 1: ${list.getAll()}`);
list.add(7);
console.log(`List 1: ${list.getAll()}`);
list.addMultiple(1, 2, 3);
list.remove(7);
console.log(`List 1: ${list.getAll()}`);
list.removeMultiple(1, 2, 3);
console.log(`List 1: ${list.getAll()}`);
console.log(`List 2: ${list2}`);
console.log(`List 2: ${list2.getAll()}`);
list2.add("aaa");
console.log(`List 2: ${list2.getAll()}`);
let random = new List(1, 2, 3, "a", "b", "c");
console.log(`List 3: ${random.getAll()}`);
