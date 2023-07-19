function populateDetails() {
    var savedDetails = JSON.parse(localStorage.getItem('Game Details'));
    var savedId = JSON.parse(localStorage.getItem('Game ID'));
    console.log(savedId);
    console.log(savedDetails);

    $(".gameTitle").text(savedDetails.name);
    $(".description").text(savedDetails.desc);
    $(".publish").text('Publisher: ' + savedDetails.dev_details.developer_name);
    $("img").attr('src', savedDetails.images.screenshot[0]);
    $("#gameVideo").attr('src', savedDetails.images.videos[0]);

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
            $('#topReview').text(response[0].content);
        });
    }

    getTopReview();
    getFunnyReview();
    function getFunnyReview() {

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
            $('#funnyReview').text(response[0].content);
        });
    }
}
populateDetails()
convertINRtoUSD()


function convertINRtoUSD() {
    const amountString = localStorage.getItem('Game Price')
    const amountCleared = amountString.replace(/₹\s*/, "")
    const amountInteger = Number(amountCleared.replaceAll(',', ''));
    const exchangeRate = 0.012; // Exchange rate: 1 INR = 0.014 USD
    const convertedAmount = amountInteger * exchangeRate;
    let formattedAmount = convertedAmount.toFixed(2)
    $('.price').text('$ ' + formattedAmount);

}
