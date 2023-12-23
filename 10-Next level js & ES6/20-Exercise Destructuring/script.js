/*
Destructuring Arrays
Exercise 1: Using array destructuring, take the first two items from the array and store them in a variable
*/
const names = ['John', 'Jacob', 'Jingleheimer'];
let [first, second, ...rest] = names;
console.log(first,second);
// => John Jacob

/*
Destructuring Functions

Exercise 2: Destructure the first two items returned from the function and store them in a variable
*/
const foo = () => [1, 2, 3];
[first,second,...rest] = foo();
console.log(first,second);
/*
Swapping Variables

Exercise 3: Without creating a temporary variable, use destructuring to swap the value of the following variables
*/
let a = 'Jack';
let b = 'Jill';
// your code
[a,b] = [b,a];
console.log('a:', a, 'b:',b);
// => a: Jill b: Jack

/*
BONUS: Advanced - nested arrays

Using array destructuring, accomplish the following output. Carefully study the array and the output to 
understand it.
*/
const array = [1, [2, [[[3, 4], 5], 6]]];
// your code
[a,[b,[c,d]]] = array;
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// => a: 1 b: 2 c: [ [ 3, 4 ], 5 ] d: 6
/*
another way to visualize the output. (a), (b) & (d) are numbers. (c) is an array.

a: 1
b: 2
c: [ [ 3, 4 ], 5 ] 
d: 6
*/