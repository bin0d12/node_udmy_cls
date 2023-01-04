let str = "javascript";
console.log(typeof str);

str = Number('javascript')

console.log(typeof str);

// type conversion mainly 2 types 
//    implicit
//    explicit

// implicit
//   ex: 
       var impli = 123;
       console.log(typeof impli);
       console.log(typeof String(impli));


let date = String(new Date());
console.log(date, typeof date);