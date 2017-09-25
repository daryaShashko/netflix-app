import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Film from './components/Film.jsx';
import FilmBrief from './components/FilmBrief.jsx';
import SearchArea from './components/SearchArea.jsx';
import {SortArea} from './components/SortArea.jsx';
import {LogoNetflix} from './components/LogoNetflix.jsx';
import {TextArea} from './components/TextArea.jsx';
import {HeadLine} from './components/HeadLine.jsx';
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

export class SearchResult extends React.Component {

  render() {

    return (
      <div className="grid">
        {
          MEDIA_SHOWS.map(function (el) {
            return (
            <div className="grid__item grid__item_4" key={el.show_id}>
              <Link to={`/film/${el.show_title}`}>
                <FilmBrief
                  poster={el.poster}
                  showTitle={el.show_title}
                  releaseYear={el.release_year}
                  category={el.category}
                />
              </Link>
            </div>
              );
            })
          }
      </div>
    )
  }
}
;

export default class Search extends React.Component {

  render() {
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
                  <Link to='/search/a'>Schedule</Link>
                  <Route path="/film/:name" component={FilmA}/>
                </div>
              </div>
            </div>
          </div>


          <div className="page__body">
            <div className="wrapper wrapper_bgc_grey"/>

            <div className="content-wrapper">

              <Route path="/search/:asd" component={SearchResult}/>

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
};