// const userDetails = {
//     name : "Baba",
//     email : "baba@gmail.com",
//     website : "Brand Man",
//     message : function () {
//         console.log(`Hello Mr.${this.name} we are sent OTP on ${this.email}`);
//         // console.log("test 1 :", this);
        
//     }
// }

// userDetails.message();
// userDetails.name = "Parth godhnai"
// userDetails.email = "parthgodhnai@gmail.com"
// userDetails.message();
// console.log("test 2 :",this);


// function test() {
//     let name = "baba"
//     console.log(this.name);
// }
// test();

// const check = function() {
//     let name = "baba"
//     console.log(this.name);
// }
// check();


// const check = () => {
//     let name = "baba"
//     console.log(this.name);
// }
// check();


//  ========================================== => arrow function 
// const userNum = (num1 , num2) => {
//     return num1 * num2
// }
// console.log(userNum(2, 8));

// ============================== implicit return
// const userNum = (num1 , num2) => num1 * num2
// console.log(userNum(2, 8));

// const userNum = (num1 , num2) => (num1 * num2)
// console.log(userNum(2, 8));

// but how to use with object
// const userName = () => ({name:"Baba"})
// console.log(userName());




// ===================================== IIFE

// normal function
function test() {
    console.log("hello world!");
}
test();

// in IIFE way

(function test() {
    console.log("hello world!");
})();

((uName) => {
    console.log(`hello Mr.${uName}`);
})("Baba");


// #1 Positive or Negative
const num = -88;
num > 0 ? console.log(`✅ Positive`) : console.log(`❌ Negative`);


// #2 Even or Odd
const num1 = 88;
let result = num1 % 2
result === 0 ? console.log(`even`) : console.log(`Odd`);

// #3 User Login Status
const isLoggedIn = true;
isLoggedIn === true ? console.log("Welcome back!") : console.log("Please log in");


// #4 Driving Eligibility
const Eligibility = 18;
Eligibility  >= 18 ? console.log("You can drive") : console.log("You cannot drive");

// #5 Max of Two Numbers
let a = 5;
let b = 5;

a > b ? console.log("First is greater") : a < b ? console.log("Second is greater") : console.log("Both are equal");