// Create word array for answers
var words = [
"Paris",
"Berlin",
"Madrid",
"Warsaw",
"London",
"Helsinki",
"Oslo",
"Copenhagen",
"Reykjavik",
"Stockholm",
"Prague"
];

//Choose random word from array
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);
var guessesRem = word.Length * 1.5
// Get elements
var answerArray = []
var wins

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	if (word.indexOf(userGuess) > -1) {
		for (var i = 0; i < word.length; i++) {
			var guess = document.getElementById("answer");
			guess.innerHTML = word.charAt(i);
			console.log("letter exists");
	}
}
}




//var showLives = document.getElementById("mylives");
//var lettersGuessed = document.getElementById("guessed")
//Set number of guesses
//var guessesRem = word.Length * 2
/*var el = document.getElementById("answer");
el.innerHTML = answer;*/
//Answer array set up
//var answerArray = []
//for (var i = 0; i < word.length; i++) {
//	answerArray[i] = "_";
//}
/*var el = document.getElementById("answer");
el.innerHTML = answerArray.join(" ");*/ --> // for game loop

//Create variable keeping track of remaining letters
//var remLetters = word.length;

//Game section
