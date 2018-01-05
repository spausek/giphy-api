$(document).ready(function(){
var giphArray = ['Athens', 'Sponge Bob','Homer Simpson', 'Crying Jordan', 'Julius Caesar', 'Pokemon', 'Gaddafi'];
var APIKEY = '&api_key=o0mepy6dhm835wqRWR5D9FADRYhZNSGg'

$(document).on('click', '.dank-button', showGifs);

function createButtons () {
	//$('.button-div').empty();
	for (i = 0; i < giphArray.length; i++) {
		var gifButton = $('<button>');
		gifButton.addClass('btn bt-success');
		gifButton.addClass('dank-button');
		gifButton.attr('data-name', giphArray[i]);
		gifButton.text(giphArray[i]);
		$('.button-div').append(gifButton);	
		//console.log(gifButton.attr('data-name', giphArray[i]));

	}
}

function showGifs (){
	var dankGif = $(this).attr('data-name');
	var APIKEY = '&api_key=o0mepy6dhm835wqRWR5D9FADRYhZNSGg';
	var queryURL = 'http://api.giphy.com/v1/gifs/search?q=' + dankGif + APIKEY;
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
			newGifDiv.addClass('generatedGif');
			var rating = $('<p>').text(queryResult[i].rating);
			console.log(queryResult[i].rating);
			newGifDiv.append(rating);
			var newGifImage = $('<img>');
			newGifImage.attr('src', queryResult[i].images.fixed_height_small_still.url);
			newGifImage.attr('data-still', queryResult[i].images.fixed_height_small_still.url);
			newGifImage.attr('data-state', 'still');
			newGifDiv.append(newGifImage);
			$('.giph-display').append(newGifDiv);
			} 
	

	});




}


createButtons ();
//showGifs ();





});