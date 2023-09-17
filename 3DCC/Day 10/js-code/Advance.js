let arr1 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12]
];
let arr2 = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12]
];

function multiplyMatrices(a,b){
  let result = [];
  let sum = 0;
  for(let i = 0; i < a.length;i++){
    let subArr = [];
    for(j = 0; j < a.length; j++){
      sum=0;
      for(let k = 0; k<a[i].length;k++){
        sum +=a[i][k] * b[k][j]; 
      }
      subArr[i,j] = sum;
    }
    result[i]=subArr 
  }
  return result;
}
console.log(multiplyMatrices(arr1,arr2));