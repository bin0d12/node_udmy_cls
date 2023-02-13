
// assign function to a variable
let data = function assignToVariable(){
    console.log("this function is assign to a variable");
}
data() // this function is assign to a variable

let obj = {
    name: "binod kumar sahu",
    fun: function(){
        console.log("this is for object inside method calling");
    }
} 
obj.fun()  // this is for object inside method calling

// callback function
// function passing another function as an argument that is called callback
// see the above code

// create a function
let fun1 = function(){
    return "this is first function"
}

// another function
let fun2 = (funCall, val) => {
    console.log(funCall() + val);
}

// calling the function and passing argument as a function
fun2(fun1, " and passing the function in this another function")

// nested function

function a(){
    function b(){
        console.log("this is calling nested function");
    }
    b()
}
a()
// another method
function c(){
    return function d(){
        console.log("this is another method to call nested function");
        return function e(){
            console.log("this is one more nested function");
        }
    }
}
// calling function inside another function
c()()()


// higher order function

let function1 = (name) => {
    if(name === "binod"){
        return function retFun1(topic){
            console.log(`hi ${name} and your topic is ${topic}`);
        }
    } if(name === "sameer"){
        return function retFun2(topic){
            console.log(`hi ${name} and your topic is ${topic}`);
        }
    } if(name === "sujit"){
        return function retFun3(topic){
            console.log(`hi ${name} and your topic is ${topic}`);
        }
    } else {
        console.log("welcome to interview");
    }
}
// this is two function pass at a time
// let defineFun1 = function1("binod")("ui")
// defineFun1
// passing in different function
let defineFun1 = function1("binod")
defineFun1("dev")
defineFun1("dev2")
defineFun1("dev3")

function1("sameer")("javascript")
function1("sujit")("react")