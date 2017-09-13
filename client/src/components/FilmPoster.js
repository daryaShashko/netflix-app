import React from 'react';

export const FilmPoster = (props) => (
  <div className="media-show__poster">
    <img src={props.poster} alt={props.show_title}/>
  </div>
);