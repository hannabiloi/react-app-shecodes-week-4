import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function Weather(props) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.place}&appid=f96a36c366f556dae54ef30478f423d0&units=metric`;
  let [temperature, setTemperature] = useState(null);
  let [weather, setWeather] = useState("");
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState();
  let [temperatureMax, setTemperatureMax] = useState(null);
  let [temperatureMin, setTemperatureMin] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setWeather(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setTemperatureMax(response.data.main.temp_max);
    setTemperatureMin(response.data.main.temp_min);
  }

  axios.get(url).then(showTemperature);

  return (
    <div className="Weather">
      <h1>{props.place}</h1>
      <h2>date</h2>
      <div className="row justify-content-md-center current-weather align-items-center">
        <div className="col-4">
          <span id="temp">{Math.round(temperature)}</span>
          <span href="#" class="active" id="celsius">
            °C
          </span>
          |
          <span href="#" id="fahrenheit">
            °F
          </span>
        </div>
        <div className="col-4">
          <span>{humidity}%</span>
          {/* <img
              src="http://openweathermap.org/img/wn/{icon}@2x.png"
              alt="weather.main"
              class="main-icon"
              id="icon"
            /> */}
        </div>
        <div class="col-4" id="weather-sky">
          {weather}
        </div>
      </div>
      <div class="row current-conditions">
        <div class="col-6 text-start">
          <div>
            <i class="bi bi-thermometer-high"></i>
            <span id="temp-max">{Math.round(temperatureMax)}</span>°C
          </div>
          <div>
            <i class="bi bi-thermometer-low"></i>
            <span id="temp-min">{Math.round(temperatureMin)}</span>°C
          </div>
        </div>
        <div class="col-6 text-end">
          <div>
            Wind <i class="bi bi-wind"></i>
          </div>
          <div>
            <span id="wind-speed">{wind}</span> km/h
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
