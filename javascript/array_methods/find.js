// find() returns the value of the first element in an array that passes a test (provided by a function):

const ages = [3, 10, 18, 20];
let age = ages.find(dt => {
    return dt > 18
})
console.log(age);

// 2nd method

function agee(ag){
    return ag > 18
}
console.log(ages.find(agee));

// how to update version in angular?