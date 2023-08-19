import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h5 className="date">
        <FormattedDate date={props.info.date} />
      </h5>
      <div className="time">
        <FormattedTime date={props.info.date} />
      </div>
      <div className="City">
        <h1>{props.info.city}</h1>
      </div>
      <div className="weather-temperature">
        <span className="temperature">
          {Math.round(props.info.temperature)}
        </span>
        <span className="unit">
          <sup>°C</sup>
        </span>
      </div>
      <h5>{props.info.description}</h5>
      <div className="weather-icon">
        <img src={props.info.iconUrl} alt={props.info.description} />
      </div>
      <div className="row">
        <div className="col-6">Humidity: {props.info.humidity}%</div>
        <div className="col-6">Wind speed: {props.info.wind} km/h</div>
      </div>
    </div>
  );
}
