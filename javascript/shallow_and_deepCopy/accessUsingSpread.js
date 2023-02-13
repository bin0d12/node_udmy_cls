const obj = {name: "version 1", additionalInfo: {version:1}}
const shallowCopy = {...obj}

console.log(shallowCopy)
const shallowCopy1 = Object.assign({}, obj)
console.log(shallowCopy)

shallowCopy.name = "version 2"
shallowCopy.additionalInfo.version = 2

shallowCopy1.name = "version 2"
shallowCopy1.additionalInfo.version = 2
console.log(obj);
console.log(shallowCopy);
console.log(shallowCopy1);