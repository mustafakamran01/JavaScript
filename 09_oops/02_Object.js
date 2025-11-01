function multiply(num) {
    return num * 5
}
multiply.xyz = 34;

console.log(multiply(5));
console.log(multiply.xyz);
console.log(multiply.prototype);
/* 
    With the help of this example we can say that, function is also an object, because
    we can add "multiply.xyz = 34" and it gives output as well

    and here, multiply.prototype gives an empty object
*/



function createUser(userName, score){
    this.userName = userName
    this.score = score

}

/* Here we are creating a custom prototype */
createUser.prototype.increment = function(){
    this.score++
}

/* Here we are creating a custom prototype */ 
createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
    
}
/*
    here we are creating new properties of the function("createUser") named as increment and printMe 
*/

const chai = new createUser("Chai", 25)
const tea = new createUser("Tea", 250)
/*
    if new keyword is not placed above, then the below code will give error
*/
chai.increment()
chai.printMe()

tea.increment()
tea.printMe()






