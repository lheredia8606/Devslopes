let kilograms = 3;

console.log(`${kilograms} kilograms are equivalent to ${convertToPounds(kilograms)} pounds`);

function convertToPounds(kilograms){
  return kilograms * 2.205;
}