/*
 *
 * Home actions
 *
 */

import { DEFAULT_ACTION, HOME_STORE_COORDINATES, HOME_STORE_WEATHER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function homeStoreCoordinatesAction(coordinates) {
  return {
    type: HOME_STORE_COORDINATES,
    payload: coordinates
  };
}

export function homeStoreWeatherAction(JSONdata) {
  return {
    type: HOME_STORE_WEATHER,
    payload: JSONdata
  };
}