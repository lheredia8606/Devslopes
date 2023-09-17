const readlineSync = require('readline-sync');
let flag = false;
let operation = '';
let num1 = 0
let num2 = 0;
while(!flag){
operation = readlineSync.question('What operation would you like to perform? ');
if(operation === '/' || operation === '*' || operation === '+' || operation === '-'){
  flag = true
}
else {
  console.log('That is not a valid operation');
}
}
num1 = getNumber('first');
num2 = getNumber('second');
console.log(`The  result is: ${getResult(operation,num1,num2)}`);

function isNumber(value) {
  const isValidNum = +value;
  return isValidNum;
}
function getNumber(number){
  let flag = false;
  let num = 0;
  while(!flag){
    num = readlineSync.question(`Please enter the ${number}  number `);
    if((!isNumber(num)) && num != 0){
      console.log('That is not a valid number');
    }
    else
      flag = true
  }
  return +num;
}
function getResult(operation, num1, num2){ 
  switch (operation){
    case "+": return num1 + num2;
    case "-": return num1 - num2;
    case "*": return num1 * num2;
    case "/": if (!(num2===0)){
      return num1 / num2;}
      else{
        return 'Division by 0 not allowed';
      }
  }
}
