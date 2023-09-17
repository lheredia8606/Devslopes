let num = 9932;
console.log(sumOne(num));
function sumOne(num){
  num = num.toString();
  let temp = '';
  for(let i = 0;i<num.length; i++){
    temp+=(Number(num[i])+1).toString();
  }
  return Number(temp);
}