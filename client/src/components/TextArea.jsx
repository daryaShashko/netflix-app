import React from 'react';
import PropTypes from 'prop-types';

export const TextArea = (props) => (
  <span className={'text-area' + props.className}>{props.text}</span>
);

TextArea.defaultProps = {
  className: '',
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis eveniet laudantium nesciunt possimus quas quos.'
};

TextArea.propTypes = {
  className:  PropTypes.string,
  text:  PropTypes.string
};