$(document).ready(function() {
var tvShow = ["The Office", "Parks and Rec", "Baskets", "Archer", "Golden Girls", "The Good Place", "Master of None", "Broad City", "Rick and Morty", "Difficult People"];

//populate buttons on DOM from strings in tvShow array
function renderButtons() {
	for (var i = 0; i < tvShow.length; i++) {
		var showbutton = $("<button>");
		showbutton.html(tvShow[i]);
		showbutton.addClass("tv-button");
		showbutton.attr("data-name", tvShow[i]);
		$("#buttondiv").append(showbutton);
	}
}

//add a new button for user input
$("#add-show").on("click", function() {
	event.preventDefault();

	var newShow = $("#show-input").val();
	tvShow.push(newShow);
	$("#buttondiv").empty();
	renderButtons();
})

//click event for movie button
$("#buttondiv").on("click", ".tv-button", function() {
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + $(this).attr("data-name") + "&limit=10&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url:queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
	})
})

renderButtons();
})
