// block scope

if(true){
    let a = 10;
    const b = 20
    var c= 30
    console.log(a,b,c);
}
console.log(c, "this var key word accessible in outside of the block");
// console.log(a, "this i accessible in outside of the block"); //you will get error


// function scope

function scope(){
    var d = 40
    let e = 50
    const f = 60
    if(true){
        var g = 70
        let h = 80
        const i = 90
        console.log(d,e,f);
        console.log(g, h, i);
    }
    console.log(g, "var is accessible any where ");
    // console.log(h);  // error will come
    // console.log(i);  // error will come
}
scope()


// another example

function scope1(){
    var j = 100
    let k = 200
    if(true){
        var j = 110
        let k = 210
        console.log(j);   // you will get 110
        console.log(k);   // you will get 110
    }
    console.log(j);    // you will get 110
    console.log(k);   // you will get 200
}
scope1()


{
    let x = 20
    console.log(x);
    {
        const y = 20
        console.log(x, "xxxxxxxxx");
    }
    console.log(y);  // error
}