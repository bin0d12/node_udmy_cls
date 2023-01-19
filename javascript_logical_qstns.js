function sayhi(){
    console.log(name);
    console.log(age);
    var name="sujit";
    let age=21;
}
sayhi()

// for (var i=0; i<3; i++){
//     setTimeout(()=>console.log(i));
// }

// let temp={
//     a:10,
//     b:20,
//     sum(){
//         return this.a + this.b;
//     },
//     multi:()=>{
//         return this.a * this.b;
//     }
// }
// console.log(temp.sum());
// console.log(temp.multi());
// var d = 58
// function f1(a,a){
//     console.log(this.d);

//     return a + a
// }
// console.log(f1( 2 , 5))


// let data = (a,b) => {
//     console.log(this.d);
//     return a + b
// }
// console.log(data(2,5));



// console.log(-true);
// console.log(!'abc');

// const bind= {
//     size: 'small',
// };
// const mouse={
//     name: 'micky',
//     small : true
// }
// console.log(bind.size,mouse);

// let c= {greeting:'hey'};
// let d;
// d=c;
// c.greeting='hello';
// console.log(d.greeting)

// let a=3;
// let b =new Number(3);
// console.log(a==b)
// console.log(a === b);
// console.log(typeof(b));
// console.log(typeof(a));

// let greeting;
// greeting={};
// console.log(greeting);

// let ite=(a,b)=>{
//     return a+b
   
// }

// console.log(ite(10,2));

// function sum(a,b){
//     var c=a+b
//    console.log(c)
// }
// sum("10",20)

// let x=1;
// console.log(++x);
// console.log(x);

// console.log(eval('10*10+5'));

{/* <div onclick="console.log('div')">
    <p onclick="console.log('p)">
        click hwre
    </p>
</div> */}

// var num=10
// var num=20
// console.log(num)

// const obj={
//     a:'one', a:'two'
// }
// console.log(obj)

// for (let i=1; i<=5; i++){
//     if (i=== 3 ) continue;
//     console.log(i);
// }

// (()=>0)();

// console.log(typeof(typeof 21));

// console.log(true === 1);
// console.log(typeof(true))


// let x=[..."sujit"];
// console.log(x);
// var r= x.reverse()
// console.log(r);
// var c=r.join('')
// console.log(c);

// console.log("3"+4+5);

// const obj={
//     a:"one",
//     b:"two",
//     a :"three",
//     d:20,
//     e:50,
//     f: this.d+this.e
// }
// console.log(obj);

// function age(...args){
//     console.log(typeof args);
// }
// age(20)

// let c= 'hello sujit,how are u'
// r=c.substring(12,22)
// console.log(r);

// console.log(typeof(NaN));

// let data =[1,2,3,4,5,6,7,1,2,3,4,5,6,7]
// var c=data.length=5
// console.log(data);
// let sum =data.reduce((x,y)=>x+y)
// console.log(sum);
// var dup=new Set(data);
// console.log([...dup]);


// let x=10;
//  y=(x++,x)


// function f1(){
//     a = 20;
//     let b = a;
//     return b
// }
// console.log(f1())

// let arr = new String();
// let arr1 = "";

// console.log(arr, typeof arr);
// console.log(arr1, typeof arr1);

// function foo(){
//     console.log(foo())
// }
// foo()  // Maximum call stack size exceeded