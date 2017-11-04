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
import { TextArea } from './components/TextArea.jsx';
import ListMovies from './components/listMovies.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      query: '',
      total: 0
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.getListOfMovies = this.getListOfMovies.bind(this);
  }

  componentWillMount() {
    console.log('componentWillMount', this);
  }

  componentDidMount() {
    console.log('componentDidMount', this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps', nextProps, this);
  }

  shouldComponentUpdate(nextProps, nextState) {

    console.log('shouldComponentUpdate', nextProps, nextState);

    const oldId = this.state.total;
    const nextId = nextState.total;
    if (oldId !== nextId) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate', this);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate', this);
  }


  handleSearch(value) {
    this.setState({ query: value });
    this.getListOfMovies(value);
  }

  getListOfMovies(query) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results
      });
    });
  }

  render() {
    console.log('render', this);
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
              <div className="wrapper wrapper_bgc_grey">
                <div className="content-wrapper">
                  <div
                    className="flex-container flex-container_justify_space-between flex-container_align-items_center">
                    <TextArea className="text-area_search-result"
                              text={this.state.total > 20 ? 'More then 20 movies were founded' : `${this.state.total} movies were founded` }/>
                    <SortArea className="sort-area_date-rating" headLineText="Sort by" firstCriterion="release date"
                              secondCriterion="rating" />
                  </div>
                </div>
              </div>

              <div className="content-wrapper">

                <ListMovies moviesArr={this.state.movies} totalResults={this.state.total} />

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