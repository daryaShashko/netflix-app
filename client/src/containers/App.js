import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HeadLine } from './../components/HeadLine.jsx';
import { Button } from './../components/Button.jsx';
import { SortArea } from './../components/SortArea.jsx';
import FilmBrief from './../components/FilmBrief.jsx';

import { getFilms } from './../actions/films.js'

class App extends Component {
  findFilms() {
    console.log('find Film', this.findInput.value);
    this.props.onFindFilms(this.findInput.value);
    this.findInput.value = '';
  }

  findTrack() {
    console.log('find track', this.searchInput.value);
    this.props.onFindTrack(this.searchInput.value);

    this.searchInput.value = '';
  }

  render() {
    return (
      <div className="search-area">
        <HeadLine className="head-line_uppercase head-line_color-white" text="Find your movie"/>

        <div className="input-area__wrapper">
          <input type='search' className='input-area__item input-area_search' placeholder='Search here'
                 ref={(input) => {this.findInput = input }}/>
          <Button buttonType="submit" className="button_icon button_icon-search"/>
        </div>
        <div className="flex-container flex-container_justify_space-between">
          <SortArea className="sort-area_title-director" headLineClass="head-line_uppercase head-line_color-white"/>


          <button className="button button_big" onClick={this.findFilms.bind(this)}>Search</button>

        </div>
        <div className="grid">
          {this.props.films.map((item, index) =>(
            <div className="grid__item grid__item_4" key={item.id}>
              <FilmBrief
                poster={'https://image.tmdb.org/t/p/w500' + item.poster_path}
                showTitle={item.title}
                releaseYear={item.release_date}/>
            </div>
          ))
          }
        </div>
      </div >
    );
  }
}


export default connect(
  state => ({
    films: state.films
  }),
  dispatch => ({
    onFindFilms: (query) => {
      dispatch(getFilms(query));
    }
  })
)(App)