import React from 'react';
import { Link } from 'react-router-dom';

import FilmBrief from './../components/FilmBrief.jsx';
import FilmsAPI from './../FilmsAPI';

export const Movies = () => (
  <div className="grid">
    {
      FilmsAPI.all().map(film => (
      <div className="grid__item grid__item_4" key={film.show_id}>
        <Link to={`/film/${film.show_id}`}>
          <FilmBrief
            poster={film.poster}
            showTitle={film.show_title}
            releaseYear={film.release_year}
            category={film.category}
          />
        </Link>
      </div>
        ))
      }
  </div>
);


