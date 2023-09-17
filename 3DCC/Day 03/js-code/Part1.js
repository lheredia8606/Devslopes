var firstWord = 'Welcome to my house';
var secondWord = 'Hello, World!';
var thirdWord = 'Disaster';
console.log(usingSubString(firstWord, 0 , 4));
console.log(usingSubStr(secondWord, 0, 6));
console.log(getCharacters(thirdWord, 0));

function usingSubString(strToTruncate,start, finish){
  return strToTruncate.substring(start,finish);
}

function usingSubStr(strToTruncate, start, length){
  return strToTruncate.substr(start,length);
}

function getCharacters(strToTruncate , position){
  return strToTruncate[position];
}
