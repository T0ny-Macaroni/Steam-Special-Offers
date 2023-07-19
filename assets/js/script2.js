function populateDetails() {
	var savedDetails = JSON.parse(localStorage.getItem('Game Details'));
	var savedId = JSON.parse(localStorage.getItem('Game ID'));
	console.log(savedId);
	console.log(savedDetails);

	$(".gameTitle").text(savedDetails.name);
	$(".description").text(savedDetails.desc);
    $(".publish").text('Publisher: ' + savedDetails.dev_details.developer_name);
    
	$("#windowsRec").text(savedDetails.sys_req.window.recomm);
	$("#windowsMin").text(savedDetails.sys_req.window.min);
    
    function getTopReview() {
        const reviews = {
            async: true,
            crossDomain: true,
            url: `https://games-details.p.rapidapi.com/${savedId}/reviews/toprated/15`,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
                'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
            }
        };
        
        $.ajax(reviews).done(function (response) {
            console.log(response);
            $('#topReview').text(response[0].content);
        });
    }

	getTopReview();
    getFunnyReview();
function getFunnyReview(){

    const reviews2 = {
        async: true,
        crossDomain: true,
        url: `https://games-details.p.rapidapi.com/${savedId}/reviews/funny/30`,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '430c836d45msh0050ea49f6b8455p1f8a07jsn725aabd514c9',
            'X-RapidAPI-Host': 'games-details.p.rapidapi.com'
        }
    };
    
        $.ajax(reviews2).done(function (response) {
        console.log(response);
        $('#funnyReview').text(response[0].content);
        });
    }
}
populateDetails()


// conversion function for rupees into USD
// console.log(amountUSD);
// localStorage.setItem('Game Price1USD', amountString );
// amountInteger = parseInt(amountString);
// console.log(amountInteger);
// function convertINRtoUSD() {
//     const amountString = localStorage.getItem('Game Price1')
//     const amountCleared = amountString.replace( /₹\s*/, "")
//     console.log(amountCleared);
//     const amountInteger = Number(amountCleared);
//     console.log(amountInteger);
//     const exchangeRate = 0.014; // Exchange rate: 1 INR = 0.014 USD
//     const convertedAmount = amountInteger * exchangeRate; 
//     console.log("USD", convertedAmount);
//     //  convertedAmount.toFixed(2); // Return the converted amount with 2 decimal places
// }

// convertINRtoUSD()