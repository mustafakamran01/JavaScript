const myNum = [1, 2, 3, 4, 5]

// const total = myNum.reduce( function(acc, curr_val) {
//     console.log(`Accumulator: ${acc} and Current value: ${curr_val}`);
//     return acc + curr_val

// }, 0)
// console.log(total);


// const total = myNum.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0)
// console.log(total);



const shoppingCart = [
    {
        itemName: "Shirt",
        itemPrice: 1500
    },

    {
        itemName: "Watch",
        itemPrice: 9000
    },

    {
        itemName: "Hoodie",
        itemPrice: 2000
    },

    {
        itemName: "Shoes",
        itemPrice: 4500
    },

    {
        itemName: "Mobile",
        itemPrice: 130000
    }
];

const total = shoppingCart.reduce( (acc, currItem) => acc + currItem["itemPrice"], 0)
console.log(total);
