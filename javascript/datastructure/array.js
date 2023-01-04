let arr = ["a", "b", "c", "d"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
// length of array
console.log(arr.length);
// add elements in last index
arr.push('e-added using push method');
console.log(arr);
for(const item of arr){
    console.log(item, "itemsssss");
}
// adding elements in first index
arr.unshift("o at the beginning")
console.log(arr);

// remove first index in array
arr.shift();
console.log(arr, "remove array first elements");

// removing first elements of an array
arr.pop();
console.log(arr, "removing lat element");

// map, filter, reduce, include, forEach, concat, slice, splice, 