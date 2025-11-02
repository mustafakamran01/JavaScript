class User {
    constructor(userName) {
        this.userName = userName
    }

    logMe() {
        return `Username is ${this.userName}`
    }
}

class Teacher extends User {
    constructor(userName, email, password) {
        super(userName)
        this.email = email
        this.password = password
    }

    addCourse() {
        return `A new course is added by ${this.userName}`
    }
}

const user1 = new Teacher("Kamran", "kamran@google.com", "1234321")
console.log(user1);
console.log(user1.addCourse());
console.log(user1.logMe());

