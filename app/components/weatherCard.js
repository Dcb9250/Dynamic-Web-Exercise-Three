import WeatherIcon from "./WeatherIcon"

export default function WeatherCard({
	city,
	cloudiness,
	currentTemp,
	highTemp,
	humidity,
	lowTemp,
	weatherType,
	windSpeed,
}) {
	console.log({ cloudiness });
	const cloudinessPercentage = 99 - cloudiness;
	const background = `linear-gradient(90deg, white, ${cloudinessPercentage}%, grey)`;
	return (
		<div style={{ background }}>
			<h2>{city}</h2>
			<p>Current Temperature: {currentTemp}</p>
			<p>High Temperature: {highTemp}</p>
			<p>Low Temperature: {lowTemp}</p>
			<p>Cloudiness: {cloudiness}</p>
			<p>Humidity: {humidity}</p>
			<p>Wind Speed: {windSpeed}</p>
			weatherType = {weatherType}
            <WeatherIcon weatherType= {weatherType}/>
		</div>
	);
}
