const number = 989;
let arrNumber = reWork(number);
let str = '';
arrNumber.map((value,index)=>
  str += value
);
console.log(str);
function reWork(num){
  let sum =[];
  let digitCount = getDigitCount(num);
  for(let i = digitCount-1; i >= 0; i--){
    for(let j = 0; j<=9;j++){
      if(Math.pow(10,i)*j>num){
        num = num-(Math.pow(10,i)*(j-1));
        sum.push(j);
        break;
      } else if(j === 9){
        num = num-(Math.pow(10,i)*(j));
        sum.push(j+1);
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
