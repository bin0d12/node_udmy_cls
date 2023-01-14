// trim 
// it remove white spaces from both ends from a string and it return new string without 
// modifying the original string

let trimStr = "       demostring        "
console.log(trimStr);
console.log(trimStr.trim());

// trimstart
// it removes the white spaces beginning of string.
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";

// trimEnd
// it removes white space from end of string 

const greeting1 = '   Hello world!   ';

console.log(greeting1);
// expected output: "   Hello world!   ";

console.log(greeting1.trimEnd());
// expected output: "   Hello world!";
