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

class RequestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      code: '1234',
    };

  }

  componentWillMount() {
    var url = 'https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=Jack+Reacher';
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
  }


  render() {
    var movie = this.state.movies;
    var moviesArr = [];

    for (var key in movie) {
      moviesArr.push(movie[key]);
    }
    var movies = moviesArr.map(function (el) {
      return (

        <FilmBrief
          key={el.id}
          poster={'https://image.tmdb.org/t/p/w500' + el.poster_path}
          showTitle={el.title}
          releaseYear={el.release_date}
        />

      );
    });
    /* var movies = this.state.movies.map(film => (

     ))*/

    return (
    <div className="grid__item grid__item_4">
      {movies}
    </div>
    )
  }
}


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
            <RequestButton />
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
