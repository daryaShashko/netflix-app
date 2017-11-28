/* eslint no-undef:0 */
import React from 'react';
import { configure, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Movie } from '../../containers/Movie.jsx';

import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});


const setup = () => {
  const props = {
    movie: {
      id: 0,
      poster_path: '/path/to/poster1',
      title: 'Title1',
      vote_average: 4.7,
      release_date: '2007-02-03',
      runtime: 96,
      overview: 'Really great film!'
    }
  };

  const enzymeWrapper = mount(
    <Movie {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
};

describe('Movie component', () => {
  const { enzymeWrapper } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});