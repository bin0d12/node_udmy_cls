let arr = [1,2,3]
arr[100] = "this is adding the value in side the arr"
// console.log(arr[30]);
console.log(arr.length);

for(let i = 0; i < arr.length; i++){
    console.log(i);
}

let arr1 = arr.forEach(val => {console.log(val)})


