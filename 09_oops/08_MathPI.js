// console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
//  with this method, we get to know why we cannot change the value of math.pi

const myObj = {
    name: "Chai",
    price: '15',
    isAvailable: true
}

// console.log(Object.getOwnPropertyDescriptor(myObj, 'price'));

// Object.defineProperty(myObj, 'price', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(myObj, 'price'));

for (const [key, value] of Object.entries(myObj)) {
    console.log(`${key} : ${value}`);
    
}