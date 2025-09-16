const tinderUser = {
    id: 123,
    name: "Kamran",
    isLoggedIn: false
}


const user = {
    email: "kamran@google.com",
    fullName: {
        userName: {
            firstName: "Mustafa",
            lastName: "Kamran"
        }
    }
}

// console.log(user);
// console.log(user.fullName);
// console.log(user.fullName.userName);
// console.log(user.fullName.userName.firstName);

/*
    we can create n numbers of object inside an object
*/


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const resultObj = Object.assign({}, obj1, obj2)
// console.log(resultObj);

/*
    Here we can combine more than two objects in a single object.
    here, {} is act as a target object, which is basically empty and,
    other objects will act as a source object
*/

const finalObj = {...obj1, ...obj2}
// console.log(finalObj);

/*
    It is also a way to combine object and also majorily used
    It is called spread operator
*/


const info = [
    {
        id: 1,
        email: "k@google.com"
    },

    {
        id: 2,
        email: "m@google.com"
    },

    {
        id: 3,
        email: "a@google.com"
    }
]

// console.log(info[1]);
// console.log(info[1].email);
/*
    This is how we generally get data from database, in the form of array of an object
*/

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));   
/*
    With the help of this we can get the keys or values of the given object in the form of array
*/

console.log(Object.entries(tinderUser));
/*
    With the help of this we can get the arrays of key value pairs present in the object
*/

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
/*
    With the help of this we can get to know whether the given key is present in the object or not  
*/


//************************************Object de-structure********************************//

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Kamran"
}

const {courseInstructor: instructor} = course
console.log(instructor);
/*
    Here we are de-structuring the object and providing a nick name to "courseInstructor" key as "instructor"
*/

