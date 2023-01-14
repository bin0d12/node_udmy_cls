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

// filter method

// Get characters with mass greater than 100

let getMass = characters.filter(data => { return data.mass > 100})
console.log(getMass);
// Get characters with height less than 200
let getHeight = characters.filter(data => {
    return data.height < 200
})
console.log(getHeight, "data");

// Get all male characters

let getMaleChars = characters.filter(data => {
    return data.gender === "male"
})
console.log(getMaleChars);

// Get all female characters
let getFemaleChars = characters.filter(data => {
    return data.gender === "female"
})
console.log(getFemaleChars);

// sort method

// Sort by name
console.log("----------------------------------");
let sortByName = characters.map(data => {
    // let data1 =   data.name
    return data.name
    // console.log(data1);
})
console.log(sortByName);
let sorted = sortByName.sort()
console.log(sorted);

// Sort by mass

let getByMass = characters.sort(data => {
    return data.name
})
console.log(getByMass, "dtataaatatt");