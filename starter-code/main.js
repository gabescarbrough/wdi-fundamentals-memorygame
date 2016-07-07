var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*

if (cardOne === cardTwo) {
	alert("You found a match!")
} else {
	alert("Sorry, try again.")
}

*/

var board = document.getElementById('game-board');

var createBoard =function(){
	for (var i = 0; i < 4; i++) {
		var card = document.createElement('div');
		document.querySelector('.board').appendChild(card).className="card";
	};
}