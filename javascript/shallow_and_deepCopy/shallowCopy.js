// primitive
// all primitive data types are call by value.
// all primitives are immutable, because: it change the main reference value.
// it is deep copy

var a = 10;
var b = a

a = 20;
console.log(a, b);


// non-primitive
// it is call by reference
// it is mutable 
// it is shallow copy
var obj = {name: "binod"}
var objChange = obj;
// 1st option to update the data
obj.occupation = "engg"
// second option to update the data
obj["age"] = 25
console.log(obj, objChange);