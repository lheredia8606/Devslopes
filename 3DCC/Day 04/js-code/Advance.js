factorial(6);
factorial(16);
factorial(8);
factorial(49);
factorial(101);
function factorial (number){
  var factorial = 0;
  for (let i = 1; i<= number; i++){
    factorial += i;
  }
console.log(`The factorial of ${number} is ${factorial}`)
}