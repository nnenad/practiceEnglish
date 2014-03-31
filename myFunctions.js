var answers = ['knock off', 'tighten', 'splash', 'rip off', 'set back', 'pick up'];
		
		function showAnswers(){
			var answers = document.getElementsByClassName('answer');
			for(var i=0; i < answers.length; i++){
				answers[i].style.visibility = 'visible';
			}
			hightLightAnwers();
			document.getElementById('check').style.display = 'none';
			document.getElementById('again').style.visibility = 'visible';
		};
		
		function checkAnswer(yourAnswer, rightAnswer){
			return yourAnswer == rightAnswer;
		}
		
		function getAnswer(index){
			var selectTag = document.getElementById('answer'+index);
			return selectTag.options[selectTag.selectedIndex].text;
		}
		
		function hightLightAnwers(){
		
			for(var i = 0; i < answers.length; i++){
				if(getAnswer(i+1) == answers[i]){
					hightlightRight(i+1);
				}else{
					hightlightWrong(i+1);
				}
			}
		}
		
		
		
		function hightlightWrong(index){
			var selectTag = document.getElementById('answer'+index);
			selectTag.style.textDecoration = "line-through";
			selectTag.style.color = 'red';
			selectTag.disabled = true;
		}
		
		function hightlightRight(index){
			var selectTag = document.getElementById('answer'+index);
			selectTag.style.color = 'green';
			selectTag.disabled = true;
		}
