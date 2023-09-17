let stringToReverse = "Hello World!";

console.log('The String to reverse is : '+ stringToReverse);

console.log(reverseBuildInt(stringToReverse));

console.log(reverseFor(stringToReverse));

function reverseBuildInt(stringToReverse){
  let stringToReturn;
  let charArray = stringToReverse.split("");
  charArray.reverse();
  stringToReturn = charArray.join();
  stringToReturn = stringToReturn.replaceAll(',','');
  return stringToReturn;
}


function reverseFor(stringToReverse){
  let toReturn = '';
  for (let index = stringToReverse.length - 1; index >= 0; index--) {
    toReturn += stringToReverse.charAt(index); 
  }
  return toReturn;
}


