let nameData = {
    firstName: "binod Kumar",
    lastName: "sahu",
    // if you want to pass the parameter you can add when you will 
    // that method you have to add after comma into that
    fullName: function(occupation, age){
        console.log(`${this.firstName} ${this.lastName} occupation is ${occupation} and age is ${age}`);
    }
}
nameData.fullName()

let anotherNameData = {
    firstName: "sujit", 
    lastName: "palo"
}

// nameData.fullName.call(anotherNameData, "software engg", 24)
// call methods
// using function method we call borrowing function, we can borrow function from other object and use it data from other object
// when you will create a object inside object ou will create a method in that method if you write this keyword it will refer that object name.

// bind 

// this same like call function but you can pass the argument in separatly by using array method
nameData.fullName.apply(anotherNameData, ["software enggg", 24, "dvsfcd"])


// example

let findMaxNumber = Math.max.apply(null, [1,2,3,6,7,8,9])
// console.log(findMaxNumber);   it will give 9 
// this is the change why we need to apply method in   