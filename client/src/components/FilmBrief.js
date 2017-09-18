import React from 'react';
import {FilmDescriptionItem} from './FilmDescriptionItem.js';
import {FilmPoster} from './FilmPoster.js';

export default class FilmBrief extends React.Component {
  render() {
    return (
      <div className="media-show media-show_brief">
        <div className="media-show__description">
          <FilmPoster poster={this.props.poster} show_title={this.props.show_title}/>

          <header className="media-show__header">
            <FilmDescriptionItem className="media-show__title" text={this.props.show_title}/>
            <FilmDescriptionItem className="media-show__release-year" text={this.props.release_year}/>
            <FilmDescriptionItem className="media-show__category" text={this.props.category}/>
          </header>
        </div>
      </div>
    );
  }
}
