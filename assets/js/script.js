//Links to steam game details API
const singleSearch = {
	async: true,
	crossDomain: true,
	url: 'https://games-details.p.rapidapi.com/search/elden',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
	}
};

$.ajax(singleSearch).done(function (response) {
	console.log(response);
});

const pageSearch = {
	async: true,
	crossDomain: true,
	url: 'https://games-details.p.rapidapi.com/page/1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
	}
};

$.ajax(pageSearch).done(function (response) {
	console.log(response);
});

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

