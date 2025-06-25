// "use strict";

// <,>, <=, >=, ==, ===, !=, &&, ||

// let userAge = prompt("Police: Stop bike, what is your age?");
// userAge = Number(userAge);
// console.log("Age:", userAge);

// if (userAge >= 18) {
// console.log("Police: You can go.");
// } else if (userAge >= 16 && userAge < 18) {
// let lincens = prompt("Police: Do you have a learning license? true or false");
// lincens = lincens === "true";

// if (lincens) {
//     console.log("Police: You can go.");
// } else {
//     console.log("Police: Side ma avi jav.");
// }
// } else {
// console.log("Police: Side ma avi jav.");
// }

// let userAge = 13;
// if (userAge >= 18) {
//     console.log("valid");
// } else {
//     console.log("notvalid");
// }


// let userBalance = prompt("Enter your current account balance:");
// userBalance = Number(userBalance);

// let userWithdraw = prompt("Enter the amount you want to withdraw:");
// userWithdraw = Number(userWithdraw);

// if (userWithdraw <= 0) {
//     console.log("❌ Invalid withdrawal amount");
// } else if (userWithdraw > userBalance) {
//     console.log("❌ Insufficient balance");
// } else {
//     let remainingBalance = userBalance - userWithdraw;
//     console.log(`✅ Withdrawal successful. Remaining balance: ₹${remainingBalance}`);
// }



// let a = Number(prompt("Enter any number:"));

// function checkNum() {
//     if (isNaN(a)) {
//         console.log("Please, enter a valid number");
//         return;
//     }
    
//     if (a % 2 === 0) {
//         console.log("This is an even number.");
//     } else {
//         console.log("This is an odd number.");
//     }
// }

// checkNum();



// let username = prompt("Enter username:");
// let password = prompt("Enter password:");

// if (username === "admin" && password === "1234") {
//     console.log(`✅ Login successful`);
// } else {
//     console.log(`❌ Invalid credentials`);
// }



// Nullish coalescing operator (??)

// let value = 5
// let value = 10 ?? 15
// let value = null ?? 15
// let value = null ?? 20 ?? 25
// let value = undefined ?? 30
// console.log(value);
