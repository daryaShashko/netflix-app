import React from 'react';
import PropTypes from 'prop-types';

export const LogoNetflix = (props) => (
  <div className={'logo' + props.className} >
    <a href="https://netflixroulette.net/" className="logo__link"></a>
  </div>
);

LogoNetflix.defaultProps = {
  className: ''
};

LogoNetflix.propTypes = {
  className:  PropTypes.string
};