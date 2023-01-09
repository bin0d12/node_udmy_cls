// Compute the result from subtracting the numbers in the array right-to-left.

let num = [1,2,3,4,5,6,7];

let data = num.reduceRight((red, i) => {
    return red - i
})
console.log(data);