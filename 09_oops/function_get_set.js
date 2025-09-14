function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        set: function(value){
            this._email = value
        },
        get: function(){
            return this._email.toUpperCase()
        }
    })

    Object.defineProperty(this, 'password', {
        set: function(value){
            this._password = value
        },
        get: function(){
            return this._password.toUpperCase()
        }
    })
}
const user1 = new user('kamran@google.com', 'abc')
console.log(user1.email);
console.log(user1.password);

