// const myArray = ["C", "C++", "Java", "Python", "JavaScript"]

// const arr = myArray.forEach( (items) => {
//     return items
// })

// console.log(arr);        // it will print undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const values = myNums.filter( (items) => {
//     return items > 5
// })

// console.log(values);

/*
    for each does not return any values whereas filter return values
*/



// const newNums = []
// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// myNums.forEach( (item) => {
//     item > 5 ? newNums.push(item) : null
// })

// console.log(newNums);
/*
    this is how we can extract elements from array using for each loop
*/





const books = [
    {
        title: "Book One", genre: "History", publish: 1987, edition: 2009
    },

    {
        title: "Book Two", genre: "Science", publish: 1977, edition: 2012
    },

    {
        title: "Book Three", genre: "Non-Fictional", publish: 1997, edition: 2013
    },

    {
        title: "Book Four", genre: "Science", publish: 1967, edition: 2002
    },

    {
        title: "Book Five", genre: "History", publish: 2000, edition: 2015
    },

    {
        title: "Book Six", genre: "Fictional", publish: 1990, edition: 2002
    },

    {
        title: "Book Two", genre: "Non-Fictional", publish: 1970, edition: 2018
    }
    
]

let userBook = books.filter( (bk) => bk.genre == "History")

userBook = books.filter( (bk) => {

   return bk.edition >= 2010 && bk.genre == "History"
   
})

console.log(userBook);

