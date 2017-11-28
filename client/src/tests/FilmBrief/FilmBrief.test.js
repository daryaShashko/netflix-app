/* eslint no-undef:0 */
import React from 'react';
import { configure , mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';
import Film from '../../components/Film.jsx';

import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });

const setup = () => {
  const props = {
    movie: {
      poster: '/path/to/poster',
      showTitle: 'Title',
      category: 'Action',
      releaseYear: '2007-02-03',
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