import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import { Link } from 'react-router-dom';

import FilmBrief from './../components/FilmBrief.jsx';


export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };

    this.getMovies = this.getMovies.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.query !== this.state.query) {
      this.setState({query: this.props.match.params.query});
      this.getMovies();
    }
  }

  componentWillMount() {
    this.setState({query: this.props.match.params.query});
  }

  getMovies() {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${this.state.query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
  }

  render() {
    var movie = this.state.movies;
    return (
      <div className="grid">
        {
          movie.map(function (el) {
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
  }
}
