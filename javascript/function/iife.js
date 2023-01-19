//IIFE-  immediate invoked function expression

(function(){
    console.log("this is immediate invoked function expression");
})()

// passing argument/parameter into function

(function(description){
    console.log(`${description}`);
})("this is IIFE")