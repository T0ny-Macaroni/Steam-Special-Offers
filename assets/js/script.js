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

$.ajax(settings).done(function (response) {
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

$.ajax(settings).done(function (response) {
	console.log(response);
});