function HTMLElements(str) {
  let arrOfElements = getElements(str);
  //hard to find a mistake without debbugin :)
  console.log(arrOfElements);
  arrOfElements = eliminatePairs(arrOfElements);
  console.log(arrOfElements);
 /* for(let i = 0; i < arrOfElements.length/2; i++){
    if ('/'+ arrOfElements[i] !== arrOfElements[arrOfElements.length-i-1]){
      return arrOfElements[i];
    }
  }*/
  //eliminatePairs(arrOfElements);
  return true;
}

function getElements(str){
  let elements = [];
  let currentElement = '';
  let open = false;
  for(let i = 0; i < str.length; i++){
    if(open){
      if(str.charAt(i) === '>'){
        open = false;
        elements.push(currentElement);
        currentElement = '';
      } else {
        currentElement += str.charAt(i);
      }
    } else {
      if (str.charAt(i) === '<'){
        open = true;
      }
    }
  }
  return elements;
}
function eliminatePairs(arr){
  if (arr.length < 1){
    return arr;
  }
  let open = 0;
  length = arr.length;
  for (let i = 0; i < length - 1; i++){
    open = 0;
    for(let j = i + 1; j < length; j++){
      if ('/' + arr[i] === arr[j] && open === 0){
        arr.splice(j,1);
        arr.splice(i,1);
        arr = eliminatePairs(arr);
      } else  if ('/' + arr[i] === arr[j]){
        open --;
      } else if(arr[i] === arr[j]){
        open ++;
      }
    }
    return arr;
  }



}
HTMLElements( "<div><b><p>hello world</p></b></div><p>");
