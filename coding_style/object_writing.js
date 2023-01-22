// bad writing code 
function  addEmployee(firstName, lastName, age, gender, country, city, job, department){
    console.log(`${firstName} ${lastName} ${age} ${gender} ${country} ${city} ${job} ${department} `);
}
addEmployee("binod", "kumer", 26, "male", "india", "hyderabad", "software engg", "web developer")

// good practice

function addEmply(employee){
    console.log(employee);
}
const adam = {
    firstName: "binod",
    lastName: "binod",
    age: "binod",
    gender: "binod",
    country: "binod",
    city: "binod",
    job: "binod",
    department: "binod",
}
addEmply(adam)