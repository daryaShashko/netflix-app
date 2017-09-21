import React from 'react';
import PropTypes from 'prop-types';
import { FilmDescriptionItem } from './FilmDescriptionItem.jsx';
import { FilmPoster } from './FilmPoster.jsx';

export default class Film extends React.PureComponent {
  render() {
    return (
      <div className="media-show">
        <div className="media-show__wrapper">
          <FilmPoster poster={this.props.poster} show_title={this.props.showTitle}/>

          <div className="media-show__description">
            <header className="media-show__header">
              <FilmDescriptionItem className="media-show__title" text={this.props.showTitle}/>
              <FilmDescriptionItem className="media-show__rating" text={this.props.rating}/>
              <FilmDescriptionItem className="media-show__category" text={this.props.category}/>
              <FilmDescriptionItem className="media-show__release-year" text={this.props.releaseYear}/>
              <FilmDescriptionItem className="media-show__runtime" text={this.props.runtime}/>
            </header>

            <FilmDescriptionItem className="media-show__summary" text={this.props.summary}/>

            <footer className="media-show__footer">
              <FilmDescriptionItem className="media-show__director" text={`Director: ${this.props.director}`}/>
              <FilmDescriptionItem className="media-show__cast" text={`Cast: ${this.props.showCast}`}/>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Film.defaultProps = {
  poster: '',
  showTitle: 'Button',
  rating: '3.5',
  releaseYear: '2017',
  runtime: '345',
  category: 'Horror',
  summary: 'summary',
  director: 'director,',
  showCast: 'showCast',
};

Film.propTypes = {
  poster: PropTypes.string,
  showTitle: PropTypes.string,
  rating: PropTypes.string,
  releaseYear: PropTypes.string,
  runtime: PropTypes.string,
  category: PropTypes.string,
  summary: PropTypes.string,
  director: PropTypes.string,
  showCast: PropTypes.string,
};