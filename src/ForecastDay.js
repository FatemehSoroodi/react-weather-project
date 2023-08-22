import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">
        <WeatherIcon code={props.data.condition.icon} size={32} />
      </div>
      <div className="forecastTemperature">
        <span className="forecastTemperature-max">{maxTemperature()}</span>
        <span className="forecastTemperature-min"> {minTemperature()}</span>
      </div>
    </div>
  );
}
