// let obj = {name: "first value"}

// let copyObj = obj

// copyObj.name = "changed first value"
// console.log(copyObj);
// console.log(obj);


// let num = 10;

// let changeNum = num

// changeNum = 30

// console.log(num
//     , changeNum);


// var obj = {a: "binod", b: "26"};
// // console.log(obj, 'assign the value');    // 
// let obj1 = obj;
// // console.log(obj1, "taking reference of obj in obj1");
// console.log("change the variable obj so it will update as well as in obj1");
// obj['occupation'] = "engg"
// obj1.a = "sameer"

// console.log(obj, "after adding one value into that");
// console.log(obj1, "at first we take reference of obj so we update some value in obj, we will see it will update in obj1 or not");


// let a = 10;
// let b = a;
// a = 30
// b = 20;
// console.log(a);
// console.log(b);

// let obj = {name : "binod"};

// let obj1 = obj;
// obj.name = "sujit"
// obj1.name = "sameer";

// console.log(obj);
// console.log(obj1);


// var employee = {
//     eid: "E102",
//     ename: "Jack",
//     eaddress: "New York",
//     salary: 50000
// }
// console.log("=========Deep Copy========");
// var newEmployee = JSON.parse(JSON.stringify(employee));
// console.log("Employee=> ", employee);


// console.log("New Employee=> ", newEmployee);
// console.log("---------After modification---------");
// newEmployee.ename = "Beck";
// newEmployee.salary = 70000;
// console.log("Employee=> ", employee);
// console.log("New Employee=> ", newEmployee);


var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
 
 
console.log("Employee=> ", employee);
var newEmployee = Object.assign({}, employee); ;    // Shallow copy
console.log("New Employee=> ", newEmployee);
 
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);