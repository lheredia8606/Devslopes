var colors = ['blue', 'red', 'green', 'yellow', 'black', 'white'];
console.log(colors);
colors = colors.map(color=>color.toUpperCase());
console.log(colors);

var numbers = [-1, -2, 20, 60, 77];
console.log(numbers.every(isPositive));

function isPositive(num){
  return num > 0;
}
