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


