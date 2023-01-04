// push, unshift, splice

// push
// it will push elements on last index of an array
let arr = [1,2,3,4,5]
console.log(arr, "1111111111");
let arr1 = ["binod", "sameer"];
console.log(arr1, "22222222222");
// copying the arr and adding the value
let arr2 = arr
arr2.push(8,9)
arr1.push("sujit")
console.log(arr, typeof arr, "33333333333");
console.log(arr2, typeof arr2, "44444444444444");
console.log(arr1, typeof arr1, "5555555555555555555");


// unshift
let unshiftArr = [1,2,3,4,5];

unshiftArr.unshift(11, 12)
console.log(unshiftArr, typeof unshiftArr);

// splice
// array.splice(index, howMany, item1, ....., itemX)
let spliceArr = ["bin", "nib", "sin","jin"];

spliceArr.splice(3,1, "din", "nin", "tin")

console.log(spliceArr);