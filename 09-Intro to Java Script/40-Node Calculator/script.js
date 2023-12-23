const rs = require('readline-sync');
console.log('Welcome to calculator');
let flag = true;
while(flag){
  let operation = rs.question('What operation do you want to perform?');
  while (!validateOperation(operation)){
    operation = rs.question('Operation not supported, Please enter +, *, - or /');
  }
  num1 = rs.questionFloat("Enter the first number ");
  num2 = rs.questionFloat("Enter the second number ");
  while(num2 === 0 && operation === '/'){
    num2 = rs.questionFloat("Division by 0 not allowed, Please enter another number");
  }
  console.log(`the operation ${num1} ${operation} ${num2} is equal to ${performOp(operation, num1, num2).toFixed(2)}`);
  flag = rs.keyInYN(`Would you like to perform another?`);
}

function validateOperation (operation){
  return (operation === '+' || operation === '-' || operation === '*' || operation === '/')
}

function performOp (op, n1, n2){
  if(op === '+'){
    return n1 + n2;
  } else if (op === '-'){
    return n1 - n2;
  } else if (op === '*'){
    return n1 * n2;
  } else {
    return n1 / n2;
  }
}