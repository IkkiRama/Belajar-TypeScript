class Burung{
    private kaki: number = 2;

    getKaki(): number{
        return this.kaki;
    }

    terbang(): void{
        console.log(`Burung terbang dengan ${this.kaki} kaki`);
    }

    async makan(): Promise<string>{
        return "Burung makan";
    }

    async menghitung(): Promise<number>{
        return this.kaki;
    }

    async berbicara(): Promise<void>{
        console.log("Burung bicara");
    }
}