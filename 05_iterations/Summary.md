=> forEach():
        . Used to iterate over an array and perform an action for each element
        . It doesn't return any value
        . It doesn't modify the original array
        . Use when: 
                . You just to loop and perform side effects (logging, saving, updating DOM)
                . You don't need a new array or return value
        
        // Example:         
        const numbers = [1, 2, 3, 4];
        numbers.forEach( (num) => console.log(num * 2) );   [2, 4, 6, 8]
        console.log(numbers);   // [1, 2, 3, 4]

=> map():
        . Used to transform each element and returns a new array
        . It return some value
        . It doesn't modify the original array
        . Use when:
                . You want to transform data (e.g. Square numbers, add properties, convert types)
                . You need the same length array but with changed values
        
        // Example:
        const numbers = [1, 2, 3, 4];
        const doubled = numbers.map( (num) => num * 2 );
        console.log(doubled);   // [2, 4, 6, 8]

=> filter():
        . Used to filter out element based on condition
        . Return a new array with only those elements that return true
        . It doesn't modify the original array
        . Use when:
                . You want the subset of the array (based on condition)
        
        // Example:
        const numbers = [1, 2, 3, 4, 5, 6];
        const even = numbers.filter( (num) => num % 2 === 0);
        console.log(even);      // [2, 4, 6]

=> reduce():
        . Used to accumulate all the elements into a single value (sum, product, concatenation)
        . It doesn't modify the original array
        . Use when:
                . You want a single result from an array (sum, avg, min/max, grouping)
        
        // Example:
        const numbers = [1, 2, 3, 4];
        const sum = numbers.reduce( (acc, curr) => acc + curr, 0);
        console.log(sum); // 10
