//❌ you can see how work old way as call with diffrent fucntion but this is old way

// function setUser(username) {
//     this.username = username
// }

// function userDetails(username, useremail, userpassword) {

//     setUser.call(this, username);

//     this.useremail = useremail
//     this.userpassword = userpassword
// }

// let test1 = new userDetails("baba", "baba@gmail.com", 123456)
// console.log(test1);

// ✅ now days you can use ES6 so that make ease using class
class setUser {
    constructor(username) {
        this.username = username
    }
}

class userDetails extends setUser {
    constructor(username, useremail, userpassword) {
        super(username)
        this.useremail = useremail
        this.userpassword = userpassword
    }
}

let test2 = new userDetails("baba", "baba@gmail.com", "123456")
console.log(test2);




//❌ let's check prototype exampal form prototype.js but it's old way same as call
// function createProd(product, price) {
//     this.product = product
//     this.price = price
// }

// createProd.prototype.bhavvadharo = function(){
//     this.price = this.price + 10
// }

// createProd.prototype.printMe = function(){
//     console.log(`I"am ${this.product}`);
// }

// const prod1 = new createProd("short-box", 20)
// const prod2 = new createProd("long-box", 40)

// prod1.bhavvadharo()
// prod1.printMe()

// console.log(prod1);
// console.log(prod2);



// ✅ now days you can use ES6 so that make ease using class
class createProduct {
    constructor(product, price) {
        this.product = product
        this.price = price
    }

    bhavvadharo(){
        this.price = this.price + 10
    }

    printMe(){
        // console.log(`I"am ${this.product}`);
    }
}

const prod3 = new createProduct("small-box", 50)
const prod4 = new createProduct("big-box", 120)

prod3.bhavvadharo()
prod3.printMe()

// console.log(prod3);
// console.log(prod4);



// ========================================================= more exampals
class student {
    constructor(stdRollnum, stdName, stdStanderd){
        this.stdRollnum = stdRollnum;
        this.stdName = stdName;
        this.stdStanderd = stdStanderd
    }

    nameChange(){
        this.stdName = this.stdName.toUpperCase()
    }

    classRoom(){
        this.stdStanderd =  `${this.stdStanderd}-A`
    }
}


const std1 = new student(21, "Parth godhani", "7th")
const std2 = new student(22, "Riddhi faldu", "7th")
const std3 = new student(23, "pooja akbari", "7th")

std1.nameChange()
std2.nameChange()
std3.nameChange()

std1.classRoom()
std2.classRoom()
std3.classRoom()

console.log(std1,std2,std3);

/*
const allStudents = [std1, std2, std3];
allStudents.forEach(std => {
    std.nameChange()
    std.classRoom()
});
*/