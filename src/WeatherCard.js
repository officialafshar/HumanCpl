import React from "react";
import "./WeatherCard.css";

const WeatherCard = ({ date, temp, description, iconId }) => {
  return (
    <div className="weather-card">
      <h2>{date}</h2>
      <i className={`wi wi-owm-${iconId}`}></i>
      <p>Temp: {temp}°C</p>
      <p>{description}</p>
    </div>
  );
};

export default WeatherCard;
