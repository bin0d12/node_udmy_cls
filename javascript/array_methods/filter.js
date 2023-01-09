let filterArr = [1,2,3,4,5,6]
console.log(filterArr.filter(filterArr => {
    return filterArr >= 3
}))
console.log(filterArr);
// words.filter(word => word.length > 6);