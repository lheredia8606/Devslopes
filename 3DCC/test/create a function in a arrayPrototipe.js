Array.prototype.last = function() {
  if(this.length > 0){
    return this[this.length-1];
  } 
  else
  return -1;
};


const arr = [null, {}, 3];
console.log(arr.last()); // 3
