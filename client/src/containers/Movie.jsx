import React from 'react';

import Film from './../components/Film.jsx';
import FilmsAPI from './../FilmsAPI';
import Request from 'superagent';

export class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieId: '',
      movie: [],
    };

    this.getMovie = this.getMovie.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (parseInt(nextProps.movieId, 10) !== parseInt(this.state.movieId, 10)) {
      this.getMovie();
    }
  }

  componentDidMount() {
    this.setState({movieId: this.props.match.params.id});
  }

  getMovie() {
    let url = `https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=7ce8b734e18d23ac5345c37de7911c86`;
    Request.get(url).then((response) => {
      this.setState({
        movie: response.body,
      })
    })
  }

  render() {
    var movie = this.state.movie;
    return (
      <div className="grid__item grid__item_12" key={movie.id}>
        <Film
          poster={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          showTitle={movie.title}
          rating={movie.vote_average}
          releaseYear={movie.release_date}
          runtime={movie.runtime}
          summary={movie.overview}
        />
      </div>

    );
  }
}
