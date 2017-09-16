import React from 'react';

export const LogoNetflix = (props) => (
  <div className={'logo' + props.className} >
    <a href="https://netflixroulette.net/" className="logo__link"></a>
  </div>
);

LogoNetflix.defaultProps = {
  className: ''
};