/* We nedd to capitalize first letter of each word present in the given string */

let myStr = "my name is mustafa kamran"

const capitalizedArr = myStr.split(" ")
                            .map( (word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")

console.log(capitalizedArr);


