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
  const data= props.weatherData.query.results.channel;
  console.log(data)
  return (
    <div class="card">
      <div class="card-header">
        {data.description}
      </div>
      <div class="card-body">
        As {data.item.condition.date} <br />
        Temp: {data.item.condition.temp}<sup>o</sup>F condition:{data.item.condition.text}<br />
        {JSON.stringify(data.item.condition)}

      </div>
    </div>
  );
}

WeatherComponent.propTypes = {};

export default WeatherComponent;
