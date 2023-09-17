let nums = [2,3,4,5,6,7,8,9,10,11,12];
const evenTotal = sumEven(nums);
function sumEven (arr){
  sum = 0;
  for(i in arr){
    if(arr[i]%2 === 0){
      sum += arr[i];
    }
  }
  return sum;
}
console.log(evenTotal);