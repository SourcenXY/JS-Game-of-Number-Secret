let numberMax = 100;
let secretNumber = Math.floor(Math.random() * numberMax) + 1;
let userNumber = 0;
let intents = 1;
let maxIntents = 10;
let wantPlay = prompt('Welcome to our game to find the secret number, want to play?');

if(wantPlay === 'Yes' || wantPlay === 'yes'){
    while(userNumber != secretNumber){
        userNumber = parseInt(prompt(`Write a number between 1 to ${numberMax}: `));
    
        if(secretNumber == userNumber){
            console.log(`You discovered the secret number, the number is ${secretNumber}, you did it in ${intents} ${intents == 1 ? 'intent' : 'intents'}`);
        } else{
            if(userNumber > secretNumber){
                console.log('The secret number is minor');
            } else{
                console.log('The secret number is greater');
            }
            intents++;
        }
        if(intents > maxIntents){
            console.log(`You do not discovered the secret number, reached the maximum number of intents, you only had ${maxIntents} intents`);
            break;
        }
    }
} else{
    if(wantPlay === 'No' || wantPlay === 'no'){
        alert('Okay, maybe next time, see you!');
    } else{
        alert('I did not understand your answer, so write again your answer');
    }
}