//Letter choices
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var guessedLetters = []
//Setting all to initial values upon page load.
var wins = 0;
var losses = 0;
var guesses = 9;
//Records key press for userGuess
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
//Computer chooses letter from array
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessedLetters.push(userGuess);

    // Logic for what happens on key press.
    if (userGuess !== computerGuess.toString()) {
        guesses--;
        if (guesses === 0)
        {
            alert("The Letter was: " + computerGuess);
        }
  
    }
        if (userGuess == computerGuess){
            wins++;
            guesses = 9;
            guessedLetters = [];
            var correct = new Audio("assets/audio/correct.mp3");
            correct.play();

        } else if (guesses == 0) {
            losses++;
            guesses=9;
            guessedLetters = [];
            var loss = new Audio("assets/audio/wrong.mp3");
            loss.play();

        }
        
        // Displaying stats on page
        var html = "" +
        "<p>Wins: "+ wins +"</p>"
        +
        "<p>Losses: "+ losses +"</p>" 
        +
        "<p>Guesses Left: "+ guesses +"</p>"
        +
        "<p>Your Guesses so far: "+ guessedLetters +"</p>";
        // Placing the html into the game ID
        document.querySelector('#game').innerHTML = html;
        
}    