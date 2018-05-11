$(document).ready(function() {

	crystals = ['assets/images/blueRupee.jpg','assets/images/redRupee.png','assets/images/silverRupee.png','assets/images/yellowRupee.jpg'];

	var counter = 0;
	var wins = 0;
	var losses = 0;
	$('#win').text(wins);
	$('#loss').text(losses);
	
	newCrystals();
	newGame();

	function newCrystals () {
		var num = []
			while(num.length < 4){
			  var randomnum = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< num.length; i++){
				if (num[i] == randomnum){
					found = true; break
				}
			  }
			  if(!found)num[num.length]=randomnum;
			}	

		for (i = 0; i < num.length; i++) {
			var crystal = $('<img>');
			crystal.attr('data-num', num[i]);
			crystal.attr('src', crystals[i]);
			crystal.attr('alt', 'crystals');
			crystal.addClass('crystalImage')
			$('#crystals').append(crystal);
		}
	}

	function newGame() {

		counter = 0;
		$('#yourScore').text(counter);

		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
			}

		var numGuess = randomIntFromInterval(19,120);

		$('.value').text(numGuess);


		$('.crystalImage').on('click', function(){
		    counter = counter + parseInt($(this).data('num'));
		   
		    $('#yourScore').text(counter);

		    if (counter == numGuess){
		      $('#status').text('You won!!!!');
		      wins ++;
		      $('#win').text(wins);
		      $('#crystals').empty();
		      newCrystals();
		      newGame();
		        
		    } else if ( counter > numGuess){
		        $('#status').text('You lost!')
		        losses ++;
		        $('#loss').text(losses);
		        console.log(losses)
		        $('#crystals').empty();
		        newCrystals();
		        newGame();
		    }
		});
	}

});