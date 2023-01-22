// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   console.log(x + y + z);
//   // → 60
// }
// console.log(x + z);
// console.log(x + y);

// function chicken() {
//     return egg();
//   }
//   function egg() {
//     return chicken();
//   }
//   console.log(chicken() + " came first.");

// Write a JavaScript program to list the properties of a JavaScript object. Go to the editor
// Sample object:
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};
// Sample Output: name,sclass,rollno

// let data = student.map((key, val) => {
//     return key + val
// })
// console.log(data);
console.log(Object.keys(student).toString());

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property

console.log(student);
// delete student.rollno
console.log(student);

console.log(Object.keys(student).length);