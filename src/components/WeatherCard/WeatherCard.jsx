import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";


function WeatherCard({ weatherData }) {
    const filteredWeatherOptions = weatherOptions.filter((option) => {
        return (
            option.day === weatherData.isDay &&
            option.condition === weatherData.condition
        );
    });

    let weatherOption;
    if (filteredWeatherOptions.length === 0) {
        weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    } else {
        weatherOption = filteredWeatherOptions[0];
    }

    const weatherOptionUrl = filteredWeatherOptions[0]?.url;
    const weatherOptionCondition = filteredWeatherOptions[0]?.condition;


    return (
        <section className="weather-card">
          <p className="weather-card__temp">
            {weatherData.temp.F} &deg; F</p>
          <img
            src={weatherOptionUrl}
            alt={weatherOptionCondition}
            className="weather-card__image"
          />
        </section>
      );

}

export default WeatherCard;