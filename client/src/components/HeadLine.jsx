import React from 'react';
import PropTypes from 'prop-types';

export const HeadLine = props => (
  <h2 className={'head-line ' + props.className}>{props.text}</h2>
);

HeadLine.defaultProps = {
  className: '',
  text: 'Head'
};

HeadLine.propTypes = {
  className:  PropTypes.string,
  text:  PropTypes.string
};