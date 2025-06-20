// "use strict";

// SS

// const mySys = Symbol("Pro")

// const myObj = {
//     Name : "Baba",
//     Year : 1994,
//     Human : true,
//     Area : ["jam", "ambd", "brod"],
//     "Relation stetus" : "Single",
//     [mySys] : "Pro1"
// }

// console.log(myObj);
// console.log(myObj.Year);
// console.log(myObj["Year"]);
// console.log(myObj["Relation stetus"]);
// console.log(myObj["mySys"]);



// myObj.Name = "Parth Godhani";
// Object.freeze(myObj);
// myObj.Name = "Babu Done";
// console.log(myObj["Name"]);
// console.log(myObj)


// myObj.greeting = function() {
//     console.log("i want to say  hi to you");
// }

// myObj.greetingNew = function() {
//     console.log(`i want to say  hi to ${this.Name}`);
// }

// console.log(myObj.greeting());
// console.log(myObj.greetingNew());

// console.log(myObj)



// ======================================================

// const myObj = new Object(
//     {
//         user : "baba"
//     }
// )

// const myObj = {
//     id : "1a2b3c",
//     email : "baba@gmail.com",
//     name: {
//         fullName : {
//             fName : "Baba",
//             lName : "Godhani"
//         }
//     }
// }

// console.log(myObj.name?.fullName.fName);
// console.log(myObj["name"]["FullName"]["fName"]);


// const dataHub = {

// }

// dataHub.id = "1a2b3c"
// dataHub.email = "baba@gmail.com"
// dataHub.user = "Baba Godhani"

// console.log(dataHub);




// const obj1 = {1 : "A", 2 : "B"}
// const obj2 = {3 : "C", 4 : "D"}
// const obj3 = {5 : "E", 6 : "F"}

// const myObj = {obj1, obj2, obj3}
// const myObj = Object.assign({} ,obj1, obj2, obj3);
// const myObj = {...obj1, ...obj2, ...obj3}

// console.log(myObj);
// console.log(obj1);
// console.log(obj2);



// const User = [
//     {
//         1 : "A", 
//         2 : "B"
//     },
//     {
//         3 : "C", 
//         4 : "D"
//     },
//     {
//         5 : "E", 
//         6 : "F"
//     }
// ]

// console.log(User[0]);


const myObj = {
    id : "1a2b3c",
    email : "baba@gmail.com",
    isLogedin : true
}

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.hasOwn(myObj , "isLogedin"));
// console.log(Object.entries(myObj));

// ==============================================================Destructuring

const userDetails = {
    Id : "1u83y37",
    Email : "baba@gmail.com",
    Name : "Baba",
    Bike : "RE-350"
}

console.log(userDetails.Bike); 
const {Id, Email: Em} = userDetails
console.log(Id ,Em);



/*

| **Method**                        | **Use**                                             | **Example**                                                                                |
| --------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `Object.keys(obj)`                | Returns array of keys                               | `console.log(Object.keys({a:1, b:2})) // ['a', 'b']`                                       |
| `Object.values(obj)`              | Returns array of values                             | `console.log(Object.values({a:1, b:2})) // [1, 2]`                                         |
| `Object.entries(obj)`             | Returns array of \[key, value] pairs                | `console.log(Object.entries({a:1, b:2})) // [['a',1], ['b',2]]`                            |
| `Object.fromEntries()`            | Creates object from entries (reverse of `.entries`) | `console.log(Object.fromEntries([['a',1], ['b',2]])) // {a:1, b:2}`                        |
| `Object.hasOwn(obj, key)`         | Checks if key exists (modern version)               | `console.log(Object.hasOwn({x:10}, 'x')) // true`                                          |
| `Object.assign()`                 | Copies properties to a target object                | `console.log(Object.assign({}, {a:1}, {b:2})) // {a:1, b:2}`                               |
| `Object.freeze(obj)`              | Makes object immutable                              | `const obj = Object.freeze({x:1}); obj.x = 2; console.log(obj.x) // 1`                     |
| `Object.seal(obj)`                | Prevents adding/removing keys (edit still allowed)  | `const obj = Object.seal({x:1}); delete obj.x; console.log(obj) // {x:1}`                  |
| `Object.is(a, b)`                 | Compares values (like === but better for NaN)       | `console.log(Object.is(NaN, NaN)) // true`                                                 |
| `Object.getOwnPropertyNames(obj)` | Returns all own property names                      | `console.log(Object.getOwnPropertyNames({a:1})) // ['a']`                                  |
| `Object.getPrototypeOf(obj)`      | Gets prototype of object                            | `console.log(Object.getPrototypeOf({})) // [Object: null prototype]`                       |
| `Object.defineProperty()`         | Adds/modifies a property with descriptors           | `js\nlet obj = {}; Object.defineProperty(obj, "x", {value: 42}); console.log(obj.x) // 42` |


*/