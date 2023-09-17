let cars = {
  Honda : 'Crv',
  Jeep : 'Wrangler',
  Chrysler : 'Pacifica',
  Ford : 'F150'
};
cars = eraseBrand(cars,'Ford');
console.log(cars);


function eraseBrand (theObject,brand){
  for (let key in theObject) {
    if (key === brand){
      delete theObject[key];
      break;
    } 
    else
    console.log(`${key}  ${cars[key]}`)
  }
  return theObject;
}