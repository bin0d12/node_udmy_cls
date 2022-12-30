// global scope start
// var
var scopeVar = 10;

function varScope(){
    console.log(scopeVar);
}
varScope()

// let
let scopeLet = 10;

function letScope(){
    console.log(scopeLet);
}
letScope()

// const
let scopeConst = 210;
function constScope(){
    console.log(scopeConst);
}
constScope()

// global scope end

// local scope

// function varLocalScope(){
//     var a = 10;
//     console.log(a);
// }
// console.log(a); //  a is not defined

// function letLocalScope(){
//     let b = 10;
//     console.log(b);
// }
// console.log(b); //  b is not defined

// function constLocalScope(){
//     let c = 10;
//     console.log(c);
// }
// console.log(c); //  c is not defined

// block scope
// var
if(true){
    var d = 20;
    console.log(d);
}
console.log(d);

// let
// if(true){
//     let e = 30;
//     console.log(e);
// }
// console.log(e);  // e is not defined


if(true){
        const f = 40;
        console.log(f);
    }
    console.log(f);  // f is not defined