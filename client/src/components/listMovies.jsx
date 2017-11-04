import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import { Link } from 'react-router-dom';

import FilmBrief from './../components/FilmBrief.jsx';
import { HeadLine } from './../components/HeadLine.jsx';

export default class ListMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    if (this.props.totalResults !== 0) {
      return (
        <div className="grid">{
          this.props.moviesArr.map(function (el) {
            return (
            <div className="grid__item grid__item_4" key={el.id}>
              <Link to={`/film/${el.id}`}>
                <FilmBrief
                  poster={'https://image.tmdb.org/t/p/w500' + el.poster_path}
                  showTitle={el.title}
                  releaseYear={el.release_date}
                />
              </Link>
            </div>
              );
            })
          }
        </div>
      );
    } else {
      return (
        <HeadLine className="head-line_color-light-grey head-line_empty-result" text="No films found"/>
      );
    }
  }
}
