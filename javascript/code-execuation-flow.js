var n = 2;
function square(num){
    var ans = num * num
    return ans;
}
var c = 20;
console.log(c);
console.log("demmooooo")
var square1 = square(n)
console.log(square1);
var square2 = square(4)
console.log(square2);


// hard code execution flow
var name = 'Binod';
var age = 26;

function first(){
    var a = 'Hello!';
    second();
    var x = a + name;
    console.log(x);
}

function second(){
    var b = 'Hi!';
    third();
    var y = b + name
    console.log(y);
};

function third(){
    var c = 'Hey!';
    var z = c + name
    console.log(z);
}
first()


function f1(x){
    if(x > 10){
        var a = 2;
        return a * x
    }
   console.log(x + 10)
}
f1(12)