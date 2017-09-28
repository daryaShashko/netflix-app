import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

import { SearchResult } from './search.jsx';
import FilmsAPI from './FilmsAPI';
import { Movie } from './containers/Movie.jsx';
import { Movies } from './containers/Movies.jsx';
import Film from './components/Film.jsx';
import FilmBrief from './components/FilmBrief.jsx';
import SearchArea from './components/SearchArea.jsx';
import { SortArea } from './components/SortArea.jsx';
import { LogoNetflix } from './components/LogoNetflix.jsx';
import { TextArea } from './components/TextArea.jsx';
import { HeadLine } from './components/HeadLine.jsx';


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
              <Route path='/film/:id' component={Movie} />

            </div>
          </div>
        </div>


        <div className="page__body">
          <div className="wrapper wrapper_bgc_grey" />

          <div className="content-wrapper">

            <Route path="/search/:asd" component={Movies} />

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
