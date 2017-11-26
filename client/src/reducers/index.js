import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { films } from './films.js';
import { query } from './query';
import { search } from './search';
import { sort } from './sort';

export default combineReducers({
  routing: routerReducer,
  films,
  query,
  search,
  sort
})