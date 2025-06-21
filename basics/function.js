"use strict";
// ############ direct function
// function User() {
//     console.log("Baba");
// }
// User();

// ############ veriable function
// const iamUser = function() {
//     console.log("Baba");
// }
// iamUser();


// ############ Arrow function
// const theUser = () => {
//     console.log("Baba");
// }
// theUser();


function addNumbers(Num1, Num2, Num3 = 6) {

    // const result = Num1 + Num2
    // console.log("Baba");
    // return result

    // -------------------------or

    return Num1 + Num2 - Num3

}

// addNumbers(82 , 18) // Real

// const result1 = addNumbers(5 , 4);
// const result2 = addNumbers(2 , 6);
// const result3 = addNumbers(6 , 4, 10);
// console.log("Result :", result1);
// console.log("Result :", result2);
// console.log("Result :", result3);


// function successMsg(userName = "Stranger") {

//     // if (userName === undefined) {
//     if (!userName) {
//         console.log("please fill the name");
//         return
//     }
//     return `Mr.${userName}, you are loggdin successfully !!!`
// }

// successMsg("Baba"); //result not comming

// console.log(successMsg("Baba"));




// function productItems(...Productn) {
//     return Productn
// }
// console.log(productItems(2000, 800, 6000, 400));


// objects
const userObj = {
    Name : "Baba",
    Ids : "1je3n9"
}

function handelObj(anybody) {
    return `Hello Mr.${anybody.Name}, your id is ${anybody.Id}`
}

// const info = handelObj(userObj)
// --------------- or

const info = handelObj({
    Name : "Parth Godhani",
    Id : "7bk9y8"
})
// console.log(info);

// array

let myProducitems = [2000, 800, 6000, 400];

function giveThirdproduct(getPrice) {
    return getPrice[2]
}

// console.log(giveThirdproduct(myProducitems));
// --------------- or
// console.log(giveThirdproduct([2000, 800, 6000, 400]));


// code with harry
// function vakhan(name) {
//     console.log(`Hello Mr.${name}`);
//     console.log(`${name} bhai namchin manas 6e.`);
//     console.log(`${name} na papa army ma 6e.`);
//     console.log(`${name} bhai ni bahen nu nam jenny 6e`);
//     console.log(`kem ke ${name} ek nakli nam 6e.`);
// }

// vakhan("bhadvesh");





