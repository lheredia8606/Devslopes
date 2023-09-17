const readlineSync = require('readline-sync');
let num1 = 0;
let num2 = 0;
let operator = '';
let stringOperation = readlineSync.question('Please, enter the operation you want to do ');
let isValid = reduce(stringOperation);
if(isValid){
  console.log(`the result of ${stringOperation} is ${getResult(operator,num1,num2)}`);
} else{
  console.log('Please, enter a valid operation');
}
function reduce(theString ){
  theString = theString.replaceAll(' ','');
  for (let i = 1; i < theString.length;i++){
    if(theString[i] === '+' || theString[i] === '-' || theString[i] === '*' || theString[i] === '/'){
        operator = theString[i];
        num1 = +theString.slice(0,i);
        num2 = +theString.slice(i+1,theString.length);
        if(isNumber(num1)&& isNumber(num2)){
          return true;
        } else{
          return false;
        } 
      }
    }
    return false;
  }
  function isNumber(value) {
    const isValidNum = +value;
    return isValidNum;
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