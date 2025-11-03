// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
/* 
    Here we get the property which are not accessible generally like writable, enumerable, configurable.
    Here the first parameter is Math(className) and second property is PI(property) 
    So, here we get the property of PI (writable, enumerable, configurable)
*/

const myObj = {
    name: "Mustafa Kamran",
    email: "kamran@google.com",
    company: "Google"
}
console.log(myObj);

Object.defineProperty(myObj, "name", {
    writable: false
})
/* 
    Here we change the property of our object, and we set writable to false,
    so, now we cannot change the value of name property in myObj
*/

myObj.name = "Change"

console.log(myObj);


