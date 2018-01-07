$(document).ready(function(){
var giphArray = ['Athens', 'Sponge Bob','Homer Simpson', 'Crying Jordan', 'Julius Caesar', 'Pokemon', 'Eagles', 'Doge', 'Cats'];
var APIKEY = '&api_key=o0mepy6dhm835wqRWR5D9FADRYhZNSGg'

$(document).on('click', '.dank-button', showGifs);
$(document).on('click', '#add-gif', addGifButton);
$(document).on('click', '.generatedGif', animateGif);

function createButtons () {
	$('.button-div').empty();
	for (i = 0; i < giphArray.length; i++) {
		var gifButton = $('<button>');
		gifButton.addClass('btn bt-success');
		gifButton.addClass('dank-button');
		gifButton.attr('data-name', giphArray[i]);
		gifButton.text(giphArray[i]);
		$('.button-div').append(gifButton);	
		console.log(gifButton.attr('data-name', giphArray[i]));

	}
}

function addGifButton (){
	var gifSearch = $('.search-input').val().trim()
	if ( gifSearch === ''){
		return false;
	}

	giphArray.push(gifSearch);
	createButtons();
	$('.search-input').val('');
	return false;
	
}

function showGifs (){
	var dankGif = $(this).attr('data-name');
	var APIKEY = '&api_key=o0mepy6dhm835wqRWR5D9FADRYhZNSGg';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + dankGif + APIKEY + '&limit=10';
	console.log(queryURL);
	$.ajax({
		url:queryURL,
		method: 'GET'
	})

	.done(function(response){
		console.log(response);
		$('.giph-display').empty();
		var  queryResult = response.data
		if (queryResult === ''){
			alert('Sorry, no dank gifs for the search');
		}

		for (var i = 0; i < queryResult.length; i++) {
			var newGifDiv = $('<div>');
			var rating = $('<p>').text('Rating ' + queryResult[i].rating);
			console.log(queryResult[i].rating);
			newGifDiv.append(rating);
			var newGifImage = $('<img>');
			newGifImage.attr('src', queryResult[i].images.fixed_height_small_still.url);
			newGifImage.attr('data-animate',queryResult[i].images.fixed_height_small.url);
			newGifImage.attr('data-still', queryResult[i].images.fixed_height_small_still.url);
			newGifImage.attr('data-state', 'still');
			newGifImage.addClass('generated-Gif');
			newGifDiv.append(newGifImage);
			$('.giph-display').prepend(newGifDiv);
			} 
	});

}


 function animateGif (){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
}

createButtons ();






});