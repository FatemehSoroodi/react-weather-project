import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "SLEET",
    "shower-rain-daynight": "SLEET",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunderstorm-day": "SLEET",
    "thunderstorm-night": "SLEET",
    "snow-day": "SNOW",
    "snow-night": "SNOW",
    "mist-day": "WIND",
    "mist-night": "WIND",
  };
  if (props.code === "clear-sky-day") {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#fac70b"
        size={props.size}
        animate={true}
      />
    );
  } else {
    return (
      <ReactAnimatedWeather
        icon={codeMapping[props.code]}
        color="#FAF8F5"
        size={props.size}
        animate={true}
      />
    );
  }
}
