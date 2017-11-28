/* eslint no-undef:0 */
import React from 'react';
import { configure , mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Film from '../../components/Film.jsx';

import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    movie: {
      poster: '/path/to/poster',
      showTitle: 'Title',
      rating: 4.7,
      category: 'Action',
      releaseYear: '2007-02-03',
      runtime: 96,
      summary: 'Really great film!'
    }
  };

  const enzymeWrapper = mount(
      <Film {...props} />
  );

  return {
    props,
    enzymeWrapper
  };
};

describe('Film component', () => {
  const { enzymeWrapper } = setup();

  it('should render', () => {
    expect(toJson(enzymeWrapper)).toMatchSnapshot();
  });
});