var input = document.getElementById("userinput");
var enter = document.getElementById("enter");



function inputlength() {
	return input.value.length;
}




function addafterclick() {
	if(inputlength()> 0 ) {
		console.log("click");
	}

}


function addafterEnter (event) {
	if(inputlength()>0 && event.which === 13) {
		console.log("enter");
	}
}
	

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

input.addEventListener("keypress",addafterEnter);


enter.addEventListener("click", addafterclick);
