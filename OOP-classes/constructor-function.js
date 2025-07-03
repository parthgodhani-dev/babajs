// ####### Object literal : An easy and quick way to create a single object.
// const user = {
//     name : "Parth",
//     logedin : true,
//     logincount : 12,
//     greet : function(){
//         // console.log(`hello mr.${name}`); // note working
//         // console.log(`hello mr.${this.name}`); // it working after using "this" bcos it's inside the funcation
//         console.log(this);
//     }
// }

// console.log(user.name);
// console.log(user.greet());






// ####### Constructor function : A function used to create multiple objects with the same structure.
function student(rollnumber, name, age, sex) {
    this.rollnumber = rollnumber;
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.greet = function(){
        console.log(`hello, ${this.name}`);
    }
}

const student1 = new student(21, "Parth", 30, "Male")
const student2 = new student(20, "Riddhi", 29, "Female")

// console.log(student1);
// console.log(student2);
// console.log(student1.greet());
// console.log(student2.greet());
// console.log(student1.constructor);

// instanceof 

// console.log(student1 instanceof student);
// console.log(student2 instanceof student);
// console.log(student1 === student2);
