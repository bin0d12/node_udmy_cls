// 1st process

let arr = [1,1,2,3,4,4,5,6,6,7,7,8,8,9,9]

// using new set

const uniq = [...new Set(arr)]
console.log(uniq);

// using filter
// 2nd step
let uniq1 = arr.filter((item, index) => 
    arr.indexOf(item) == index
)
console.log(uniq1);