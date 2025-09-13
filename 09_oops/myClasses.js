// class user{
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return `${this.username}`.toUpperCase()
//     }
// }

// const chai = new user('Mustafa Kamran', 'kamran@meta.com', '123')
// // console.log(chai);
// console.log(chai.encryptPassword())
// console.log(chai.changeUserName())


// behind the scene

function user(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new user("Mustafa Kamran", "kamran@meta.com", "123")

console.log(tea.encryptPassword())
console.log(tea.changeUserName())