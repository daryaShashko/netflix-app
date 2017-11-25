import React from 'react';
import { connect } from 'react-redux';

import Film from './../components/Film.jsx';

class Movie extends React.Component {
  render() {
    return (
      <div className="grid__item grid__item_12" key={this.props.movie.id}>
        <Film
          poster={'https://image.tmdb.org/t/p/w500' + this.props.movie.poster_path}
          showTitle={this.props.movie.title}
          rating={this.props.movie.vote_average}
          releaseYear={this.props.movie.release_date}
          runtime={this.props.movie.runtime}
          summary={this.props.movie.overview}
        />
      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return{
    movie: state.films.movies.find(movie => movie.id === Number(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps)(Movie);