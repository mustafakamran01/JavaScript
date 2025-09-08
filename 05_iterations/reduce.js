const myNum = [1, 2, 3, 4, 5]

// const total = myNum.reduce( function(acc, curr_val) {
//     console.log(`Accumulator: ${acc} and Current value: ${curr_val}`);
//     return acc + curr_val

// }, 0)

// console.log(total);

// const total = myNum.reduce( (acc, curr_val) => {
//     console.log(`Accumulator: ${acc} and Current value: ${curr_val}`);
//     return acc + curr_val
    
// }, 0)

// console.log(total);



const shoppingCart = [
    {
        item: "Shoes",
        price: 4000
    },

    {
        item: "Watch",
        price: 9000
    },

    {
        item: "Hoodie",
        price: 2000
    },

    {
        item: "Shirt",
        price: 2500
    },

    {
        item: "Cargo",
        price: 2000
    }
]

const myTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(myTotal);
