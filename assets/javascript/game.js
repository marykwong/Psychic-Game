
alert("Press any key to begin!");

//variables
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var win = 0;
var loss = 0;
var guessRemaining = 9;
var guessed = [];

//reset game
function reset (){
    guessRemaining = 9;
    guessed = [];
    computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log (computerGuess);

}

reset();

//keyup function
document.onkeyup = function(event) {
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

//control for pressing letters only
if (!/[a-z]/.test(userGuess)){
    alert ("Letters only!!!");
    guessRemaining++;
   
}

//control for pressing non letter twice
if (!/[a-z]/.test(userGuess) && guessed.indexOf(userGuess) !== -1){
    // alert ("Try Again!")

}

else if (guessed.indexOf(userGuess) === -1){
    guessed.push(userGuess);
    }

//control for duplicate guess
else if (guessed.indexOf(userGuess) !== -1){
    alert ("You guessed this already!! Please choose another letter.");
    guessRemaining++;
   
    
    }

//if guesses are equal
if (userGuess === computerGuess) {
        win++;
        alert ("Your guessed it right!!! Let's play again.");
        reset();
    }

//incorrect guess
else { 
        guessRemaining -- ;
    }

//no more guesses remaining
if (guessRemaining === 0) {
        
        alert ("You lost")
        loss++;
        reset();
    }


//write to html
document.querySelector('#win').innerHTML = "Wins: " + win;
document.querySelector('#loss').innerHTML = "Losses: " +loss;
document.querySelector('#guessleft').innerHTML = "Number of guesses left: " + guessRemaining;
document.querySelector('#guesssofar').innerHTML = " Your guesses so far: " + guessed;


};

