import React from 'react';

export const TextArea = (props) => (
  <span className={'text-area' + props.className}>{props.text}</span>
);

TextArea.defaultProps = {
  className: '',
   text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, blanditiis eveniet laudantium nesciunt possimus quas quos.'
};