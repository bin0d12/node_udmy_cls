let person = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};
console.log(person);

// let copyPerson = Object.assign({}, person)
let copyPerson ={...person.address}

copyPerson.firstName ="Daniel"

copyPerson.address.street = "paluru"
copyPerson.address.city = "Bam"
console.log(copyPerson, "copy person");
console.log(person, "person");