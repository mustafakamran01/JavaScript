const prompt = require("prompt-sync")();

let userInput = prompt("Choose any car - [Fronx, Seltos, Virtus]: ").toLowerCase();

fronxQues = [
    "Name the manufacturer of fronx: ",
    "What is the cubic capacity of the engine: ",
    "In which categoty fronx lies: "
]
fronxAns = [
    "maruti suzuki",
    "1.2cc",
    "hatch back"
]

seltosQues = [
    "Name the manufacturer of seltos: ",
    "What is the cubic capacity of the engine: ",
    "In which categoty seltos lies: "
]
seltosAns = [
    "kia",
    "1.5cc",
    "mid size suv"
]

virtusQues = [
    "Name the manufacturer of virtus: ",
    "What is the cubic capacity of the engine: ",
    "In which categoty virtus lies: "
]
virtusAns = [
    "vw",
    "1.5cc",
    "sedan"
]

let score = 0;

switch (userInput) {
    case 'fronx':

        for (let i = 0; i < fronxQues.length; i++){
            console.log();          // to create a space
            console.log(fronxQues[i]);
            let userAns = prompt("-> ").toLowerCase();

            if (userAns === fronxAns[i]){
                console.log();      // to create a space 
                console.log("       Congratulations!!! You are right");
                score = score + 10;
            } else{
                console.log();      // to create a space
                console.log("       Sorry!!! You are wrong");
                break;
            }
        }
        console.log();              // to create a space
        console.log(`       Your score: ${score}`);
        console.log();              // to create space
        score == 30 ? console.log("       You won the game!!!") : console.log("       You lost the game :(");
        break;

    case 'seltos':
        for (let i = 0; i < seltosQues.length; i++){
            console.log();          // to create a space
            console.log(seltosQues[i]);
            let userAns = prompt("-> ").toLowerCase();

            if (userAns === seltosAns[i]){
                console.log();      // to create a space 
                console.log("       Congratulations!!! You are right");
                score = score + 10;
            } else{
                console.log();      // to create a space
                console.log("       Sorry!!! You are wrong");
                break;
            }
        }
        console.log();              // to create a space
        console.log(`       Your score: ${score}`);
        console.log();              // to create space
        score == 30 ? console.log("       You won the game!!!") : console.log("       You lost the game :(");
        break;

    case 'virtus':
        for (let i = 0; i < virtusQues.length; i++){
            console.log();          // to create a space
            console.log(virtusQues[i]);
            let userAns = prompt("-> ").toLowerCase();

            if (userAns === virtusAns[i]){
                console.log();      // to create a space 
                console.log("       Congratulations!!! You are right");
                score = score + 10;
            } else{
                console.log();      // to create a space
                console.log("       Sorry!!! You are wrong");
                break;
            }
        }
        console.log();              // to create a space
        console.log(`       Your score: ${score}`);
        console.log();              // to create space
        score == 30 ? console.log("       You won the game!!!") : console.log("       You lost the game :(");
        break;

    default:
        console.log("Please select from the given option!!");
        break;
}

