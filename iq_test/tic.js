function submit () {
    var score = 0;
    var totalQuestions = document.getElementsByName('question').length ; 
	var results = document.getElementById('results');
	const answer = [
	'a' , 'a' , 'd' , 'c' , 'd' , 'c' , 'd' , 'a' , 
	'c' , 'b' 
	
	] ; 
	
    for (var i = 0; i < totalQuestions; i++) {
        var selectedOption = 
		document.querySelector('input[name="q' + i + '"]:checked');
        if (selectedOption) {
            if (selectedOption.value === answer[i] ) {
                score += 1 ; 
				
            }
        }
		else {
			results.style = "color : red ; " ; 
			results.innerHTML = "You should answer all the questions. ";
			return ; 
				
		}
		
    }
	results.style = "color : black ; " ; 

	switch(true ) {
		case (score <= 3)  : 
		results.innerHTML = "You are Below Average. " ; 
		break ; 
		case (score <= 6) : 
		results.innerHTML = "You are Average. " ; 
		break ; 
		case (score <= 8) : 
		results.innerHTML = "You are Above Average. " ; 
		break ; 
		case (score <= 10) : 
		results.innerHTML = "You are Exceptional. " ; 
		break ; 
		
	}
	return ; 
	
	
}

function settings () {
	let i = 0 ; 
	let	j = 0 ; 
	
	
	const alternative = alternativeArray () ; 
	const question = questionArray () ; 
	
	
	
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

function questionArray () {
	
	/*
	
	*/
	/*
	fetch("myText.txt")
	.then((res) => res.text())
	.then((text) => {
	// do something with "text"
		document.getElementById('results').innerHTML = 
		text ; 
		
	})
	.catch((e) => console.error(e)); 
	return ; 
	
	*/
	
	
	const question = ["What is the next number in the sequence: 2, 4, 8, 16, ___?" , 
	'If all Zips are Zorks and all Zorks are Zaps, then all Zips are definitely Zaps.' , 
	'Which one of the five is least like the other four?' , 
	'If a plane crashes on the border of the United States and Mexico, where do they bury the survivors?' , 
	'If you rearrange the letters "CIFAIPC," you would have the name of a:' , 
	"Mary’s father has five daughters: Nana, Nene, Nini, Nono. What is the fifth daughter's name?" , 
	"Which of the following is the odd one out?" , 
	"If a shirt costs $20 more than a tie, and the total cost of the shirt and tie is $50, how much does the tie cost?" , 
	"What comes next in the pattern: 1, 4, 9, 16, ___?" , 
	"Complete the analogy: Hand is to Glove as Foot is to ___?"
	
	] ; 
	return question ; 
	
}
function alternativeArray () {
	const alternative = [
		[
			'32' , 
			'24' , 
			'64' , 
			'20'
		] , 
		[
			'True' , 
			'False' 
		] , 
		[
			'Dog' , 
			'Mouse' , 
			'Lion' , 
			'Snake' , 
			'Elephant' 
			
		] , 
		[
			'United States' , 
			'Mexico' , 
			'Somewhere else'
		] , 
		[
			'City' , 
			'Animal' , 
			'Ocean' , 
			'Country' 
			
			
		] , 
		[
			'Nunu' , 
			'Noni' , 
			'Mary' , 
			'None of the above' 
			
		] , 
		[
			'Square' , 
			'Triangle' , 
			'Circle' , 
			'Sphere'
			
		] , 
		[
			'10$' , 
			'15$' , 
			'20$' , 
			'25$' 
			
		] , 
		[
			'25' , 
			'36' , 
			'49' , 
			'64' 
			
		] , 
		[
			'Sock' , 
			'Shoe' , 
			'Hat' , 
			'Leg'
			
		]
		
	] ; 
	return alternative ; 
	
}