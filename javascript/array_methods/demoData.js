const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// map function

// Get an array of all names
let names = characters.map(nam => {
    return nam.name
});
console.log(names);

// Get an array of all heights
let heights = characters.map(data => {
    return data.height
})
console.log(heights);




// Get an array of objects with just name and height properties

let name_height = characters.map(data => {
    return `name is ${data.name} and  height is ${data.height}`
})
console.log(name_height);

// Get an array of all first names

let firstName = characters.map(data =>{
    let data1 = data.name
    let charsChange3 = data1.split(" ")
    let charsChange = data1.split(" ")[0]
    let charsChange1 = data1.split(" ")[1]
    // console.log(charsChange);
    // console.log(data1);
    // console.log(charsChange1);
    // console.log(charsChange3);
})


// reduce

// Get the total mass of all characters

let getMass = characters.map(data => {
    let mass = data.mass
    console.log(mass, "mass");
    // 2nd method
    // let data1 = Number(mass)
    // return 
    // first method
    return parseInt(mass)
})
console.log(getMass);
let totalMass = getMass.reduce((a, b) => {
        return a + b
    })
    console.log(totalMass);

// Get the total height of all characters

let getHeight = characters.map(heights => {
    return parseInt(heights.height)
})
let totalHeights = getHeight.reduce((height, incrmrnt) => {
    return height + incrmrnt
})
console.log(totalHeights, "total heights");

// Get the total number of characters in all the character names

let getNames = characters.map(names => {
    return names.name
})
let totalNameChars = getNames.reduce((data, b) => {
    return data + b
})
console.log(totalNameChars.split("").length, "getNames");

// Get the total number of characters by eye color (hint. a map of eye color to count)

let eyeChars = characters.map(eyeColor => {
    return eyeColor.eye_color
})
console.log(eyeChars);
let totalEyeColor = eyeChars.reduce((a,b) => {
    return a + b
})
// console.log(totalEyeColor);
console.log(totalEyeColor.split("").length);