let number = 5;
function ToRoman (dec, roman) {
  if (dec === 0) {
    return roman;
  }
  if (dec >= 1000) {
      return(ToRoman(dec-1000,roman+'M'));
  } else if (dec >= 900) {
    return(ToRoman(dec-900,roman+'CM'));
  } else if (dec >= 500) {
    return(ToRoman(dec-500,roman+'D'));
  } else if (dec >= 400) {
    return(ToRoman(dec-400,roman+'CD'));
  } else if (dec >= 100) {
    return(ToRoman(dec-100,roman+'C'));
  } else if (dec >= 90) {
    return(ToRoman(dec-90,roman+'XC'));
  } else if (dec >= 50) {
    return(ToRoman(dec-50,roman+'L'));
  } else if (dec >= 40) {
    return(ToRoman(dec-40,roman+'XL'));
  } else if (dec >= 10) {
    return(ToRoman(dec-10,roman+'X'));
  } else if (dec >= 9) {
    return(ToRoman(dec-9,roman+'IX'));
  } else if (dec >= 5) {
    return(ToRoman(dec-5,roman+'V'));
  } else if (dec >= 4) {
    return(ToRoman(dec-4,roman+'IV'));
  } else {
    return(ToRoman(dec-1,roman+'I'));
  }
}
console.log(`The number 1983 is equivalent to ${ToRoman(1983,'')}`);
console.log(`The number 657 is equivalent to ${ToRoman(657,'')}`);
console.log(`The number 402 is equivalent to ${ToRoman(402,'')}`);
console.log(`The number 34 is equivalent to ${ToRoman(34,'')}`);
console.log(`The number 1345 is equivalent to ${ToRoman(1345,'')}`);
