let name = "binod kumar sahu";
let age = 26;
let hobbies = "hobbissss";

function f1(userName, UserAge, userHobbies){
    return(`name is ${userName} ${age} and ${userHobbies}`)
}

let data = f1(name, age, hobbies)

console.log(data);

// Arrow functions

let fun = (userName1, userAge1, userHobbies1) =>{
   return `${userName1} , ${userAge1}, ${userHobbies1}`
}
console.log(fun(name, age, hobbies));
