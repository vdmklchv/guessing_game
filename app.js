let maxNumber = parseInt(prompt('Enter the maximum number'));

while (!maxNumber) {
    maxNumber = parseInt(prompt('Enter the maximum number'));
}

const randomNumber = Math.floor(Math.random() * maxNumber) + 1;

let tries = 0;
let guess = prompt('Guess the number:').toLowerCase();

while (true) {
    tries += 1;
    if (guess === 'q') {
        break;
    } else if (randomNumber.toString() === guess) {
        console.log('You won!');
        console.log(`It has taken you ${tries} number of tries to guess the correct number.`);
        break;
    } else {
        if (randomNumber > parseInt(guess)) {
            console.log(`Your guess is ${guess}. The number is higher`);
        } else {
            console.log(`Your guess is ${guess}. The number is lower`);
        }
        guess = prompt('Guess the number:').toLowerCase();
    }
}



