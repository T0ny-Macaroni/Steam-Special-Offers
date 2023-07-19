// Declared userInput globally to make it accessible in the function
var userInput = $('#searchInput').val();
var gameDetails;
var data;
var gameId;
var idDetails;
var savedId;
var reviews;

$('#searchBtn').on('click', function () {
	// Capture the user input when the search button is clicked
	userInput = $('#searchInput').val();

	if (userInput) {

		var lnk = $('#lnk');
		lnk.href = 'https://games-details.p.rapidapi.com/search/' + userInput;

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
	
		// if (response.name !== [' ']) {
		// 	$('#game1').text('No results');
		// } else {
			$('#game1').text(response[0].name);

		// if (response.name !== [' ']) {
		// 	$('#game2').text('No results')
		// } else {
			$('#game2').text(response[1].name);

		// if (response.name !== [" "]) {
			// $('#game3').text('No results');
		// } else {
			$('#game3').text(response[2].name);
		populateStorage()
		function populateStorage() {
			localStorage.setItem('Game Price', response[0].price)
			localStorage.setItem('Game Price', response[1].price)
			localStorage.setItem('Game Price', response[2].price)
			
		
		$('#game1').data('myval', response[0].id).attr('data-myval', response[0].id);
		$('#game2').data('myval', response[1].id).attr('data-myval', response[1].id);
		$('#game3').data('myval', response[2].id).attr('data-myval', response[2].id);
		}
	})
}


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
		let idDetails = JSON.stringify(response);
		localStorage.setItem('Game Details', idDetails);
	});
};

$('#game1').on('click', function () {
	var gameIdVal = $('#game1').data('myval'); //getter
	performIdSearch(gameIdVal);
	let idDetails = JSON.stringify(gameIdVal);
	localStorage.setItem('Game ID', idDetails);
	$('a').attr('href', 'details.html').click(function (e) {
		e.preventDefault();
		if (this.href) {
			var target = this.href;
			setTimeout(function () {
				window.location = target;
			}, 1500);
		}
	});
});

$('#game2').on('click', function () {
	var gameIdVal = $('#game2').data('myval'); //getter;
	performIdSearch(gameIdVal);
	let idDetails = JSON.stringify(gameIdVal);
	localStorage.setItem('Game ID', idDetails);
	$('a').attr('href', 'details.html').click(function (e) {
		e.preventDefault();
		if (this.href) {
			var target = this.href;
			setTimeout(function () {
				window.location = target;
			}, 1500);
		}
	});
});

$('#game3').on('click', function () {
	var gameIdVal = $('#game3').data('myval'); //getter
	performIdSearch(gameIdVal);
	let idDetails = JSON.stringify(gameIdVal);
	localStorage.setItem('Game ID', idDetails);
	$('a').attr('href', 'details.html').click(function (e) {
		e.preventDefault();
		if (this.href) {
			var target = this.href;
			setTimeout(function () {
				window.location = target;
			}, 1500);
		}
	});
});


var memeBtn = $('#memeBtn');
var memeImg = $('#memeImg');

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

function generateMeme() {
	$.ajax(memeGenerator).done(function (response) {
		displayMeme(response.url);
	});
}

function displayMeme(url) {
	const memeContainer = $('#memeContainer');
	memeContainer.empty();
	const memeImg = $('<img>').attr('src', url);
	memeImg.on('error', function () {
		memeImg.attr('src', 'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjBmNGpiNGgyMnhlcmowa3BpaWFtaTk4ajN5YW1vdDlhcmx1dnRzYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/14uQ3cOFteDaU/giphy.gif')
		var messageP = $('<p>Sorry, this image is not available:(</p>');
		memeContainer.append(messageP);
	})
	memeContainer.append(memeImg);
}
$('#memeBtn').on('click', generateMeme);


document.addEventListener('DOMContentLoaded', () => {
	// Functions to open and close a modal
	function openModal($el) {
		if (!userInput) {
			$('input:text').attr('placeholder', 'Input a Game');
		} else {
			$el.classList.add('is-active');
		};
	}

	function closeModal($el) {
		$('#game1').text('');
		$('#game2').text('');
		$('#game3').text('');

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


// Dark/light theme toggle switch
// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var dark = document.getElementById("darkMode");

var mode = "dark";

themeSwitcher.addEventListener("click", function () {
	if (mode === "dark") {
		mode = "light";
		dark.setAttribute("id", "lightMode");
	}
	else {
		mode = "dark";
		dark.setAttribute("id", "darkMode");
	}
});
