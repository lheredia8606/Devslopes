var odds = [5,8,14,13,29,98]; 
var evens = [11,6,2,87,43,22,104];

odds = odds.filter(function(value){
  return value % 2 === 1;
});
console.log(odds);

evens = evens.filter(function(value){
  return value % 2 === 0;
});
console.log(evens);

