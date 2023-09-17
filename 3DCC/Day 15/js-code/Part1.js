let number = -412;
console.log(`The sum of the digits of ${number} is ${digitSum(number)}`);
function digitSum(num){
  let sum = 0;
  if(num<0){
    num = num*=-1;
  }
  let digitCount = getDigitCount(num);
  for(let i = digitCount-1; i >= 0; i--){
    for(let j = 0; j<=9;j++){
      if(Math.pow(10,i)*j>num){
        num = num-(Math.pow(10,i)*(j-1));
        sum += j-1;
        break;
      } else if(j === 9){
        num = num-(Math.pow(10,i)*(j));
        sum += j;
        break;
      }
    }
  }
  return sum;
}
function getDigitCount(num){
  let i = 0;
  while(true){
    if((Math.pow(10,i)*1)>num){
     return i;
     }
    i++;
  }
}