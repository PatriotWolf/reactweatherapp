/**
 *
 * WeatherComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function WeatherComponent(props) {
  const data = props.weatherData.query.results.channel;
  const weatherCode= data.item.condition.code;
  let weatherUrl= '';
  console.log(data)
  if ((data.item.condition.code >= 0) && (data.item.condition.code <= 4)){
    weatherUrl= "https://static.thenounproject.com/png/428-200.png"
  } else if((data.item.condition.code >= 5) && (data.item.condition.code <= 12)) {
    weatherUrl= "https://cdn3.iconfinder.com/data/icons/parks-and-rec/400/parks-06-512.png"
  } else if((data.item.condition.code >= 13) && (data.item.condition.code <= 18)) {
    weatherUrl= "http://cdn.onlinewebfonts.com/svg/img_78250.png"
  } else if((data.item.condition.code >= 19) && (data.item.condition.code <= 22)) {
    weatherUrl= "http://icons.iconarchive.com/icons/icons8/windows-8/512/Weather-Dust-icon.png"
  } else if((data.item.condition.code >= 23) && (data.item.condition.code <= 24)) {
    weatherUrl= "https://cdn4.iconfinder.com/data/icons/heavy-weather/100/Weather_Icons_01_wind-512.png"
  } else if((data.item.condition.code >= 25) && (data.item.condition.code <= 30)) {
    weatherUrl= "https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-512.png"
  } else if((data.item.condition.code >= 31) && (data.item.condition.code <= 30)) {
    weatherUrl= "https://cdn1.iconfinder.com/data/icons/weather-icons-6/512/clouds-512.png"
  } else if(data.item.condition.code === 32) {
    weatherUrl= "https://cdn.onlinewebfonts.com/svg/img_232790.png"
  } else {
    weatherUrl= ""
  }
  return (
    <div className="card">
      <div className="card-header bg-danger text-white">
        {data.description}
      </div>

      <div className="card-body text-center">
        As {data.item.condition.date} <br />
        Temp: {data.item.condition.temp}<sup>o</sup>F
        condition:{data.item.condition.text} <br />
        <img src={weatherUrl} /><br />
      </div>
    </div>
  );
}

WeatherComponent.propTypes = {};

export default WeatherComponent;
