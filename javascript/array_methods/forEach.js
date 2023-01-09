// syntax

// array.forEach(function(currentValue, index, arr), thisValue)

let arr = ["binod", "sameer", "sujit", "swapnil"];

let arr1 = []
let dat = arr.forEach(data => {
    // return data
    console.log(data);
})
console.log(dat);
arr.forEach(data => {
    arr1.push(data)
})

console.log(arr1);
console.log(arr1.toString());
