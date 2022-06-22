class ClassA{
    name:string = "Class A Coy"
}

class ClassBaru<T> {
    classProps:T
    constructor(classProps:T){
        this.classProps = classProps
    }
}

class ClassBaru2 {
    classProps:ClassA = new ClassA()
}


let classA = new ClassA()
let classBaru = new ClassBaru<ClassA>(classA)
console.log(classBaru);
console.log(classBaru.classProps.name);


let classBaru2 = new ClassBaru2()
console.log(classBaru2);
console.log(classBaru2.classProps.name);