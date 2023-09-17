const arrStr = ['hello', 'Joe', 'Card'];

let getBigStr = arrStr =>{
  let pos = 0;
  if(arrStr.length === 1)
  return arrStr[0];
  for(let i = 1; i<arrStr.length;i++){
    if(arrStr[pos].length < arrStr[i].length)
    pos = i;
  }
  return arrStr[pos];
}
console.log(getBigStr(arrStr));