import React from 'react';
import Movies from './../../containers/Movies.jsx';
import moviesData from './moviesData';
import configureStore from 'redux-mock-store';
import ShallowRenderer from 'react-test-renderer/shallow';


import reducers from '../../reducers';

test('reducers', () => {
  let state;
  state = reducers(
    {
      routing: {locationBeforeTransitions: null},
      films: {movies: [], totalResults: 0},
      query: 'da', search: ['title'],
      sort: ['release date']
    },
    {
      type: 'FETCH_FIND_FILMS_SUCCESS',
      movies: moviesData,
      totalResults: 22395
    });
  expect(state).toEqual({
    routing: {locationBeforeTransitions: null},
    films: {
      movies: moviesData,
      totalResults: 22395
    },
    query: 'da',
    search: ['title'],
    sort: ['release date']
  });
});