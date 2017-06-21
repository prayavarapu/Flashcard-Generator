//Basic card with 'front' and 'back' constructors

//exporting the constructor

	var fs = require("fs");

	


//Constructor that accepts two arguments: front and back.

	var BasicCard = function(front, back){
		this.front = front;
		this.back = back;
		//method for adding a flash card and storing it within the txt file
		// 	this.newFlashCard = function(front, back){
		// 		var newFlashCard = new BasicCard(front, back);
		// 		//var logTxt = "\n Question: " + newFlashCard.front + "\n Answer: " + newFlashCard.back;
		// 	};
			
		// 	fs.appendFile("log.txt", newFlashCard);
		};


module.exports = BasicCard;



