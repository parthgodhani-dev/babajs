"use strict";

// const myArr = ["Mango", "Grapes", "Kiwi", "Papaya", "Peach"];
// const myFev = new Array();
// const myfevFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Peach");

// console.log(myArr);
// console.log(myFev);
// console.log("list of fruits : " + myfevFruts);




// const myFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Peach");
// console.log(myFruts.push("Apple", "banana"));
// console.log(myFruts)
// console.log(myFruts.pop()); // remove last
// console.log(myFruts)
// console.log(myFruts.shift()); // remove first
// console.log(myFruts)
// console.log(myFruts.unshift()); // Add item(s) to start
// console.log(myFruts)



// const myFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Orange");
// const myColor = new Array("Rad", "Black", "Pink", "Blue", "Orange");
// const myNum = new Array(0,1,2,3,4,5);

// myFruts.push(myColor)
// console.log(myFruts[5][2]);

// let myList = myFruts.concat(myColor, myNum)
// console.log(myList);

// let myList = [...myFruts, ...myColor]
// console.log(myList);


// let myAll =[...myFruts, ...myColor].join(",") // Spread Operator for join
// console.log(myAll);



// const myFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Orange");
// const myNum = new Array(0,1,2,3,4,5);
// console.log(myFruts.slice(1,4));
// console.log(myNum.slice(1,4));

// const myNum = new Array(0,1,2,3,4,5);
// console.log(myNum);
// console.log("a " + myNum.splice(1,4));
// console.log(myNum);
// console.log("b " + myNum.splice(1,4,8));
// console.log(myNum);


// const myFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Orange");

// console.log(myFruts.sort());


// let myFevnum = [0,1,2,[3,4,5],6,[7,8,[9,6,3]]]
// console.log(myFevnum.flat(1));

// check array

// const myName = new Array("Parth")
// const myName = "Parth"
// console.log(Array.from(myName));

// let a = "baba"
// let b = "babu"
// let c = "parth"

// const myNick = (Array.of(a,b,c));

// console.log(Array.isArray(myNick));



// from harry

// const myFruts = new Array("Mango", "Grapes", "Kiwi", "Papaya", "Orange");
// console.log(myFruts); 
// delete myFruts["Grapes"]
// console.log(myFruts); 

// let comper = (a,b) => {
//     return b - a
// }

// const numList = [23,435,787,99,434,2,56,7]

// console.log(numList.sort(comper));







"use strict";

// Destructuring
// let a, b, rest;
// [a, b] = [10, 20]

// console.log(a);
// console.log(b);

// [a, b, ...rest] = [10, 20, 30, 40, 50, 60]

// console.log(rest);
// let f = 60;

// Handling API Data (Array)

// const  userName = ["ravi", "pooja", "karan", "sunny", "july"];
// const [name1, name2, ...other] = userName

// console.log(name1);
// console.log(name2);
// console.log(other);



// Swapping Variables
// let a = 10, b = 20;
// let x, y;
// [x, y] = [a, b]; // right hand side is main in js 

// console.log(x);
// console.log(y);


// Object Destructuring
// const user = { name: "Parth", age: 21, country: "India" };
// const { name, country } = user;

// console.log(name);    // Parth
// console.log(country); // India



// Function Return Values
// function colors(){
//     return ["pink" , "hotpink"]
// }

// const [color1, color2] = colors()

// console.log(color1);
// console.log(color2);


// task GPT
// const playerScores = ["Ravi", 99, "Pooja", 89, "Karan", 78];
// const [player1, scores1, player2, scores2, ...other] = playerScores;

// console.log(player1, "scored", scores1);
// console.log(player2, "scored", scores2);
// console.log("Remaining", other);



/*

| **Method**       | **Purpose**                      | **Example**                                                                 |
| ---------------- | -------------------------------- | --------------------------------------------------------------------------- |
| `push()`         | Add item(s) to end               | `let arr = [1, 2]; arr.push(3); console.log(arr); // [1,2,3]`               |
| `pop()`          | Remove last item                 | `let arr = [1, 2, 3]; arr.pop(); console.log(arr); // [1,2]`                |
| `shift()`        | Remove first item                | `let arr = [1, 2, 3]; arr.shift(); console.log(arr); // [2,3]`              |
| `unshift()`      | Add item(s) to start             | `let arr = [2, 3]; arr.unshift(1); console.log(arr); // [1,2,3]`            |
| `concat()`       | Merge arrays                     | `let a = [1]; let b = [2]; console.log(a.concat(b)); // [1,2]`              |
| `join()`         | Join to string                   | `let arr = [1, 2, 3]; console.log(arr.join("-")); // "1-2-3"`               |
| `slice()`        | Copy portion                     | `let arr = [1, 2, 3, 4]; console.log(arr.slice(1, 3)); // [2,3]`            |
| `splice()`       | Remove/replace/add               | `let arr = [1, 2, 3]; arr.splice(1, 1, 9); console.log(arr); // [1,9,3]`    |
| `indexOf()`      | Find index                       | `let arr = [1, 2, 3]; console.log(arr.indexOf(2)); // 1`                    |
| `includes()`     | Check if exists                  | `let arr = [1, 2, 3]; console.log(arr.includes(2)); // true`                |
| `reverse()`      | Reverse array                    | `let arr = [1, 2, 3]; arr.reverse(); console.log(arr); // [3,2,1]`          |
| `sort()`         | Sort array                       | `let arr = [3, 1, 2]; arr.sort(); console.log(arr); // [1,2,3]`             |
| `forEach()`      | Loop through                     | `[1, 2, 3].forEach(x => console.log(x * 2));`                               |
| `map()`          | Return new array                 | `let a = [1, 2]; let b = a.map(x => x * 2); console.log(b); // [2,4]`       |
| `filter()`       | Filter items                     | `let a = [1, 2, 3]; let b = a.filter(x => x > 1); console.log(b); // [2,3]` |
| `reduce()`       | Accumulate value                 | `let a = [1, 2, 3]; let sum = a.reduce((a,b) => a + b); console.log(sum);`  |
| `find()`         | Find first match                 | `let a = [1, 2, 3]; console.log(a.find(x => x > 1)); // 2`                  |
| `findIndex()`    | Index of first match             | `let a = [1, 2, 3]; console.log(a.findIndex(x => x > 1)); // 1`             |
| `every()`        | All must pass test               | `let a = [2, 4]; console.log(a.every(x => x % 2 == 0)); // true`            |
| `some()`         | Any must pass test               | `let a = [1, 2]; console.log(a.some(x => x % 2 == 0)); // true`             |
| `flat()`         | Flatten nested arrays            | `let a = [1, [2, [3]]]; console.log(a.flat(2)); // [1,2,3]`                 |
| `fill()`         | Fill with static value           | `let a = [1,2,3]; a.fill(0); console.log(a); // [0,0,0]`                    |
| `at()`           | Get value by index               | `let a = [1,2,3]; console.log(a.at(-1)); // 3`                              |
| `toReversed()` ✅ | Non-destructive reverse (ES2023) | `let a = [1,2,3]; let b = a.toReversed(); console.log(b); // [3,2,1]`       |
| `toSorted()` ✅   | Non-destructive sort (ES2023)    | `let a = [3,1,2]; let b = a.toSorted(); console.log(b); // [1,2,3]`         |


*/