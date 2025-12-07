/* We nedd to capitalize first letter of each word present in the given string */

let myStr = "my name is mustafa kamran"

/* 
    Here, firstly we are spliting the string on the basis of space(" "), so that we can get each words in the form of array, then
    we are applying loop (map) on the array and taking first letter of each word and capitalizing it, and then
    further concat rest letters in that with the help of slice.
    After that we will each join words with space and again makie it a string
*/
const capitalizedArr = myStr.split(" ")
                            .map( (word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")

console.log(capitalizedArr);


