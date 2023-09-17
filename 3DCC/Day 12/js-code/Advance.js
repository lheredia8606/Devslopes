arr = [4,1]
console.log(sumRange(arr));

function sumRange (arr){
  let sum = 0
  if (arr[0]> arr[1]){
    for(let i = arr[1]; i<= arr[0]; i++){
      sum +=i;
    }
  }
  else if (arr[0]< arr[1]){
    for(let i = arr[0]; i<= arr[1]; i++){
      sum +=i;
    }
  }
  else
    sum = arr[0]+arr[1];
  return sum;
}