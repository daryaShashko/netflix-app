import React from 'react';

export const HeadLine = (props) => (
  <h2 className={'head-line ' + props.className}>{props.text}</h2>
);

HeadLine.defaultProps = {
  className: '',
  text: 'Head'
};