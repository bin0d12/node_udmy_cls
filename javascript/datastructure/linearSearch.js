
function linearSearc(arr, target){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}
console.log(linearSearc([-5, 2,4, 6, 10], 10));
console.log(linearSearc([-5, 2,4, 6, 10], 6));
console.log(linearSearc([-5, 2,4, 6, 10], 20));