//**************Object literals*************//

const mySym = Symbol("key1")

const jsUser = {
    name: "Kamran",
    "full name": "Mustafa Kamran",
    [mySym]: "myKey1",
    age: 24,
    location: "Patna",
    email: "kamran@apple.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Thursday"]
}

// console.log(jsUser["age"]);
// console.log(typeof jsUser["age"]);

/*
    Here all the keys are treated as string (name, full name, location, email, isLoggedIn, lastLoginDays)
*/

// console.log(jsUser.name);
// console.log(jsUser["location"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["isLoggedIn"]);

/*
    .(dot) and [] (sqaure brackets), both are ways to access the objects, but the recommended one is square bracket []
*/

// console.log(jsUser[mySym]);


// jsUser.email = "kamran@samsung.com"     // this is how we can change the value of a key in object

// Object.freeze(jsUser)                  // with the help of freez, now we cannot change the value of the object

// jsUser.age = 30

// console.log(jsUser);

//***************Adding function in the object************//

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.anotherGreeting = function(){
    console.log(`Hello JS user ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.anotherGreeting());




