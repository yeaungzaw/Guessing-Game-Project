const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secretNumber;

// askRange
const askRange = () => {
    rl.question("Enter a max number: ", max => {
        rl.question("Enter a min number: ", min => {
            console.log(`I'm thinking of a number between ${min} and ${max}...`)
            secretNumber = randomnInRange(Number(min), Number(max));
            askGuess();
        });
    });
};

// askGuess
const askGuess = () => {
    rl.question("Enter a guess: ", num => {
        if (checkGuess(Number(num))) {
            console.log("You win!");
            rl.close();
        } else {
            askGuess();
        }
    });
};

// randomnInRange
const randomnInRange = (min, max) => {  
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// checkGuess
const checkGuess = num => {
    if (num > secretNumber) {
        console.log("Too high");
        return false;
    } else if (num < secretNumber) {
        console.log("Too low");
        return false;
    } else {
        console.log("Correct!");
        return true;
    }
};

askRange();