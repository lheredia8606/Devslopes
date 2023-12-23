item1 = 10.36;
item2  = 12.56;
item3  = 9.90;
item4  = 14.56;
item5  = 13.56;
item6  = 17.56;

price = (item1 * 100 + item2 * 100 + item3 * 100 + item4 * 100 + item5 * 100 + item6 * 100) / 100;
console.log('The price before discount is '+ price);
coupon  = 0.25;
totalDiscount = (price * coupon).toFixed(2);
console.log('The discount will be ' + totalDiscount);
priceBeforeTaxes = (price * 100 - totalDiscount * 100) / 100;
console.log('The price after  discount is '+ priceBeforeTaxes);
let taxRate = 7.75;
let totalTax = (priceBeforeTaxes * taxRate / 100).toFixed(2);
console.log('total taxes = ' + totalTax)
let totalPrice = (priceBeforeTaxes * 100 + totalTax * 100) / 100; 
console.log(totalPrice);


