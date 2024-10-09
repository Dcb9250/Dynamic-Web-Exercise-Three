export default function WeatherCard({city, currentTemp, highTemp, lowTemp, cloudiness, humidity, windSpeed}) {
    return (
        <div>
            <h2>{city}</h2>
            <p>Current Temperature: {currentTemp}</p>
            <p>High Temperature: {highTemp}</p>
            <p>Low Temperature: {lowTemp}</p>
            <p>Cloudiness: {cloudiness}</p>
            <p>Humidity: {humidity}</p>
            <p>Wind Speed: {windSpeed}</p>
        </div>
    )
}