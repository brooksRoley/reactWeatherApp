var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=df4b40a4bf060e1d285db5104f171408&units=imperial';

module.exports = {
	getTemp: function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message) {
			  throw new Error('Unable to fetch weather.');
			} else {
				return res.data.main.temp;
			}
		}, function(res){
			// console.log('res: ' + res)
			throw new Error("unable to complete axios api call in openweathermap");
			// throw new Error(res.data.message);
		});

	},
}