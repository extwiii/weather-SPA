import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './App.css';
import Weather from '../Weather';

class App extends Component {
  state = {
    city: '',
    weathers: [],
    error: '',
  };

  componentDidMount() {
    const id = 'APPID=b24a3e7e489fede0d3de1d0840814c29';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Istanbul&mode=json&units=metric&${
      id
    }`;
    axios
      .get(url)
      .then((response) => {
        this.setState({
          city: response.data.city.name,
          weathers: response.data.list,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  render() {
    const { weathers, error } = this.state;
    return (
      <div className="App">
        {error && <h2> There is a some error {error}</h2>}
        <h2> {this.state.city}</h2>
        {weathers.map(weather => (
          <div key={weather.dt}>
            {weather.dt === weathers[0].dt ? (
              <div className="App-current">
                <Weather
                  title="Now"
                  icon={weather.weather[0].icon}
                  temperature={weather.main.temp}
                />
              </div>
            ) : weather.dt > weathers[0].dt + 80000 ? (
              <div className="App-current">
                <Weather
                  title={moment.unix(weather.dt).format('ddd')}
                  icon={weather.weather[0].icon}
                  temperature={weather.main.temp}
                />
              </div>
            ) : (
              <div className="App-current">
                <Weather
                  title={moment.unix(weather.dt).format('kk')}
                  icon={weather.weather[0].icon}
                  temperature={weather.main.temp}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
