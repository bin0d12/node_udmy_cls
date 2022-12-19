let person = {
    name : "binod",
    age : 26,
    // greet : () => {
    //     console.log(`name is ${this.name}`);
    // }  // out put name is undefined
// using function
    // greet(){
    //     console.log("my name is " + this.name);
    // }
// normal function
    greet : function(){
        console.log(`my nme is ${this.name}`);
    }
}
person.greet();