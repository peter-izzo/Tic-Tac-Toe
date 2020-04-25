var input = document.getElementById("userinput");
var enter = document.getElementById("enter");


//check the length of input 
function inputlength() {
	return input.value.length;
}



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

//Event listeners, eventually want to use this to alert the name that is typed in
input.addEventListener("keypress",addafterEnter);


enter.addEventListener("click", addafterclick);
