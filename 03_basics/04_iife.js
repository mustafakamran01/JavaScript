// Immediately Invoked Function Expressions (IIFE)

// (function dataBase(){
//     console.log("Database Connected");
// })();
/*
    whenever we are creating more than one IIFE, we need to put semicolon(;) after every IIFE
*/



// ( () => {                               // this is normal IIFE
//     console.log("DB Connected 2");
    
// })();        // Both are correct ways
// (() => console.log("Database connected 2"))();


// ( (name) => {                                       // this is IIFE with parameters
//     console.log(`Hey ${name} DB is connected`);
    
// })("Kamran")


/*
    What is the use of IIFE?
    -   Avoid polluitng the global scope,
        In JS, variables declared in the global scope can conflict with other code.
        IIFE create a private scope, so variable inside it don't leak out
*/