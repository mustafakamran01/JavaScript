class User{
    constructor(password, email){
        this.email = email
        this.password = password
    }

    set email(value){
        this._email = value
    }
    get email(){
        return this._email.toUpperCase()
    }

    set password(value){
        this._password = value
    }
    get password(){
        return this._password.toUpperCase()
    }

}
const user1 = new User('abc', 'mustafa@google.com')
console.log(user1.email);     
console.log(user1.password);     
