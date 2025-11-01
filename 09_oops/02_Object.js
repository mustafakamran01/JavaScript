// function multiplyBy5(num){
//     return num * 5
// }
// multiplyBy5.abc = 2
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.abc);
// console.log(multiplyBy5.prototype);
/*
    with the help of this example, we can say that function is also an object
    i.e, we can add (multiplyBy5.abc = 2) and it print 2 as well, because
    here we are adding a key value pair to an object i.e, multiplyBy5.abd = 2

    and here, "multiplyBy5.prototype" given an empty object because, 
    in JS nothing is above an object
*/



function createUser(userName, score){
    this.userName = userName
    this.score = score

}

createUser.prototype.increment = function(){
    this.score++
}

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






