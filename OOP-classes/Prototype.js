// function myMath(num) {
//     return num * 5
// }
// myMath.lol = "lol"
// console.log(myMath(5));
// console.log(typeof myMath.lol);
// console.log(myMath);








// constructer function
function createProd(product, price) {
    this.product = product
    this.price = price
}

createProd.prototype.bhavvadharo = function(){
    this.price = this.price + 10
}

createProd.prototype.printMe = function(){
    console.log(`I"am ${this.product}`);
}

const prod1 = new createProd("product1", 20)
const prod2 = new createProd("product2", 40)

prod1.bhavvadharo()
prod1.printMe()

console.log(prod1);
console.log(prod2);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: it's the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// string
let user1 = "BABA      "
let user2 = "Parth      "

// actule way but apply every time
// console.log(user1.trim().length);
// console.log(user2.trim().length);

// how to run this using prototype but i want to apply all string
console.log(user1.truelength);

// how to create new method using prototype
String.prototype.truelength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`); 
}
user1.truelength();
user2.truelength();

"justtest".truelength()



// array
let hero = ["ironman", "batman"];

// object
let heroPower = {
    ironman: "AIrobotics",
    batman: "gadgets"
}

Object.prototype.baba = function(){
    console.log(`hey, baba what's going on ?`);
}

Array.prototype.heybab = function() {
    console.log(`let's check array hero is handel it or not ?`);
    
}

// heroPower.baba();
// hero.baba();
// hero.heybab() // arry is handal prototype
// heroPower.heybab() // but object is not handel array prototype

/*
function------>\
array------------>object----------->null
object-------->/
*/



// old dev useing it

const User = {
    name: "chai",
    email: "chai@google.com"
};

const Teacher = {
    makeVideo: true,
    give : "fuck"
};

const TeachingSupport = {
    isAvailable: false
};

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
};

// Setting prototype of Teacher to User
Teacher.__proto__ = User;

// console.log(Teacher.name);      // chai
// console.log(Teacher.email);     // chai@google.com
// console.log(Teacher.makeVideo); // true

// console.log(TASupport.isAvailable); // false


// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);
// console.log(TASupport.give)