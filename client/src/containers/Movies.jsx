import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import { Link } from 'react-router-dom';

import FilmBrief from './../components/FilmBrief.jsx';
import { HeadLine } from './../components/HeadLine.jsx';


export class Movies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };

    this.getMovies = this.getMovies.bind(this);
  }


  componentWillReceiveProps(nextProps) {
    const oldQuery = this.props.match.params.query;
    const nextQuery = nextProps.match.params.query;

    if (oldQuery !== nextQuery) {
      this.getMovies(nextQuery);
    }
  }

  componentDidMount() {
    const query = this.props.match.params.query;
    this.getMovies(query);
  }

  componentWillMount() {
    this.setState({query: this.props.match.params.query});
  }

  getMovies(query) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
  }

  render() {
    const movies = this.state.movies;
    const totalResults = this.state.total;

    function results() {
      if (totalResults > 0) {
        return (
          movies.map(function (el) {
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
        );
      }

      return (
        <HeadLine className="head-line_color-light-grey head-line_empty-result" text="No films found" />
      )
    }

    var show = results();

    return (
      <div className="grid">{show}</div>
    )
  }
}
