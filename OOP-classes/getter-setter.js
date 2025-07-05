// class BankAccount {
//     constructor(owner, initialBalance){
//         this.owner = owner
//         this._Balance = initialBalance
//     }

//     get Balance(){
//         return `₹${this._Balance}` 
//     }

//     set Balance(amount){
//         if (amount < 0) {
//             console.log("❌ Balance cannot be negative.");
//         } else {
//             this._Balance = amount
//             console.log(`✅ Balance updated to ₹${amount}`);
//         }
//     }


// }

// const account  = new BankAccount("BABA", "2000")

// account.Balance = 4000000
// account.Balance = -800

// console.log(account.Balance);


// let user = {
//     firstName: "Parth",
//     lastName: "Godhani",


//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     },

//     set fullName(name){
//         let parts = name.split(",")
//         this.firstName = parts[0];
//         this.lastName = parts[1];
        
        
//     }

// };

// console.log(user.fullName);
// console.log(user.fullName); 

// user.fullName = "Riddhi Faldu";

// console.log(user.firstName);
// console.log(user.lastName);




// class Student {
//     constructor(name, marks){
//         this.name = name
//         this._marks = marks
//     }

//     get grade(){
//         if (this._marks >= 90) {
//             return "A+"
//         } else if (this._marks >= 75) {
//             return "A"
//         } else if (this._marks >= 60) {
//             return "B"
//         } else if (this._marks >= 40) {
//             return "c"
//         } else {
//             return "FAIL"
//         }
//     }

//     set marks(value){
//         if (value < 100 || value > 0) {
//             console.log("❌ Marks must be between 0 and 100.");
//         } else {
//             this._marks = value;
//             console.log(`✅ Marks updated to ${value}`);
//         }
//     }

//     get marks(){
//         this._marks = marks
//     }

// }

// const student1 = new Student("Baba", 65)

// student1._marks = 95
// console.log(student1.grade);





class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this._baseSalary = baseSalary;
        this._bonus = 0;
    }

    get totalSalary() {
        let tax = this._baseSalary > 50000
            ? this._baseSalary * 0.10
            : this._baseSalary * 0.05;

        return this._baseSalary + this._bonus - tax;
    }

    set bonus(value) {
        if (value < 0) {
            console.log("❌ Bonus cannot be negative.");
        } else if (value > this._baseSalary * 0.5) {
            console.log("❌ Bonus cannot exceed 50% of base salary.");
        } else {
            this._bonus = value;
            console.log(`✅ Bonus set to ₹${value}`);
        }
    }

    get baseSalary() {
        return this._baseSalary;
    }

    get bonus() {
        return this._bonus;
    }
}



const emp = new Employee("Parth", 60000);

emp.bonus = 4000;
console.log(emp.totalSalary);

emp.bonus = 40000;
console.log(emp.totalSalary);