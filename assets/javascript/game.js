// Star Trek Questions

var triviaQuestions = [{
	question: 'The theme for Star Trek The Next Generation was taken from which Star Trek feature film?',
	answerOptions: ['The Motion Picture', 'The Wrath of Kahn', 'The Search for Spock', 'The Voyage Home'],
	answer: 0
},
{	
	question: 'What is the name of the Vulcan ritual that purges all emotions?',
	answerOptions: ['Kolinahr', 'Pon farr', 'Katra', 'Kal-if-fee'],
	answer: 0 
},
{
	question: 'Star Trek II The Wrath of Kahn is loosly a sequal to which orignal episode?',
	answerOptions: ['Amok Time', 'Miri', 'Space Seed', 'The Trouble with Tribbles'],
	answer: 2
},
{
	question: 'In Star Trek The Next Generation, who is Data\'s creator?',
	answerOptions: ['Kahn Noonien Singh', 'Chris Metzen', 'Noonian Soong', 'Leah Brahms'],
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
	question: 'What is the name of the episode where Kirk fought a Gorn?',
	answerOptions: ['Let That Be Your Last Battlefield', 'Mirror, Mirror', 'Arena', 'Balance of Terror'],
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

var gifArray = ['answerGif0', 'answerGif1', 'answerGif2', 'answerGif3', 'answerGif4', 'answerGif5', 'answerGif6', 
			'answerGif7', 'answerGif8', 'answerGif9'];

// other variables
var correctAnswer;
var incorrectAnswer;
var unanswered;
var currentQuestion;
var questionAnswer;
var userChoice;
var answered;
var answerGif;

//Start button onClick action
$('#startBtn').on('click', function() {
	$(this).hide(); 
	startGame();
});

//Replay button onClick action
$('#replayBtn').on('click', function() {
	$(this).hide();
	startGame();
});


//startGame function, sets variables to 0, calls nextQuestion function
function startGame() {
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	currentQuestion = 0;
	nextQuestion();
};

//nextQuestion emptys various divs, sets up question from trivaQuestions array, sets up intervals 
function nextQuestion() {
	$('#answer-area').empty();
	$('#correct').empty();
	$('#wrong').empty();
	$('#not').empty();
	$('#question-display').empty();
	$('#gif').empty();
	$('#question-area').html(triviaQuestions[currentQuestion].question)
	for (var i = 0; i < 4; i++) {
 		var answerDiv = $('<div>');
		answerDiv.addClass('test');
 		answerDiv.html(triviaQuestions[currentQuestion].answerOptions[i])
 		answerDiv.attr('data-answer', i)
 		$('#answer-area').append(answerDiv);
	};

	countdown();
	$('.test').on('click',function(){
		userChoice = $(this).data('answer');
		clearInterval(interval);
		answer();
	});
};

//answer function is pretty much the game logic
function answer() {
	var answerList = triviaQuestions[currentQuestion].answer
 	questionAnswer = triviaQuestions[currentQuestion].answerOptions[triviaQuestions[currentQuestion].answer];
 	answerGif = $('<img>')
 	answerGif.attr('src', 'assets/images/' + gifArray[currentQuestion] + '.gif')
 	$('#gif').append(answerGif);
	if (userChoice == answerList && answered == true) {
		correctAnswer++;
		$('#question-area').empty();
		$('#answer-area').empty();
		$('#correct').html('You got it!');
	}

	else if (userChoice != answerList && answered == true) {
		incorrectAnswer++;
		$('#question-area').empty();
		$('#answer-area').empty();
		$('#wrong').html('You missed it!');
		$('#question-display').text('The correct answer was: ' + questionAnswer);
	}

	else {
		unanswered++;
		answered = true;
		$('#question-area').empty();
		$('#answer-area').empty();
		$('#not').html("You forgot to answer!");
		$('#question-display').text('The correct answer was: ' + questionAnswer);
	}

	if (currentQuestion == triviaQuestions.length-1) {
		setTimeout(score, 5000);
	}

	else {
		currentQuestion++;
		setTimeout(nextQuestion, 3000);
	}

}; 

//countdown and showCount functions sets up and displays interval. Also contains answered variable
function countdown() {
	time = 30;
	$('#timer-area').html('<h3>Time Remaining: ' + time + '</h3>');
	answered = true;
	interval = setInterval(showCount, 1000)
};

function showCount() {
	time--;
 	$('#timer-area').html('<h3> Time Remaining: ' + time + '</h3>');
 	if (time < 0) {
 		clearInterval(interval);
 		answered = false;
 		answer();
 	}
};

//score function empties divs, displays score, and replay button
function score() {
	$('#timer-area').empty();
	$('#gif').empty();
	$('#correct').html('you got: ' + correctAnswer + ' right');
	$('#wrong').html('you got: ' + incorrectAnswer + ' wrong');
	$('#not').html('you didn\'t answer: ' + unanswered);
	$('#replayBtn').show();
	$('#replayBtn').html('Play Again?');
}

