// normal 
// joining
let odd = [1,3, 5];
let nums = [2,4,6].concat(odd)

console.log(nums);

// cloning

const arr = [1,2,3,4]
const arr1 = arr.slice()
console.log(arr1);

// shorthand

let odd1 = [1,2,3,4,]

let nums1 = [5,6,7, ...odd1]
console.log(nums);

const arr2 = [1,2,3,4]

const arr3 = [...arr2]
