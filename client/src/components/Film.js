import React from 'react';
import {FilmDescriptionItem} from './FilmDescriptionItem.js';
import {FilmPoster} from './FilmPoster.js';

export default class Film extends React.Component {
  render() {
    return (
      <div>
        <FilmPoster poster="http://netflixroulette.net/api/posters/60031236.jpg" show_title="Rocket boy"/>

        <header className="media-show__header">
          <FilmDescriptionItem className="media-show__title" text="Pulp Fiction"/>
          <FilmDescriptionItem className="media-show__rating" text="4.1"/>
          <FilmDescriptionItem className="media-show__category" text="Oscar-winning Movie"/>
          <FilmDescriptionItem className="media-show__release-year" text="1994"/>
          <FilmDescriptionItem className="media-show__runtime" text="154 min"/>
        </header>

        <div className="media-show__wrapper">
          <FilmDescriptionItem className="media-show__summary" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            commodi
            doloribus iusto numquam temporibus veritatis, voluptatem! Atque dicta eligendi eveniet explicabo, illum
            impedit labore laborum magni porro quod sit suscipit temporibus ut!"/>

          <footer className="media-show__footer">
            <FilmDescriptionItem className="media-show__director" text="Director: ASDDDSASD"/>
            <FilmDescriptionItem className="media-show__cast" text="Cast: ljhljnljnln"/>
          </footer>

        </div>
      </div>
    );
  }
}
