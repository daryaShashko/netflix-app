import React from 'react';

import Film from './../components/Film.jsx';
import FilmsAPI from './../FilmsAPI';

export const Movie = (props) => {
  const film = FilmsAPI.get(
    parseInt(props.match.params.id, 10)
  );
  if (!film) {
    return <div>Sorry, but the film was not found</div>
  }
  return (
    <div className="grid__item grid__item_12">
      <Film
        key={film.show_id}
        poster={film.poster}
        showTitle={film.show_title}
        rating={film.rating}
        category={film.category}
        releaseYear={film.release_year}
        runtime={film.runtime}
        summary={film.summary}
        director={film.director}
        showCast={film.show_cast}
      />
    </div>
  )
};