function treeConstructor(strArr){
  let parents = {};
  let childrens = {};

  for(let i = 0; i < strArr.length; i++){
    let pair = strArr[i].replace(/[()]/g,'').split(',');
    let child = pair [0];
    let parent = pair[1];

    if(parents[parent]){
      parents[parent].push(child);
    } else {
      parents[parent] = [child];
    }
    if(parents[parent].length > 2){
      return false;
    }
    if(childrens[child]){
      return false;
    } else{
      childrens[child] = parent;
    }
  }
  return true;
}

treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]);