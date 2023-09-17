evens();
evens1();


function evens (){
  for (let i = 2; i<= 100; i++){
    if (i % 2 === 0){
      console.log(i);
    }
  }
}

function evens1 (){
  for (let i = 2; i<= 100; i+=2){
    if (i % 2 === 0){
      console.log(i);
    }
  }
}