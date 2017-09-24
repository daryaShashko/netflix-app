import React from 'react';
import { withRouter } from 'react-router'
import { HeadLine } from './HeadLine.jsx';
import { Button } from './Button.jsx';
import { SortArea } from './SortArea.jsx';

export default class SearchArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    location.pathname = 'search';
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className="search-area">
        <HeadLine className="head-line_uppercase head-line_color-white" text="Find your movie"/>

        <div className="input-area__wrapper">
          <input type='search' className='input-area__item input-area_search' placeholder='Search here' value={this.state.value} onChange={this.handleChange}/>
          <Button buttonType="submit" className="button_icon button_icon-search"/>
        </div>
        <div className="flex-container flex-container_justify_space-between">
          <SortArea className="sort-area_title-director" headLineClass="head-line_uppercase head-line_color-white"/>
          <Button className="button_big" buttonType="submit" text="Search" />
        </div>
      </form>
    );
  }
}