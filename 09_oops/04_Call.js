function setUserName(userName) {
    this.userName = userName
    console.log("Called");
}

function createUser(userName, email, password) {
    setUserName.call(this, userName)
    /*
        If we try to call setUserName without .call, then it will not set the userName. 
        The function will be called but it will not set the userName.
        And by passing the "this" we are specifying that we need to set userName to the context of createUser().
    */
    this.email = email
    this.password = password
}

console.log(new createUser("kamran", "kamran@google.com", "123"))