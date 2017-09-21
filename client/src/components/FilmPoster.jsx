import React from 'react';
import PropTypes from 'prop-types';

export const FilmPoster = (props) => (
  <div className="media-show__poster">
    <img src={props.poster} alt={props.showTitle}/>
  </div>
);

FilmPoster.defaultProps = {
  poster: 'http://netflixroulette.net/api/posters/287290.jpg',
  showTitle: 'Batman'
};

FilmPoster.propTypes = {
  poster:  PropTypes.string,
  showTitle:  PropTypes.string
};