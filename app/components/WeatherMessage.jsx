var React = require('react');

var WeatherMessage = ({temp, location}) => {
	return(
		<div>
			<p>Location: {location}</p>
			<p>Temp: {temp}</p>
		</div>
	);
};

module.exports = WeatherMessage;