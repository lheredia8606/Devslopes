let red = 255;
let green = 99;
let blue = 71;

console.log(decToHex(1));


function decToHex(num){
  let places = 0;
  while(Math.pow(16,places)<= num){
    places++;
  }
  return places;

}
