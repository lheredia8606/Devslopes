let num = 10;
console.log(populateArr(num));
let result = populateArr(num)
.filter((value)=>value%2 == 1)
.reduce((total,value)=>total+value);
console.log(result);

function populateArr (limit){
  let toReturn = [1,1];
  while(limit >= toReturn[toReturn.length-1]+toReturn[toReturn.length-2]){
    toReturn.push(toReturn[toReturn.length-1]+toReturn[toReturn.length-2]);
  }
  return toReturn;
}