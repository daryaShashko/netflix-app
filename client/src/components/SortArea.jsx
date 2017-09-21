import React from 'react';
import {HeadLine} from './HeadLine.jsx';
import {Input} from './Input.jsx';
import {Button} from './Button.jsx';
import PropTypes from 'prop-types';

export const SortArea = (props) => (
  <div className={'sort-area ' + props.className}>
    <HeadLine className={props.headLineClass} text={props.headLineText}/>
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

SortArea.propTypes = {
  className:  PropTypes.string,
  headLineClass:  PropTypes.string,
  headLineText:  PropTypes.string,
  firstCriterion:  PropTypes.string,
  secondCriterion:  PropTypes.string
};