console.log(same_necklace('nicole', 'icolen'));// => true 
console.log(same_necklace('nicole', 'lenico'));// => true 
console.log(same_necklace('nicole', 'coneli'));// => false 
console.log(same_necklace('aabaaaaabaab', 'aabaabaabaaa'));// => true 
console.log(same_necklace('abc', 'cba'));// => false 
console.log(same_necklace('xxyyy', 'xxxyy'));// => false 
console.log(same_necklace('xyxxz', 'xxyxz'));// => false 
console.log(same_necklace('x', 'x')); //=> true 
console.log(same_necklace('x', 'xx')); // => false 
console.log(same_necklace('x', ''));// => false 
console.log(same_necklace('', ''));// => true 

function same_necklace(str1, str2) {
  if (str1.length !== str2.length){
    return false;
  }
  else if (str1 === str2){
    return true;
  }
  else{
    for(let i = 0; i < str1.length; i++){
      let a = '';
      a = str1.substring(i + 1) + str1.substring(0,i+1);
      if(a === str2){
        return true
      }
    }
  }
  return false;

}