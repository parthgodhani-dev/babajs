"use strict";

// old way
// let userName = "BABA"
// console.log(userName);

// new way (for know prototype)
// const userName = new String("Godhani")
// console.log(userName);

// concat
// const userName = "BABA"
// const realName = "Godhani, Parth Godhani"
// console.log(userName + realName);
// console.log(`
//     Hello my name is ${realName}, but you can call me ${userName}
//     `);


// prototype
// let conCode = "Baba Godhani" 
// let UserNum = "Godhani"

// console.log(conCode.includes(UserNum));



// console.log(userName.__proto__);
let text = "Godhani123";
const result = text.matchAll(/\d/g);
console.log([...result]); // ✅ [ '1', '2', '3' ]


/*

| Method                | Description                                                 | Example Code                           | Output / Notes     |
| --------------------- | ----------------------------------------------------------- | -------------------------------------- | ------------------ |
| `charAt(index)`       | Returns the character at the specified index                | `"Hello".charAt(1)`                    | `'e'`              |
| `charCodeAt(index)`   | Returns the Unicode of the character at the specified index | `"ABC".charCodeAt(0)`                  | `65`               |
| `concat(str)`         | Joins two or more strings                                   | `"Hello".concat(" World")`             | `'Hello World'`    |
| `includes(substr)`    | Checks if string contains the specified substring           | `"ReactJS".includes("JS")`             | `true`             |
| `indexOf(substr)`     | Returns the index of first match                            | `"banana".indexOf("a")`                | `1`                |
| `lastIndexOf(substr)` | Returns the last match index                                | `"banana".lastIndexOf("a")`            | `5`                |
| `startsWith(prefix)`  | Checks if string starts with given prefix                   | `"frontend".startsWith("front")`       | `true`             |
| `endsWith(suffix)`    | Checks if string ends with given suffix                     | `"script".endsWith("pt")`              | `true`             |
| `padStart(len, ch)`   | Pads the string from the start                              | `"5".padStart(3, "0")`                 | `'005'`            |
| `padEnd(len, ch)`     | Pads the string from the end                                | `"5".padEnd(3, "0")`                   | `'500'`            |
| `repeat(n)`           | Returns a new string with copies                            | `"ha".repeat(3)`                       | `'hahaha'`         |
| `replace(a, b)`       | Replaces first match with value                             | `"foo bar".replace("foo", "baz")`      | `'baz bar'`        |
| `replaceAll(a, b)`    | Replaces all matches                                        | `"a,a,a".replaceAll("a", "b")`         | `'b,b,b'`          |
| `slice(start, end)`   | Extracts part of a string                                   | `"frontend".slice(0, 5)`               | `'front'`          |
| `split(sep)`          | Splits the string into array                                | `"a,b,c".split(",")`                   | `['a','b','c']`    |
| `toLowerCase()`       | Converts to lowercase                                       | `"React".toLowerCase()`                | `'react'`          |
| `toUpperCase()`       | Converts to uppercase                                       | `"React".toUpperCase()`                | `'REACT'`          |
| `trim()`              | Removes whitespace from both ends                           | `"  trim  ".trim()`                    | `'trim'`           |
| `trimStart()`         | Removes leading whitespace                                  | `"  trim".trimStart()`                 | `'trim'`           |
| `trimEnd()`           | Removes trailing whitespace                                 | `"trim  ".trimEnd()`                   | `'trim'`           |
| `match(regex)`        | Returns result of matching regex                            | `"abc123".match(/\d+/)`                | `['123']`          |
| `matchAll(regex)`     | Returns iterator for all regex matches                      | `Array.from("abc123".matchAll(/\d/g))` | `['1','2','3']`    |
| `localeCompare(str)`  | Compares strings (locale-aware)                             | `"a".localeCompare("b")`               | `-1` (`a < b`)     |
| `normalize()`         | Unicode normalization                                       | `"e\u0301".normalize()`                | `'é'` (normalized) |

*/