var string1 = 'wor';
var string2 = 'Hello world!';
console.log(isContained(string1,string2));

// I will consider e minimum of 3 characters to consider that String 2 contain a portion of
// the String 1.
function isContained(string1, string2) {
  var index = 0;
  while (index + 3 <= string1.length) {
    temp = string1.slice(index, index + 3);
    if (string2.includes(string1.slice(index, index + 3))) {
      return true;
    }
    else{
      index++;
    }
  }
  return false;
}
