import React from "react";

const WeatherProfile = ({ data }) => {
  const icon = data.weather[0].icon;
  const ImageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const temp = data.main.temp;
  const weatherDescription = data.weather[0].description;
  return (
    <>
      <div className="container">
        <h1>Weather details here</h1>
        <h1>The current temperature is {temp}</h1>
        <p>The current weather description is {weatherDescription}</p>
        <img src={ImageURL} alt="" />
      </div>
    </>
  );
};

export default WeatherProfile;
