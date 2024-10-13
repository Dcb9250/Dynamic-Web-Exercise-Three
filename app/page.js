import WeatherCard from "./components/WeatherCard";
import styles from "./page.module.css";
import Header from "./components/Header";

export default async function Home() {
	const city = "Boston";
	const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=imperial`;

	const request = await fetch(queryURL);
	const weatherData = await request.json();

	return (
		<div className={styles.page}>
			<Header />
			<main className={styles.main}>
				<div className={styles.weatherCardWrapper}>
					<WeatherCard
						city={city}
						currentTemp={weatherData.main.temp}
						highTemp={weatherData.main.temp_max}
						lowTemp={weatherData.main.temp_min}
						cloudiness={weatherData.clouds.all}
						humidity={weatherData.main.humidity}
						windSpeed={weatherData.wind.speed}
						weatherType={weatherData.weather[0].main}
					/>
				</div>
			</main>
		</div>
	);
}
