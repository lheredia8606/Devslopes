let brands = ['Nike', 'Fila', 'Jordan','Martin jr', 'Vic', 'Casemir'];


for (const value of brands.entries()) {
  console.log(value[0] + " " + value [1]);
}
for (const [index, value] of brands.entries()) {
  console.log(index + " " + value);
}

function addNumbers(){
  let sum = 0;
  for (const num of arguments) {
    sum += num;
  }
  return sum;
}

console.log(addNumbers(12,43,65,23,98,59));