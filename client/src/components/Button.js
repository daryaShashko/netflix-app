import React from 'react';

export const Button = (props) => (
  <button type={props.buttonType} className={'button ' + props.className}>{props.text}</button>
);

Button.defaultProps = {
  className: '',
  text: 'Button',
  buttonType: 'button'
};