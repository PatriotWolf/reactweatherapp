/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, HOME_STORE_COORDINATES, HOME_STORE_WEATHER } from './constants';

export const initialState = fromJS({
  location:{},
  weather: {},
  condition: {
    isWeatherLoaded: false,
  },
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HOME_STORE_COORDINATES:
      return state.set('location',action.payload);
    case HOME_STORE_WEATHER:
      return state.set('weather',action.payload).set('condition',{isWeatherLoaded:true});
    default:
      return state;
  }
}

export default homeReducer;
