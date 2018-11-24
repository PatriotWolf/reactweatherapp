/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  constructor(props){
    super(props);
    this.getCoordinates = this.getCoordinates.bind(this);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.getCoordinates);
    }
  }
  getCoordinates(position){
    if(position){
      console.log(position.coords)
      console.log("Latitude: " + position.coords.latitude); 
      console.log("Longitude: " + position.coords.longitude)
    }
  }
  render() {
    return (
      <div className="container theme-showcase" role="main">
        <div className="jumbotron mt-5">
          <p className="text-center">Center aligned text on all viewport sizes.</p>   
        </div>   
      </div>
    );
  }
}
