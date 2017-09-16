import React from 'react';

export const FilmDescriptionItem = (props) => (
  <span className={props.className}>{props.text}</span>
);

FilmDescriptionItem.defaultProps = {
  className: '',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ipsa odit unde.'
};