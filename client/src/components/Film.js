import React from 'react';
import FilmMainInfo from './FilmMainInfo.js';

export default class Film extends React.Component {
  render() {
    return (
      <div>
        <FilmMainInfo />
        <div className="media-show__wrapper">
          <p className="media-show__summary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            commodi
            doloribus iusto numquam temporibus veritatis, voluptatem! Atque dicta eligendi eveniet explicabo, illum
            impedit labore laborum magni porro quod sit suscipit temporibus ut!</p>

          <footer className="media-show__footer">
            <span className="media-show__director">Director: ASDDDSASD</span>
            <span className="media-show__cast">Cast: ljhljnljnln</span>
          </footer>

        </div>
      </div>
    );
  }
}

