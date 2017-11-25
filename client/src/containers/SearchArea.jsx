import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getFilms } from './../actions/films.js';

import { HeadLine } from './../components/HeadLine.jsx';
import { Button } from './../components/Button.jsx';
import { SortArea } from './../components/SortArea.jsx';

class SearchArea extends React.Component {

  findFilms() {
    this.props.onFindFilms(this.findInput.value);
    this.findInput.value ='';
  }

  handleChange(){
    this.props.changeQuery(this.findInput.value);
  }

  render() {
    return (
      <div className="search-area">
        <HeadLine className="head-line_uppercase head-line_color-white" text="Find your movie"/>

        <div className="input-area__wrapper">
          <input type='search' className='input-area__item input-area_search' placeholder='Search here' ref={(input) => {this.findInput = input }} onChange={this.handleChange.bind(this)}/>
          <Button buttonType="submit" className="button_icon button_icon-search" />
        </div>
        <div className="flex-container flex-container_justify_space-between">
          <SortArea className="sort-area_title-director" headLineClass="head-line_uppercase head-line_color-white"/>
          <Link to={ `/search/${this.props.query}`}>
            <button className="button button_big" onClick={ this.findFilms.bind(this)}>Search</button>
          </Link>
        </div>
      </div>
    );
  }
}


export default connect(
  state => ({
    store: state.films,
    query: state.query
  }),
  dispatch => ({
    onFindFilms: (query) => {
      dispatch(getFilms(query));
    },
    changeQuery: (query) => {
      dispatch({ type: 'CHANGE_QUERY', query: query });
    }
  })
)(SearchArea)