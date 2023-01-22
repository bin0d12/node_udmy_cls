// function declaration
// it is like hoisting
// before dclaration function you can access with function expression
console.log(add(2,5));

function add(a,b){
    return a +b
}
console.log(add(2,5));

// function expression
// before declaration function you can't access in the function expression
// console.log(funExpression(2,5));

let funExpression = function(a, b){
    return a * b
}
console.log(funExpression(2,5));


// arrow function
// it is only supporting function expression

let arrowFun = (a, b) => {
    return a * b 
}
console.log(arrowFun(8,9));