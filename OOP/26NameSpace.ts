namespace NamespaceExample {
    export class Hewan {
        public Makan(): void {
            console.log("Hewan Sedang Makan");
        }
    }

    export const kodok = new Hewan();
}

let belalang = new NamespaceExample.Hewan();
console.log(belalang);
belalang.Makan();

let kodok2 = NamespaceExample.kodok;
