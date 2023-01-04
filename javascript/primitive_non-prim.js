// when you will create a variable, it will create a memory block and it will store the data in memory block
// it will store directly primitive value, when you create non-primitive value it will store the value b reference,
// /when you update the value or edit the value in primitive it won't effect and non-primitive it will effect

// immutable;
// here it will change the value but it won't be update the value
// primitive datatypes are immutable
// it is coming under Deep copy
let a = 1;
console.log(a);  // 1

let b = a;
console.log(b); // 1

a = 2;
console.log(a);  //2
console.log(b);  //1



// mutable;
// this value changes after adding a new value or change the value
// non-primitive datatypes are mutable
// it is coming under shallow copy

let obj = {name: "binod", age: 24};
console.log(obj);

let obj1 = obj;
console.log(obj1);

obj['occupation'] = "engg";

console.log(obj);
console.log(obj1);




// undefined;

let valueOf;
if(valueOf == undefined){
    console.log("value is not assigned");
} else{
    console.log("value is not assigned");
}
console.log(typeof valueOf);
console.log(typeof null);
console.log(typeof undefined);









// // immutable
// let a = 10;
// console.log(a, "assigned value of a variable");
// let b = a;
// console.log(b, "b value taking reference of a ");

// a = a + 10;
// console.log(a, "a value changed ");
// console.log(b, "b value changed that is called immutable");

// // mutable

// var obj = {a: "binod", b: "26"};
// console.log(obj, 'assign the value');    // 
// let obj1 = obj;
// console.log(obj1, "taking reference of obj in obj1");
// console.log("change the variable obj so it will update as well as in obj1");
// obj['occupation'] = "engg"

// console.log(obj, "after adding one value into that");
// console.log(obj1, "at first we take reference of obj so we update some value in obj, we will see it will update in obj1 or not");
