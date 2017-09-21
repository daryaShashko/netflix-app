import React from 'react';
import PropTypes from 'prop-types';

export const Button = (props) => (
  <button type={props.buttonType} className={'button ' + props.className}>{props.text}</button>
);

Button.defaultProps = {
  className: '',
  text: 'Button',
  buttonType: 'button'
};

Button.propTypes = {
  className:  PropTypes.string.isRequired,
  text:  PropTypes.string.isRequired,
  buttonType:  PropTypes.string.isRequired
};