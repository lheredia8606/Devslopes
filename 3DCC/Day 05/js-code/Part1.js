let balance = 205;
let itemName = 'Basket Ball'
let itemPrice = 200;

if (balance >= itemPrice){
  console.log(`Purchasing  ${itemName} for $${itemPrice}`);
  balance -= itemPrice;
  console.log(`New balance in card: $${balance}`);
}
else {
  console.log (`You are broke and cannot afford this item. You need an additional $${itemPrice-balance} to buy it!”`)
}