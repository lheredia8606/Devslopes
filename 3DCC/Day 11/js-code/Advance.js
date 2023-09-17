console.log(totalCount(1,200));

//considering range are excludes from count
function totalCount(startNum, endNum){
  let cont = 0;
  for(let i = startNum; i < endNum; i++){
    if (!isDividedBy6(i) && !isDividedBy15(i)){
      cont ++;
    }
  }
  return cont;
}

function isDividedBy6(num){
  return num % 6 === 0;
}
function isDividedBy15(num){
  return num % 15 === 0;
}