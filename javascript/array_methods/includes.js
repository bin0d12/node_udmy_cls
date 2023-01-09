// it will check the specified values from an array.
// if it specified it return true or else it return false 
// syntax
// array.includes(SearchElement, start)

let arr = ["binod", "sujit", "sameer"]

let arr1 = arr.includes("binod"); // true
let arr2 = arr.includes("bin");  //false
let arr3 = arr.includes("bin", 1);  //false
let arr4 = arr.includes("sujit", 2);  //true
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);