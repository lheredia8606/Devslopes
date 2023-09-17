let nameArr = ['Mara','Shanty', 'Leo', 'Dinho'];
function* names(arr){
  for(let i = 0; i < arr.length; i++){
    yield(arr[i]);
  }
}

const theNames = names(nameArr);
let pepe;
while(pepe = theNames.next().value){
  console.log(pepe);
}