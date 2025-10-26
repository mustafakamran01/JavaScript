const tinderUser = {
    id: 123,
    name: "Kamran",
    isLoggedIn: false
}


const user = {
    email: "kamran@microsoft.com",
    userName: {
        fullName: {
            firstName: "Mustafa",
            lastName: "Kamran"
        }
    },
    phone: "8873346462"
}
/*
    we can create n numbers of object inside an object
*/

// console.log(user);
// console.log(user.userName.fullName);
// console.log(user["userName"]["fullName"]["firstName"]);
// console.log(user["phone"]);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const resultObj = Object.assign({}, obj1, obj2);
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
/*
    This is how we generally get data from database, in the form of array of an object
*/
// console.log(info[0]["email"]);

  
// console.log(Object.keys(user));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(user));
// console.log(Object.values(tinderUser));
/*
    With the help of this we can get the keys or values of the given object in the form of array
*/


// console.log(Object.entries(tinderUser));
// console.log(Object.entries(user));
/*
    With the help of this we can get the arrays of key value pairs present in the object
*/


// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(user.hasOwnProperty("phones"));
/*
    With the help of this we can get to know whether the given key is present in the object or not  
*/


//************************************ Object de-structure ********************************//

const course = {
    courseName: "JavaScript",
    price: 999,
    courseInstructor: "Kamran"
}

console.log(course.courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);
/*
    Here we are de-structuring the object and providing a nick name to "courseInstructor" key as "instructor"
    and with the help of this, we don't need to write course.courseInstructor,
    we can directly write courseInstructor or instructor to access courseIntructor of course object.
*/
const {courseName} = course
console.log(courseName);
/*
    Now we don't need to write course.courseName after destructuring
*/


