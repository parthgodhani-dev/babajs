"use strict";

// ====================================== map

// let velue = [1, 2, 3, 4, 5];
// let newvelue = velue;

// newvelue = newvelue.map((val, i) => i + " :- " + val);
// console.log(newvelue);
   
// let myobj = [
//     {Id : 1, Name : "BABA", Age : 30},
//     {Id : 2, Name : "Riddhi", Age : 29},
//     {Id : 3, Name : "Pooja", Age : 28},
//     {Id : 4, Name : "komal", Age : 29},
// ];

// let newArray = myobj.map((nameValue)  => {
//       return nameValue;
//     }
// );
// console.log(newArray[2].Age);

// let myobj = new Map();
// myobj.set("INR", "Indian Rupee")
// myobj.set("USD", "US Dollar")
// myobj.set("EUR", "Euro")
// myobj.set("CAD", "Canadian Dollar")
// for (const [key, value] of myobj) {
//     console.log(value);
    
// }



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

// ---------------- othe way
// let result = myobj
//     .filter(user => user.Age > 25)
//     .map(user => user.Name);

// console.log(result);



// ============================================== Map mathod

// let myArr = [1,2,3,4,5,6,7,8,9,10]

// let myNum = myArr.map((num) => (num + 100))
// console.log(myNum);

// ---------------- map chaing
// let myNum = myArr
//             .map((num) => (num + 10))
//             .map((num) => (num + 90))
//             .map((num) => (num * 100))
// console.log(myNum);




// ============================================== filter mathod

// let myProduct = [
//     {SKU : "prod-0", price : 210, status : "cart"},
//     {SKU : "prod-1", price : 120, status : "cart"},
//     {SKU : "prod-2", price : 250, status : "wishlist"},
//     {SKU : "prod-3", price : 100, status : "cart"},
//     {SKU : "prod-4", price : 450, status : "cart"},
//     {SKU : "prod-5", price : 300, status : "cart"},
//     {SKU : "prod-6", price : 420, status : "wishlist"},
//     {SKU : "prod-7", price : 260, status : "cart"},
//     {SKU : "prod-8", price : 390, status : "cart"},
//     {SKU : "prod-9", price : 500, status : "wishlist"}
// ]

// let lowestPrice = myProduct.filter((item)=>(item.price <= 300))
// console.log(lowestPrice);

// let myWishlist = myProduct.filter((item) => (item.status === "wishlist"))
// console.log(myWishlist);

// let myCart = myProduct.filter((item) => (item.status === "cart"))
// console.log(myCart);


// ============================================== reduce mathod

// let myArr = [1,2,3,4,5,6,7,8,9,10]

// let myTotal = myArr.reduce( (acc, item) => (acc + item), 0)

// -------------------or
// let myTotal = myArr.reduce(function (acc, item) {
//     return acc + item
// }, 0)


// console.log(myTotal);


// how to use filter and reduce in cart system

// let myProduct = [
//     {SKU : "prod-0", price : 210, status : "cart"},
//     {SKU : "prod-1", price : 120, status : "cart"},
//     {SKU : "prod-2", price : 250, status : "wishlist"},
//     {SKU : "prod-3", price : 100, status : "cart"},
//     {SKU : "prod-4", price : 450, status : "cart"},
//     {SKU : "prod-5", price : 300, status : "cart"},
//     {SKU : "prod-6", price : 420, status : "wishlist"},
//     {SKU : "prod-7", price : 260, status : "cart"},
//     {SKU : "prod-8", price : 390, status : "cart"},
//     {SKU : "prod-9", price : 500, status : "wishlist"}
// ]

// let myWishlist = myProduct.filter((item) => (item.status === "wishlist"))
// console.log(myWishlist);

// let myCart = myProduct.filter((item) => (item.status === "cart"))
// console.log(myCart);

// let chackOut = myCart.reduce((acc , product) => (acc + product.price), 0)
// console.log(chackOut);

// let chackOut = myProduct.reduce((acc , product) => (acc + product.price), 0)
// console.log(chackOut);