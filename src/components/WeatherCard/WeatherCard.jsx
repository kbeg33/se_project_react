import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";


function WeatherCard({ weatherData }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

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
            {currentTemperatureUnit === "F" ? weatherData.temp.F : weatherData.temp.C} &deg; {currentTemperatureUnit}</p>
          <img
            src={weatherOptionUrl}
            alt={weatherOptionCondition}
            className="weather-card__image"
          />
        </section>
      );

}

export default WeatherCard;