// // const demoData = './index.js'
// // const express = require('express');
// // const router = express.Router()

// const characters = [
//     {
//         name: 'Luke Skywalker',
//         height: '172',
//         mass: '77',
//         eye_color: 'blue',
//         gender: 'male',
//     },
//     {
//         name: 'Darth Vader',
//         height: '202',
//         mass: '136',
//         eye_color: 'yellow',
//         gender: 'male',
//     },
//     {
//         name: 'Leia Organa',
//         height: '150',
//         mass: '49',
//         eye_color: 'brown',
//         gender: 'female',
//     },
//     {
//         name: 'Anakin Skywalker',
//         height: '188',
//         mass: '84',
//         eye_color: 'blue',
//         gender: 'male',
//     },
// ];


// // Get an array of all names

// let getArrayNames = characters.map(name => {return name.name})
// console.log(getArrayNames);
// // Get an array of all heights
// let getHeights = characters.map(heights => {return heights.height});
// console.log(getHeights);

// // Get an array of objects with just name and height properties

// let getHeightandName = characters.map(heightAndName => {
//     return `${heightAndName.name} & ${heightAndName.height}`
// })

// console.log(getHeightandName);


// // Get an array of all first names
// let getFirstName = characters.map(data => {
//     return data.split(""))
// }
// console.log(getFirstName);



let c= {greeting:'hey'};
let d;
d=c;
c.greeting='hello';
console.log(d.greeting)