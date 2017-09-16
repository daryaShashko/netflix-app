import React from 'react';
import {HeadLine} from './HeadLine.js';
import {Input} from './Input.js';
import {Button} from './Button.js';

export const SortArea = (props) => (
  <div className={'sort-area ' + props.className}>
    <HeadLine className={"head-line_uppercase " + props.headLineClass} text={props.headLineText}/>
    <Button buttonType="button" className="button_active" text={props.firstCriterion}/>
    <Button buttonType="button" text={props.secondCriterion}/>
  </div>
);

SortArea.defaultProps = {
  className: '',
  headLineClass: '',
  headLineText: 'search by',
  firstCriterion: 'title',
  secondCriterion: 'director'
};