import { take, call, put, select,takeLatest } from 'redux-saga/effects';
import request from 'utils/request';

import { HOME_STORE_COORDINATES, HOME_GET_COORDINATES} from './constants';
import {homeStoreWeatherAction,homeStoreCoordinatesAction} from './actions';


export function* getForcast(coordinatesStore) {
  const coordinates = coordinatesStore.payload;
  let query=`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${coordinates.lat}%2C${coordinates.lng})%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;                                                                                                                              
  console.log(coordinates); 
  try {
    // Call our request helper (see 'utils/request')
    const weatherCondition = yield call(request, query);
    yield put(homeStoreWeatherAction(weatherCondition));
  } catch (err) {
    //TODO: FLASH Message for error on obtain weather coordinate
  }
}

export function* getCoordinates(stateAction) {
  const place = stateAction.payload;
  console.log('obtained place named ',place);
  let query = `https://nominatim.openstreetmap.org/search?q=${place}&format=json`;
  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, query);
    const coordinates = {lat:repos[0].lat, lng:repos[0].lon}
    yield put(homeStoreCoordinatesAction(coordinates));
  } catch (err) {
    //TODO: FLASH Message for error on obtain new Coordinate
  }
}
// Individual exports for testing
export default function* homeSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(HOME_STORE_COORDINATES, getForcast)
  yield takeLatest(HOME_GET_COORDINATES, getCoordinates)
}
