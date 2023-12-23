//----------------------Number Methods----------------------------------
//The number methods belong to the JavaScript Number Object.
//These methods can only be accessed like Number.isInteger().
//Using X.isInteger() where X is a variable, will result in an error:
//TypeError X.isInteger is not a function.
//All number methods return a new value. They do not change the original value.

//------------------------Number.isInteger()----------------------------
//method returns true if the argument is an integer.

//-----------------------Number.isSafeInteger()-------------------------
//method returns true if the argument is a safe integer.
//Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).

//-----------------------Number.parseFloat()----------------------------
//parses a string and returns a number.
//Spaces are allowed. Only the first number is returned:
a = 'exercise or excersice'