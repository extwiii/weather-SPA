import React from 'react';
import PropTypes from 'prop-types';
import './Weather.css';

function Weather(props) {
  const { title, icon, temperature } = props;

  return (
    <div>
      {title === 'Now' ? (
        <h3 style={{ color: 'red' }}>{title}</h3>
      ) : (
        <h3 style={{ color: '#48F' }}>{title}</h3>
      )}
      <img src={`https://openweathermap.org/img/w/${icon}.png`} alt={icon} />
      <p>{temperature} &deg;C</p>
    </div>
  );
}

Weather.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  temperature: PropTypes.number,
};

Weather.defaultProps = {
  title: 'Loading',
  icon: '',
  temperature: 0,
};

export default Weather;
