import React from 'react';
import {FilmDescriptionItem} from './FilmDescriptionItem.js';
import {FilmPoster} from './FilmPoster.js';

export default class Film extends React.Component {
  render() {
    return (
      <div className="media-show">
        <div className="media-show__wrapper">
          <FilmPoster poster={this.props.poster} show_title={this.props.show_title}/>

          <div className="media-show__description">
            <header className="media-show__header">
              <FilmDescriptionItem className="media-show__title" text={this.props.show_title}/>
              <FilmDescriptionItem className="media-show__rating" text={this.props.rating}/>
              <FilmDescriptionItem className="media-show__category" text={this.props.category}/>
              <FilmDescriptionItem className="media-show__release-year" text={this.props.release_year}/>
              <FilmDescriptionItem className="media-show__runtime" text={this.props.runtime}/>
            </header>

            <FilmDescriptionItem className="media-show__summary" text={this.props.summary}/>

            <footer className="media-show__footer">
              <FilmDescriptionItem className="media-show__director" text={`Director: ${this.props.director}`}/>
              <FilmDescriptionItem className="media-show__cast" text={`Cast: ${this.props.show_cast}`}/>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

