import React from 'react';
import ShallowRenderer from '../../../../node_modules/react-test-renderer/shallow';
import { LogoNetflix } from './../../components/LogoNetflix.jsx';

const renderer = new ShallowRenderer();

describe('LogoNetflix', () => {
  test('renders correctly', () => {
    const logo = renderer.render(<LogoNetflix />);
    expect(logo).toMatchSnapshot();
  });
});