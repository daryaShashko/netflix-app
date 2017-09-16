import React from 'react';

export const FilmPoster = (props) => (
  <div className="media-show__poster">
    <img src={props.poster} alt={props.show_title}/>
  </div>
);

FilmPoster.defaultProps = {
  poster: 'http://netflixroulette.net/api/posters/287290.jpg',
  show_title: 'Batman'
};