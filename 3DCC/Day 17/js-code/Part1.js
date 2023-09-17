const numArr1 = [1,45,23,67,8,34,1,45,2];
const numArr2 = [1,45,23,67,8,34,1,45,2];
const sortArr = arr => arr.sort((a,b) => a-b);
console.log(sortArr(numArr1));
console.log(sort(numArr2));

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