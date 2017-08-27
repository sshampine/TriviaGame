// Star Trek Questions

var q1 = {
	question: "The theme for Star Trek The Next Generation was taken from which Star Trek feature movie?",
	answerOptions: ['The Motion Picture', 'The Wrath of Kahn', 'The Search for Spock', 'The Voyage Home']
};

var q2 = {
	question: 'What is the name of the Vulcan ritual that purges all emotions?',
	answerOptions: ['Kolinar', 'Ponfar','Kalifee', 'Katra']
};

var q3 = {
	question: 'Star Trek II The Wrak of Kahn is loosly a sequal to which original episode?',
	answerOptions: ['Amok Time', 'Space Seed', 'The Trouble with Tribbles', 'Miri']
};

var q4 = {
	question: 'In Star Trek The Next Generation, who is the creator of Data?',
	answerOptions: ['Kahn Noonian Singh', 'Noonian Soong', 'Beverly Crusher', 'Christopher Metzen']
};

var q5 = {
	question: 'In the original series, what class ship was the Enterprise?',
	answerOptions: ['Enterprise class', 'Galaxy class', 'Consitution class', 'Defiant class']
};

var q6 = {
	question: 'What is the name of the first Klingon in Starfleet?',
	answerOptions: ['Woof', 'Targ', 'Kempek', 'Worf']
};

var q7 = {
	question: 'What was the name of the episode where Kirk fought a Gorn?',
	answerOptions: ['Arena', 'Let That Be Your Last Battlefield', 'Mirror, Mirror', 'The Balance of Terror']
};

var q8 = {
	question: 'In what quadrant of space was the USS Voyage trapped?',
	answerOptions: ['Alpha', 'Beta', 'Delta', 'Gamma']
};

var q9 = {
	question: 'What race build then later abandoned the DS9 spacestation?',
	answerOptions: ['Vulcans', 'Andorians', 'Cardassians', 'The Founders']
};

var q10 = {
	question: 'In Star Trek IV The Voyage Home, what rank was Admirial Kirk demoted to for disobeying orders?',
	answerOptions: ['Ensine', 'Lutenent', 'Commander', 'Captain']
};

// other variables

var clicked = false;
var index = 0;
var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

/* for (var i = 0; i < questionArray.length; i++) 
{
	var questions = $("<p>");
	questions.addClass("question");
	questions.attr("answer", questionArray[i].question);
	$('#question-area').text(questionArray[i].answerOne);
	$('#buttonA').text(questionArray[i].answerOne);
	$("#question-area").append(questions);
} */


	var interval = setInterval(question, 5000);


function question() {
$('#question-area').html(questionArray[index].question);
$('#answerOne').html(questionArray[index].answerOptions[0])
$('#answerTwo').html(questionArray[index].answerOptions[1])
$('#answerThree').html(questionArray[index].answerOptions[2])
$('#answerFour').html(questionArray[index].answerOptions[3])

$('#answerOne').on('click', function() {
	
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


