let states = ['alaska', 'alabama', 'arkansas','missouri','texas','nevada','california'];

let statesWithA = states
  .filter(function(value){
    return value[0] === 'a';
  })
  .map(function(value){
    return value.substring(0,3);
  })
  .reduce(function(acc, value){
    return acc += value.length;
  },0);

console.log(statesWithA);