import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { films } from './films.js';
import { query } from './query';

export default combineReducers({
  routing: routerReducer,
  films,
  query
})