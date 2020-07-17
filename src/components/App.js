import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import './App.css';

const APIKey = '5f8843adc098ec73a289be697a274010'

class App extends Component {
  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    err: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleCitySubmit = (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value},&APPID=${APIKey}`;
    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Nie udało się pobrać danych z API")
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState(prevState => ({
          err: false,
          date: time,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,
          city: prevState.value,
        }))
      })
      .catch(err => console.log(err), this.setState(prevState => ({
        err: true,
        city: prevState.value
      })))

  }

  render() {
    return (
      <div className="App">
        <Form value={this.state.value} change={this.handleInputChange} submit={this.handleCitySubmit} />
        <Result error={this.state.err} weather={this.state} />
      </div>
    );
  }
}

export default App;
