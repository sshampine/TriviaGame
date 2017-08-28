// Star Trek Questions

var triviaQuestions = [{
	question: 'The theme for Star Trek The Next Generation was take from which Star Trek feature film?',
	answerOptions: ['The Motion Picture', 'The Wrath of Kahn', 'The Search for Spock', 'The Voyage Home'],
	answer: 0
},
{	
	question: 'What is the name of the Vulcan ritual that purges all emotions?',
	answerOptions: ['Kolinar', 'Ponfar', 'Katra', 'Kalifee'],
	answer: 0 
},
{
	question: 'Star Trek II The Wrath of Kahn is loosly a sequal to which orignal episode?',
	answerOptions: ['Amok Time', 'Miri', 'Space Seed', 'The Trouble with Tribbles'],
	answer: 2
},
{
	question: 'In Star Trek The Next Generation, who is Data\'s creator?',
	answerOptions: ['Kahn Noonian Singh', 'Chris Metzen', 'Noonian Soong', 'Leah Brahms'],
	answer: 2
},
{
	question: 'In the original series, what class ship is the Enterprise?',
	answerOptions: ['Enterprise class', 'Galaxy class', 'Defiant class', 'Consitution class'],
	answer: 3
},
{
	question: 'Which Klingon became the first officer in Starfleet?',
	answerOptions: ['Woof', 'Worf', 'Kempek', 'Targ'],
	answer: 1
},
{
	quesiton: 'What is the name of the episode where Kirk fought a Gorn?',
	answerOptions: ['Let That Be Your Last Battlefield', 'Mirror, Mirror', 'Arena', 'The Balance of Terror'],
	answer: 2
},
{
	question: 'In what quadrant of space was the USS Voyager trapped?',
	answerOptions: ['Alpha', 'Beta', 'Delta', 'Gamma'],
	answer: 2
},
{
	question: 'What race built then later abandoned the DS9 spacestation?',
	answerOptions: ['Vulcans', 'Andorains', 'The Founders', 'Cardassians'],
	answer: 3
},
{
	question: 'In Star Trek IV The Voyage Home, what rank was Admirial Kirk demoted to for disobeying orders?',
	answerOptions: ['Ensign', 'Lieutenant', 'Commander', 'Captain'],
	answer: 3
}];


var q1 = {
	question: "The theme for Star Trek The Next Generation was taken from which Star Trek feature movie?",
	answerOptions: ['The Motion Picture', 'The Wrath of Kahn', 'The Search for Spock', 'The Voyage Home'],
	answer: [true, false, false, false]
};

var q2 = {
	question: 'What is the name of the Vulcan ritual that purges all emotions?',
	answerOptions: ['Kolinar', 'Ponfar','Kalifee', 'Katra'],
	answer: [true, false, false, false]
};

var q3 = {
	question: 'Star Trek II The Wrak of Kahn is loosly a sequal to which original episode?',
	answerOptions: ['Amok Time', 'Space Seed', 'The Trouble with Tribbles', 'Miri'],
	answer: [false, true, false, false]
};

var q4 = {
	question: 'In Star Trek The Next Generation, who is the creator of Data?',
	answerOptions: ['Kahn Noonian Singh', 'Noonian Soong', 'Beverly Crusher', 'Christopher Metzen'],
	answer: [false, true, false, false]
};

var q5 = {
	question: 'In the original series, what class ship was the Enterprise?',
	answerOptions: ['Enterprise class', 'Galaxy class', 'Consitution class', 'Defiant class'],
	answer: [false, false, true, false]
};

var q6 = {
	question: 'What is the name of the first Klingon in Starfleet?',
	answerOptions: ['Woof', 'Targ', 'Kempek', 'Worf'],
	answer: [false, false, false, true]
};

var q7 = {
	question: 'What was the name of the episode where Kirk fought a Gorn?',
	answerOptions: ['Arena', 'Let That Be Your Last Battlefield', 'Mirror, Mirror', 'The Balance of Terror'],
	answer: [true, false, false, false]
};

var q8 = {
	question: 'In what quadrant of space was the USS Voyage trapped?',
	answerOptions: ['Alpha', 'Beta', 'Delta', 'Gamma'],
	answer: [false, false, true, false]
};

var q9 = {
	question: 'What race build then later abandoned the DS9 spacestation?',
	answerOptions: ['Vulcans', 'Andorians', 'Cardassians', 'The Founders'],
	answer: [false, false, true, false]
};

var q10 = {
	question: 'In Star Trek IV The Voyage Home, what rank was Admirial Kirk demoted to for disobeying orders?',
	answerOptions: ['Ensine', 'Lutenent', 'Commander', 'Captain'],
	answer: [false, false, false, true]
};

// other variables
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var currentQuestion = 0;
var userChoice;
//var clicked = false;
//var index = 0;
//var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

/* for (var i = 0; i < questionArray.length; i++) 
{
	var questions = $("<p>");
	questions.addClass("question");
	questions.attr("answer", questionArray[i].question);
	$('#question-area').text(questionArray[i].answerOne);
	$('#buttonA').text(questionArray[i].answerOne);
	$("#question-area").append(questions);
} */

$('#startBtn').on('click', function() {
	$(this).hide(); //hides the Click to Start button after clicking
	nextQuestion();		//calls the function to start game
});


	//var interval = setInterval(question, 5000);


function nextQuestion() {
	$('#question-area').html(triviaQuestions[currentQuestion].question)
	for (var i = 0; i < 4; i++) {
 	var answerDiv = $('<div>');

 	answerDiv.addClass('test');
 	answerDiv.html(triviaQuestions[currentQuestion].answerOptions[i])
 	answerDiv.attr('data-answer', i) //assigns var i as a data attribute for later comparison.
 	$('#answer-area').append(answerDiv);
	}

	$('.test').on('click',function(){
		userChoice = $(this).data('answer'); //traverses DOM for answer in data-answer attribute.
		alert(userChoice);
	})

}


/*
to score. create on click for answers and assign variable and compare if trivaQuestions[currentQuestion].answer == data-answer attribute; correctAnswer++
else incorrectAnswer++
else if times up unanswered++

*/












function question() {
$('#question-area').html(questionArray[index].question);
for (var i = 0; i < 4; i++) {
 	var answerDiv = $('<div>');

 	answerDiv.addClass('test');
 	answerDiv.html(questionArray[index].answerOptions[i])
 	answerDiv.attr('data-answer', questionArray[index].answer[i])
 	$('#answer-area').append(answerDiv);
}



//$('#answerOne').html(questionArray[index].answerOptions[0])
//$('#answerTwo').html(questionArray[index].answerOptions[1])
//$('#answerThree').html(questionArray[index].answerOptions[2])
//$('#answerFour').html(questionArray[index].answerOptions[3])





$('#answerOne').on('click', function() {
	var ansOne = 
	console.log("you clicked " + questionArray[0].answerOptions[0])
});

$('#answerTwo').on('click', function() {
	
	console.log("you clicked " + questionArray[0].answerOptions[1])
});

$('#answerThree').on('click', function() {
	
	console.log("you clicked " + questionArray[0].answerOptions[2])
});
	
$('#answerFour').on('click', function() {
	
	console.log("you clicked " + questionArray[0].answerOptions[3])
});	
index++;

if (index >= 10) {
	console.log("index is: " + index)
	clearInterval(interval);
}

}

function timeout() {
	alert("Game over!");
}

function gamePlay() {
	setTimeout(question, 5000)
	index++
}


