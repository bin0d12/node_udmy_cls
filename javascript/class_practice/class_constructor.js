class Person {
    constructor(name){
        console.log(name + " person constructor");
    }
}
class Employee extends Person{
    constructor(hello){
        super(hello)
        console.log(hello + " this is child constructor");
    }
}
let e = new Employee("binod")
console.log(e);