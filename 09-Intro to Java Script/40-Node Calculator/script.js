const rs = require('readline-sync');

const objOperators = {
  '+' : (a,b) => a + b,
  '-' : (a,b) => a - b,
  '*' : (a,b) => a * b,
  '/' : (a,b) => a / b,
}
const operArr = Object.keys(objOperators);

let operator, num1, num2 = '';

const getOperator = (limit) => {
  return rs.question('Please, Enter the operation you want to perform', {
    limit,
     limitMessage: `Operation not supported, choose one of this ( ${limit.join(", ")} )`,
    });
}

const getNumbers = (op, str) =>{
 let number = rs.questionInt(`Please enter the ${str} number`);
 while(op === '/' && str === 'second' && number === 0){
   console.log(`Division per 0 not allowed, Please another number`);
   number = rs.questionInt(`Please enter the ${str}`);
 }
 return number
}

const doOperation  = () =>{
  operator = getOperator(operArr);
  num1 = getNumbers(operator, 'first');
  num2 = getNumbers(operator, 'second');
  return objOperators[operator](num1,num2);
}

console.log(doOperation());