"use strict";

// inside the for loop
// let myArray = ["A","B","C","D","E",]
// let i = 0; 
// i < myArray.length; 
// i++
// console.log(myArray);

// Loops #1 for

// for (let i = 1; i <= 5; i++) {
//     const element = i;
//     console.log(i);
// }


// for (let i = 1; i <= 5; i++) {
//     console.log(`outer loop for i : `, i);
//     for (let j = 1; j <= 5; j++) {
//         console.log(`inner loop for j :  ${j}, and outer loop for i : ${i}`);
//     }
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(`${i} is my favorite number`);
//     }
// }

// for (let i = 1; i <= 20; i++) {
//     console.log(`here is the table of ${i}`);
    
//     for (let j = 1; j <= 10; j++) {
//         console.log(i + " X " + j + " = " + i*j);
//     }
// }


// even number
// let count = 0;

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//         count++;
//     }
// }

// console.log(`Total even numbers (excluding those ending with 0): ${count}`);

// let storeArry = [];

// for (let i = 0; i <= 50; i++) {
//     if (i % 2 === 0) {
//         console.log(`${i} is even`);
//         storeArry.push(i);
//     }
// }

// console.log(storeArry.length);



// let myColor = ["pink","black","orange","green","blue","yellow","gray"];

// for (let index = 0; index < myColor.length; index++) {
//     const listing = myColor[index];
//     console.log(Array.from(listing));
// }


// how to use "break" in loop
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`it's 5 so here is the break`);
//         break;
//     }
//     console.log(i);
// }

// how to use "continue" in loop
// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         console.log(`it's 5 so here is the gap`);
//         continue;
//     }
//     console.log(i);
// }



// ====================================== while loop

// let index = 0
// while (index <= 10) {
//     console.log(`the value of ${index}`);
//     index = index + 2
// }

// let color = ["pink", "black", "green", "yellow", "blue"]
// let myArray = 0;
// while (myArray < color.length) {
//     console.log(`${color[myArray]}`);
//     myArray++
// }
// console.log(myArray);

// let index = 200;
// let count = 0;

// while (index >= 0) {
//     if (index % 5 === 0) {
//         console.log(`${index} devide by 5`);
//         count++
//     }
//     index--
// }


// let index = 0;

// while (index <= 20) {
//     if (index % 2 !== 0) {
//         console.log(index);
//     }
//     index--
// }

// ====================================== do...while loop

// let myNum = 30;

// do {
//     if (myNum % 2 !== 0) {
//         console.log(myNum);
//     }
//     myNum++;
// } while (myNum <= 50);


// ====================================== for...of loop


// let myYears = [1994, 2001, 2012, 2018, 2020, 2024]
// for (const year of myYears) {
//     console.log(year);
// }

// #1 Print each character in a string except spaces
// let myName = "New York"
// for (const name of myName) {
//     if (name === " ") {
//     // break;
//     continue;
//     }
//     console.log(`My Name letters : ${name}`);
// }

// #2 Count how many vowels are in the name
// let name = "Parth Godhani";
// let count = 0;
// for (const ch of name.toLowerCase()) {   
//     if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
//         console.log(ch);
//         count++
//     }
// }
// console.log("Vowel Count:", count);

// #3 Combine letters into a new string without spaces
// let fullName = "Parth Godhani";
// let result = "";

// for (const char of fullName) {
//     if (char === " ") {
//         continue;
//     }
//     result += char
// }
// console.log("Cleaned Name:", result); 


// #4 Loop through an array and print each element
// const fruits = ["Mango", "Banana", "Apple"];

// for (const fruit of fruits) {
//     console.log(`Fruit: ${fruit}`);
// }


//  ====================================== for in loop

// let myObj = {
//     INR : "Indian Rupee",
//     USD : "US Dollar",
//     EUR : "Euro",
//     CAD : "Canadian Dollar"
// }

// for (const x in myObj) {
//     console.log(`${x} here is the fullform ${myObj[x]}`);
// }

// const fruits = ["Mango", "Banana", "Apple"];

// for (const key in fruits) {
//     console.log(`Majdur ${key} : ${fruits[key]}`);
    
// }


//  ====================================== for each

// let velue = [1, 2, 3, 4, 5];
// velue.forEach( (items) => {
//     console.log(items + 6);
// } );

// function Printme(items) {
//     console.log(items);
// }
// velue.forEach(Printme)

// velue.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// });


// let myobj = [
//     {Id : 1, Name : "BABA", Age : 30},
//     {Id : 2, Name : "Riddhi", Age : 29},
//     {Id : 3, Name : "Pooja", Age : 24},
//     {Id : 4, Name : "komal", Age : 21},
//     {Id : 5, Name : "nidhi", Age : 26},
//     {Id : 6, Name : "jalpa", Age : 31}
// ];

// myobj.forEach((user) => {
//     if (user.Age >= 25) {
//         console.log(user.Name);
//     } 
// });