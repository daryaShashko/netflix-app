import React from 'react';
import ReactDOM from 'react-dom';
import Film from './components/Film.jsx';
import FilmBrief from './components/FilmBrief.jsx';
import SearchArea from './components/SearchArea.jsx';
import {SortArea} from './components/SortArea.jsx';
import {LogoNetflix} from './components/LogoNetflix.jsx';
import {TextArea} from './components/TextArea.jsx';
import {HeadLine} from './components/HeadLine.jsx';

class SearchResult extends React.Component {
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
                </div>
              </div>
            </div>
          </div>


          <div className="page__body">
            <div className="wrapper wrapper_bgc_grey"></div>

            <div className="content-wrapper">

              <HeadLine className="head-line_color-light-grey head-line_empty-result" text="No films found"/>

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

ReactDOM.render(
  <SearchResult />,
  document.getElementById('search-result')
);
