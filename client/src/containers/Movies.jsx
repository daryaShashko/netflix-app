import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { sortByDate, sortByRating } from './../actions/films.js';

import FilmBrief from './../components/FilmBrief.jsx';

export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.sort[0] !== 'undefined' && this.props.totalResults > 0) {
      switch (this.props.sort[0]) {
        case 'release date':
          sortByDate(this.props.movies);
          break;
        case'rating':
          sortByRating(this.props.movies);
          break;
        default:
          break;
      }
    } else {
      console.log('all is null');
    }
    return (
      <div className="grid">

        {this.props.movies.map((item, index) =>(
        <div className="grid__item grid__item_3" key={item.id}>
          <Link to={`/film/${item.id}`}>
            <FilmBrief
              poster={'https://image.tmdb.org/t/p/w500' + item.poster_path}
              showTitle={item.title}
              releaseYear={(item.release_date == undefined) ? '0000-00-00' : item.release_date}/>
          </Link>
        </div>
          ))
          }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    sort: state.sort,
    movies: state.films.movies,
    totalResults: state.films.totalResults
  }
};

export default connect(mapStateToProps)(Movies);