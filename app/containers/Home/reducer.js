/*
 *
 * Home reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, HOME_STORE_COORDINATES } from './constants';

export const initialState = fromJS({
  location:{}
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case HOME_STORE_COORDINATES:
      return state.set('location',action.payload);
    default:
      return state;
  }
}

export default homeReducer;
