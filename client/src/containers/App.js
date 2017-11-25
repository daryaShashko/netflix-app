import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';

import SearchArea from './SearchArea.jsx';
import { LogoNetflix } from './../components/LogoNetflix.jsx';
import { TextArea } from './../components/TextArea.jsx';
import { HeadLine } from './../components/HeadLine.jsx';
import { Button } from './../components/Button.jsx';
import { SortArea } from './../components/SortArea.jsx';
import FilmBrief from './../components/FilmBrief.jsx';
import  Movie  from './../containers/Movie.jsx';

class App extends React.Component {
  render() {
    console.log(this.props.store);
    const movies = this.props.store.movies.sort((a, b) => ( b.release_date.replace(/-/g, '') - a.release_date.replace(/-/g, '')));
    console.log(movies.map(item => item.release_date));

    return (
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
            <div className="wrapper wrapper_bgc_grey">
              <div className="content-wrapper">
                <div
                  className="flex-container flex-container_justify_space-between flex-container_align-items_center">
                    <TextArea className="text-area_search-result"
                              text={this.props.store.totalResults > 20 ? 'More then 20 movies was founded' : `${this.props.store.totalResults} movies was founded` }/>
                  <SortArea className="sort-area_date-rating" headLineText="Sort by" firstCriterion="release date"
                            secondCriterion="rating"/>
                </div>
              </div>
            </div>

            <div className="content-wrapper">
              <div className="grid">
                {movies.map((item, index) =>(
                  <div className="grid__item grid__item_3" key={item.id}>
                    <Link to={`/film/${item.id}`}>
                      <FilmBrief
                        poster={'https://image.tmdb.org/t/p/w500' + item.poster_path}
                        showTitle={item.title}
                        releaseYear={item.release_date}/>
                    </Link>
                  </div>
                ))
                }
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
    );
  }
}


export default connect(
  state => ({
    store: state.films,
    routing: state.routing
  }),
  dispatch => ({

  })
)(App)