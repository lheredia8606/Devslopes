
//destructuring objects
let shape = {width: 400, height: 200};
const { width, height, font = '8px'} = shape;
console.log(width);
console.log(height);
console.log(font);

//destructurin arrays
let theStr = 'Shanty,Dinho,Mara,Leandro';
let [name1,name2,name3,name4] = theStr.split(',')
console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);

//destructuring function
const cryptoConverter = (amount) =>{
  let crypro = {
    BTC: amount / 19000,
    ETC: amount / 595,
    LTC: amount / 88,
    XEM: amount / 0.2,
  }
  return crypro;
}

const {XEM, BTC} = cryptoConverter(10000);
console.log(XEM);
console.log(BTC);

const bill = {
  total: 100,
  tax: 0.0825,
  tip: undefined,
};

const getTotal = ({total, tax = 0.0825, tip = 0.2}) => {
  return total + ((tax+tip) * total);
}

console.log(getTotal(bill));
