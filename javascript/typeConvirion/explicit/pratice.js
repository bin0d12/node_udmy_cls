

console.log( "S" + "" ,typeof ("S" + ""),"1")                  // string
console.log( "S" + 1 ,typeof ("S" + 1),"2")                   // string
console.log( "S" + undefined , typeof ("S" + undefined),"3")           // string
console.log( "s" + null, typeof ("s" + null),"4")                // string
console.log( "s"+ true , typeof ("s" + true),"5")                // string
console.log( 1 + 2 , typeof (1 + 2),"6")                     // number
console.log( 2 + undefined , typeof (2 + undefined),"7")             // number
console.log( 3 + null , typeof (3 + null),"8")                  // number             
console.log( 5 + true , typeof (5 + true),"9")                  // number
console.log( true + false , typeof (true + false),"11")             // boolean
console.log( true + null , typeof (true + null),"12")              // boolean null
console.log( false + undefined , typeof (false + undefined),"13")        // boolean undefined
console.log( null + null , typeof (null + null),"14")              // NaN
console.log( null + undefined , typeof (null + undefined),"15")         // undefined
console.log( undefined + undefined , typeof (undefined + undefined),"16")    // undefined
console.log( true + true , typeof (true + true), "17");                  // boolean               == wrong
console.log( true + undefined , typeof (true + undefined), "18");                  // boolean               == wrong
 

