import React from 'react';
import PropTypes from 'prop-types';

export const FilmDescriptionItem = (props) => (
  <span className={props.className}>{props.text}</span>
);

FilmDescriptionItem.defaultProps = {
  className: '',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsa odit unde.'
};

FilmDescriptionItem.propTypes = {
  className:  PropTypes.any,
  text:  PropTypes.any
};