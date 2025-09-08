/***************************************** For Loop******************************************/

// for (let i = 0; i <= 10; i++) {
    
//     const element = i;

//     if (i == 5) {
//         console.log("It is number 5");
    
//     }

//     console.log(element);
    
// }



// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer loop value: ${i}`);
    
//     for(let j = 1; j <= 10; j++){
//         console.log(`Inner loop value: ${j}`);
        
//     }
    
// }



// for (let i = 1; i <= 10; i++) {
    
//     for(let j = 1; j <= 10; j++){

//         console.log(`${i} * ${j} = ${i*j}`);
        
//     }
// }



// const myArray = ["BMW", "Land Rover", "Mercedes", "Audi"]

// for (let index = 0; index < myArray.length; index++) {
 
//     const element = myArray[index];
//     console.log(element);
    
// }

// console.log(myArray.length);




// for (let index = 1; index <= 20; index++) {
    
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break
//     }

//     console.log(`Current value is ${index}`);
// }



for (let index = 1; index <= 20; index++) {
    
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue
    }

    console.log(`Current value is ${index}`);
}