import React from 'react';
import './Result.css'

const Result = (props) => {
  const { err, city, temp, sunrise, sunset, pressure, wind, date } = props.weather;

  let content = null;
  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <h3>Wyniki wyszukiwania dla <em>{city}</em></h3>
        <h4>Dane dla dnia i godzine: {date}</h4>
        <h4>Aktualna temperatura: {temp} &#176;C</h4>
        <h4>Wschód słońca dzisiaj: {sunriseTime}</h4>
        <h4>Zachód słońca dzisiaj o: {sunsetTime}</h4>
        <h4>Siła wiatru: {wind} m/s</h4>
        <h4>Ciśnienie: ${pressure} hPa</h4>
      </div>
    )
  }
  return (
    <div className="result">
      {err ? `Nie mamy w bazie: ${city}` : content}
    </div>
  )
}

export default Result;