const theString = 'GH2U87A';
console.log(sumString(theString));
console.log(sumSwitch(theString));
function sumString(theString){
  let sum = 0;
  for(let i in theString){
    if( !(isNaN(theString[i]))){
      sum += parseInt(theString[i]);
    }
  }
  return sum;
}
function sumSwitch(theString){
  let sum = 0;
  for(let i in theString){
    switch(theString[i]){
      case '1': sum +=1;
                break;
      case '2': sum +=2;
                break;
      case '3': sum +=3;
                break;
      case '4': sum +=4;
                break;
      case '5': sum +=5;
                break;
      case '6': sum +=6;
                break;
      case '7': sum +=7;
                break;
      case '8': sum +=8;
                break;
      case '9': sum +=9;
                break;
    }
  }
  return sum;
}