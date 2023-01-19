// function a(){
//     var d =20
//     function c(){
//         console.log(b);
//         console.log(d);
//     }
//     c()
// }
// const b = 10;
// a()

// function f1(){
//     var a = 20
// }
// console.log(a)


function init(){
    var name = "binod";
    function sayName(){
        console.log(name);
    }
    return sayName
}
let dataFetch = init()
console.log(dataFetch);
dataFetch()

function makeFunc() {
    const name = 'Mozilla';
    function displayName() {
      console.log(name);
    }
    displayName();
  }
  
 makeFunc();
//   myFunc();

function f1(){
    var d = 20;
    return function f2(){
        console.log(d);
    }
}
f1()