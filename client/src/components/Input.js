import React from 'react';
import {Button} from './Button.js';

export const Input = (props) => (
  <div className="input-area__wrapper">
    <input type={props.inputType} className={'input-area__item ' + props.className}
           placeholder={props.inputPlaceholder}/>
    <Button className="button_icon button_icon-search"/>
  </div>
);

Input.defaultProps = {
  className: '',
  type: 'input',
  inputPlaceholder: 'input here'
};