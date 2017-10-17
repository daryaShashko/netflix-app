import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

import { Movie } from './containers/Movie.jsx';
import { Movies } from './containers/Movies.jsx';
import SearchArea from './components/SearchArea.jsx';
import { SortArea } from './components/SortArea.jsx';
import { LogoNetflix } from './components/LogoNetflix.jsx';
import { HeadLine } from './components/HeadLine.jsx';
import FilmBrief from './components/FilmBrief.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: 'test',
    };

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(value) {
    this.setState({query: value});
    console.log(this.state.query);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${this.state.query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
    console.log('state', this.state.movies);
  }

  render() {
    var movie = this.state.movies;
    var moviesArr = [];

    for (var key in movie) {
      moviesArr.push(movie[key]);
    }
    var movies = moviesArr.map(function (el) {
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
    });
    return (
      <Router>
        <div className="page">
          <div className="page__wrapper">

            <div className="page__header">
              <div className="content-wrapper">

                <div className="grid">
                  <div className="grid__item grid__item_12">
                    <LogoNetflix />
                  </div>
                </div>

                <div className="grid">
                  <div className="grid__item grid__item_12">

                    <SearchArea onHandleSearch={this.handleSearch} />
                  </div>

                   <Route path='/film/:id' component={Movie} />

                </div>
              </div>
            </div>


            <div className="page__body">
              <div className="wrapper wrapper_bgc_grey"/>

              <div className="content-wrapper">
                <div className="grid">
                  {movies}
                  <Route path="/search/:asd" component={Movies}/>
                  <Route path='/film/:id' component={Movies}/>

                </div>
              </div>
            </div>

            <div className="page__footer">
              <div className="content-wrapper">
                <LogoNetflix />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

ReactDOM.render((<App />), document.getElementById('app'))