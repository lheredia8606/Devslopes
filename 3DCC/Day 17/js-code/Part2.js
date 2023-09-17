const numArr = [1,45,23,67,8,34,1,45,2];
console.log(sort(numArr));

function sort (numArr){
  let temp = 0;
  for(let i = 0; i < numArr.length; i++){
    for(let j = i+1; j < numArr.length; j++){
      if(numArr[i]>numArr[j]){
        temp = numArr[i];
        numArr[i] = numArr[j];
        numArr[j] = temp;
      }
    }
  }
  return numArr;
}