import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h5 className="date">Sunday, 29 May</h5>
        <div className="time">13:54</div>
        <div className="City">
          <h1>{weatherData.city}</h1>
        </div>
        <div className="weather-temperature">
          <span className="temperature">
            {Math.round(weatherData.temperature)}
          </span>
          <span className="unit">
            <sup>°C</sup>
          </span>
        </div>
        <h5>{weatherData.description}</h5>
        <div className="weather-icon">
          <img src={weatherData.iconUrl} alt={weatherData.description} />
        </div>
        <div className="row">
          <div className="col-6">Humidity: {weatherData.humidity}%</div>
          <div className="col-6">Wind speed: {weatherData.wind} km/h</div>
        </div>
        <form className="mb-3">
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-5">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary search w-100"
              />
            </div>
            <div className="col-2"></div>
          </div>
        </form>
      </div>
    );
  } else {
    const apiKey = "241b37tabc824f548d9of2bb0bbe3ed0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading..";
  }
}
