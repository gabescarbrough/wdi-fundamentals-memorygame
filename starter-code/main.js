var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];



var board = document.getElementById('game-board');
function createBoard() {
  for (var i=0; i<cards.length; i++) {
    var card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-card', cards[i]);
    card.addEventListener('click', isTwoCards);

    board.appendChild(card);
    board.appendChild(card);
  }

}
function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>"; 
	} else {
		this.innerHTML = "<img src='queen.png'>"; 
	}
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
  for (var i=0; i<4; i++){
  	document.getElementsByClassName('card')[i].innerHTML="";
  	}
}

createBoard();
