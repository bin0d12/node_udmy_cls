// when you pass multiple parameter to function you can use object inside the function and call it not like sequence order

function f1({firstName, lastNAme, age, occupation}){
    console.log(firstName, lastNAme, age, occupation)
}
f1({
    lastNAme: "sahu",
    firstName: "Binod kumar",
})