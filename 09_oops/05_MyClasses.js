/* Here we are creating a class of name user */
class User {
    /* Here we are setting values through constructor */
    constructor(userName, email, password) {
        this.userName = userName
        this.email = email
        this.password = password
    }

    /* Here we are creating a function */
    encryptPassword() {
        return `ab${this.password}cc`
    }

    /* Again we are creating a function */
    changeUserName(){
        return `${this.userName}`.toUpperCase()
    }
}

/* Creating an instance of class User and sending values to constructor */
const user1 = new User("mustafa121", "mustafa@google.com", "123cd")

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.changeUserName())


/********************  Behind the scene ********************/

/* A function is created of name User and setting values through this */
function User(userName, email, password) {
    this.userName = userName
    this.email = email
    this.password = password
}

/* Creating a function using prototype */
User.prototype.encryptPassword = function () {
    return `ab${this.password}cc`
}

/* Creating a function using prototype */
User.prototype.changeUserName = function () {
    return `${this.userName}`.toUpperCase()
}

/* calling User function and storing their values to user2 object */
const user2 = new User("kamran212", "kamran@apple.com", "1223accd")

console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.changeUserName());


