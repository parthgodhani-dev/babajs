// prop means property -  static property

class user {
    static work = "inIT"
    constructor(username) {
        this.username = username
    }
    static sayHello() {
        console.log("Hello from the Person class!");
    }
    greet() {
        console.log(`Hi, I'm ${this.username}`);
    }
}

const test1 = new user("Parth")

test1.greet()
// test1.sayHello() // don't have aothority 
user.sayHello()
console.log(user.work);