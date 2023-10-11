function submit () {
    var score = 0;
    var totalQuestions = document.getElementsByName('question').length ; 
	var results = document.getElementById('results');
    for (var i = 0; i < totalQuestions; i++) {
        var selectedOption = 
		document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            if (selectedOption.value === 'a') {
                score += 0 ; 
				
            }
			else if (selectedOption.value === 'b') {
                score += 1 ; 
				
            }
			else if (selectedOption.value === 'c') {
                score += 2 ; 
				
            }
        }
		else {
			results.style = "color : red ; " ; 
			results.innerHTML = "You should answer all the questions. ";
			return ; 
				
		}
		
    }

    results.style = "color : solid black" ; 
	
	if (score < totalQuestions * 2 / 3) {
		results.innerHTML = 'Total points : ' + score + ' You are extroverted' ; 
		results.href = "#" ; 
		
	}
	else if (score < totalQuestions) {
		results.innerHTML = 'Total points : ' + score + ' You are both introverted and extroverted.' ; 
		results.href = "#" ; 
		
	}
	else {
		results.innerHTML = 'Total points : ' + score + ' You are introverted' ; 
		results.href = "#" ; 
		
	}
	
}

function settings () {
	let i = 0 ; 
	let	j = 0 ; 
	const alternative = [
		[
			'Face-to-face conversations' , 
			'Phone calls or video chats' , 
			'Text messages or emails'
		] , 
		[
			'Exercise or physical activity' , 
			'Meditation or relaxation techniques' , 
			'Talking to someone you trust or seeking emotional support'
		] , 
		[
			'Exploring nature and hiking in the mountains' , 
			'Relaxing at home with a good book or movie' , 
			'Socializing with friends at parties or events'
		] , 
		[
			'Face them head-on with determination and confidence' , 
			'Take a step back, analyze the situation, and plan your approach' , 
			'Seek advice and support from friends and family'
		] , 
		[
			'Action-packed movies with lots of excitement and adventure' , 
			'Thought-provoking films that explore deep themes and emotions' , 
			'Romantic comedies and feel-good movies that make you laugh and cry'
		] , 
		[
			'Confront the issue directly and communicate openly' , 
			'Avoid conflicts and find compromises to maintain harmony' , 
			'Seek mediation from a neutral third party to resolve the dispute'
		] , 
		[
			'Excitedly embrace new opportunities and challenges' , 
			'Approach them cautiously, considering the potential risks and benefits' , 
			'Prefer sticking to familiar routines and activities'
		]
		
	] ; 
	const question = ["What's your preferred mode of communication?" , 
	'How do you handle stress?' , 
	'What is your ideal way to spend a weekend?' , 
	'How do you handle challenges in life?' , 
	'What type of movies do you enjoy the most?' , 
	'How do you prefer to handle conflicts with others?' , 
	'What is your approach to trying new things or experiences?'] ; 
	
	const questionByName = document.getElementsByName('question') ; 
	if (questionByName.length != question.length ) {
		alert('Questions and questions dont mach in length ! ') ; 
		return ; 
		
	}
	if (question.length != alternative.length ) {
		console.log ('Question and alternative vectors dont match ! ') ; 
		console.log (question.length + ' ' + alternative.length) ; 
		
		return  ;
		
	}
	for( i=0 ; i < questionByName.length ; i ++ ) {
		questionByName[i].innerHTML = 
		question[i] ; 
		const alternativeByName = document.getElementsByName('l' + i) ; 
		if (alternativeByName.length != alternative[i].length ) {
			alert('Alternatives and alternatives dont mach in length ! ') ; 
			return ; 
			
			
		}
		for ( j=0 ; j < alternativeByName.length ; j ++ ) {
			alternativeByName[j].innerHTML = 
			alternative[i][j] ;
			
			
		}
	}
	
	
}
