let students = {
  Jon: {
    age: 27,
    online: false
  },
  Jack: {
    age: 32,
    online: true
  },
  Jenn: {
    age: 48,
    online: false
  },
  Liz: {
    age: 19,
    online: true
  } 
};

console.log(getKeys(students,[]));


function getKeys(theObject,arr){
  let keys = [];
  if(theObject){
    keys = Object.keys(theObject);
    if(keys.length >0){
      for(let i in keys){
        arr = arr.concat(keys[i]);
        if(getKeys(theObject[keys[i]],[])){
          arr = arr.concat(getKeys(theObject[keys[i]],[]))
        }
      }
    }
  }
  return arr;
}
