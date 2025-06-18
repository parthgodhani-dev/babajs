"use strict";


// const valueNum = 1000
// console.log(valueNum);

// const balenceNum = new Number(5000);
// console.log(balenceNum)
// console.log(balenceNum.toString())
// console.log(balenceNum.toString().split("-"));
// console.log(typeof balenceNum);


// let myNum = 100000
// console.log(myNum.toLocaleString('en-IN'));


// math in js ++++++++++++++++++++++++++++++++++++

// console.log(Math.abs(-5.34342787));
// console.log(Math.round(5.34342787));
// console.log(Math.ceil(5.2));
// console.log(Math.floor(5.9));
// console.log(Math.min(5, 3, 7, 2, 9));
// console.log(Math.max(5, 3, 7, 2, 9));

// console.log(Math.random());
// console.log(Math.random() * 20 + 1);
// console.log(Math.floor(Math.random() * 20 + 1));

// const min = 15
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) + min))




/*
| **Method**             | **Description**                                  | **Example**                                                  |
| ---------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| `Number.isInteger(x)`  | Checks if a value is an integer.                 | `console.log(Number.isInteger(5.0)); // true`                |
| `Number.isNaN(x)`      | Checks if value is `NaN` (Not a Number).         | `console.log(Number.isNaN(NaN)); // true`                    |
| `Number.parseInt(x)`   | Converts string to integer.                      | `console.log(Number.parseInt("42px")); // 42`                |
| `Number.parseFloat(x)` | Converts string to float.                        | `console.log(Number.parseFloat("3.14kg")); // 3.14`          |
| `toFixed(n)`           | Rounds number to `n` decimals (returns string).  | `let n = 2.4567; console.log(n.toFixed(2)); // "2.46"`       |
| `toPrecision(n)`       | Formats number with total `n` digits.            | `let x = 123.456; console.log(x.toPrecision(4)); // "123.5"` |
| `toString(radix)`      | Converts number to string in given base (radix). | `console.log((255).toString(16)); // "ff"`                   |
| `Number.isFinite(x)`   | Checks if value is a finite number.              | `console.log(Number.isFinite(100)); // true`                 |
| `Math.round(x)`        | Rounds to nearest integer.                       | `console.log(Math.round(2.6)); // 3`                         |
| `Math.floor(x)`        | Rounds down.                                     | `console.log(Math.floor(2.9)); // 2`                         |
| `Math.ceil(x)`         | Rounds up.                                       | `console.log(Math.ceil(2.1)); // 3`                          |
| `Math.trunc(x)`        | Removes decimal part.                            | `console.log(Math.trunc(5.87)); // 5`                        |
| `Math.abs(x)`          | Absolute value (positive).                       | `console.log(Math.abs(-9)); // 9`                            |
| `Math.max(...nums)`    | Returns the highest number.                      | `console.log(Math.max(1, 5, 3)); // 5`                       |
| `Math.min(...nums)`    | Returns the lowest number.                       | `console.log(Math.min(1, 5, 3)); // 1`                       |
| `Math.pow(x, y)`       | Returns `x` to the power of `y`.                 | `console.log(Math.pow(2, 3)); // 8`                          |
| `Math.sqrt(x)`         | Returns square root.                             | `console.log(Math.sqrt(16)); // 4`                           |
| `Math.random()`        | Random number between 0 and 1.                   | `console.log(Math.random()); // 0.123...`                    |
*/