import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h5 className="date">Sunday, 29 May</h5>
      <div className="time">13:54</div>
      <div className="City">
        <h1>Qeshm</h1>
      </div>
      <div className="weather-temperature">
        <span className="temperature">34</span>
        <span className="unit">
          <sup>°C</sup>
        </span>
      </div>
      <h5>Clear</h5>
      <div className="weather-icon">
        <img
          src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
          alt="clear"
        />
      </div>
      <div className="row">
        <div className="col-6">Humidity: 58%</div>
        <div className="col-6">Wind speed: 2 km/h</div>
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
}
