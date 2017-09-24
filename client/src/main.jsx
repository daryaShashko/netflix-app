// For this demo, we are using the UMD build of react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

import Search from './search.jsx';
import Film from './components/Film.jsx';
import { SearchResult } from './search.jsx';
import MEDIA_SHOWS  from './consts';

class FilmA extends React.Component {
  render() {
    return (
      <div className="grid__item grid__item_12">
        {
          MEDIA_SHOWS.map(function (el, i) {
            if (i === 0) {
              return (
              <Film
                key={el.show_id}
                poster={el.poster}
                showTitle={el.show_title}
                rating={el.rating}
                category={el.category}
                releaseYear={el.release_year}
                runtime={el.runtime}
                summary={el.summary}
                director={el.director}
                showCast={el.show_cast}
              />
                );
              }
            return null;
            })
          }
      </div>
    )
  }
}

ReactDOM.render((

  <Router>
      <Route path="/search">
        <Search>
          <Route path="/search/:asd" component={SearchResult}/>
          <Route path="/film/:name" component={FilmA}/>
        </Search>
      </Route>
  </Router>

), document.getElementById('app'))
