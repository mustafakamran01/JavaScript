/* We need to calculate the debit amount, credit amount and balance of given array of object */

transaction = [
    {
        type: "credit",
        amount: 100
    },

    {
        type: "debit",
        amount: 50
    },

    {
        type: "credit",
        amount: 200
    }
]

const debitAmount = transaction
                            .filter( (obj) => obj.type == "debit")
                            .reduce( (acc, currObj) => acc + currObj.amount, 0)

const creditAmount = transaction
                            .filter( (obj) => obj.type == "credit")
                            .reduce( (acc, currObj) => acc + currObj.amount, 0)

console.log(`Total debit amount: ${debitAmount}`);
console.log(`Total credit amount: ${creditAmount}`);
console.log(`Balance: ${creditAmount - debitAmount}`);



