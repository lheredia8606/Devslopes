console.log(triangleArea (125,81,74));


function triangleArea(a,b,c){
  //semi Perimeter
  let s = (a + b + c) / 2;
  //using heron's Formula
  return `the area of the triangle is ${Math.sqrt(s * (s-a) * (s - b) * (s - c)).toFixed(2)}`;
}
