let num = 345;
console.log(`The square root of ${num} is ${getFloat(num,getInt(num),1)}`);
console.log(`The square root of ${num} is ${Math.sqrt(num,2)}`);

function getInt(num){
  let intPart = 0;
  while(true){
    if(intPart * intPart>num){
      intPart--;
      break;
    }
    intPart++;
  }
  return intPart;
}
function getFloat(num, semSqrt,base){
  if(base === 14){
    return semSqrt;
  }
  for(let i = 1;i<10; i++){
    let a = (semSqrt + i*(10**(base*-1)));
    if(a**2 === num){
      return semSqrt;
    }
    else if(a**2 > num){
      return getFloat(num, (semSqrt + (i-1)*(10**(base*-1))) ,base+1);
    }
  }
}

