/* eslint no-undef:0 */
import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import { Movies } from '../../containers/Movies.jsx';

import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});


const setup = () => {
  const props = {
    movies: [
      {
        id: 0,
        poster_path: '/path/to/poster1',
        title: 'Title1',
        vote_average: 4.7,
        category: 'Action',
        release_date: '2007-02-03',
        runtime: 96,
        overview: 'Really great film!'
      },
      {
        id: 1,
        poster_path: '/path/to/poster2',
        title: 'Title2',
        vote_average: 4.4,
        category: 'Action',
        release_date: '2004-02-01',
        runtime: 94,
        overview: 'Really great film!!1'
      }
    ],
    totalResults: 2,
    search: ['title'],
    sort: ['release date']
  };

  const enzymeWrapper = mount(
    <MemoryRouter>
      <Movies {...props} />
    </MemoryRouter>
  );

  return {
    props,
    enzymeWrapper
  };
};

describe('Movies component', () => {
  const { enzymeWrapper } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});