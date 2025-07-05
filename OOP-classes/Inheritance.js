// Inheritance = उत्तराधिकार या विरासत के रूप में प्राप्‍त धन-संपत्ति

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
  
  let dog = new Dog();
  dog.speak(); // Dog barks
  



class users {
    constructor(username) {
        this.username = username
    }

    logmein(){
        console.log(`my name is ${this.username}`);
        
    }

}

class admin extends users {
    constructor(username, useremail, userpassword) {
        super(username)
        this.useremail = useremail
        this.userpassword = userpassword
    }

    AddPost(){
        console.log(`here is the list of post`);
    }
}

const user1 = new admin("baba", "baba@gmail.com", "admin@baba")
const user2 = new users("nooby")

user1.logmein()
user2.logmein()

console.log(user2 === user1);

console.log("test1 :", user1 instanceof users);
console.log("test1 :", user2 instanceof admin);

