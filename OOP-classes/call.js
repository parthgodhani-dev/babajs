function setUser(username) {
    this.username = username
}

function userDetails(username, useremail, userpassword) {

    setUser.call(this, username);

    this.useremail = useremail
    this.userpassword = userpassword
}

let test = new userDetails("baba", "baba@gmail.com", 123456)
console.log(test);