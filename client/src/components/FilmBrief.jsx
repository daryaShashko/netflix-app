import React from 'react';
import {FilmDescriptionItem} from './FilmDescriptionItem.jsx';
import {FilmPoster} from './FilmPoster.jsx';
import PropTypes from 'prop-types';

export default class FilmBrief extends React.Component {
  render() {
    return (
      <div className="media-show media-show_brief">
        <div className="media-show__description">
          <FilmPoster poster={this.props.poster} show_title={this.props.showTitle}/>

          <header className="media-show__header">
            <FilmDescriptionItem className="media-show__title" text={this.props.showTitle}/>
            <FilmDescriptionItem className="media-show__release-year" text={this.props.releaseYear}/>
            <FilmDescriptionItem className="media-show__category" text={this.props.category}/>
          </header>
        </div>
      </div>
    );
  }
}

FilmBrief.defaultProps = {
  poster: '',
  showTitle: 'Button',
  releaseYear: '2017',
  category: 'Horror'
};

FilmBrief.propTypes = {
  poster: PropTypes.string,
  showTitle: PropTypes.string,
  releaseYear: PropTypes.string,
  category: PropTypes.string,
};