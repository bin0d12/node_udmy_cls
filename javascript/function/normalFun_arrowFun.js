
// no argument object
// argument is working fine with normal function
function normalFun(){
let val = Array.from(arguments)
return val.reduce((a,b) => a + b )
}
console.log(normalFun(2,3,5,6,4,7));

// argument is not defined 
// arrow function doesn't support argument
// let arrowFun = () => {
// let val = Array.from(arguments)
// return val.reduce((a,b) => a + b )
// }
// console.log(arrowFun(2,6,5,8,9,5,3));
// instead of argument you can pass spread operator
let arrowFun = (...val) => {
    // let val = Array.from(arguments)
    return val.reduce((a,b) => a + b )
    }
    console.log(arrowFun(2,6,5,8,9,5,3));

    // no prototype object 
// normal function support prototype
    function regularFun(){

    }
    // console.log(regularFun.prototype); object
// arrow function doesn't support prototype
    let arrowFunction = () => {

    }
    // console.log(arrowFunction.prototype);  undefined


// new key word

function regularFun1(){

}
console.log(new regularFun1()); //regularFun1 {}

let arrowFunction1 = () => {

}
console.log(new arrowFunction1()); // arrowFunction1 is not a constructor


// no duplicate arguments

// no generator function

// expression
// normal function supports generator function
function *f2(){

}
// not support generator function
// let arfun = *() => {

// }