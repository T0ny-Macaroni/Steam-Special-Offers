// This should capture the user input on the search bar 
// var userInput = $('#searchInput').val();
///////////////////////////////////////////////////////////////////////
//API keys are commented out to not waste calls
///////////////////////////////////////////////////////////////////////

// Declared userInput globally to make it accessible in the function
var userInput;

$('#searchBtn').on('click', function () {
	// Capture the user input when the search button is clicked
	userInput = $('#searchInput').val();

	if (userInput) {
		var lnk = $('#lnk');
		lnk.href = 'https://games-details.p.rapidapi.com/search/' + userInput;
		console.log(userInput);

		//Calling API function
		performSearch(userInput);
	} else {
		console.log('Invalid input');
	}
});

function performSearch(userInput) {
	const singleSearch = {
		async: true,
		crossDomain: true,
		url: 'https://games-details.p.rapidapi.com/search/' + userInput,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
			'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
		}
	};

	$.ajax(singleSearch).done(function (response) {
		console.log(response);
	});
};
///////////////////////////////////////////////////////////////////////
// !!! I commented it out for now!!!
// //Links to steam game details API
// const singleSearch = {
// 	async: true,
// 	crossDomain: true,
// 	//url: 'https://games-details.p.rapidapi.com/search/' + userInput,
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
// 		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
// 	}
// };

// $.ajax(singleSearch).done(function (response) {
// 	console.log(response);
// });
///////////////////////////////////////////////////////////////////////
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

// $.ajax(pageSearch).done(function (response) {
// 	console.log(response);
// });
///////////////////////////////////////////////////////////////////////
// Meme generator is DONE and working!
//I put variables here for now
var memeBtn = $('#memeBtn');
var memeImg = $('#memeImg');

const memeGenerator = {
	async: true,
	crossDomain: true,
	//url: 'https://meme-generator11.p.rapidapi.com/meme',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8eae8fe45emsh8cde312977721fcp1a1962jsn1c9b69406dde',
		'X-RapidAPI-Host': 'meme-generator11.p.rapidapi.com'
	}
};

function generateMeme() {
	$.ajax(memeGenerator).done(function (response) {
		console.log(response);
		displayMeme(response.url);
	});
}

function displayMeme(url) {
	const memeContainer = $('#memeContainer');
	memeContainer.empty();
	const memeImg = $('<img>').attr('src', url);
	memeContainer.append(memeImg);
}
$('#memeBtn').on('click', generateMeme);
///////////////////////////////////////////////////////////////////////

// Displays youtube videos on the search page
const youtubeSearch = {
	async: true,
	crossDomain: true,
	//url: 'https://youtube-search-results.p.rapidapi.com/youtube-search/?q=justin%2Bbieber',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '13c0ab065bmsh9eeb9e8413c0474p1a1ef8jsnb069211559f5',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};

$.ajax(youtubeSearch).done(function (response) {
	console.log(response);
});
///////////////////////////////////////////////////////////////////////
//Commented it out for now, changed the button function a bit and moved it up
// $('#searchBtn').on('click', function() {
// 	var lnk = $('#lnk');
// 	lnk.href = 'https://games-details.p.rapidapi.com/search/' + userInput;
// 	console.log(userInput);
// });

//conversion function for rupees into USD
// var conversionRate = 0.012;
// for (let i = 0; i < indianRupees.length; i++) {
// 	const rupees = indianRupees[i];
// 	const usd = rupees * conversionRate;
// 	console.log(`${rupees} INR = ${usd} USD`);
// }