$(document).ready(function(){

// Declaration of variables
	var quote;
	var author;

// create function
	function getNewQuote(){

// request api to retrive data
		$.ajax({
			url : "http://api.forismatic.com/api/1.0/",
			jsonp : "jsonp",
			dataType : "jsonp",
			data : {
				method : "getQuote",
				format : "jsonp",
				lang : "en"
			},
			success : function(response){
				quote = response.quoteText;
				author = response.quoteAuthor;
				$("#quote").text(quote);
				if(author){
					$("#author").text("--" + author);
				}
				else{
					$("#author").text("--unknown");
				}
			}
		});
	}

// calling function when web page loads
	getNewQuote();

// calling function when user clicks on the next button to retrive the next quote
	$("#next").on("click", function(event){
		event.preventDefault();
		getNewQuote();
	});

// calling fuction when user clicks on the share button to share the quote on the twitter
	$("#share").on("click", function(event){
		event.preventDefault();
		window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote+" -- "+author));
	});
});