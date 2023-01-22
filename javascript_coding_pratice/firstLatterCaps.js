const e = require("express");

let anything = 'binod kumar sahu';

// let data = anything.split(' ').map(data => 
//         data.split('').map((ele, index) =>  {
//             if(index ===1){return ele.toUpperCase()}else {return ele}
//         }).join('')).join(' ')

//         console.log(data);


// array.map(function(currentValue, index, arr), thisValue)

let dat = anything.split(" ").map(data => {
    return data.split("").map((ele, index) => {
        if(index === 1){
            return ele.toUpperCase()
        } else{
            return ele
        }
    }).join("")
}).join(" ")
console.log(dat);












const str = "binod kumar sahu"

let str2 = str.split(" ");
for(let i = 0; i < str2.length; i++){
    str2[i] = str2[i].charAt(0).toUpperCase() + str2[i].slice(1)
}
let convertIs = str2.join(" ")
console.log(convertIs)