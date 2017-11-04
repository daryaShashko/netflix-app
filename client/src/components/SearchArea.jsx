import React from 'react';
import { withRouter } from 'react-router'
import { HeadLine } from './HeadLine.jsx';
import { Button } from './Button.jsx';
import { SortArea } from './SortArea.jsx';
import { Link, Route } from 'react-router-dom';

export default class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.changeQuery = this.changeQuery.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  changeQuery(){
    let searchQuery = this.refs.query.value.toLowerCase();
    this.props.onHandleSearch(searchQuery);
    console.log('query is change in searchArea', searchQuery);
  }

  handleInput(e){ //нужно чтобы в роутинг сразу вставлялось квери, если этого нет, то оно срабатывает по второму только клику
    let searchQuery = e.target.value.toLowerCase();
    this.setState({ query: searchQuery });
  }

  render() {
    return (
      <form className="search-area">
        <HeadLine className="head-line_uppercase head-line_color-white" text="Find your movie"/>

        <div className="input-area__wrapper">
          <input type='search' className='input-area__item input-area_search' placeholder='Search here' ref='query' onChange={this.handleInput} />
          <Button buttonType="submit" className="button_icon button_icon-search" />
        </div>
        <div className="flex-container flex-container_justify_space-between">
          <SortArea className="sort-area_title-director" headLineClass="head-line_uppercase head-line_color-white" />

          <Link to={ `/search/${this.state.query}`}>
            <button className="button button_big" onClick={this.changeQuery}>Search</button>
          </Link>
        </div>
      </form>
    );
  }
}
