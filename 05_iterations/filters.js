/*********************************** Filter ***********************************/

// const myArray = ["C", "C++", "Java", "Python", "JavaScript"]

// const arr = myArray.forEach( (items) => {
//     return items
// })

// console.log(arr);        // it will print undefined


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (item) => {
//     return item >= 5 && item <= 8;
// })
// console.log(newNums);

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
        title: "Book One", genre: "Fiction", publish: 1981, edition: 2004
    },

    {
        title: "Book Two", genre: "Non-fiction", publish: 1992, edition: 2008
    },

    {
        title: "Book Three", genre: "Non-History", publish: 1999, edition: 2007
    },

    {
        title: "Book Four", genre: "Non-fiction", publish: 1989, edition: 2010
    },

    {
        title: "Book Five", genre: "Science", publish: 2009, edition: 2014
    },

    {
        title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010
    },

    {
        title: "Book Seven", genre: "Non-History", publish: 1986, edition: 1996
    },

    {
        title: "Book Eight", genre: "Science", publish: 2011, edition: 2016
    },

    {
        title: "Book Nine", genre: "Non-fiction", publish: 1981, edition: 1989
    }   
];

let userBook = books.filter( (bk) => bk.genre == "History")

userBook = books.filter( (bk) => {
   return bk.edition >= 2010 && bk.genre == "History"
})

userBook = books.filter( (bk) => {
    return bk.publish >= 2000
})

console.log(userBook);

