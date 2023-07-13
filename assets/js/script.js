//Links to steam game details API
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://games-details.p.rapidapi.com/search/cs',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8eae8fe45emsh8cde312977721fcp1a1962jsn1c9b69406dde',
		'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});