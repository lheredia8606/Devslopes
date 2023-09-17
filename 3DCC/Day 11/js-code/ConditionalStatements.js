let num1 =42;
let num2 = 27;
console.log(modularDifference(num1,num2));
num1 = 12;
num2 = 12;
console.log(integerSum(num1,num2));
console.log(are40s(num1, num2));
//assuming is modulus difference
function modularDifference(num1,num2){
  let result = num1 - num2;
  if(result > 0 ){
    result = result * 2
  }
  else if (result < 0){
    result *= -1;
  }
  return result;
}

function integerSum(num1,num2){
  let result = num1+num2;
  if (num1 === num2){
    result *= 3;
  }
  return result;
}

function are40s(num1,num2){
  let flag = false;
  if (num1 === 40 || num2 === 40 || (num1+num2)=== 40){
    flag = true;
  }
  return flag;
}