/* 
    Here we are creating class, and
    setting and getting value with the help of set and get
*/
class User {
    constructor(userName, email, password) {
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    set userName(userName) {
        this._userName = userName;
    }
    get userName() {
        return `${this._userName}`.toUpperCase();
    }

    set email (email) {
        this._email = email;
    }
    get email() {
        return `${this._email}`.toUpperCase();
    }

    set password(password) {
        this._password = password;
    }
    get password() {
        return `qwerty${this._password}afqty`
    }
}

const newObj = new User("mustafa kamran", "kamran@google.com", "qwerty")
console.log(newObj);
console.log(newObj.email);
console.log(newObj.password);



