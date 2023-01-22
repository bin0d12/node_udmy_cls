// // normal function
// function sum(a, b){
//     return a  + b
// }
// console.log(sum(1,3), "normal sum function function ");
// // arrow function

// // let arrowSum = (a, b) => {
// //     return a + b
// // }

// // removing the return key word
// let arrowSum = (a, b) => a + b
// console.log(arrowSum(10, 5), "arrow sum function");

// // normal function is positive number
// function isPositiveNum(number){
//     return number >= 0
// }
// console.log(isPositiveNum(-13), "this is is postive number for normal function");
// // arrow function is positive number

// // let arrowIspositiveNum = (num) => {
// //     return num >= 0
// // }
// // if single parameter is there you can remove the paranthasis()
// let arrowIspositiveNum = num => num >= 0

// console.log(arrowIspositiveNum(-20), "this is is postive number for arrow function function");


// function randomNumber(){
//     return Math.random()
// }
// console.log(randomNumber(), "this is normal random number generation");

// let arrowRandomFun = () => Math.random();

// console.log(arrowRandomFun(), "this is random generation arrow function");

// example
// class Person {
//     constructor(name) {
//         this.name = name
//     }
// printNameArrowFun() {
//     setTimeout(() => {
//         console.log(this.name, "this is arrow function");
//     }, 100)
// };
// printNormalFun(){
//     setTimeout(function() {
//         console.log(this.name, "this is normal function");
//     }, 100)
// }
// }
    

let cameras = {
    price: 20000,
    weight: 100,
    meDes : function() {
        return `this cannon camera price is ${this.price}`
    },
    arrowDes: () => {
        return `this is using arrow function to get the price that price is ${price}`
    }
}
console.log(cameras.meDes());
console.log(cameras.arrowDes());