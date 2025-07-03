"use strict";

// promise type one
const promiseOne = new Promise(function(resolve , reject) {
    setTimeout(function() {
        // console.log("Async task is complete");
        resolve();
    }, 2000)
});

promiseOne.then(function() {
    // console.log("Promise consumed");
})








// promise without variable #2
new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("#2 Async task is complete");
        resolve();
    }, 2000);
}).then(() => {
    // console.log("Promise consumed");
})








// promise #4 how to pass data you can pass array or  object in resolve
const promiseFour = new Promise(function(resolve,  reject) {
    setTimeout(() => {
        resolve({name: "Baba", age : 30, email: "baba@gmail.com"})
    }, 2000);
});

promiseFour.then(function(user) {
    // console.log(user);
})










// promise #5 with reject testing
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let Error = false;
        if (!Error) {
            resolve({ name: "Baba", age: 30, email: "baba@gmail.com" });
        } else {
            reject("Error : JS went Wrong");
        }
    }, 2000);
});

// one line way
// promiseFive
// .then((user) => {console.log(user); return user.name})
// .then((name) => console.log(name))
// .catch((err) => console.log(err))
// .finally(() => console.log("the promise either resolve or rejected"));

// promiseFive
// .then(function (user) {
//     console.log(user);
//     return user.name;
// }).then(function (name) {
//     console.log(name);
// }).catch(function (err) {
//     console.log(err);
// }).finally(function () {
//     console.log("the promise either resolve or rejected");
// });









// promise #6 check promise with async await with try anc catch
const promiseSix = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let Error = true;
        if (!Error) {
            resolve({ rollnumber : 21, studentname : "BABA", studentclass : "A", studentsex : "male" });
        } else {
            reject("Error : Something went Wrong");
        }
    }, 2000);
});

async function promiseConsume() {

    try {
        const responseCheck = await promiseSix;
        console.log(responseCheck);
    } catch (error) {
        // console.log(error);
    }

}

promiseConsume();


// main #1 real word experience using then and catch

// fetch("https://api.github.com/users/hiteshchoudhary")
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => console.log("Caught Error:", err.message))







// main #2 real word experience using async await with try anc catch
async function checkHCprofile() {
    try {
        const response = await fetch("https://api.github.com/users/hiteshchoudhary");
        const data = await response.json(); 
        console.log(data);
    } catch (error) {
        console.log("error is coming lol");
    }
}

checkHCprofile()