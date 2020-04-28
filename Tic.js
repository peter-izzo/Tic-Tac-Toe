var input = document.getElementById("userinput");
var enter = document.getElementById("enter");
const radio = document.querySelector("input");
var gamePlaying, activePlayer, gameState;


//This is initialize the game and make sure it's alwasy ready for play
init();

//check the length of input
function inputlength() {
	return input.value.length;
}

var winMessage = () => "You're a Winner!";
var drawMessage = () => "It's a draw! Nobody is a winner :( "

gameState = ["", "", "", "", "", "", "" ,"", ""];



//check to ensure there is an input
function addafterclick() {
	if(inputlength()> 0 ) {
		console.log("click");
	}

}

//check to ensure there is an input
function addafterEnter (event) {
	if(inputlength()>0 && event.which === 13) {
		console.log("enter");
	}
}

//I am not sure what we can do with this constructor
class Player { constructor(name) {
	this.name = name;

   }
   introduce() {
   	console.log(`Hello ${this.name} you are level Get ready to play`);
   }
}

// class Gamer extends Player {
// 	constructor(name,level){
// 	super(name,level);
// }
// play(){
// 	console.log(`Hello ${this.name} you are level ${this.level}`);
// }



 // const Player = new Player("Oneill", "pro");
//  const Gamer = new Gamer("Pete", "expert");

// function addrow (){
// 	if(document.getElementById("X").checked) {
// 		console.log("X");
// 		var test = document.getElementById("test");
// 		var text = document.createTextNode("X");
// 		test.appendChild(text);
// 	}else if (document.getElementById("O").checked){
// 		console.log("O");
// 		var test = document.getElementById("test");
// 		var text = document.createTextNode("O");
// 		test.appendChild(text);
// 	}
// 	test.addEventListener("click",addrow);
//
// }

//Event listeners, eventually want to use this to alert the name that is typed in
input.addEventListener("keypress",addafterEnter);


enter.addEventListener("click", addafterclick);

//Event Listener to disbale radio buttons on choice
// const choice = (greyRadio, e){
// 	onClick
// }

// document.querySelector('.btn-hold').addEventListener('click', function() {
//
//
//   /*document.querySelector(".win-score").addEventListener('click', function(){
//     winScore == document.querySelector(".win-score").value
//   });*/
//
//   //Function that
//
//   if (gamePlaying) {
//     //Add CURRENT score to global scores
//     scores[activePlayer] += roundScore;
//
//     //update UI
//     document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
//     //check if player won game
//     if (scores[activePlayer] >= winScore) {
//       document.querySelector('#name-' + activePlayer).textContent = "WINNER!";
//       document.querySelector('.dice').style.display = 'none';
//       document.querySelector('.double-dice').style.display = 'none';
//       document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
//       document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
//       gamePlaying = false;
//     } else {
//       nextPlayer();
//     };
//   }
// });


function init(){
	//This is needs to stay true until someone wis or else...
	//the game will end prematurely
	gamePlaying = true;


}

//hitting restart toggles clears the board
document.querySelector('.button1').addEventListener('click', function(){
	for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
		 document.getElementById(i).innerHTML = "";
	}

});

//registers which cell gets cl
function markCell(clickedCell){
	var clickedCell = clickedCell.target;

	//links cell clicked to id. Parse int turns it from string to int value
	var clickedCellIndex = parseInt(
		clickedCell.getAttribute('id')
	);

	if (gameState[clickedCellIndex] !== "" || !gamePlaying) {
		return;
	}
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', markCell));

let winConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function handleWinning() {
	let roundWon = false;
	for (var i = 0; i < winConditions.length; i++){
		var winCondition = winConditions[i];
		var a = gameState[winConditions[0]];
		var b = gameState[winConditions[1]];
		var c = gameState[winConditions[2]];
		if (a === '' || b === '' || c === '') {
			continue;
		}
		if (a === b && b === c) {
			roundWon = true;
			break
		}
	}
	if (roundWon) {
		text.innerHTML = winMessage();
		gamePlaying = false;
		return;
	}
}


//

/*
*
* Misc code that i tried adding but wasn't working
*
*/
