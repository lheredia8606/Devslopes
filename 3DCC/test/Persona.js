function MinWindowSubstring(strArr) { 
  let str1 = strArr[0];
  let str2 = strArr[1];
  //copy of str2
  let tempString;
  let tempReturn = '';
  let toReturn = '                                                      ';
  let flag;
  for(let i = 0; i < str1.length; i++){
    temp = str2.indexOf(str1.charAt(i));
    tempReturn = '';
    flag = false;
    if(temp != -1){
      tempString = str2;
      for (let j = i; j < str1.length; j++){
        tempReturn += str1.charAt(j);
        tempString = tempString.replaceAll(str1.charAt(j),'');
        if(tempString === ''){
          flag = true;
          break;
        }
      }
      if (flag){
        if(tempReturn .length < toReturn.length){
          toReturn = tempReturn;
        }
      }
    }
  }
  return toReturn;
}
   
// keep this function call here 
console.log(MinWindowSubstring(["ahffaksfajeeubsne", "jefaa"]));