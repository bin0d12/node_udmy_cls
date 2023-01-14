// The valueOf() method returns the primitive value of a String object.
// when you will take new String it will give object function so when you use value of 
// it will give string value

let strObj = new String("foo");
console.log(strObj, typeof strObj); // [String: 'foo'] object
console.log(typeof strObj.valueOf(), strObj.valueOf()); // string foo

