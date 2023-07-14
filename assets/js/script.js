// This should capture the user input on the search bar 
function appendSearch() {
	var userInput = document.getElementById(input).value;
	var lnk = document.getElementById(lnk)
	lnk.href = 'https://games-details.p.rapidapi.com/search/' + userInput;
console.log(userInput);
}



//Links to steam game details API
const singleSearch = {
	async: true,
	crossDomain: true,
	url: 'https://games-details.p.rapidapi.com/search/ + userInput +',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
	}
};

$.ajax(singleSearch).done(function (response) {
	console.log(response);
});

// const pageSearch = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://games-details.p.rapidapi.com/page/1',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
// 		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
// 	}
// };

$.ajax(pageSearch).done(function (response) {
	console.log(response);
});
// Controls the meme generator
const memeGenerator = {
	async: true,
	crossDomain: true,
	url: 'https://meme-generator11.p.rapidapi.com/meme',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8eae8fe45emsh8cde312977721fcp1a1962jsn1c9b69406dde',
		'X-RapidAPI-Host': 'meme-generator11.p.rapidapi.com'
	}
};

$.ajax(memeGenerator).done(function (response) {
	console.log(response);
});
// Displays youtube videos on the search page
const youtubeSearch = {
	async: true,
	crossDomain: true,
	url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8eae8fe45emsh8cde312977721fcp1a1962jsn1c9b69406dde',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

$.ajax(youtubeSearch).done(function (response) {
	console.log(response);
});

