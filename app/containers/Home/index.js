/**
 *
 * Home
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import WeatherComponent from 'components/WeatherComponent';

import { homeStoreCoordinatesAction } from './actions';
import makeSelectHome,{selectGetLocation} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './style.css';
/* eslint-disable react/prefer-stateless-function */
export class Home extends React.PureComponent {
    constructor(props){
    super(props);
    this.state = {
      isUpdated:false,
      isError: false,
    }
    this.getCoordinates = this.getCoordinates.bind(this);
    this.onHandleGetCoordinatesError = this.onHandleGetCoordinatesError.bind(this);
    navigator.geolocation.getCurrentPosition(this.getCoordinates, this.onHandleGetCoordinatesError );
  }
  getCoordinates(position){
    if(position){
      console.log(position.coords)
      this.setState({isUpdated : true })
      const coordinates = {lat:position.coords.latitude, lng:position.coords.longitude}
      this.props.dispatch(homeStoreCoordinatesAction(coordinates));
    }
  }
  onHandleGetCoordinatesError(error){
    this.setState({isError:true});
    // alert(error.message);
  }
  render() {
    let coordinate, flashMsg, content;

    if(this.state.isUpdated){
      coordinate=<p className="text-center">Your Coordinates Is Ready</p> 
    }
    else {
      content=<div className="jumbotron mt-5 text-center">
          <div className="loader"></div>
          Please wait untill we finish processing your coordinates
        </div>
    }
    if(this.state.isError){
      flashMsg=(<div className="alert alert-danger text-center" role="alert">
        There's something wrong when obtain you Coordinate
      </div>)
    }
    if(this.props.home.condition.isWeatherLoaded){
      content=<div>
      <WeatherComponent weatherData={this.props.home.weather}/>
      </div>
    }
    return (
      <div className="container theme-showcase pt-5" role="main">
      {flashMsg}
      {content}
      </div>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  home: makeSelectHome(),
  location: selectGetLocation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Home);
