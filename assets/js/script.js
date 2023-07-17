// Declared userInput globally to make it accessible in the function
var userInput;
var gameDetails;
var data;

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
		var gameId = response[0].id;
		console.log(gameId);
		performIdSearch(gameId);
    // $('#game1').text(response[0].name);
    // $('#game2').text(response[1].name);
    // $('#game3').text(response[2].name);
    for (let i = 0; i < response.length; i++) {
      const gameName = response[i].name;
      $('#game1').text(gameName);
      $('#game2').text(gameName);
      $('#game3').text(gameName);
  }
	});
};

//Performs a single game search based on a game's ID (we previously got data from a game search + user Input)
function performIdSearch(gameId) {
	const idSearch = {
		async: true,
		crossDomain: true,
		url: 'https://games-details.p.rapidapi.com/single_game/' + gameId,
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
			'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
		}
	};

	$.ajax(idSearch).done(function (response) {
		console.log(response);
	});
};

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


document.addEventListener('DOMContentLoaded', () => {
	// Functions to open and close a modal
	function openModal($el) {
		$el.classList.add('is-active');
	}

	function closeModal($el) {
		$el.classList.remove('is-active');
	}

	function closeAllModals() {
		(document.querySelectorAll('.modal') || []).forEach(($modal) => {
			closeModal($modal);
		});
	}

	// Add a click event on buttons to open a specific modal
	(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
		const modal = $trigger.dataset.target;
		const $target = document.getElementById(modal);


		$trigger.addEventListener('click', () => {
			openModal($target);
		});
	});

	// Add a click event on various child elements to close the parent modal
	(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
		const $target = $close.closest('.modal');

		$close.addEventListener('click', () => {
			closeModal($target);
		});
	});
});