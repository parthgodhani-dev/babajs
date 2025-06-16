# babajs

the way to run "node basics/test.js"

// My Javascript Notes
________________________________________________________________[-:^:-]

// (1) JavaScript Output :

document.getElementById("demo").innerHTML = 5 + 6;
document.write(5 + 6);
window.alert(5 + 6);
alert(5 + 6);
console.log(5 + 6);

window.print() // use for print



// (2) JavaScript Syntax :

var x, y, z;       // Declare Variables
x = 5; y = 6;      // Assign Values
z = x + y;         // Compute Values


Primitives datatype(NNBBSSU) : -
N Number
N null
S symbol
S string
B boolean
B bigint
U undefined


// (3) JavaScript Values :

// --> two types of value :

Fixed values - Fixed values are called Literals.
	>Numbers 
	>Strings 

Variable values - Variable values are called Variables.
	>Operators : arithmetic operators (+ - * /)
	>Expressions
// 

// (4) Case Sensitive : JavaScript and Camel Case 

	>Hyphens : first-name
	>Underscore : first_name
	>Upper Camel Case (Pascal Case) : FirstName
	*>Lower Camel Case : firstName


// Js Variables 

JavaScript Variables also know ad "let" and "const"


// (5) JavaScript Arithmetic :
Operator    	Description
---------------------------------------	
+				Addition
-				Subtraction
*				Multiplication
**				Exponentiation (ES2016)
/				Division
%				Modulus (Remainder)
++				Increment
--				Decrement




// (6) JavaScript Comparison Operators :
Operator    	Description
---------------------------------------	
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator


// (7) JavaScript Assignment
Operator: Same As
---------------------------------------	
=	    : x = y	
+=		: x = x + y
-=		: x = x - y
*=		: x = x * y
/=		: x = x / y
%=		: x = x % y
<<=		: x = x << y
>>=		: x = x >> y
>>>=	: x = x >>> y
&=		: x = x & y
|=		: x = x | y
^=		: x = x ^ y
**=		: x = x ** y



 // String Methods :

length : use for maser langth
indexOf : method returns the index of (the position of) the first occurrence of a specified text in a string
lastIndexOf : method returns the index of the last occurrence of a specified text in a string
search : method searches a string for a specified value and returns the position of the match
note : indexOf() = search()
replace : method replaces a specified value with another value in a string
concat : joins two or more strings
trim : removes whitespace from both sides of a string
charAt(position) : that showing position of character.
charCodeAt : ans in binori
split : split means remove , extra spaces |.

String Parts:
slice(start, end) :
substring(start, end) :
substr(start, length) :


// Number Methods :
toString : number as a string
toExponential : number rounded and written using exponential notation
toFixed : number written with a specified number of decimals in short round figur
toPrecision : number written with a specified length
valueOf : number as a number

Variables to Numbers :
Number() :	Returns a number, converted from its argument.
parseFloat() :	Parses its argument and returns a floating point number
parseInt() :  Parses its argument and returns an integer

Number Properties:
MAX_VALUE :	Returns the largest number possible in JavaScript
MIN_VALUE :	Returns the smallest number possible in JavaScript
POSITIVE_INFINITY :	Represents infinity (returned on overflow)
NEGATIVE_INFINITY :	Represents negative infinity (returned on overflow)
NaN :	Represents a "Not-a-Number" value


// 

1 JS Tutorial
2 JS Functions
3 JS HTML DOM

LOOPS: 
for : for incric value
for in : for objct
for of : for array
while :
do while