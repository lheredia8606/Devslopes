//------------------------toString()--------------------------
// Returns a number as a string
let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

//-----------------------toExponential()---------------------------------------
//	Returns a number written in exponential notation

x = 9.656;
console.log('toExponential()');
console.log(x.toExponential());
console.log(x.toExponential(2));
console.log(x.toExponential(4));
console.log(x.toExponential(6));

//------------------------toFixed()-------------------------------------
//	Returns a number written with a number of decimals
x = 9.656;
console.log('toFixed()');
console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));
//------------------------toPrecision()----------------------------------
//	Returns a number written with a specified length
x = 9.656;
console.log('toPrecision()');
console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));
console.log(x.toPrecision(6));
//-------------------------ValueOf()---------------------------------------
//	Returns a number as a number
x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();

//-------------------------Number()----------------------------------
//The Number() method can be used to convert JavaScript variables to numbers:
Number(true);      //1
Number(false);     //0
Number("10");      //10
Number("  10");    //10
Number("10  ");    //10
Number(" 10  ");   //10
Number("10.33");   //10.3
Number("10,33");   //NAN
Number("10 33");   //NAN
Number("John");    //NAN

//-----------------------parseInt()--------------------------------
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
parseInt("-10");         //-10      
parseInt("-10.33");      //-10
parseInt("10");          //10
parseInt("10.33");       //10
parseInt("10 20 30");    //10
parseInt("10 years");    //10
parseInt("years 10");    //NAN

//------------------------parseFloat()------------------------------
// parses a string and returns a number. Spaces are allowed. Only the first number is returned:
parseFloat("10");        //10
parseFloat("10.33");     //10.33
parseFloat("10 20 30");  //10
parseFloat("10 years");  //10
parseFloat("years 10");  //NAN