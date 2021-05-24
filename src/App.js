import React, { useState } from "react";
import { Input, Button } from "@material-ui/core";
import CurrentWeather from "./Components/CurrentWeather.js";
import HourlyWeather from "./Components/HourlyWeather";
import DailyWeather from "./Components/DailyWeather";
import "./key";
import "./weather";
//import API_KEY from "./key";
       
//const API_KEY = process.env.REACT_APP_api_key;

const API_KEY = "29adca37f6a3e637b4733e6cf0272639"
function App() {

  const [forecastWeather, setForecastWeather] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [zipCode, setZipCode] = useState(24293);
  const [viewHourly, setViewHourly] = useState(false);
  const [viewDaily, setViewDaily] = useState(false);

  const changeZipCodeHandlier = (changeZipCode) => {
    setZipCode(changeZipCode.target.value);
  };

 const SetHourlyDaily = (changeZipCode) => {
  if (changeZipCode.target.innerHTML.length <= 18) {
    setViewHourly(false);
    setViewDaily(true);
  } else {
    setViewHourly(true);
    setViewDaily(false);
  }
};

 const getForecastWeather = (lat, lon) => {
  let zipCodeLink = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=8dd34cc1754438cba01bbd3c999e1a4a";
  fetch(zipCodeLink)
    .then((information) => {
      return information.json();
    })
    .then((CurrentPlace) => {
      setForecastWeather(CurrentPlace);
      console.log(forecastWeather)
    })
 };

 const getCurrentWeather = () => {
  let zipCodeLink = "https://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&units=imperial&appid=8dd34cc1754438cba01bbd3c999e1a4a";
  fetch(zipCodeLink)
    .then((information) => {
      return information.json();
    })
    .then((CurrentPlace) => {
      setCurrentWeather(CurrentPlace);
      console.log(currentWeather);
      getForecastWeather(CurrentPlace.coord.lat, CurrentPlace.coord.lon);
    })
 };
 
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Forge Weather App</h1>
      <p>Enter your zip code and click "VIEW CURRENT WEATHER" to view your the local weather for the zip code"</p>
      <Input type="number" value={zipCode} onChange={changeZipCodeHandlier} />
      <Button variant="contained" style ={{marginLeft: 100}} onClick={getCurrentWeather}>View Current Weather</Button>
      {currentWeather != null &&
        <CurrentWeather currentWeather={currentWeather} />
      }
    <div style={{marginTop:100}}>
          <Button variant="contained" style ={{marginRight: 50}} onClick={SetHourlyDaily}>View Hourly Weather</Button>
          <Button variant="contained" style ={{marginLeft: 50}} onClick={SetHourlyDaily}>View Daily Weather</Button>
          {forecastWeather != null && viewHourly && 
            <HourlyWeather forecastWeather={forecastWeather} />
          }
          {forecastWeather != null && viewDaily &&
            <DailyWeather forecastWeather={forecastWeather} />
          }
    </div>

    <h3 style={{marginBottom:50}}> This is the end of the Forge Weather App on this page.</h3>

    </div>
  );
}

export default App;
