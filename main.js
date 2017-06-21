//inquirer NPM package
	//var inquirer = require("inquirer");
	var BasicCard = require("./BasicCard.js");

	var inquirer = require("inquirer");

	var fs = require("fs");

//Prompting the user to either view the cards or not view the cards
	inquirer.prompt([{
		name: "command",
		message: "Would you like to view the flashcards?",
		type: "list",
		choices: [{
			name: "Yes!"
		},
			{
			name: "Not yet."	
			}]
	}])
		.then(function(answer) {
			if (answer.command === "Yes!"){
				showCard();
			}
			else if(answer.command === "No."){
				console.log("Come back next time.");
			}
		})

//Creating a function where the cards will be shown

	var showCard = function(){
		//will have to read the json file
		fs.readFile("./questions.json", "utf8", function(error, data){
			if(error){
				console.log("Error: " + error);
			}
			var questions = data.split("; ");
			var notBlank = function(value){
				return value;
			};
			questions = questions.filter(notBlank);
			var count = 0;
			showQuestion(questions, count);
		});

	};

	var showQuestion = function(array, index){
		question = array[index];
		var parsedQuestion = JSON.stringify(question);
		var questionText = parsedQuestion.front;
		var correctResponse = parsedQuestion.back;
	}

	inquirer.prompt([{
		name: "response",
		message: questionText
	}])
	.then(function(answer){
		if (answer.response === correctResponse) {
			console.log("Correct!");
			if (index < array.length - 1){
				showQuestion(array, index +1);
			}
		}
			else{
				console.log("Sorry, you are wrong.");
				if (index < array.length - 1){
				showQuestion(array, index +1);
			}
		}
	});





































// //creating flash cards

// 		var question1 = new BasicCard("Are dolphins fish or mammals?", "mammals");
// 			console.log(question1.front);
// 			console.log(question1.back);
// 			console.log("----------------------------------------------------");

// 		var question2 = new BasicCard("Which body part stays the same size from when we are born up until we die?", "eyeballs");
// 			console.log(question2.front);
// 			console.log(question2.back);
// 			console.log("----------------------------------------------------");

// 		var question3 = new BasicCard("What is the only food that doesn't spoil?", "honey");
// 			console.log(question3.front);
// 			console.log(question3.back);
// 			console.log("----------------------------------------------------");

// 		var question4 = new BasicCard("What is the strongest muscle in the human body", "tongue");
// 			console.log(question4.front);
// 			console.log(question4.back);
// 			console.log("----------------------------------------------------");