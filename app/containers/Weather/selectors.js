import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the weather state domain
 */

const selectWeatherDomain = state => state.get('weather', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Weather
 */

const makeSelectWeather = () =>
  createSelector(selectWeatherDomain, substate => substate.toJS());

export default makeSelectWeather;
export { selectWeatherDomain };
