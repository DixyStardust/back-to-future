const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://goquiq-quiq-v1.p.rapidapi.com/%7BPATH%7D",
	"method": "GET",
	"headers": {}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});