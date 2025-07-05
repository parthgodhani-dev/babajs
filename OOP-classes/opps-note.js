/** 
What is Object-Oriented Programming (OOP)?

OOP is a programming style where you create objects to represent real-world things. These objects contain:
Properties (data/variables)
Methods (functions that act on the data)


Why Use OOP?

--To write reusable code
--To organize code better
--To handle complex programs easily
--To model real-world systems



Key Concepts in JavaScript OOP
1. object
2. Constructor Function
3. Classes (ES6+)
4. Inheritance : (विरासत / उत्तराधिकार):  जैसे बच्चा अपने माता-पिता की कुछ आदतें और गुण लेता है, वैसे ही एक क्लास दूसरी क्लास से कोड ले सकती है।
5. Encapsulation : Encapsulation का मतलब है कि डेटा (data) और उससे जुड़ी फंक्शनैलिटी (functionality) को एक साथ बाँध देना, और बाहर से direct access को रोकना। इससे डेटा सुरक्षित रहता है और उसे कंट्रोल किया जा सकता है।
6. Abstraction : Abstraction का मतलब है केवल ज़रूरी जानकारी दिखाना और अंदर की जटिलता (complexity) छुपाना। जैसे आप कार चलाते समय सिर्फ स्टीयरिंग, ब्रेक और एक्सीलेटर देखते हैं — इंजन कैसे चलता है ये नहीं देखते।
7. Polymorphism : Polymorphism का मतलब है एक ही नाम के function का अलग-अलग तरीकों से काम करना। जैसे "speak()" method अलग-अलग animals में अलग-अलग आवाज़ निकालता है।

**/


// 1. Object : An object is a collection of key-value pairs.
let person = {
    name: "Parth",
    age: 25,
    greet: function() {
        console.log("Hello, I am " + this.name);
    }
};

person.greet(); // Output: Hello, I am Parth



// 2. Constructor Function : Used to create multiple objects with the same structure.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hi, I am ${this.name}`);
    }
}

const p1 = new Person("Parth", 25);
const p2 = new Person("Riddhi", 22);

p1.greet(); // Hi, I am Parth
p2.greet(); // Hi, I am Riddhi


// 3. Classes (ES6+) : A cleaner way to write constructor functions.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

const user1 = new Person("Pooja", 23);
user1.greet(); // Hi, my name is Pooja



// 4. Inheritance : One class can extend another class to inherit its properties and methods.
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog("Tommy");
dog.speak(); // Tommy barks.


// 5. Encapsulation :  Hiding internal details (private variables) and showing only what's necessary.
// JavaScript doesn’t have full private fields like some languages, but you can use # or closures.

class BankAccount {
    #balance = 0;

    deposit(amount) {
        if (amount > 0) this.#balance += amount;
    }

    getBalance() {
        return this.#balance;
    }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.getBalance()); // 100



// 6. Abstraction : Abstraction means hiding complex internal logic and exposing only necessary parts to the user.
class Car {
    startEngine() {
        this.#checkFuel();
        console.log("Engine started");
    }

    // private method
    #checkFuel() {
        console.log("Fuel level checked");
    }
}

const myCar = new Car();
myCar.startEngine(); // ✅ Works
// myCar.#checkFuel(); ❌ Error: private method

// User only sees `startEngine`, not how it works internally




// 4. Polymorphism : Polymorphism means same method name, but different behaviors in different classes.
class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat meows");
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());

