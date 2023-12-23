let counter = 1;
/*
while (counter < 101){
  if (counter % 3 === 0 && counter % 5 === 0){
    console.log('FizzBuzz');
  } else if (counter % 5 === 0) {
    console.log('Buzz');
  } else if (counter % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(counter);
  }
  counter ++;
}
*/
for (let i = 1; i < 101; i++){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}