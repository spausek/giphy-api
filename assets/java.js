$(document).ready(function(){
var giphArray = ['Athens', 'Sponge Bob','Homer Simpson', 'Crying Jordan', 'Julius Caesar', 'Pokemon', 'Gaddafi'];
var APIKEY = '&api_key=o0mepy6dhm835wqRWR5D9FADRYhZNSGg'


function createButtons () {
	//$('.button-div').empty();
	for (i = 0; i < giphArray.length; i++) {
		var gifButton = $('<button>');
		gifButton.addClass('btn bt-success');
		gifButton.addClass('dank-button');
		gifButton.attr('data-name', giphArray[i]);
		gifButton.text(giphArray[i]);
		$('.button-div').append(gifButton);	

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

	});




}


createButtons ();
showGifs ();





});