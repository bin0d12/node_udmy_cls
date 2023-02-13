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


let iterateForEach = [1,2,3,4,5,6]
let iterateForEach1 = [7,8,9,10]
 iterateForEach.forEach((data, ind) => {
    // return data
    console.log(data, iterateForEach1[ind]);  // accessing another array of elements by passing this
})

// console.log(da, "daaaaaaaa");


let obj = {
    sub_one : "React",
    sub_two : "Angular",
    sub_three : "NodeJS",
}

console.log(obj.sub_one);

for(var i = 0; i <= 5; i++){
    // console.log(i);
}
console.log(i);


var a = 100
 console.log(a);  // 100
{
    var a = 200
    console.log(a);   // 200
}
console.log(a);    // 200


let b = 100
 console.log(b);  // 100
{
    let b = 200
    console.log(b);   // 200
}
console.log(b);    // 100

// JSON

let objs = {
    key1: "Hello_1",
    key2: "Hello_2",
    key3: "Hello_3",
}
console.log(typeof obj);

let change = JSON.stringify(objs)   // it is convert JSON object to string 
console.log(change, typeof change);

let change2 = JSON.parse(change)     // if you want to covert string to object we need to use JSON.parse()
console.log(change2, typeof change2);