var tShirt = 3.56;
var socks = 5.67;
var cap = 4.67;
var shoes = 28;
var sunGlasses  = 13.43
var pants = 23.17;
totalPrice = tShirt+socks+cap+shoes+sunGlasses+pants;
console.log('The total price of the products is: ' + totalPrice);
var discount = 25;
var priceAfterDiscount = Number.parseFloat((totalPrice - totalPrice * discount / 100).toFixed(2));
console.log('The total price after discount is : ' + priceAfterDiscount);
var taxes = 7.75;
var finalPrice = (priceAfterDiscount + priceAfterDiscount * taxes / 100).toFixed(2);
console.log('You have to pay '+ finalPrice +' total');

