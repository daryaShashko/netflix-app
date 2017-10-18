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
  }


  render() {
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


                <Route path="/search/:query" component={Movies} />
                <Route path='/film/:id' component={Movies} />

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