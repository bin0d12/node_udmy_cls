// search
//  tests for a match in a string. It returns the index of the match
// if not found return -1 value

let str = "Hey Binod!";

console.log(str.search('ey'));  // 1 it returned indexes number of matching string
console.log(str.search('a'));  // -1 it returns -1 because it is not matching with string

// match
// Executes a search for a match within a string based on a regular expression
// it returns an array of information or null if no match found
console.log(str.match("Bin"));  //[ 'Bin', index: 4, input: 'Hey Binod!', groups: undefined ]
console.log(str.match(/Bin/g)); // [ 'Bin' ]
console.log(str.match(/bin/g)); // null
