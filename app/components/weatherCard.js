import WeatherIcon from "./WeatherIcon";
import styles from "../page.module.css";

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
	const background = `radial-gradient(lightblue, ${cloudinessPercentage}%, grey)`;
	return (
		<div style={{ background }}>
			<div className={styles.main}>
				<div className={styles.card}>
					<div className={styles.bigInfo}>
						<h2>{city}</h2>
						<p>{currentTemp} F</p>
					</div>

					<div className={styles.weatherIcon}>
						<WeatherIcon weatherType={weatherType} />
					</div>
					<div className={styles.stats}>
						<div>High Temperature: {highTemp}</div>
						<div>Low Temperature: {lowTemp}</div>
						<div>Cloudiness: {cloudiness}</div>
						<div>Humidity: {humidity}</div>
						<div>Wind Speed: {windSpeed}</div>
						<div>WeatherType = {weatherType}</div>
					</div>
				</div>
			</div>
		</div>
	);
}
