//************** Object literals *************//

const mySym = Symbol("key1")

const jsUser = {
    name: "Kamran",
    "full name": "Mustafa Kamran",
    [mySym] : "myKey1",
    age : 24,
    location : "Bangalore",
    email : "kamran@microsoft.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Wednesday"]
}

// console.log(jsUser);
// console.log(jsUser["age"]);
// console.log(typeof jsUser.age);
/*
    Here all the keys are treated as string (name, full name, location, email, isLoggedIn, lastLoginDays)
*/

// console.log(jsUser.name);
// console.log(jsUser["location"]);
// console.log(jsUser["email"]);
// console.log(jsUser.lastLoginDays);
/*
    .(dot) and [] (sqaure brackets), both are ways to access the objects, but the recommended one is square bracket []
*/

// console.log(jsUser[mySym]);


// jsUser.email = "kamran@samsung.com"     // this is how we can change the value of a key in object

// Object.freeze(jsUser)
/*
    With the help of freeze, we cannot change the value of object
*/

// jsUser.age = 30

// console.log(jsUser);

//*************** Adding function in the object ***************//

jsUser.greeting = function(){
    console.log("Hello JS user");
}

jsUser.anotherGreeting = function(){
    console.log(`Hello JS user ${this.name}`);
}

jsUser.standup = function() {
    console.log("Hey folks!!");
}

console.log(jsUser.greeting());
console.log(jsUser.anotherGreeting());
console.log(jsUser.standup());
/*
Hello JS user
undefined
Hello JS user Kamran
undefined
Hey folks!!
undefined

    We are getting undefined in output because in JS, function must return something,
    so, here we are not returning any value, that's why it return undefined
*/





