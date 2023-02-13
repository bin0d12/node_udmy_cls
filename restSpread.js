let obj = {
    name: "binod",
    age: 25
}

let copyObjAssign = Object.assign({}, obj)
copyObjAssign.age = 29
let copyObj = {...obj}
copyObj.name = "sameer"
console.log(copyObj);
// console.log(copyObj);
// console.log(obj);
// console.log(copyObjAssign);