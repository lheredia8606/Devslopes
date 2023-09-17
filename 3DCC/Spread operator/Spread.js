const shoes = ['Nike', 'Fila', 'Jordan'];
const pants = ['Martin jr', 'Vic', 'Casemir'];

let shipping = [...shoes, 'Lib Stick', ...pants];

console.log(shipping);

const skatterDude = {
  name: 'Leo',
  shoes: ['chupamiaos']
}

skatterDude.shoes = [...skatterDude.shoes, ...shoes];

console.log(skatterDude);

//use the spread to convert string to char[]
const str = 'The violin is broken';
let arr = [...str];
console.log(arr);
//not workin the reduce
let arr2 = arr.reduce((val) =>val != ' ');
console.log (arr2);

//remove an element ussing spread
let something = ['Nike', 'Fila', 'Jordan','Martin jr', 'Vic', 'Casemir'];
const indexToDelete = 3;
//this is wrong cause create 2 arr inside the arr
let something2 = [something.slice(0,indexToDelete), something.slice(indexToDelete+1)];
//this is good, create an array spread
let something3 = [...something.slice(0,indexToDelete), ...something.slice(indexToDelete+1)];
console.log (something2);
console.log (something3);
