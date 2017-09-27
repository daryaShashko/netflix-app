// For this demo, we are using the UMD build of react-router-dom
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,  Switch,  Route,  Link} from 'react-router-dom';

import Search from './search.jsx';
import Film from './components/Film.jsx';
import { SearchResult } from './search.jsx';
import MEDIA_SHOWS  from './consts';



ReactDOM.render((

  <Router>
    <Route path="/" component={Search} />
  </Router>

), document.getElementById('app'))
