/*
Exercise 1: Write a function called combineArrays that takes in two arrays as arguments, and returns 
a single array that combines both (using the spread operator).
*/
const concatArr = (arr1, arr2) => [...arr1, ...arr2];
console.log(concatArr([1,2,3], [4,5,6,7,8,9]));
/*
Exercise 2: Write a function called addEveryOther that takes in any amount of arguments, and 
returns the sum of every other argument.
*/
const addEveryOther = (...arguments) => arguments
.filter((argument,index) => index % 2 === 0)
.reduce((acum,curVal) => acum + curVal,0);
// => addEveryOther(4, 7, 3, 2, 10) // 17
// => addEveryOther(2, 8, 3, 1) // 5
console.log(addEveryOther(4, 7, 3, 2, 10));
console.log(addEveryOther(2, 8, 3, 1));