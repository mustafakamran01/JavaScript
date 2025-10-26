const accountId = 322513
let accountEmail = "kamran@google.com"
var accountPassword = "12345"
accountCity = "Patna"
let accountState

// accountId = 234  // const cannot be changed

/*
    Try not to use var keyword,
    because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


accountEmail = "mustafa@microsoft.com"
accountPassword = "New Password"
accountCity = "New Delhi"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])