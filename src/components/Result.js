import React from 'react';
import './Result.css'

const Result = (props) => {
  const { err, city, temp, sunrise, sunset, pressure, wind } = props.weather;
  return (
    <>
      <div>Pogoda dla: {city}</div>
      <div>Temperatura: {temp}</div>
    </>
  )
}

export default Result;