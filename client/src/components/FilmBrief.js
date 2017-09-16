import React from 'react';
import {FilmDescriptionItem} from './FilmDescriptionItem.js';
import {FilmPoster} from './FilmPoster.js';

export default class FilmBrief extends React.Component {
  render() {
    return (
      <div className="media-show media-show_brief">
        <div className="media-show__description">
          <FilmPoster poster="http://netflixroulette.net/api/posters/60031236.jpg" show_title="Rocket boy"/>

          <header className="media-show__header">
            <FilmDescriptionItem className="media-show__title" text="Pulp Fiction"/>
            <FilmDescriptionItem className="media-show__release-year" text="1994"/>
            <FilmDescriptionItem className="media-show__category" text="Oscar-winning Movie"/>
          </header>
        </div>
      </div>
    );
  }
}
