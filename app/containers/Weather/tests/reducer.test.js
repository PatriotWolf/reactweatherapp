import { fromJS } from 'immutable';
import weatherReducer from '../reducer';

describe('weatherReducer', () => {
  it('returns the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual(fromJS({}));
  });
});
