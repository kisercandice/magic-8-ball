$(document).ready(function(){
var magic8Ball = {}; 
magic8Ball.listOfAnswers = ["It is certain.", "Without a doubt.", "Yes – definitely.", "As I see it, yes.", "Most likely.","Outlook good.", "Reply hazy, try again.", "Better not tell you now.", "Cannot predict now.", "Don't count on it.", "My reply is no.", "Outlook not so good.", "Very doubtful."];
  
$("#answer").hide();

magic8Ball.askQuestion = function(question){
  $("#8ball").effect("shake");	
  $("#answer").fadeIn(4000);
	var randomNumber = Math.random();
	var randomNumberArray = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(randomNumberArray);
	var answer = this.listOfAnswers[randomIndex];
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#answer").text( answer );
	console.log(question);
	console.log(answer);
};
	var onClick = function(){
	$("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
	setTimeout(
		function(){
	var question = prompt("ASK A YES/NO QUESTION!");
	magic8Ball.askQuestion(question);}, 500);
	};

$("#questionButton").click(onClick);
	
//magic8Ball.askQuestion("Will today be a great day?");
});
