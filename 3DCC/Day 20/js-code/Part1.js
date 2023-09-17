const theString = 'Fire';
console.log(doPigLatin(theString));
const theString1 = 'California';
console.log(doPigLatin(theString1));
const theString2 = 'Alaska';
console.log(doPigLatin(theString2));

function doPigLatin(theString){
  toReturn = '';
  arr = [...theString];
  if(isVowel(arr[0]))
    toReturn =  theString + 'wey';
  else{
    let pos = 1;
    for(let i = 1; i < arr.length; i++){
      if(isVowel(arr[i]))
        break;
      pos = i;
    }
    toReturn = theString.slice(pos) + theString.slice(0,pos)+'ay';
  }
  return toReturn;
}


function isVowel(letter){
  letter = letter.toLowerCase();
  return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
}