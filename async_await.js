// 


const createUser = (name) => {
    const user = {
        name : name ?? "unknown"
    }
    return user
}
console.log(createUser());
console.log(createUser("binod"));