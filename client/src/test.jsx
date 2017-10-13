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

class Home extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    // Called the first time the component is loaded right before the component is added to the page
    this.search();
  }

  componentDidMount() {
    // Called after the component has been rendered into the page
  }

  componentWillReceiveProps(nextProps) {
    // Called when the props provided to the component are changed
  }

  componentWillUpdate(nextProps, nextState) {
    // Called when the props and/or state change
  }

  componentWillUnmount() {
    // Called when the component is removed
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    var movie = this.state.movies;
    var moviesArr = [];

    for (var key in movie) {
      moviesArr.push(movie[key]);
    }
    var movies = moviesArr.map(function (el) {
      return (
        <div className="grid__item grid__item_4">

          <FilmBrief
            key={el.id}
            poster={'https://image.tmdb.org/t/p/w500' + el.poster_path}
            showTitle={el.title}
            releaseYear={el.release_date}
          />
        </div>
      );
    });

    return (
      <div>
        <input ref="query" onChange={ (e) => { this.updateSearch() } } type="text"/>

        <div className="grid">
          {movies}
        </div>
      </div>

    )
  }

  search(query = "Jack+Reacher") {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
  }

}

export { Home as default };

ReactDOM.render((
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
                <SearchArea />

              </div>
              <Route path='/film/:id' component={Movie}/>

            </div>
          </div>
        </div>


        <div className="page__body">
          <div className="wrapper wrapper_bgc_grey"/>

          <div className="content-wrapper">
            <Home />
            <Route path="/search/:asd" component={Movies}/>
            <Route path='/film/:id' component={Movies}/>

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

), document.getElementById('app'))