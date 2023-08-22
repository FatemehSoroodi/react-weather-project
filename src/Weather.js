import React from "react";
import axios from "axios";
import "./Weather.css";
import { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Lodder from "./Lodder";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "241b37tabc824f548d9of2bb0bbe3ed0";

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <WeatherInfo info={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />

        <form className="mb-3" onSubmit={handleSubmit}>
          <div className="row mt-3">
            <div className="col-2"></div>
            <div className="col-5">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
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
    search();
    return (
      <div className="d-flex justify-content-center">
        <Lodder />
      </div>
    );
  }
}
