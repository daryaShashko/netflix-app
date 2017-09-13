import React from 'react';


export default class FilmMainInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="media-show__poster">
          <img src="http://netflixroulette.net/api/posters/60032563.jpg"/>
        </div>

        <header className="media-show__header">
          <h3 className="media-show__title">Pulp Fiction</h3>
          <span className="media-show__rating">4.1</span>
          <p className="media-show__category">Oscar-winning Movie</p>
          <span className="media-show__release-year">1994</span>
          <span className="media-show__runtime">154 min</span>
        </header>
      </div>
    );
  }
}
