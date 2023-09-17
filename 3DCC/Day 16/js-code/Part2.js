let originalStr = 'There{is(a!nice<string]in>all(this)nonsense.';
const charToErase = '{}[]!<>()';
let eraseMess = (originalStr, charToErase)=>{
  for(let i = 0; i < charToErase.length; i++){
    originalStr = originalStr.replaceAll(charToErase[i],' ');
  }
  return originalStr;
}
console.log(eraseMess(originalStr,charToErase));