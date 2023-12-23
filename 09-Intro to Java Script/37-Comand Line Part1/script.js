let readlineSync = require('readline-sync');
const person = {};
person.name = readlineSync.question('Welcome, What\'s  your name please');

console.log(`Thanks for comming ${person.name}`);

person.favHobby = readlineSync.question('Witch is your favorite Hobby');
let flag = readlineSync.keyInYN('Do you have more Hobbies?');
person.moreHobbies = [];
while(flag){
  person.moreHobbies.push (readlineSync.question('Enter the hobby please'));
  flag = readlineSync.keyInYN("Do you have more?")
}

console.log(`Thanks for comming ${person.name}`);
console.log(`Your favorite hobbie is ${person.favHobby}`);
if (person.moreHobbies.length > 0){
  console.log(`and you have ${person.moreHobbies.join(', ')} too`);
}


  


