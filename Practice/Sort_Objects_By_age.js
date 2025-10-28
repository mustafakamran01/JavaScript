/*
  We need to sort an array of objects by their age property in ascending order.

  Example:
  Input:
  [
    { name: "Kamran", age: 30 },
    { name: "Ali", age: 25 },
    { name: "Rehan", age: 28 }
  ]

  Output:
  [
    { name: "Ali", age: 25 },
    { name: "Rehan", age: 28 },
    { name: "Kamran", age: 30 }
  ]
*/

let myArr = [
  { name: "Kamran", age: 30 },
  { name: "Ali", age: 25 },
  { name: "Rehan", age: 28 }
]

for (let i = 0; i < myArr.length; i++){
    for (let i = 0; i < myArr.length-1; i++){
        if (myArr[i].age > myArr[i+1].age){
            temp = myArr[i]
            myArr[i] = myArr[i+1]
            myArr[i+1] = temp            
        }
    }
}

console.log(myArr);
